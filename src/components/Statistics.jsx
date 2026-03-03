import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiHome, FiZap, FiAward } from "react-icons/fi";

const stats = [
  { icon: FiSun, value: 5000, suffix: "+", label: "Solar Panels Installed" },
  { icon: FiHome, value: 1200, suffix: "+", label: "Homes Powered" },
  { icon: FiZap, value: 15, suffix: "MW", label: "Energy Generated" },
  { icon: FiAward, value: 10, suffix: "+", label: "Years of Experience" },
];

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = Math.ceil(target / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const Statistics = () => (
  <section
    id="statistics"
    className="w-full bg-linear-to-r from-[#15803d] to-[#16a34a] py-20 px-6 md:px-12"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center text-center gap-4"
          >
            <s.icon className="w-10 h-10 text-amber-300" />
            
            <Counter  target={s.value} suffix={s.suffix} />

            <p className="text-white text-sm md:text-base font-medium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Statistics;
