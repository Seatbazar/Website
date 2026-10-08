import type { ReactNode } from "react";

const features: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Quality you can feel",
    text: "Durable materials and neat stitching that hold up to sun, rain and daily rides.",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </>
    ),
  },
  {
    title: "Designs that stand out",
    text: "Plain, sporty or bold. Pick a cover that suits your bike and your style.",
    icon: <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.3 9.4l6.1-.8z" />,
  },
  {
    title: "Affordable prices",
    text: "Fair pricing for everyday riders, with no need to travel far for good accessories.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.1 0-2.1-.5-2.6-1.5M12 6v1.5M12 16.5V18" />
      </>
    ),
  },
  {
    title: "Local and easy to reach",
    text: "Visit us in Thrissur, or message us and we will help you choose.",
    icon: (
      <>
        <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <h2>Why riders choose us</h2>
        <p className="lead">A local shop that cares about how your vehicle looks and feels.</p>
        <div className="feat">
          {features.map((f) => (
            <div key={f.title}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {f.icon}
              </svg>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
