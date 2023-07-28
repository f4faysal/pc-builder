import RootLayout from "@/component/layouts/RootLayout";

const PcBildPage = () => {
     return (
          <div>
               <>pc-build</>
          </div>
     );
};

export default PcBildPage;

PcBildPage.getLayout = function getLayout(page) {
     return (
       <RootLayout>{page}</RootLayout>
     )
   }