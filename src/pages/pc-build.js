import RootLayout from "@/component/layouts/RootLayout";

const PcBildPage = () => {
     return (
       <div className="flex justify-center">
             <div className="m-4 w-1/2 h-96  box-border  border-4 ">
               <div class="grid grid-cols-5 ">
                    <div class="col-start-1 col-span-5 w-full h-24 bg-base-200">
                         
                    </div>
                    <div class="col-start-1 col-end-3 w-full">02</div>
                    <div class="col-end-7 col-span-2 w-full">03</div>
                    <div class="col-start-1 col-end-7 w-full">04</div>
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