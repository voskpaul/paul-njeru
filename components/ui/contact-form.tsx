"use client"

import { ArrowUpRight, Check, Send } from "lucide-react"
import { useState, type FormEvent } from "react"

type FormField = "fullName" | "email" | "projectType" | "timeline" | "description"
type FieldErrors = Partial<Record<FormField, string>>

const projectTypes = [
  "Business website",
  "Landing page",
  "UI/UX design",
  "Website redesign",
  "SaaS dashboard",
  "Web application",
  "E-commerce website",
  "Website maintenance",
  "Other",
]

const fieldLabels: Record<FormField, string> = {
  fullName: "Full name",
  email: "Email address",
  projectType: "Type of project",
  timeline: "Project timeline",
  description: "Project description",
}

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isPreparing, setIsPreparing] = useState(false)
  const [draftReady, setDraftReady] = useState(false)

  const clearError = (field: FormField) => {
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const values = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      projectType: String(data.get("projectType") ?? ""),
      budget: String(data.get("budget") ?? "").trim(),
      timeline: String(data.get("timeline") ?? ""),
      description: String(data.get("description") ?? "").trim(),
    }
    const nextErrors: FieldErrors = {}

    if (!values.fullName) nextErrors.fullName = "Please enter your name."
    if (!values.email) {
      nextErrors.email = "Please enter your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address, such as name@example.com."
    }
    if (!values.projectType) nextErrors.projectType = "Choose the type of project you have in mind."
    if (!values.timeline) nextErrors.timeline = "Choose a timeline or select that it is flexible."
    if (!values.description) {
      nextErrors.description = "Add a short description of your project."
    } else if (values.description.length < 20) {
      nextErrors.description = "Add at least 20 characters so I have enough context."
    }

    setErrors(nextErrors)
    setDraftReady(false)

    const invalidField = Object.keys(nextErrors)[0] as FormField | undefined
    if (invalidField) {
      form.querySelector<HTMLElement>(`[name="${invalidField}"]`)?.focus()
      return
    }

    const subject = encodeURIComponent(`Project enquiry from ${values.fullName}`)
    const body = encodeURIComponent(
      [
        `Full name: ${values.fullName}`,
        `Email: ${values.email}`,
        `Company or business: ${values.company || "Not provided"}`,
        `Project type: ${values.projectType}`,
        `Estimated budget: ${values.budget || "Not provided"}`,
        `Project timeline: ${values.timeline}`,
        "",
        "Project description:",
        values.description,
      ].join("\n"),
    )

    setIsPreparing(true)
    window.location.href = `mailto:paulriemii@gmail.com?subject=${subject}&body=${body}`
    window.setTimeout(() => {
      setIsPreparing(false)
      setDraftReady(true)
    }, 450)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <span className="form-step">A few details</span>
        <h2>Tell me about your project.</h2>
        <p>Required fields are marked with an asterisk. Your details will be added to an email draft on your device.</p>
      </div>

      <div className="form-grid">
        <div className={`form-field${errors.fullName ? " form-field--error" : ""}`}>
          <label htmlFor="fullName">Full name <span aria-hidden="true">*</span></label>
          <input
            autoComplete="name"
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your name"
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={`fullName-help${errors.fullName ? " fullName-error" : ""}`}
            onChange={() => clearError("fullName")}
          />
          <span className="form-help" id="fullName-help">What should I call you?</span>
          {errors.fullName ? <span className="form-error" id="fullName-error">{errors.fullName}</span> : null}
        </div>

        <div className={`form-field${errors.email ? " form-field--error" : ""}`}>
          <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
          <input
            autoComplete="email"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={`email-help${errors.email ? " email-error" : ""}`}
            onChange={() => clearError("email")}
          />
          <span className="form-help" id="email-help">I&apos;ll use this to reply.</span>
          {errors.email ? <span className="form-error" id="email-error">{errors.email}</span> : null}
        </div>

        <div className="form-field">
          <label htmlFor="company">Company or business <span className="optional-label">Optional</span></label>
          <input autoComplete="organization" id="company" name="company" type="text" placeholder="Your business name" />
        </div>

        <div className={`form-field${errors.projectType ? " form-field--error" : ""}`}>
          <label htmlFor="projectType">Type of project <span aria-hidden="true">*</span></label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            aria-required="true"
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            onChange={() => clearError("projectType")}
          >
            <option value="" disabled>Choose a project type</option>
            {projectTypes.map((type) => <option value={type} key={type}>{type}</option>)}
          </select>
          {errors.projectType ? <span className="form-error" id="projectType-error">{errors.projectType}</span> : null}
        </div>

        <div className="form-field">
          <label htmlFor="budget">Estimated budget <span className="optional-label">Optional</span></label>
          <input id="budget" name="budget" type="text" placeholder="e.g. KSh 80,000" />
        </div>

        <div className={`form-field${errors.timeline ? " form-field--error" : ""}`}>
          <label htmlFor="timeline">Project timeline <span aria-hidden="true">*</span></label>
          <select
            id="timeline"
            name="timeline"
            defaultValue=""
            aria-required="true"
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            onChange={() => clearError("timeline")}
          >
            <option value="" disabled>Choose a timeline</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="Within 2–4 weeks">Within 2–4 weeks</option>
            <option value="Within 1–2 months">Within 1–2 months</option>
            <option value="More than 2 months">More than 2 months</option>
            <option value="Flexible">Flexible</option>
          </select>
          {errors.timeline ? <span className="form-error" id="timeline-error">{errors.timeline}</span> : null}
        </div>

        <div className={`form-field form-field--full${errors.description ? " form-field--error" : ""}`}>
          <label htmlFor="description">Project description <span aria-hidden="true">*</span></label>
          <textarea
            id="description"
            name="description"
            rows={5}
            maxLength={1200}
            placeholder="What are you hoping to build, improve, or solve?"
            aria-required="true"
            aria-invalid={Boolean(errors.description)}
            aria-describedby={`description-help${errors.description ? " description-error" : ""}`}
            onChange={() => clearError("description")}
          />
          <span className="form-help" id="description-help">A few sentences is a great place to start.</span>
          {errors.description ? <span className="form-error" id="description-error">{errors.description}</span> : null}
        </div>
      </div>

      <div className="form-submit-row">
        <button className="button button--gradient form-submit" type="submit" disabled={isPreparing}>
          {isPreparing ? "Preparing your email…" : "Prepare project enquiry"}
          {isPreparing ? <span className="button-spinner" aria-hidden="true" /> : <Send aria-hidden="true" size={16} />}
        </button>
        <span className="form-secure-note"><ArrowUpRight aria-hidden="true" size={14} /> Opens a draft in your email app</span>
      </div>

      {draftReady ? (
        <p className="form-status form-status--success" role="status" aria-live="polite">
          <Check aria-hidden="true" size={17} />
          Your email draft should now be open. It has not been sent yet; send it from your email app when you&apos;re ready.
        </p>
      ) : null}
      {Object.keys(errors).length > 0 ? (
        <p className="form-status form-status--error" role="alert">
          Please review the highlighted fields and try again.
        </p>
      ) : null}
      <span className="sr-only">{fieldLabels.fullName}, {fieldLabels.email}, {fieldLabels.projectType}, {fieldLabels.timeline}, and {fieldLabels.description} are required.</span>
    </form>
  )
}
