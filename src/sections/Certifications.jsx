import { certifications } from "../constants"; // <-- adjust to your real path
import { motion } from "motion/react";

const Certifications = () => {
  return (
    <section className="c-space section-spacing" id="certifications">
      <h2 className="text-heading">Certifications & Credentials</h2>

      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const href = cert.credential?.url;

          const card = (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-white/10 bg-linear-to-br from-midnight to-navy hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-cyan-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {cert.body}
              </p>
            </motion.div>
          );

          return href ? (
            <a
              key={cert.name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {card}
            </a>
          ) : (
            <div key={cert.name}>{card}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;