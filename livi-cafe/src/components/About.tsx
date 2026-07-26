import { RATING_SOURCES } from "../data";
import VineDivider from "./VineDivider";
import { StarIcon, PawIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-media">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/4/22408794/73dccbe20ab02ff251fa58b210e8bba8.jpeg"
              alt="Table spread of freshly plated dishes at Livi Cafe & Kitchen"
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">About the cafe</span>
            <p>Pull up a chair — there's no wrong time of day to be here.</p>
            <p>
              Set inside Sark Green Fields off the Shankarpalle road, Livi
              trades the usual restaurant hush for open-air seating, live
              music some evenings, and a menu that swings comfortably between
              biryani, wood-fired pizza, and North Indian and Chinese
              favourites. Regulars come back for the space as much as the
              food: spacious tables, quick and genuinely warm service, and a
              couple of resident pets who tend to make new friends.
            </p>
            <p>
              Whatever mood brought you here — a slow weekend brunch, a
              biryani craving, or dinner with the whole table ordering
              something different — the kitchen is built to keep up.
            </p>

            <div className="stat-row">
              {RATING_SOURCES.map((s) => (
                <a
                  key={s.name}
                  className="stat-chip"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="num">
                    <StarIcon size={13} /> {s.rating}
                  </span>
                  <span className="lbl">
                    {s.name} · {s.count}
                  </span>
                </a>
              ))}
              <div className="stat-chip">
                <span className="num">
                  <PawIcon size={16} />
                </span>
                <span className="lbl">Pet friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 88 }}>
        <VineDivider />
      </div>
    </section>
  );
}
