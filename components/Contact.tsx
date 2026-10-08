import { DEFAULT_MSG, SHOP, mapLink, phoneDisplay, telLink, waLink } from "@/lib/shop";

export default function Contact() {
  return (
    <section id="contact" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="contact">
          <div>
            <h2>Let&apos;s give your ride a new look.</h2>
            <a className="phone" href={telLink}>{phoneDisplay}</a>
            <div className="cta">
              <a className="btn btn-cream" href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener">WhatsApp us</a>
              <a className="btn btn-out" style={{ borderColor: "#f7f1e8" }} href={mapLink} target="_blank" rel="noopener">
                Open in Google Maps
              </a>
            </div>
          </div>
          <dl>
            <div><dt>Shop</dt><dd>{SHOP.address}</dd></div>
            <div><dt>Hours</dt><dd>{SHOP.hours}</dd></div>
            <div><dt>Services</dt><dd>Seat covers, upholstery, door panels, headliners, floor mats, steering covers</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
