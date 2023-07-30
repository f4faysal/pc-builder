import CardDtal from "@/component/CardDtal";
import RootLayout from "@/component/layouts/RootLayout";
import { useRouter } from "next/router";
const ProductDetail = ({ product }) => {
     const router = useRouter();
     const productDetails = product.data
     return (
          <div>
               <CardDtal productDetails={productDetails} key={productDetails._id} />
          </div>
     );
};

export default ProductDetail;



ProductDetail.getLayout = function getLayout(page) {
     return (
          <RootLayout>{page}</RootLayout>
     )
}

export async function getStaticPaths() {
     const res = await fetch(`https://pc-bd.vercel.app/api/v1/product/?limit=100`)
     const prodacts = await res.json()
     const paths = prodacts.data.map((prodact) => ({
          params: { pronactId: prodact._id },
     }))
     return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
     const { params } = context
     const res = await fetch(`https://pc-bd.vercel.app/api/v1/product/${params.pronactId}`)
     const data = await res.json()
     return { props: { product: data } }
}
