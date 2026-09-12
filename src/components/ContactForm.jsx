import { useState } from "react";

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm({ submitLabel = "send message" }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ── Option A: Formspree ──
    // const res = await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify(form),
    // });
    // setStatus(res.ok ? "success" : "error");
    // if (res.ok) setForm(initial);

    // ── Option B: Your PHP mail.php ──
    // const fd = new FormData();
    // Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    // const res = await fetch("/mail.php", { method: "POST", body: fd });
    // setStatus(res.ok ? "success" : "error");
    // if (res.ok) setForm(initial);

    // Default: simulated success
    setTimeout(() => {
      setStatus("success");
      setForm(initial);
    }, 800);
  };

  const inputClass =
    "w-full h-[55px] px-4 border border-[rgba(29,51,73,0.38)] text-base outline-none focus:border-brand transition";

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className={inputClass}
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className={inputClass}
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className={inputClass}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className={`${inputClass} h-[120px] py-3 resize-none`}
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-block bg-brand text-white uppercase text-sm font-bold px-7 py-3 border-2 border-brand hover:bg-white hover:text-brand transition disabled:opacity-60"
        >
          {status === "sending" ? "Please wait..." : submitLabel}
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-600 text-sm">
            Thank you — your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-sm">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}