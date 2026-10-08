/* ===== EDIT THESE DETAILS ===== */
export const SHOP = {
  phone: "919847118999",
  whatsapp: "919847118999",
  address: "Fancy Decor - Seat Bazar, Thrissur, Kerala",
  hours: "Mon to Sat, 9:30 AM to 8:30 PM",
  mapUrl: "https://share.google/nuzZLclL7ZmQUVNDB",
};
/* ================================ */

export const DEFAULT_MSG = "Hi, I'd like to know about seat cover and interior work.";

export const waLink = (msg: string) =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+${SHOP.phone}`;

export const mapLink = SHOP.mapUrl;

// "919847118999" -> "+91 98471 18999"
export const phoneDisplay = `+${SHOP.phone.replace(/^(\d{2})(\d{5})(\d+)$/, "$1 $2 $3")}`;
