import RootLayout from "@/component/layouts/RootLayout";

const ProdactCatagory = () => {
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
   
   
 