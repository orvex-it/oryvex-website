import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionAltProps {
  children: ReactNode;
}

export function PageTransitionAlt({ children }: PageTransitionAltProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        x: -60
      }}
      animate={{ 
        opacity: 1, 
        x: 0
      }}
      exit={{ 
        opacity: 0, 
        x: 60
      }}
      transition={{ 
        duration: 3, 
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
