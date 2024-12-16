import Page from "@/components/Page/Page.jsx";
import PasswordGenerator from "@/components/PasswordGenerator/PasswordGenerator.jsx";

export default function PasswordGeneratorPage(): HTMLElement {
  return (
    <Page title="Password generator">
      <PasswordGenerator />
    </Page>
  );
}