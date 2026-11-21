import "./Coding.css";

// Only rendered when at least one profile has a handle (see lib/content.js).
export default function Coding({ profiles }) {
  return (
    <div className="coding">
      {profiles.map((p) => {
        const Tag = p.url ? "a" : "div";
        return (
          <Tag
            key={p.platform}
            className="coding__card"
            {...(p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {})}
          >
            <span className="coding__platform">{p.platform}</span>
            <span className="coding__handle">{p.handle}</span>
            {p.stats.length > 0 && (
              <dl className="coding__stats">
                {p.stats.map((s) => (
                  <div key={s.label + s.value}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Tag>
        );
      })}
    </div>
  );
}
