
const CardDtal = ({ productDetails }) => {

     const { image, productName, category, status, price, individualRating, averageRating, description, reviews, keyFeatures } = productDetails
     return (
          <div className="container mx-auto p-5">
               <div className="flex flex-col md:flex-row gap-3">
                    <div className=" md:w-1/2 image-full flex justify-center">
                         <img src={image} className=" rounded-lg w-2/3 " alt="" />
                    </div>
                    <div className="md:w-1/2">
                         <h1 className="text-2xl md:text-5xl font-bold">{productName}</h1>
                         <div className="px-3 flex flex-col gap-2 ">
                              <p className="">{description}</p>
                              <p className="text-3xl font-bold">Price ${price}</p>
                              <p className="font-semibold text-2xl">Category : {category}</p>

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
                              <p className="text-1xl">{status}</p>
                              <p className="text-2xl">Rating : {averageRating}</p>
                         </div>
                         
                    </div>
               </div>
               <div className="flex w-full items-center flex-col gap-2">
                    <input type="text" placeholder="Comment here" className="input input-bordered input-info w-full max-w-xs my-3" />
                    {
                         reviews.map((review, i) => <>
                              <div className="avatar placeholder  flex items-center gap-3">
                                   <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                   <span className="text-xs">AA</span>
                                   </div>
                                   <p className="text-2xl" key={i}>{review}</p>
                              </div>

                         </>)
                    }



               </div>
          </div >
     );
};

export default CardDtal;