import { DEFAULT_MSG, waLink } from "@/lib/shop";

export default function WhatsAppFab() {
  return (
    <a className="fab" href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      WhatsApp
    </a>
  );
}
