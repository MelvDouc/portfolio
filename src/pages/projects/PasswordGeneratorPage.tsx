import Page from "@/components/Page/Page.jsx";
import PasswordGenerator from "@/components/PasswordGenerator/PasswordGenerator.jsx";
import SmallComponentWrapper from "@/components/SmallComponentWrapper/SmallComponentWrapper.jsx";
import Trl from "@/components/Translatable/Trl.js";

export default function PasswordGeneratorPage() {
  return (
    <Page
      title="Password generator"
      inPageTitle={(
        <Trl fr="Générateur de mot de passe" en="Password generator" />
      )}
    >
      <SmallComponentWrapper>
        <PasswordGenerator />
      </SmallComponentWrapper>
    </Page>
  );
}