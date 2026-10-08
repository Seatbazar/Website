import { DEFAULT_MSG, SHOP, mapLink, phoneDisplay, telLink, waLink } from "@/lib/shop";

export default function Visit() {
  return (
    <section id="visit" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Visit the shop</h2>
        <p className="lead">Come see the full collection. Our team will help you find the right fit for your vehicle.</p>
        <div className="visit">
          <div className="info">
            <dl>
              <dt>Address</dt>
              <dd>{SHOP.address}</dd>
              <dt>Phone</dt>
              <dd><a href={telLink}>{phoneDisplay}</a></dd>
              <dt>WhatsApp</dt>
              <dd><a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener">Message us</a></dd>
              <dt>Opening hours</dt>
              <dd>{SHOP.hours}</dd>
            </dl>
          </div>
          <div className="map">
            <h3>Find us on Google Maps</h3>
            <p>Open the map for turn-by-turn directions from wherever you are.</p>
            <a className="btn btn-road" href={mapLink} target="_blank" rel="noopener">Open in Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
}
