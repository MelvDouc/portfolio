import Connect4 from "@/components/Connect4/Connect4.jsx";
import Page from "@/components/Page/Page.jsx";

export default function Connect4Page(): HTMLElement {
  return (
    <Page title="Connect 4">
      <Connect4 />
    </Page>
  );
}