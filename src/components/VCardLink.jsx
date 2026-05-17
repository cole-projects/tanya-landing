import { motion } from "framer-motion";

export default function VCardLink({ href, children }) {
  return (
    <motion.a
      className="add-contact-cta mx-auto mt-9 block w-fit"
      href={href}
      download="Tanya.vcf"
      whileTap={{ scale: 0.97 }}
    >
      <span className="add-contact-cta__label">{children}</span>
    </motion.a>
  );
}
