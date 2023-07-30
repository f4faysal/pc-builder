const CardTableAdd = ({ prodct }) => {
  const { image, productName, price } = prodct;
  return (
    <>
      <div className="w-full flex gap-3">
        <div>
          <img className="w-14" src={image} alt="" />
        </div>
        <div>
          <p>{productName}</p>
          <p className="text-xl font-semibold">${price}</p>
        </div>
      </div>
    </>
  );
};

export default CardTableAdd;
