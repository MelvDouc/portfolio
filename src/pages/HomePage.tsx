import Page from "@/components/Page/Page.jsx";

export default function HomePage(): HTMLElement {
  return (
    <Page
      title="Home"
      inPageTitle={<HomePageTitle />}
      center
    >
      <section className="fs-5">
        <div>
          <p className="mb-2" data-trl="home-intro1"></p>
          <p data-trl="home-intro2"></p>
        </div>
      </section>
    </Page>
  );
}

function HomePageTitle(): HTMLElement {
  return (
    <section>
      <h1 data-trl="home-title"></h1>
    </section>
  );
}