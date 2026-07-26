import { MENU_URL, DIRECTIONS_URL } from "../data";
import { ArrowUpRight, StarIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <div className="hero-badge">
          <StarIcon size={13} />
          <strong>4.7</strong>
          <span>· 188 Google reviews · Shankarpalle, Hyderabad</span>
        </div>

        <h1>
          Green fields, <em>good food</em>, no rush.
        </h1>

        <p className="hero-sub">
          A garden-set café and kitchen tucked into Sark Green Fields —
          wood-fired pizza, all-day plates, and slow coffee under the trees.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-gold"
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Menu <ArrowUpRight size={16} />
          </a>
          <a
            className="btn btn-outline"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
