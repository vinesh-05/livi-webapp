import {
  ADDRESS_LINES,
  MENU_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  RATING_SOURCES,
} from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <strong>Livi Cafe &amp; Kitchen</strong>
            <p>Sark Green Fields, Shankarpalle — biryani, pizza, and slow coffee among the trees.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#reviews">Reviews</a>
              <a href="#visit">Visit</a>
              <a href={MENU_URL} target="_blank" rel="noopener noreferrer">
                Full Menu
              </a>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              {ADDRESS_LINES.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>

            <div className="footer-col">
              <h4>Reviews</h4>
              {RATING_SOURCES.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name} · {s.rating}/5
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Livi Cafe &amp; Kitchen. All rights reserved.</span>
          <span>Shankarpalle · Mokila · Hyderabad</span>
        </div>
      </div>
    </footer>
  );
}
