import { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav({ name, items }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [items.map((i) => i.id).join()]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <a className="nav__name" href="#top">
          {name}
        </a>
        <nav aria-label="Sections">
          <ul className="nav__list">
            {items.map((i) => (
              <li key={i.id}>
                <a href={`#${i.id}`} aria-current={active === i.id ? "true" : undefined}>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
