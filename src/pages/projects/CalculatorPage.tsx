import Calculator from "@/components/Calculator/Calculator.jsx";
import Page from "@/components/Page/Page.jsx";
import Trl from "@/components/Translatable/Trl.js";

export default function CalculatorPage() {
  return (
    <Page
      title="Calculator"
      inPageTitle={(
        <Trl fr="Calculatrice" en="Calculator" />
      )}
    >
      <Calculator />
    </Page>
  );
}