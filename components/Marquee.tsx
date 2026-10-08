import { Fragment } from "react";
import { marqueeWords } from "@/lib/services";

export default function Marquee() {
  // Repeated so the -50% translate loops seamlessly
  const words = Array.from({ length: 4 }, () => marqueeWords).flat();
  return (
    <div className="marq" aria-hidden="true">
      <div>
        {words.map((w, i) => (
          <Fragment key={i}>
            <span>{w}</span>
            <span>&#9830;</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
