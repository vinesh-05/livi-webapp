import { useEffect, useState } from "react";
import { MENU_URL } from "../data";
import { MenuHamburger, CloseIcon, ArrowUpRight } from "./Icons";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled || open ? " scrolled" : ""}`}>
      <div className="wrap">
        <a className="brand" href="#top">
          <strong>Livi</strong>
          <span>Cafe &amp; Kitchen</span>
        </a>

        <nav className="site-nav">
          <div className={`nav-links${open ? " open" : ""}`}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </div>
          <a
            className="btn btn-gold"
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Menu <ArrowUpRight size={15} />
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuHamburger />}
          </button>
        </nav>
      </div>
    </header>
  );
}
