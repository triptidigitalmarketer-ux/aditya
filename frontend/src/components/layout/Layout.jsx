import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-ivory">
    <Header />
    <main className="flex-1 pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
