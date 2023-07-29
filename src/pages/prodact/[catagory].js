import RootLayout from "@/component/layouts/RootLayout";
import { useAppSelector } from "@/redux/hook";

const ProdactCatagory = () => {
     const { products } = useAppSelector((state) => state.products);
     console.log( 'h' ,products)
     return (
          <div>
               ProdactCatagory
          </div>
     );
};

export default ProdactCatagory;



ProdactCatagory.getLayout = function getLayout(page) {
     return (
       <RootLayout>{page}</RootLayout>
     )
   }
   
   
   
   