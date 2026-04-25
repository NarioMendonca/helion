import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactFormType = "quick" | "diagnostic"

type ContactPayload = {
  formType: ContactFormType
  data: Record<string, string>
}

const REQUIRED_FIELDS: Record<ContactFormType, string[]> = {
  quick: ["quickName", "quickPhone", "quickEmail"],
  diagnostic: ["responsibleName", "phone", "workEmail"],
}

const FIELD_LABELS: Record<string, string> = {
  quickName: "Nome",
  quickPhone: "WhatsApp",
  quickEmail: "Email",
  customerType: "Tipo de cliente",
  companyName: "Empresa",
  segment: "Segmento",
  city: "Cidade da operacao",
  residenceCity: "Cidade da residencia",
  propertyType: "Tipo de imovel",
  energyInputMode: "Modo de analise energetica",
  monthlyConsumption: "Consumo medio mensal (kWh)",
  monthlyCost: "Gasto mensal com energia (R$)",
  energySolution: "Solucao de interesse",
  responsibleName: "Nome do responsavel",
  phone: "WhatsApp",
  workEmail: "Email corporativo",
  projectGoal: "Objetivo principal",
}

function normalizeFormType(value: unknown): ContactFormType | null {
  return value === "quick" || value === "diagnostic" ? value : null
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function toStringRecord(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {}
  }

  return Object.entries(value).reduce<Record<string, string>>((acc, [key, fieldValue]) => {
    if (typeof fieldValue === "string") {
      acc[key] = fieldValue.trim()
    }

    return acc
  }, {})
}

function getReplyTo(formType: ContactFormType, data: Record<string, string>): string | undefined {
  if (formType === "quick") {
    return data.quickEmail
  }

  return data.workEmail
}

function serializeData(data: Record<string, string>) {
  const entries = Object.entries(data).filter(([, value]) => value.length > 0)

  const text = entries
    .map(([key, value]) => `${FIELD_LABELS[key] ?? key}: ${value}`)
    .join("\n")

  const html = entries
    .map(([key, value]) => {
      const label = escapeHtml(FIELD_LABELS[key] ?? key)
      const safeValue = escapeHtml(value)
      return `<li><strong>${label}:</strong> ${safeValue}</li>`
    })
    .join("")

  return { text, html }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>
    const formType = normalizeFormType(body.formType)

    if (!formType) {
      return NextResponse.json({ error: "Tipo de formulario invalido." }, { status: 400 })
    }

    const data = toStringRecord(body.data)
    const missingFields = REQUIRED_FIELDS[formType].filter((field) => !data[field])

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: "Campos obrigatorios ausentes.", fields: missingFields },
        { status: 400 }
      )
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT ?? "587")
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const contactToEmail = process.env.CONTACT_TO_EMAIL
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser

    if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail || !contactFromEmail) {
      return NextResponse.json(
        { error: "Configuracao de email ausente no servidor." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    console.log(request.formData);

    const { text, html } = serializeData(data)
    const receivedAt = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" })
    const subject =
      formType === "quick"
        ? "[Helion] Novo contato rapido recebido"
        : "[Helion] Novo diagnostico energetico recebido"

    await transporter.sendMail({
      from: `Helion Site <${contactFromEmail}>`,
      to: contactToEmail,
      replyTo: getReplyTo(formType, data),
      subject,
      text: `Formulario: ${formType}\nRecebido em: ${receivedAt}\n\n${text}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a;">
          <h2 style="margin: 0 0 12px;">Novo envio pelo site Helion</h2>
          <p style="margin: 0 0 8px;"><strong>Formulario:</strong> ${escapeHtml(formType)}</p>
          <p style="margin: 0 0 16px;"><strong>Recebido em:</strong> ${escapeHtml(receivedAt)}</p>
          <ul style="padding-left: 18px; margin: 0;">${html}</ul>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Nao foi possivel processar o envio agora. Tente novamente." },
      { status: 500 }
    )
  }
}
