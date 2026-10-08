const stats = [
  ["Seat covers", "Many colours and designs"],
  ["Accessories", "For bikes, scooters and cars"],
  ["Fair prices", "Quality without overspending"],
  ["Thrissur", "Visit us in person"],
];

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        <ul>
          {stats.map(([title, text]) => (
            <li key={title}>
              <b>{title}</b>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
