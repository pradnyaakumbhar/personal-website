import { motion as Motion } from 'framer-motion';

// Scroll reveals with the old site's timings: blocks fade up over 0.6s,
// list items stagger 0.06s apart and fade up over 0.45s. Each plays once.
const viewport = { once: true, amount: 0.35 };

export const Reveal = ({ as = 'div', delay = 0, children, ...props }) => {
  const Tag = Motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...props}
    >
      {children}
    </Tag>
  );
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const RevealList = ({ as = 'ul', children, ...props }) => {
  const Tag = Motion[as];
  return (
    <Tag variants={listVariants} initial="hidden" whileInView="show" viewport={viewport} {...props}>
      {children}
    </Tag>
  );
};

export const RevealItem = ({ as = 'li', children, ...props }) => {
  const Tag = Motion[as];
  return (
    <Tag variants={itemVariants} {...props}>
      {children}
    </Tag>
  );
};
