import Page from "@/components/Page/Page.jsx";
import PasswordGenerator from "@/components/PasswordGenerator/PasswordGenerator.jsx";
import SmallComponentWrapper from "@/components/SmallComponentWrapper/SmallComponentWrapper.jsx";

export default function PasswordGeneratorPage(): Element {
  return (
    <Page title="Password generator">
      <SmallComponentWrapper>
        <PasswordGenerator />
      </SmallComponentWrapper>
    </Page>
  );
}