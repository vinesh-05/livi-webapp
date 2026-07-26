import {
  ADDRESS_LINES,
  DIRECTIONS_URL,
  HOURS,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../data";
import { ClockIcon, PhoneIcon, PinIcon, ArrowUpRight } from "./Icons";

export default function Visit() {
  return (
    <section id="visit" className="dark-section section-pad" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow on-dark">Find us</span>
          <h2>Come sit with us</h2>
        </div>

        <div className="visit-grid">
          <div className="visit-info">
            <h3>Livi Cafe &amp; Kitchen</h3>

            <div className="visit-line">
              <PinIcon className="ico" size={19} />
              <p>
                {ADDRESS_LINES.map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="visit-line">
              <PhoneIcon className="ico" size={19} />
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </div>

            <div className="visit-line">
              <ClockIcon className="ico" size={19} />
              <p>{HOURS}</p>
            </div>

            <div className="visit-actions">
              <a
                className="btn btn-gold"
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <ArrowUpRight size={16} />
              </a>
              <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>
                Call to Book a Table
              </a>
            </div>
          </div>

          <iframe
            className="map-embed"
            title="Livi Cafe & Kitchen location map"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
