"use client";

import { useState, useRef } from "react";
import { X, Send, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, captchaToken }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md bg-surface border border-outline-variant/30 rounded-xl p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="text-headline-md text-on-surface mb-2">
          Corporate Inquiries
        </h3>
        <p className="text-body-md text-on-surface-variant mb-6">
          Send us a message and we&apos;ll get back to you shortly.
        </p>

        {status === "sent" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Send size={28} className="text-primary" />
            </div>
            <h4 className="text-headline-md text-on-surface mb-2">
              Message Sent!
            </h4>
            <p className="text-body-md text-on-surface-variant">
              We&apos;ll respond within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-primary text-on-primary text-label-md font-semibold px-8 py-3 rounded-lg hover:bg-primary-container transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-label-md text-on-surface font-semibold block mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-label-md text-on-surface font-semibold block mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="text-label-md text-on-surface font-semibold block mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={(token) => setCaptchaToken(token)}
                theme="dark"
              />
            </div>

            <button
              type="submit"
              disabled={!captchaToken || status === "sending"}
              className="w-full bg-primary text-on-primary text-label-md font-semibold px-6 py-3 rounded-lg hover:bg-primary-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : status === "error" ? (
                "Error — Try Again"
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
