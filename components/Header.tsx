import { telLink } from "@/lib/shop";

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">
          Fancy Decor<small>Seat Bazar &middot; Thrissur</small>
        </a>
        <nav aria-label="Main">
          <a className="hide" href="#services">Services</a>
          <a className="hide" href="#why">Why us</a>
          <a className="hide" href="#contact">Contact</a>
          <a className="btn btn-red btn-sm" href={telLink}>Call now</a>
        </nav>
      </div>
    </header>
  );
}
