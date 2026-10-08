import { DEFAULT_MSG, mapLink, telLink, waLink } from "@/lib/shop";
import SeatPicker from "./SeatPicker";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <span className="pill">Thrissur&apos;s bike accessory shop</span>
          <h1>Ride in style. Sit in comfort.</h1>
          <p className="sub">
            Premium bike seat covers, accessories and vehicle add-ons with attractive designs and prices that fit your budget.
          </p>
          <div className="cta">
            <a className="btn btn-wa" href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener">Chat on WhatsApp</a>
            <a className="btn btn-road" href={telLink}>Call the shop</a>
            <a className="btn btn-line" href={mapLink} target="_blank" rel="noopener">Get directions</a>
          </div>
        </div>
        <SeatPicker />
      </div>
    </div>
  );
}
