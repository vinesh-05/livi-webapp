import { GALLERY } from "../data";
import VineDivider from "./VineDivider";

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">A look inside</span>
          <h2>The garden, the plates, the evenings.</h2>
        </div>

        <div className="gallery-grid">
          {GALLERY.map((g) => (
            <div className="gallery-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
              <div className="gallery-caption">{g.caption}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 88 }}>
        <VineDivider />
      </div>
    </section>
  );
}
