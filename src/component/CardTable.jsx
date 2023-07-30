import { addtoBuild } from "@/redux/features/addtoBuild/addtoBuildSlice";
import { useAppDispatch } from "@/redux/hook";

const CardTable = ({prodct , setShowModal}) => {
     const { image, productName, category, status, price, individualRating , _id } =prodct 

     const dispatch = useAppDispatch();

     const handelAddToBuild = (prodct) => {
          dispatch(addtoBuild(prodct))
          setShowModal(false)
     }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */} 
          <tr className="bg-base-200">
            <td><img className="w-14" src={image} alt="" /></td>
            <td>
               <p>{productName}</p>
               <p className="text-xl font-semibold">${price}</p>
            </td>
            <td><button onClick={()=>handelAddToBuild(prodct)} className="btn btn-primary"> Add to Builder </button></td>
          </tr>
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default CardTable;
