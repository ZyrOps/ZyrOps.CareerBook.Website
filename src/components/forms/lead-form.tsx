"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleCheck, LoaderCircle } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { institutionTypes, leadCountries, roles, studentRanges } from "@/lib/lead";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const inputCls =
  "h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none aria-[invalid=true]:border-red-400";

function Field({ label, name, error, children, full }: { label: string; name: string; error?: string; children: ReactNode; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function LeadForm({ intent = "demo" }: { intent?: "demo" | "contact" }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, intent, page: pathname }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? {});
        setMessage(json.error ?? "Please check the highlighted fields.");
        setStatus("error");
        return;
      }
      window.gtag?.("event", "generate_lead", { form: intent });
      setStatus("success");
    } catch {
      setMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-10 text-center shadow-float" role="status">
        <CircleCheck aria-hidden="true" className="size-14 text-emerald-500" />
        <h2 className="mt-4 text-2xl font-extrabold">Thank you!</h2>
        <p className="mt-2 max-w-sm text-[15px] leading-7 text-body">
          Our team will contact you within one business day to {intent === "demo" ? "schedule your personalised demo" : "follow up on your enquiry"}.
        </p>
      </div>
    );
  }

  const a = (name: string) => ({
    id: name,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-2xl border border-line bg-white p-6 shadow-float sm:p-8">
      <h2 className="text-xl font-extrabold">{intent === "demo" ? "Request a personalised demo" : "Talk to our team"}</h2>
      <p className="mt-1 text-sm text-muted">We respond within one business day.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <input {...a("name")} autoComplete="name" required className={inputCls} placeholder="Your full name" />
        </Field>
        <Field label="Work email" name="email" error={errors.email}>
          <input {...a("email")} type="email" autoComplete="email" required className={inputCls} placeholder="name@institution.edu" />
        </Field>
        <Field label="Phone / WhatsApp" name="phone" error={errors.phone}>
          <input {...a("phone")} type="tel" autoComplete="tel" required className={inputCls} placeholder="+91 98765 43210" />
        </Field>
        <Field label="Institution name" name="institution" error={errors.institution}>
          <input {...a("institution")} autoComplete="organization" required className={inputCls} placeholder="Institution or group" />
        </Field>
        <Field label="Your role" name="role" error={errors.role}>
          <select {...a("role")} required defaultValue="" className={inputCls}>
            <option value="" disabled>Select role</option>
            {roles.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Institution type" name="institutionType" error={errors.institutionType}>
          <select {...a("institutionType")} required defaultValue="" className={inputCls}>
            <option value="" disabled>Select type</option>
            {institutionTypes.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Country" name="country" error={errors.country}>
          <select {...a("country")} required defaultValue="" className={inputCls}>
            <option value="" disabled>Select country</option>
            {leadCountries.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Number of students (optional)" name="students">
          <select {...a("students")} defaultValue="" className={inputCls}>
            <option value="">Select range</option>
            {studentRanges.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="How can we help? (optional)" name="message" full>
          <textarea {...a("message")} rows={4} className={`${inputCls} h-auto py-3`} placeholder="Tell us about your institution and goals" />
        </Field>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-[13px] leading-5 text-body">
        <input
          type="checkbox"
          name="consent"
          required
          aria-invalid={errors.consent ? true : undefined}
          className="mt-0.5 size-4 rounded accent-brand-600"
        />
        <span>
          I agree to be contacted by CareerBook ERP™ and accept the{" "}
          <Link href="/trust/privacy-policy" className="font-semibold text-brand-700 underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      {errors.consent && <p className="mt-1 text-xs font-medium text-red-600">{errors.consent}</p>}

      {status === "error" && message && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent-500 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgb(249_115_22/0.7)] transition-colors hover:bg-accent-600 disabled:opacity-70"
      >
        {status === "submitting" && <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />}
        {intent === "demo" ? "Request My Demo" : "Send Message"}
      </button>
    </form>
  );
}
