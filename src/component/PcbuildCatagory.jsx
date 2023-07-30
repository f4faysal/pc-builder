import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import CardTable from "./CardTable";

const PcbuildCatagory = ({ crc }) => {
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

  return (
    <div className="mt-10">
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">{crc}</h3>
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
                      <CardTable prodct={prodct} key={i} setShowModal={setShowModal}/>
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
            <h1 className="text-2xl font-semibold ">{crc} </h1>
            <p className="text-2xl font-semibold text-red-600">*</p>
          </div>
        </div>
        <div className="col-start-3 col-end-5 w-full">
          {/* <div>
          {addtoBuild.map((prodct, i) => (<CardTable prodct={prodct} key={i}/>))}

          </div> */}
        </div>
        <div className="col-start-5 col-end-6 w-full">
          <div>
            <button
              onClick={() => handelAddToBuilder(crc)}
              className="btn btn-primary"
            >
              Add To Builder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcbuildCatagory;
