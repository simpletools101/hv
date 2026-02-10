"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import plan from "@/assets/jk.webp";

interface PropertyFeature {
  label: string;
  value: string;
}

export default function PropertyPage() {
  const [activeView, setActiveView] = useState<"2D" | "3D">("2D");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features: PropertyFeature[] = [
    { label: "Bedrooms", value: "4" },
    { label: "Bathrooms", value: "3" },
    { label: "Square Feet", value: "2,500" },
    { label: "Built", value: "2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 text-neutral-900">
      {/* HEADER */}
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* LOGO */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-2xl tracking-widest font-semibold"
          >
            HAVEYHOMES
          </motion.h1>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-10 text-xs tracking-widest text-neutral-600">
            {[
              "DETAILS",
              "VIRTUAL TOUR",
              "PHOTOS",
              "VIDEO",
              "FLOOR PLAN",
              "MAP",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-black relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* DESKTOP CONTACT */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-black text-white px-6 py-3 text-xs tracking-widest font-semibold"
          >
            CONTACT
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-90">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-72 bg-white p-8 flex flex-col"
            >
              {/* CLOSE */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="self-end text-2xl mb-10"
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* LINKS */}
              <nav className="flex flex-col gap-6 text-sm tracking-widest">
                {[
                  "DETAILS",
                  "VIRTUAL TOUR",
                  "PHOTOS",
                  "VIDEO",
                  "FLOOR PLAN",
                  "MAP",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-black"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* MOBILE CONTACT */}
              <button className="mt-auto bg-black text-white py-3 text-xs tracking-widest font-semibold">
                CONTACT
              </button>
            </motion.div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20">
        {/* FLOOR PLAN */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border border-black/10 p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs tracking-widest text-neutral-500">
              PROPERTY BLUEPRINT RE.2026
            </p>

            <div className="flex bg-neutral-100 p-1">
              {(["2D", "3D"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveView(v)}
                  className={`px-4 py-1 text-xs tracking-widest
                  ${
                    activeView === v
                      ? "bg-white shadow text-black"
                      : "text-neutral-500"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Plan */}
          <div className="relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neutral-400">
              1200
            </span>

            <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-neutral-400">
              1500
            </span>

            <div className="relative aspect-[6/5] border-2 border-black bg-gradient-to-br from-neutral-50 to-neutral-100">
              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Rooms */}
              {[
                { n: "2", name: "Master Bedroom", top: "25%", left: "30%" },
                { n: "4", name: "Kitchen", top: "35%", left: "70%" },
                { n: "3", name: "Living Area", top: "70%", left: "40%" },
                { n: "1", name: "Entry", top: "65%", left: "70%" },
              ].map((r) => (
                <motion.div
                  key={r.name}
                  whileHover={{ scale: 1.2 }}
                  style={{ top: r.top, left: r.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center font-semibold shadow">
                    {r.n}
                  </div>

                  <p className="text-[11px] text-neutral-500 mt-2 text-center">
                    {r.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t text-[11px] text-neutral-400 flex justify-between tracking-widest">
            <span>TEL: 0300 500600</span>
            <span>marketing@haveyhomes.com</span>
          </div>
        </motion.section>

        {/* DETAILS */}
        <motion.section
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:sticky top-28 self-start"
        >
          <span className="text-xs tracking-widest text-amber-600">
            MULAWA, KIRA PROPERTY
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-serif text-5xl font-light leading-tight"
          >
            Modern Family Living
          </motion.h2>

          <p className="mt-6 text-neutral-600 leading-relaxed">
            This stunning 4-bedroom, 3-bathroom home offers a master suite with
            walk-in closet and a private fenced backyard. The open-concept
            layout features a sun-drenched living area and a high-spec kitchen
            with stainless steel appliances.
          </p>

          {/* Price */}
          <div className="mt-10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-amber-600" />

            <span className="text-[11px] tracking-widest text-white/60">
              LISTING PRICE
            </span>

            <h3 className="font-serif text-5xl text-white mt-2">$126,000</h3>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {features.map((f) => (
              <div
                key={f.label}
                className="p-6 border border-black/10 bg-white hover:border-amber-600 transition"
              >
                <p className="text-xs tracking-widest text-neutral-400">
                  {f.label}
                </p>

                <p className="text-2xl font-semibold mt-2">{f.value}</p>
              </div>
            ))}
          </div>

          {/* Pool */}
          <div
            className="mt-8 flex items-center gap-3
            bg-sky-50 border-l-4 border-sky-500
            text-sky-700 px-5 py-4 text-sm"
          >
            ★ Swimming Pool Included
          </div>

          {/* Buttons */}
          <div className="mt-10 space-y-4">
            <motion.button
              whileHover={{ y: -2 }}
              className="w-full bg-black text-white py-4 tracking-widest text-sm font-semibold"
            >
              START AN OFFER
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              className="w-full border-2 border-black py-4 tracking-widest text-sm font-semibold"
            >
              REQUEST SHOWING
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              className="w-full underline py-4 tracking-widest text-sm font-semibold"
            >
              TAKE A VIRTUAL TOUR
            </motion.button>
          </div>

          {/* Agent */}
          <div className="mt-12 p-6 border border-black/10 bg-white flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Olivia Janda</h4>
              <p className="text-sm text-neutral-500">
                Senior Real Estate Advisor
              </p>
            </div>

            <button className="border border-black px-6 py-2 text-xs tracking-widest font-semibold hover:bg-black hover:text-white transition">
              MESSAGE
            </button>
          </div>
        </motion.section>
      </main>
      {/* PROPERTY VIDEO */}
      <section id="video" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-neutral-400">
            PROPERTY VIDEO
          </p>
          <h3 className="font-serif text-4xl font-light mt-2">
            Experience the Home
          </h3>
        </div>

        <div className="relative aspect-video bg-black border border-black/10 overflow-hidden">
          {/* Replace src with your video */}
          <video
            className="w-full h-full object-cover"
            controls
            poster="/video-poster.jpg"
          >
            <source src="/property-tour.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>
        </div>
      </section>

      {/* FLOOR PLAN IMAGE */}
      <section id="floor-plan" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs tracking-widest text-neutral-400">
              FLOOR PLAN
            </p>
            <h3 className="font-serif text-4xl font-light mt-2">
              Layout & Dimensions
            </h3>
          </div>

          <a
            href="/floorplan.pdf"
            download
            className="mt-4 md:mt-0 text-xs tracking-widest underline"
          >
            DOWNLOAD PDF
          </a>
        </div>

        <div className="bg-white border border-black/10 p-6">
          {/* Replace image path */}
          <img
            src={plan.src}
            alt="Floor Plan"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white mt-32">
        <div
          className="max-w-7xl mx-auto px-6 py-20
    grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* BRAND */}
          <div>
            <h2 className="font-serif text-2xl tracking-widest">HAVEYHOMES</h2>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Premium Real Estate & Property Development Company specializing in
              luxury residential homes.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-xs tracking-widest text-white/50 mb-6">
              CONTACT
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-white/40">📍</span>
                Mulawa, Kira – Uganda
              </li>

              <li className="flex items-center gap-3">
                <span className="text-white/40">📞</span>0 300 500 600
              </li>

              <li className="flex items-center gap-3">
                <span className="text-white/40">✉️</span>
                marketing@haveyhomes.com
              </li>
            </ul>
          </div>

          {/* AGENT */}
          <div>
            <h4 className="text-xs tracking-widest text-white/50 mb-6">
              SALES AGENT
            </h4>

            <p className="font-semibold">Olivia Janda</p>

            <p className="text-sm text-white/60">Senior Real Estate Advisor</p>

            <a
              href="mailto:marketing@haveyhomes.com"
              className="inline-block mt-4 underline text-sm"
            >
              Send Message →
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-6">
          <div
            className="max-w-7xl mx-auto px-6
      flex flex-col md:flex-row justify-between
      text-xs tracking-widest text-white/40"
          >
            <span>© 2026 HAVEYHOMES</span>

            <span>Built with precision & vision</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
