import PcbuildCatagory from "@/component/PcbuildCatagory";
import RootLayout from "@/component/layouts/RootLayout";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

const PcBildPage = ({ product }) => {

     const computerRecudCatagory = [
          "CPU",
          "Motherboard",
          "RAM",
          "PowerSupplyUnit",
          "StorageDevice",
          "Monitor",
     ];


     const { products } = useAppSelector((state) => state.products);
     console.log(products, "first")
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

     return (
          <div className="md:flex md:justify-center ">
               <div className="m-4  md:w-1/2 box-border border-4 p">
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
                    {
                         computerRecudCatagory.map((crc, i) => <PcbuildCatagory key={i} crc={crc} />)
                    }
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