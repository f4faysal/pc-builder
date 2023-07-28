import CatagoryHome from "@/component/Homepahe/Catagory";
import HeroSection from "@/component/Homepahe/HeroSection";
import RootLayout from "@/component/layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
     <HeroSection/>
     <CatagoryHome/>
     
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}