import CardTable from "@/component/CardTable";
import CardTableAdd from "@/component/CardTableAdd";
import RootLayout from "@/component/layouts/RootLayout";
import {
     getProductsFailure,
     getProductsStart,
     getProductsSuccess,
} from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const PcBildPage = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setfilteredProducts] = useState();

  const { products } = useAppSelector((state) => state.products);
  const { addtoBuild } = useAppSelector((state) => state.addtoBuild);

  const handelAddToBuilder = (catagory) => {
    setfilteredProducts(
      products.filter((product) => product.category === `${catagory}`)
    );
    setShowModal(true);
  };

  //   const { products } = useAppSelector((state) => state.products);
  console.log(products, "first");
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



  const x = addtoBuild
  .map((product) => "")

  const notify = () => toast.success('Successfully Build! Request ');

  return (
    <div className="md:flex md:justify-center ">
     <Toaster />
      <div className="m-4  md:w-1/2 box-border border-4 p">
        <div className="grid grid-cols-5">
          <div className="col-start-1 col-span-5 w-full h-auto bg-base-200">
            <div className="md:flex md: justify-between">
              <h3 className="text-1xl font-semibold">
                PC Builder - Build Your Own Computer - PC Builder BD
              </h3>
              <div>
                <button onClick={notify} className={`btn btn-accent ${x.length===6 ?"": "btn-disabled"}`}>Completed Build</button>
              </div>
            </div>
            <p className="p-1 mt-1 font-semibold bg-gray-900 text-gray-50">
              Core Components
            </p>
          </div>
        </div>
        {/* {
                         computerRecudCatagory.map((crc, i) => <PcbuildCatagory key={i} crc={crc} />)
                    } */}
        {/* damo CPU */}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">CPU</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((prodct, i) => (
                            <CardTable
                              prodct={prodct}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">CPU</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {/* {addtoBuild.map((prodct, i) => (<CardTable prodct={prodct} key={i}/>))} */}
                  {addtoBuild
                    .filter((product) => product.category === `CPU`)
                    .map((prodct, i) => (
                      <CardTableAdd prodct={prodct} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("CPU")}
                    className={`btn btn-primary ${addtoBuild
                         .find((product) => product.category === `CPU`)  ? "btn-disabled" : ""}`}>
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo Motherboard */}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Motherboard
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((prodct, i) => (
                            <CardTable
                              prodct={prodct}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">Motherboard</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {/* {addtoBuild.map((prodct, i) => (<CardTable prodct={prodct} key={i}/>))} */}
                  {addtoBuild
                    .filter((product) => product.category === `Motherboard`)
                    .map((prodct, i) => (
                      <CardTableAdd prodct={prodct} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("Motherboard")}
                    className={`btn btn-primary ${addtoBuild
                         .find((product) => product.category === `Motherboard`)  ? "btn-disabled" : ""}`}>
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo RAM*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                          RAM
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((prodct, i) => (
                            <CardTable
                              prodct={prodct}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">RAM</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {/* {addtoBuild.map((prodct, i) => (<CardTable prodct={prodct} key={i}/>))} */}
                  {addtoBuild
                    .filter((product) => product.category === `RAM`)
                    .map((prodct, i) => (
                      <CardTableAdd prodct={prodct} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("RAM")}
                    className={`btn btn-primary ${addtoBuild
                         .find((product) => product.category === `RAM`)  ? "btn-disabled" : ""}`}>
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo PowerSupplyUnit*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                          PowerSupplyUnit
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                             
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((prodct, i) => (
                            <CardTable
                              prodct={prodct}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">PowerSupplyUnit</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {/* {addtoBuild.map((prodct, i) => (<CardTable prodct={prodct} key={i}/>))} */}
                  {addtoBuild
                    .filter((product) => product.category === `PowerSupplyUnit`)
                    .map((prodct, i) => (
                      <CardTableAdd prodct={prodct} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("PowerSupplyUnit")}
                    className={`btn btn-primary ${addtoBuild
                         .find((product) => product.category === `PowerSupplyUnit`)  ? "btn-disabled" : ""}`}>
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo StorageDevice*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Motherboard
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((prodct, i) => (
                            <CardTable
                              prodct={prodct}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">StorageDevice</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {/* {addtoBuild.map((prodct, i) => (<CardTable prodct={prodct} key={i}/>))} */}
                  {addtoBuild
                    .filter((product) => product.category === `StorageDevice`)
                    .map((prodct, i) => (
                      <CardTableAdd prodct={prodct} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("StorageDevice")}
                    className={`btn btn-primary ${addtoBuild
                         .find((product) => product.category === `StorageDevice`)  ? "btn-disabled" : ""}`}>
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* damo Monitor*/}
        <>
          <div className="mt-10">
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                          Monitor
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              
                            </span>
                          </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                          {filteredProducts.map((prodct, i) => (
                            <CardTable
                              prodct={prodct}
                              key={i}
                              setShowModal={setShowModal}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
            <div className="grid grid-cols-5">
              <div className="col-start-1 col-end-3 w-full  ">
                <div className="p-2 flex items-center">
                  <h1 className="text-2xl font-semibold ">Monitor</h1>
                  <p className="text-2xl font-semibold text-red-600">*</p>
                </div>
              </div>
              <div className="col-start-3 col-end-5 w-full">
                <div>
                  {/* {addtoBuild.map((prodct, i) => (<CardTable prodct={prodct} key={i}/>))} */}
                  {addtoBuild
                    .filter((product) => product.category === `Monitor`)
                    .map((prodct, i) => (
                      <CardTableAdd prodct={prodct} key={i} />
                    ))}
                </div>
              </div>
              <div className="col-start-5 col-end-6 w-full">
                <div>
                  <button
                    onClick={() => handelAddToBuilder("Monitor")}
                    className={`btn btn-primary ${addtoBuild
                         .find((product) => product.category === `Monitor`)  ? "btn-disabled" : ""}`}>
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default PcBildPage;

PcBildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-bd.vercel.app/api/v1/product/?limit=100");
  const data = await res.json();
  return { props: { product: data } };
};
