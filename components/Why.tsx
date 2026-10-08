const POINTS = [
  { title: "Made to measure", text: "Every cover is cut to your exact vehicle, so there are no wrinkles and no loose corners." },
  { title: "Stitched to last", text: "Strong thread, reinforced seams and quality materials that handle sun, rain and daily use." },
  { title: "Your design, your way", text: "Choose the material, colour and stitch pattern. We will advise what looks best." },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <h2>The Seat Bazar difference</h2>
        <p className="lead" style={{ marginBottom: 40 }}>A local workshop that treats every seat like our own.</p>
        <div className="cols">
          {POINTS.map((p, i) => (
            <div key={p.title}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
