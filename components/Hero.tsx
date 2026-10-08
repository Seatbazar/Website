import { mapLink, phoneDisplay, telLink } from "@/lib/shop";
import SeatConfigurator from "./SeatConfigurator";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">Seat covers &amp; vehicle interiors</div>
          <h1>
            Crafted seats. <i>Finished</i> interiors.
          </h1>
          <p className="sub">
            Custom-stitched covers for bikes, scooters and cars, and complete cabin upholstery, made by hand in
            Thrissur and fitted to perfection.
          </p>
          <div className="cta">
            <a className="btn btn-red" href={telLink}>Call {phoneDisplay.replace(/^\+91 /, "")}</a>
            <a className="btn btn-out" href={mapLink} target="_blank" rel="noopener">Get directions</a>
          </div>
        </div>
        <SeatConfigurator />
      </div>
    </div>
  );
}
