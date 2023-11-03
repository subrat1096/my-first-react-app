function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand text-primary fw-bold" href="#">
              CodeXP
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
function Main() {
  return (
    <section class="d-flex align-items-center" style={{ height: `500px` }}>
      <div class=" container text-center">
        <div>
          <h3>
            Welcome to <span class="text-primary fw-bold">CodeXP</span>
          </h3>
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide mt-4"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p>
                  A New World of Possibilities - Study Coding With{" "}
                  <span class="text-primary fw-semibold">CodeXP</span>
                </p>
              </div>
              <div class="carousel-item">
                <p>
                  Think. Create. Innovate - Experience the Future of Code with{" "}
                  <span class="text-primary fw-semibold">CodeXP</span>
                </p>
              </div>
              <div class="carousel-item">
                <p>
                  Transform Your Future with Code - Learn with the Best at Our
                  College{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div class="container p-2">
        <div className="row row-cols-1 text-start mb-4 mt-4">
          <h3 class="m-0">
            <a href="" class="fw-bold text-primary text-decoration-none">
              CodeXP
            </a>
          </h3>
          <p>
            <b>Home for developers</b>
          </p>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="h-100">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class=" h-100">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class=" h-100">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class=" h-100">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 text-center mt-5">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <p>
            Powered by <a href="">CodeXP</a> Home for developers
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
ReactDOM.render(App(), document.getElementById("root"));
