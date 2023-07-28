
const CardDtal = ({ productDetails }) => {

     const { image, productName, category, status, price, individualRating, averageRating, description, reviews, keyFeatures } = productDetails
     return (
          <div className="container mx-auto p-5">
               <div className="flex flex-col lg:flex-row gap-3">
                    <div className="w-1/2 image-full flex justify-center">
                         <img src={image} className=" rounded-lg w-2/3 " alt="" />
                    </div>
                    <div className="w-1/2">
                         <h1 className="text-5xl font-bold">{productName}</h1>
                         <p className="">{description}</p>
                         <p className="font-semibold">Category : {category}</p>
                         <p>{status}</p>
                         <p className="text-xl">Price {price}</p>
                         <ul className="menu">
                              <li>
                                   <h2 className="menu-title">Key Feature</h2>
                                   <ul>
                                   {
                                        keyFeatures.map((keyFeature, i) => <li key={i}>{keyFeature}</li>)
                                   }
                                   </ul>
                              </li>

                         </ul>
                         <p className="text-1xl">{averageRating}</p>
                         <button className="btn btn-primary my-5">Get Started</button>
                    </div>
               </div>
          </div>
     );
};

export default CardDtal;