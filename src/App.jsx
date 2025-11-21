import React from "react";

function App() {
  return (
    <div className="container mt-4">

      {/* Header */}
      <header className="p-3 text-center mb-3" style={{ background: "#ff4d4d"}}>
        <h2>&lt;header&gt;</h2>
      </header>

      {/* Nav */}
      <nav className="p-3 text-center mb-3" style={{ background: "#33ccff" }}>
        <h2>&lt;nav&gt;</h2>
      </nav>

      {/* Section + Aside */}
      <div className="row mb-3">

        <section
          className="col-md-6 p-4 text-center"
          style={{ background: "#ffcc66" }}
        >
          <h2>&lt;section&gt;</h2>
        </section>

        <aside
          className="col-md-6 p-4 text-center"
          style={{ background: "#ff66cc" }}
        >
          <h2>&lt;aside&gt;</h2>
        </aside>

      </div>

      {/* Article */}
      <article className="p-4 text-center mb-3" style={{ background: "#ff9966" }}>
        <h2>&lt;article&gt;</h2>
      </article>

      {/* Footer */}
      <footer className="p-3 text-center" style={{ background: "#666666", color: "white" }}>
        <h2>&lt;footer&gt;</h2>
      </footer>

    </div>
  );
}

export default App;
