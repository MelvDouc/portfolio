import Calculator from "@/components/Calculator/Calculator.jsx";
import Page from "@/components/Page/Page.jsx";

export default function CalculatorPage(): HTMLElement {
  return (
    <Page title="Calculator">
      <Calculator />
    </Page>
  );
}