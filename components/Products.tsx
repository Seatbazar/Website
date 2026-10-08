import { products } from "@/lib/products";
import { waLink } from "@/lib/shop";

export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <h2>Our products</h2>
        <p className="lead">
          Browse the range, then message us on WhatsApp for photos, prices and availability. Or drop into the shop and see them in person.
        </p>
        <div className="grid">
          {products.map((p) => (
            <article className="card" key={p.name}>
              {p.tag && <span className="tag">{p.tag}</span>}
              <div className="thumb">
                <svg viewBox="0 0 64 64" role="img" aria-label={p.name}>
                  {p.icon}
                </svg>
              </div>
              <div className="body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <a className="ask" href={waLink(`Hi, I'm interested in: ${p.name}`)} target="_blank" rel="noopener">
                  Ask on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
