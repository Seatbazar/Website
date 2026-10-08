const STEPS = [
  { title: "Call or visit", text: "Share your vehicle and what you want done." },
  { title: "Choose your style", text: "Pick material, colour and stitching." },
  { title: "We craft it", text: "Measured, cut and stitched in our workshop." },
  { title: "Fitted and handed over", text: "Checked carefully before you drive away." },
];

export default function Steps() {
  return (
    <section>
      <div className="wrap">
        <h2>From call to finished</h2>
        <p className="lead">Four simple steps.</p>
        <ol className="tl">
          {STEPS.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
