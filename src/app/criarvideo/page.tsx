import Footer from "@/components/Footer";
import FooterMenu from "@/components/FooterMenu";
import FormVideo from "@/components/FormVideo";
import Header from "@/components/Header";




export default function criarvideo() {

  return (
    <div className="bg-neutral-900">
      <div className="sm:block hidden">
        <Header />
      </div>
      <div className="">
        <FormVideo />
      </div>
      <div className="sm:hidden block">
        <FooterMenu/>
      </div>
      <div className="sm:block hidden">
        <Footer/>
      </div>
    </div>
  );
}
