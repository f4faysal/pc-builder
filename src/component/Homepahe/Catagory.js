import CatagoryCard from "./CatagoryCard";

const CatagoryHome = () => {
     const computerComponents = [
          "CPU / Processor",
          "Motherboard",
          "RAM",
          "Power Supply Unit",
          "Storage Device",
          "Monitor",
     ];

     return (
          <div className="hero min-h-[50vh] ">

               <div className="text-center">
                    <h1 className="text-2xl my-4">Featured Category</h1>
                    <p className="mb-4">Get Your Desired Product from Featured Category!</p>
                    <div className="">
                         <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                              {computerComponents.map((catag, i) => (
                                   <CatagoryCard catag={catag} key={i} />
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CatagoryHome;