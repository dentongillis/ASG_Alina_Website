"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_IS_PLACEHOLDER, FORMSPREE_URL } from "./config";

type Status = "idle" | "submitting" | "success" | "error";

export function useFormspree() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (FORMSPREE_IS_PLACEHOLDER) {
      // No endpoint wired yet — show a friendly stub so the form is testable.
      setStatus("submitting");
      setTimeout(() => setStatus("success"), 500);
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setError(null);
  }

  return { status, error, submit, reset };
}
