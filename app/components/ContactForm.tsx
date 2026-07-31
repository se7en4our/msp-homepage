"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "전송에 실패했습니다.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "전송에 실패했습니다.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center dark:border-brand-800 dark:bg-brand-900/30">
        <p className="text-lg font-semibold text-brand-800 dark:text-brand-200">
          문의가 전달되었습니다.
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          빠른 시일 내에 남겨주신 연락처로 회신드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
        <label>
          웹사이트
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="이름" name="name" autoComplete="name" required />
        <Field label="회사명" name="company" autoComplete="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="이메일"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field label="연락처" name="phone" autoComplete="tel" />
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">
          문의 내용
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="현재 사용 중인 클라우드, 겪고 계신 어려움 등을 알려주시면 더 정확히 도와드릴 수 있습니다."
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-brand-900"
        />
      </label>

      <label className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-600 focus:ring-2 focus:ring-brand-100 dark:border-slate-700"
        />
        <span>
          <span className="font-medium text-slate-700 dark:text-slate-200">(필수)</span>{" "}
          개인정보 수집·이용에 동의합니다.{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 underline hover:text-brand-700 dark:text-brand-400"
          >
            방침 전문 보기
          </a>
          <br />
          수집 항목: 이름, 회사명, 이메일, 연락처 · 이용 목적: 문의 응대 및 서비스 상담 · 보유
          기간: 문의 처리 완료 후 1년
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "전송 중..." : "문의 보내기"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-slate-700 dark:text-slate-200">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-brand-900"
      />
    </label>
  );
}
