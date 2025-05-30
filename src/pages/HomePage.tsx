import Page from "@/components/Page/Page.jsx";
import Trl from "@/components/Translatable/Trl.jsx";

export default function HomePage() {
  return (
    <Page
      title="Home"
      inPageTitle={<HomePageTitle />}
      center
    >
      <section className="fs-5">
        <div>
          <p className="mb-2">
            <Trl
              en="I'm a web developer based near Luxembourg City. I have worked with many technologies including Java and PHP. However, my passion lies in full-stack development with the versatile and ever-popular JavaScript language."
              fr="Je suis un développeur web basé près de Luxembourg. J'ai travaillé avec de nombreuses technologies dont Java et PHP, mais ma passion reste le développement full-stack avec le langage populaire multifonctions JavaScript."
            />
          </p>
          <p>
            <Trl
              fr="Mon expertise me permet de créer des sites modernes, rapides, extensibles et sur mesure. Que vous cherchiez un design lisse et minimaliste ou une appli web complexe et dynamique, les résultats seront de haute qualité. Si vous voulez les services d'un développeur compétent et fiable, vous avez frappé à la bonne porte. Ensemble donnons vie à vos idées !"
              en="My expertise allows me to create fast, modern, and scalable websites that are tailored to your needs. Whether you're looking for a sleek and minimalistic design, or a complex and dynamic web application, I will deliver high-quality results. If you're looking for a reliable and competent web dev, you've come to the right place. Together we'll bring your ideas to life!"
            />
          </p>
        </div>
      </section>
    </Page>
  );
}

function HomePageTitle() {
  return (
    <section>
      <h1><Trl en="A Website Bespoke And Exactly Your Size" fr="Un site sur mesure selon vos besoins" /></h1>
    </section>
  );
}