import Page from "@/components/Page/Page.jsx";
import { path } from "@/core/Router.js";

export default function NotFoundPage() {
  return (
    <Page title="Page not found">
      <h1 className="fw-bold text-light mb-4">Page Not Found</h1>
      <p className="text-center">
        <a href={path("home")} className="text-light">Home</a>
      </p>
    </Page>
  );
}