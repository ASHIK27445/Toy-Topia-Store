import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";
const ToyCard = ({toys}) => {
    const {toyName, price, rating, availableQuantity, subCategory, pictureURL, toyId} = toys
    return(
        <div className="shadow-2xl py-3 px-5 max-w-[300px] rounded-2xl hover:shadow-blue-700">
            <div className="w-full max-w-[280px] h-[250px] mt-3">
                <img src={pictureURL} alt="" className="w-full h-full object-cover rounded-3xl"/>
            </div>
            <div className="font-comfortaa mt-2">
                <p className="font-bold">
                    {toyName} 
                </p>
                <div className="mt-2 textarea-md font-semibold mb-2">
                    
                    <p className="text-[#25BF0C] font-bold">Price: ${price}</p>
                </div>
                <div className="flex items-center gap-2 textarea-md font-semibold mb-2">
                    Rating: <span className="flex"><FaStarHalfStroke color="red"></FaStarHalfStroke></span> {rating}
                </div>
                <div className="flex justify-between items-center">
                    <Link to={`/toyDetails/${toyId}`}>View More</Link>
                    <p className="text-sm">Quantity: {availableQuantity}</p>
                </div>
                
            </div>
        </div>
    )
}
export default ToyCard