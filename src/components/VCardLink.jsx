import { motion } from "framer-motion";

const SMS_PREFILL = "sms:+13177282783&body=hey%20tanya";

export default function VCardLink({ children }) {
  return (
    <motion.a
      className="add-contact-cta mx-auto mt-9 block w-fit"
      href={SMS_PREFILL}
      whileTap={{ scale: 0.97 }}
    >
      <span className="add-contact-cta__label">{children}</span>
    </motion.a>
  );
}
