import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "utils";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
