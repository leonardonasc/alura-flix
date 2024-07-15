

import Conteudo from "@/components/Conteudo";
import FooterMenu from "@/components/FooterMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedVideo from "@/components/FeaturedVideo";




export default function Home() {

  
  return (
    <>
      <div className="sm:block hidden">
        <Header />
        <FeaturedVideo />
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
