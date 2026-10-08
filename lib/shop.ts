/* ===== EDIT THESE DETAILS ===== */
export const SHOP = {
  phone: "919999999999",
  whatsapp: "919999999999",
  address: "Fancy Decor - Seat Bazar, Thrissur, Kerala",
  hours: "Mon to Sat, 9:30 AM to 8:30 PM",
  mapQuery: "Fancy Decor Seat Bazar Thrissur Kerala",
};
/* ================================ */

export const DEFAULT_MSG = "Hi, I'd like to know more about your products.";

export const waLink = (msg: string) =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+${SHOP.phone}`;

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP.mapQuery)}`;

export const phoneDisplay = `+${SHOP.phone.replace(/^(\d{2})(\d+)$/, "$1 $2")}`;
