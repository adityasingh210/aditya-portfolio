import "./Rows.css";

export default function Skills({ groups }) {
  return (
    <dl className="rows">
      {groups.map((g) => (
        <div className="rows__item" key={g.group}>
          <dt className="rows__left">{g.group}</dt>
          <dd className="rows__main skills">
            {g.items.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
