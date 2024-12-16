export default function HomePage() {
  document.title = "Home | Melvin Doucet's website";

  return (
    <div className="page page-center">
      <section>
        <h1 data-trl="home-title"></h1>
      </section>
      <section className="fs-5">
        <div>
          <p className="mb-2" data-trl="home-intro1"></p>
          <p data-trl="home-intro2"></p>
        </div>
      </section>
    </div>
  );
}