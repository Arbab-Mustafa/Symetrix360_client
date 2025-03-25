import { ProdErrorPage } from "../prod-components/ProdErrorPage";

export default function SomethingWentWrongPage() {
  return <ProdErrorPage text="Something went wrong." canRefresh={true} />;
}
