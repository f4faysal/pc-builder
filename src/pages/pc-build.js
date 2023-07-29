import RootLayout from "@/component/layouts/RootLayout";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "@/redux/features/product/productSlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

const PcBildPage = ({product}) => {
     console.log(product.data)
     const dispatch = useAppDispatch();
     // dispatch(getProductsSuccess(product.data))
     useEffect(() => {
          if (product) {
               dispatch(getProductsStart());
               if (product.success) {
                 dispatch(getProductsSuccess(product?.data));
               } else {
                 dispatch(getProductsFailure(product?.message));
               }
             }
        }, [product, dispatch]);
console.log(product)
     return (
          <div className="md:flex md:justify-center h-screen">
               <div className="m-4 md:w-1/2 box-border border-4">
                    <div className="grid grid-cols-5">
                         <div className="col-start-1 col-span-5 w-full h-auto bg-base-200">
                              <div className="md:flex md: justify-between">
                                   <h3 className="text-1xl font-semibold">PC Builder - Build Your Own Computer - PC Builder BD</h3>
                                   <div>
                                        <button className="btn btn-accent">Add To Builder</button>
                                   </div>
                              </div>
                              <p className="p-1 mt-1 font-semibold bg-gray-900 text-gray-50">Core Components</p>
                         </div>
                    </div>

                    <div className="mt-10">
                         <div className="grid grid-cols-5">
                              <div className="col-start-1 col-end-3 w-full  ">
                                   <div  >
                                       <div>

                                       </div>
                                   </div>
                              </div>
                              <div className="col-start-3 col-end-5 w-full">
                                   <div>
                                        <button className="btn btn-accent w-full">Add To Builder</button>
                                   </div>
                              </div>
                              <div className="col-start-5 col-end-6 w-full">
                                   <div>
                                        <button className="btn btn-accent">Add To Builder</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PcBildPage;

PcBildPage.getLayout = function getLayout(page) {
     return (
          <RootLayout>{page}</RootLayout>
     )
}


export const getServerSideProps = async () => {
     const res = await fetch('https://pc-bd.vercel.app/api/v1/product/?limit=100')
     const data = await res.json()
     return { props: { product: data } }
   }