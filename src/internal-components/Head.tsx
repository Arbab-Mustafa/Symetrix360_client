import { Helmet } from "react-helmet";
import fonts from "../fonts.json";

export const Head = () => {
  return (
    <Helmet>
      {fonts.map((font) => (
        <link key={font} href={font} rel="stylesheet" />
      ))}
    </Helmet>
  );
};
