
const PcbuildCatagory = ({ crc }) => {

     const handelAddToBuilder = (catagory) => {
          console.log(catagory)
     }

     return (
          <div className="mt-10">
               <div className="grid grid-cols-5">
                    <div className="col-start-1 col-end-3 w-full  ">
                         <div className="p-2 flex items-center" >
                              <h1 className="text-2xl font-semibold ">{crc} </h1>
                              <p className="text-2xl font-semibold text-red-600">*</p>
                         </div>
                    </div>
                    <div className="col-start-3 col-end-5 w-full">
                         <div>@</div>
                    </div>
                    <div className="col-start-5 col-end-6 w-full">
                         <div>
                              <button onClick={() => handelAddToBuilder(crc)} className="btn btn-primary">Add To Builder</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PcbuildCatagory;