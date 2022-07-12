import { Helmet } from "react-helmet";
import { HOST } from "utils";

export const HelmetConfig = ({ title, path = "" }) => (
  <Helmet>
    <title>
      {title ? title + " | Stylo Stationery®" : "Stylo Stationery®"}
    </title>
    <meta property="og:url" content={HOST + path} />
    <meta property="twitter:url" content={HOST + path} />
    <link rel="canonical" href={HOST + path} />
  </Helmet>
);
