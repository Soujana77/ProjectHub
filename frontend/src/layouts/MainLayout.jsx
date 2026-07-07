import Navbar from "../components/layout/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
}

export default MainLayout;