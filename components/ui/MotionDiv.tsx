// src/components/ui/MotionDiv.tsx
'use client';

import { motion } from 'framer-motion';

import { TargetAndTransition, VariantLabels, Transition } from 'framer-motion';

interface MotionDivProps {
  children: React.ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  transition?: Transition;
  className?: string;
}

export default function MotionDiv({ 
  children, 
  initial = { opacity: 0 }, 
  animate = { opacity: 1 }, 
  transition = { duration: 0.5 },
  className 
}: MotionDivProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}