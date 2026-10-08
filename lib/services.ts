export type Service = {
  name: string;
  description: string;
  className?: string;
};

export const services: Service[] = [
  { name: "Bike & scooter seat covers", description: "Custom-fit covers in your colour, material and stitch pattern. Our most popular service.", className: "b2 t-red" },
  { name: "Car seat covers", description: "Tailor-made full sets for hatchbacks, sedans and SUVs.", className: "b2 t-ink" },
  { name: "Seat upholstery", description: "Full re-upholstery in leatherette, leather look or fabric." },
  { name: "Door panels", description: "Matching panel inserts and trim." },
  { name: "Dashboard finishing", description: "Wrap and trim to refresh a worn dashboard.", className: "t-brass" },
  { name: "Roof lining", description: "Replace sagging or stained headliners." },
  { name: "Floor mats & carpets", description: "Custom-cut for a perfect fit.", className: "t-brass" },
  { name: "Steering covers", description: "Hand-stitched for grip and comfort." },
  { name: "Repair & re-stitching", description: "Torn or faded seat? We make it new again.", className: "b2" },
];

export const marqueeWords = [
  "Bike seat covers",
  "Car seat covers",
  "Upholstery",
  "Door panels",
  "Headliners",
  "Floor mats",
  "Steering covers",
];
