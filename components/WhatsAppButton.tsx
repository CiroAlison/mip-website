"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/393347064060?text=Ciao%2C%20vorrei%20richiedere%20un%20preventivo."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl sm:bottom-6 sm:right-6"
      style={{ backgroundColor: "#25D366", marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <MessageCircle size={28} className="text-white fill-white" />
      {/* pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: "#25D366" }} />
    </motion.a>
  );
}
