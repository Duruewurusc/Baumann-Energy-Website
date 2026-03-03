import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ProductCard = ({
  image,
  title,
  description,
  features,
  badge,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
    >
      {badge && (
        <span className="absolute top-4 right-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {badge}
        </span>
      )}

      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <ul className="mb-6 flex-1 space-y-2">
          {features &&
            features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-card-foreground"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
        </ul>

        <button className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary transition-colors hover:text-primary/80">
          Learn More
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;