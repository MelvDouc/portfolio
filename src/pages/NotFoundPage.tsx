import Page from "@/components/Page/Page.jsx";
import { path } from "@/core/Router.js";

export default function NotFoundPage() {
  return (
    <Page title="Page not found">
      <p className="text-center">
        <a href={path("home")} className="text-light">Home</a>
      </p>
    </Page>
  );
}