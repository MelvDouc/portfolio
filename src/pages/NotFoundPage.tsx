import Link from "@/components/Link.jsx";
import Page from "@/components/Page/Page.jsx";
import Trl from "@/components/Translatable/Trl.js";
import { path } from "@/services/router.service.js";

export default function NotFoundPage() {
  return (
    <Page
      title="Page not found"
      inPageTitle={(
        <Trl en="Page not found" fr="Page non trouvée" />
      )}
    >
      <p className="text-center">
        <Link href={path("home")} className="text-light">
          <Trl en="Home" fr="Accueil" />
        </Link>
      </p>
    </Page>
  );
}