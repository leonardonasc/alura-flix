import Conteudo from "@/components/Conteudo";
import FooterMenu from "@/components/FooterMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
    <div className="sm:block hidden">
      <Header />
      </div>
      <Conteudo />
      <div className="sm:hidden block">
        <FooterMenu />
      </div>
      <div className="sm:block hidden">
        <Footer />
      </div>
    </>
  );
}
