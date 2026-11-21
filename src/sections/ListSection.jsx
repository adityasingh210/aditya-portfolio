import "./Rows.css";

// Generic list used by Education, Leadership and every section
// added from the CMS. Left: period. Middle: title/subtitle/note.
// Right: up to 3 label/value details.
export default function ListSection({ items }) {
  return (
    <ol className="rows">
      {items.map((it, i) => (
        <li className="rows__item" key={it.title + i}>
          <p className="rows__left">{it.period}</p>
          <div className="rows__main">
            <h3 className="rows__title">
              {it.link ? (
                <a href={it.link} target="_blank" rel="noreferrer">
                  {it.title}
                </a>
              ) : (
                it.title
              )}
            </h3>
            {it.subtitle && <p className="rows__sub">{it.subtitle}</p>}
            {it.note && <p className="rows__note">{it.note}</p>}
          </div>
          {it.details.length > 0 && (
            <dl className="rows__right">
              {it.details.map((d) => (
                <div key={d.label + d.value}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </li>
      ))}
    </ol>
  );
}
