import Card from "@/component/Card";
import CatagoryHome from "@/component/Homepahe/Catagory";
import HeroSection from "@/component/Homepahe/HeroSection";
import RootLayout from "@/component/layouts/RootLayout";
import { getProductsCatagoriSuccess } from "@/redux/features/productCatagory/productCatagorySlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

const HomePage = ({ prodates }) => {

  const randomSix = prodates.data.slice(0, 6);

  const dispatch = useAppDispatch();
  // dispatch(getProductsSuccess(product.data))
  useEffect(() => {
    if (prodates) {
      dispatch(getProductsCatagoriSuccess(prodates.data));
    }
  }, [prodates, dispatch]);


  return (
    <div>
      <HeroSection />
      <CatagoryHome />
      <div className="container mx-auto my-14">
        <div className="text-center">
          <h1 className="text-4xl my-3">Featured Products</h1>
          <p>Check & Get Your Desired Product!</p>


        </div>

        <div className="grid  grid-cols-1 md:grid-cols-5 gap-4 justify-items-center my-10">
          {
            randomSix.map(prodct => <Card prodct={prodct} key={prodct._id} />)
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://pc-bd.vercel.app/api/v1/product/?limit=100')
  const data = await res.json()
  return { props: { prodates: data }, revalidate: 10 }
}
