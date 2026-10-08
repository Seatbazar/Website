import { services } from "@/lib/services";
import { waLink } from "@/lib/shop";

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <h2>What we craft</h2>
        <p className="lead">Tell us the vehicle, pick the material and colour, and we do the rest.</p>
        <div className="bento">
          {services.map((s, i) => (
            <article key={s.name} className={`tile ${s.className ?? ""}`}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <a href={waLink(`Hi, I'm interested in: ${s.name}`)} target="_blank" rel="noopener">
                Enquire on WhatsApp &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
