import Card from "@/component/Card";
import RootLayout from "@/component/layouts/RootLayout";
import { useAppSelector } from "@/redux/hook";

const ProdactCatagory = () => {
     const { products } = useAppSelector((state) => state.productsCatagory);
     console.log( 'h' ,products)

     const filteredProducts = products.filter((product) => product.category === "RAM");
console.log(filteredProducts)
     return (
          <div className="container mx-auto my-14">
          <div className="text-center">
            <h1 className="text-4xl my-3">Featured Products</h1>
            <p>Check & Get Your Desired Product!</p>
  
  
          </div>
  
          <div className="grid  grid-cols-1 md:grid-cols-5 gap-4 justify-items-center my-10">
            {
              filteredProducts.map(prodct => <Card prodct={prodct} key={prodct._id} />)
            }
          </div>
        </div>
     );
};

export default ProdactCatagory;



ProdactCatagory.getLayout = function getLayout(page) {
     return (
       <RootLayout>{page}</RootLayout>
     )
   }
   
   
   
   