import Page from "@/components/Page/Page.jsx";
import ProjectList from "@/components/ProjectList/ProjectList.jsx";
import Trl from "@/components/Translatable/Trl.js";

export default function ProjectsPage() {
  return (
    <Page
      title="Projects"
      inPageTitle={(
        <Trl en="Projects" fr="Projets" />
      )}
    >
      <ProjectList />
    </Page>
  );
}