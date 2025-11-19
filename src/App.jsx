import React from "react";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* HEADER - Full width */}
      <header className="p-3 text-center" style={{ background: "#ff4d4d" }}>
        <h2>&lt;header&gt;</h2>
      </header>

      {/* NAV - Full width */}
      <nav className="p-3 text-center" style={{ background: "#33ccff",
        marginTop: "30px",
       }}>
        <h2>&lt;nav&gt;</h2>
      </nav>

      {/* MAIN CONTENT TAKES FULL WIDTH */}
      <div className="container-fluid" style={{ flex: 1 }}>
        <div className="row my-3">

          {/* SECTION */}
          <section
            className="col-md-6 p-4 text-center"
            style={{ background: "#ffcc66",
              marginTop: "35px"
             }}
          >
            <h2>&lt;section&gt;</h2>
          </section>

          {/* ASIDE */}
          <aside
            className="col-md-6 p-4 text-center"
            style={{ background: "#ff66cc", marginTop: "35px" }}
          >
            <h2>&lt;aside&gt;</h2>
          </aside>

        </div>

        {/* ARTICLE */}
        <article className="p-4 text-center mb-3" style={{ background: "#ff9966", marginTop: "35px" }}>
          <h2>&lt;article&gt;</h2>
        </article>
      </div>
      
      


      {/* FOOTER */}
      <footer
        className="p-3 text-center"
        style={{
          background: "#666666",
          color: "white",
          width: "100%",
          textAlign: "center"
        }}
      >
        <h2>&lt;footer&gt;</h2>
      </footer>
    </div>
  );
}

export default App;

