import { DEFAULT_MSG, waLink } from "@/lib/shop";

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">
          <i>FD</i>
          <span>
            Fancy Decor<small>Seat Bazar, Thrissur</small>
          </span>
        </a>
        <nav aria-label="Main">
          <a className="hide" href="#products">Products</a>
          <a className="hide" href="#why">Why us</a>
          <a className="hide" href="#visit">Visit</a>
          <a className="btn btn-wa btn-sm" href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
