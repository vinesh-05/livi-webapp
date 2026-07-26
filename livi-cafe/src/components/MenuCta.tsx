import { MENU_URL } from "../data";
import { ArrowUpRight, MenuBookIcon } from "./Icons";

const CUISINES = ["Biryani", "North Indian", "Chinese", "Pizza", "Cafe", "Coffee"];

export default function MenuCta() {
  return (
    <section id="menu" className="menu-cta">
      <div className="wrap menu-cta-inner">
        <div>
          <span className="eyebrow on-dark">
            <MenuBookIcon size={13} /> On the table
          </span>
          <h2 style={{ marginTop: 14 }}>Hungry already? Here's everything on offer.</h2>
          <p>
            The full menu — starters, mains, wood-fired pizza and the coffee
            list — lives on our ordering partner page, kept current with
            prices and availability.
          </p>
          <div className="cuisines">
            {CUISINES.map((c) => (
              <span className="tag" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="menu-cta-action">
          <a
            className="btn btn-gold"
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Menu <ArrowUpRight size={16} />
          </a>
          <small>Opens in a new tab</small>
        </div>
      </div>
    </section>
  );
}
