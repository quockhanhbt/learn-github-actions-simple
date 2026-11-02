import guide from "../content/guide.json";

type Section = {
  id: string;
  title: string;
  body?: string[];
  list?: string[];
  code?: string;
};

export default function Home() {
  const sections = guide.sections as Section[];

  return (
    <main className="container">
      <header>
        <h1>{guide.title}</h1>
        <p className="subtitle">{guide.subtitle}</p>
        <nav>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
        </nav>
      </header>

      {sections.map((s) => (
        <section key={s.id} id={s.id}>
          <h2>{s.title}</h2>
          {s.body?.map((p, i) => <p key={i}>{p}</p>)}
          {s.list && (
            <ul>
              {s.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {s.code && (
            <pre>
              <code>{s.code}</code>
            </pre>
          )}
        </section>
      ))}

      <section id="links">
        <h2>Useful links</h2>
        <ul>
          {guide.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer>Built with Next.js (static export). No database, no API.</footer>
    </main>
  );
}
