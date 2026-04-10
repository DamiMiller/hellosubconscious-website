"use client";

import { useActionState } from "react";
import { submitOptIn, type OptInState } from "./actions";

const initialState: OptInState = { ok: false };

export function OptInForm() {
  const [state, formAction, pending] = useActionState(
    submitOptIn,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot: hidden from humans, attractive to bots. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field
        id="firstName"
        name="firstName"
        label="First name"
        type="text"
        required
        autoComplete="given-name"
        error={state.fieldErrors?.firstName}
      />

      <Field
        id="phone"
        name="phone"
        label="Mobile phone number"
        type="tel"
        required
        autoComplete="tel"
        placeholder="(215) 555-1234"
        error={state.fieldErrors?.phone}
      />

      <Field
        id="email"
        name="email"
        label="Email (optional)"
        type="email"
        autoComplete="email"
        error={state.fieldErrors?.email}
      />

      <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-5">
        <label className="flex cursor-pointer items-start gap-4 text-sm leading-relaxed text-slate-300">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-slate-600 bg-slate-900 accent-[#c9a96e]"
          />
          <span>
            I agree to receive recurring text messages from{" "}
            <strong className="text-white">Hello Subconscious</strong> at the
            phone number I provided above, including appointment reminders,
            session follow-ups, and coaching messages. Message frequency
            varies. Message and data rates may apply. I can reply{" "}
            <strong className="text-white">STOP</strong> to cancel at any
            time or <strong className="text-white">HELP</strong> for help.
            Consent is not a condition of purchase. See our{" "}
            <a href="/privacy" className="text-[#c9a96e] underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-[#c9a96e] underline">
              Terms of Service
            </a>
            .
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className="mt-3 text-sm text-red-400" role="alert">
            {state.fieldErrors.consent}
          </p>
        ) : null}
      </div>

      {state.error ? (
        <p className="text-sm text-red-400" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#c9a96e]/40 bg-[#c9a96e]/10 px-8 py-3.5 text-base font-medium text-[#c9a96e] transition-all hover:border-[#c9a96e]/60 hover:bg-[#c9a96e]/20 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Submitting…" : "Sign Me Up"}
      </button>
    </form>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
};

function Field({
  id,
  name,
  label,
  type,
  required,
  autoComplete,
  placeholder,
  error,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
        {required ? <span className="ml-1 text-[#c9a96e]">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[#c9a96e]/60 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/20"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
