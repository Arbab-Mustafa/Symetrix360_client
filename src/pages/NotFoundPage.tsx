import { ProdErrorPage } from "../prod-components/ProdErrorPage";

export default function NotFoundPage() {
  return <ProdErrorPage text="Page not found." canRefresh={false} />;
}
