"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "professional",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Temporarily simulated for demoing tomorrow.
    // In the next step, we will wire this to a Next.js Server Action with Resend!
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        
        {/* Terminal Header */}
        <header className="mb-12 border-b border-zinc-900 pb-8">
          <Link href="/" className="text-xs font-mono text-zinc-500 hover:text-white uppercase tracking-widest">
            &larr; Back to Nexus
          </Link>
          <h1 className="text-5xl font-black tracking-tighter mt-4">
            INITIATE <span className="text-blue-500">CONTACT</span>
          </h1>
          <p className="mt-4 text-zinc-400 font-mono text-sm">
            SUBMIT INQUIRY // DIRECT ROUTE TO BRIAN & RJ
          </p>
        </header>

        {/* Form Container */}
        <div className="grid gap-8 md:grid-cols-12">
          
          {/* Instructions Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 font-mono text-xs text-zinc-400 leading-relaxed">
              <span className="text-blue-500 font-bold block mb-2">// COMM-LINK RULES</span>
              <p className="mb-2">1. Select "Enterprise" for professional studio consulting, custom SaaS structures, or database pipelines.</p>
              <p>2. Select "Experimental" for game dev mechanics, creative VTT tools, or physical hardware sync concepts.</p>
            </div>

            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 font-mono text-xs text-zinc-500">
              <span className="text-white font-bold block mb-2 uppercase">Lab Coordinates</span>
              <p>Active Node: Seattle, WA</p>
              <p className="mt-2">Deploy target: Firebase Edge</p>
              <p className="mt-2">Est. Response Latency: &lt; 24h</p>
            </div>
          </div>

          {/* Core Interactive Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-7 space-y-6">
            {status === "success" ? (
              <div className="rounded-xl border border-green-500/20 bg-green-950/10 p-8 text-center">
                <span className="text-3xl">📡</span>
                <h3 className="text-lg font-black text-green-400 mt-4">Transmission Dispatched!</h3>
                <p className="text-zinc-400 text-xs font-mono mt-2 leading-relaxed">
                  The signal was routed successfully. Brian & RJ will review your specs and sync back shortly.
                </p>
                <button 
                  type="button" 
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-block rounded bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-mono text-zinc-300 hover:text-white"
                >
                  Send another signal
                </button>
              </div>
            ) : (
              <>
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Identity Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-white outline-none focus:border-blue-500 transition-colors"
                    placeholder="e.g. Commander Shepard"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Return Email Node
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-white outline-none focus:border-blue-500 transition-colors"
                    placeholder="shepard@alliance.gov"
                  />
                </div>

                {/* Project Division Toggle */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Target Division
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: "professional" })}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        formData.projectType === "professional"
                          ? "border-blue-500 bg-blue-500/5 text-white"
                          : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:border-zinc-700"
                      }`}
                    >
                      <span className="block font-bold text-sm">Enterprise</span>
                      <span className="block text-[10px] font-mono mt-1">SaaS & Utilities</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: "experimental" })}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        formData.projectType === "experimental"
                          ? "border-purple-500 bg-purple-500/5 text-white"
                          : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:border-zinc-700"
                      }`}
                    >
                      <span className="block font-bold text-sm">Experimental</span>
                      <span className="block text-[10px] font-mono mt-1">TTRPG & Mechanics</span>
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Mission Scope / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-white outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Outline your project scope or proposed collaboration..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full rounded-xl py-4 text-sm font-bold text-black transition-all ${
                    formData.projectType === "professional"
                      ? "bg-blue-500 hover:bg-blue-400"
                      : "bg-purple-500 hover:bg-purple-400"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {status === "sending" ? "TRANSMITTING..." : "DISPATCH SIGNAL"}
                </button>
              </>
            )}
          </form>

        </div>
      </div>
    </main>
  );
}