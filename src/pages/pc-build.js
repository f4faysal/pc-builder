import RootLayout from "@/component/layouts/RootLayout";

const PcBildPage = () => {
     return (
         <div className="">

         </div>
     );
};

export default PcBildPage;

PcBildPage.getLayout = function getLayout(page) {
     return (
          <RootLayout>{page}</RootLayout>
     )
}