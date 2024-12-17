import Link from "@/components/Link.jsx";
import Page from "@/components/Page/Page.jsx";
import { path } from "@/services/router.service.js";

export default function NotFoundPage(): HTMLElement {
  return (
    <Page title="Page not found">
      <p className="text-center">
        <Link href={path("home")} className="text-light">Home</Link>
      </p>
    </Page>
  );
}