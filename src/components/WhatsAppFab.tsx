import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/263776081873?text=Hello%20Tavonga%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-glow"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
