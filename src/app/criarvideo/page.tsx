import FooterMenu from "@/components/FooterMenu";
import Header from "@/components/Header";

export default function criarvideo() {
  return (
    <>
      <div className="sm:block hidden">
        <Header />
      </div>
      <div className="sm:hidden block">
        <FooterMenu />
      </div>
    </>
  );
}
