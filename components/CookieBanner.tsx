"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mip_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("mip_cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("mip_cookie_consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-5"
        >
          <div className="max-w-3xl mx-auto bg-[#0f172a] text-white rounded-2xl shadow-2xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie size={22} className="text-[#4DC76A] shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-sm text-gray-300 leading-relaxed flex-1">
              Utilizziamo cookie tecnici per il corretto funzionamento del sito.{" "}
              <Link href="/privacy" className="text-[#4DC76A] underline hover:text-white transition-colors">
                Leggi la Privacy Policy
              </Link>
              .
            </p>
            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={reject}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-semibold text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 transition-all"
              >
                Rifiuta
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none px-5 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#25A244" }}
              >
                Accetta
              </button>
              <button onClick={reject} className="p-2 text-gray-500 hover:text-white transition-colors sm:hidden">
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
