import { motion } from 'framer-motion';
import { AnimatedTAGProps } from '@/lib/types';

export default function AnimatedDiv({
  variants,
  className,
  children,
  infinity,
  style,
}: AnimatedTAGProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: !infinity,
      }}
      variants={variants}
      className={className}
      style={style}
      transition={{
        staggerChildren: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
