const steps = [
  ["Message us", "Tell us your vehicle model and what you need on WhatsApp."],
  ["Choose your style", "We send photos, colours and prices so you can decide."],
  ["Pick up or fit in store", "Visit the shop in Thrissur to collect your order."],
];

export default function Steps() {
  return (
    <section>
      <div className="wrap">
        <h2>How to order</h2>
        <p className="lead">Three simple steps, whether you shop online or in store.</p>
        <ol className="steps">
          {steps.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
