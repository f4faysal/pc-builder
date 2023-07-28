import Link from "next/link";

const Card = ({ prodct }) => {
 
     const { image, productName, category, status, price, individualRating , _id } = prodct
     return (
          <div>
               <div className="card w-72 h-full bg-white shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{productName}</h2>
                         <p className="text-2xl font-bold">Price : ${price}</p>
                         <h3 className="text-1xl">Category : {category}</h3>
                         <div className="flex my-3 ">
                              <p className="font-semibold">{status}</p>
                              <p className="font-bold">{individualRating}</p>
                         </div>
                         <div className="card-actions  ">
                              <Link href={`/detail/${_id}`} className="btn btn-primary w-full text-white">Buy Now</Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Card;