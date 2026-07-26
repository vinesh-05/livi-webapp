import { REVIEWS, RATING_SOURCES } from "../data";
import { ArrowUpRight } from "./Icons";

export default function Reviews() {
  return (
    <section id="reviews" className="dark-section section-pad">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow on-dark">Word of mouth</span>
          <h2>What guests are saying</h2>
        </div>

        <div className="review-grid">
          {REVIEWS.map((r) => (
            <div className="review-card" key={r.name}>
              <span className="quote-mark">&ldquo;</span>
              <p>{r.text}</p>
              <div className="review-meta">
                <strong>{r.name}</strong>
                <span>{r.when}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="review-sources">
          {RATING_SOURCES.map((s) => (
            <a
              key={s.name}
              className="source-link"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: "var(--line-on-dark)", color: "var(--parchment)" }}
            >
              {s.name} — {s.rating}/5 ({s.count}) <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
