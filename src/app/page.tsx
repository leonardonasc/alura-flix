

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
        <div className="sm:hidden md:hidden lg:hidden xl:block">
        <FeaturedVideo />
        </div>
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
