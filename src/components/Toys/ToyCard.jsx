import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";
const ToyCard = ({toys}) => {
    const {toyName, price, rating, availableQuantity, subCategory, pictureURL, toyId} = toys
    return(
        <div className="shadow-2xl py-3 px-5 max-w-60 md:max-w-[270px] lg:max-w-[300px] rounded-2xl hover:shadow-blue-700 flex flex-col">
            <div className="w-full max-w-[230px] md:max-w-[250px] lg:max-w-[280px] h-[180px] md:h-[200px] lg:h-[220px] mt-3">
                <img src={pictureURL} alt="" className="w-full h-full object-cover rounded-3xl"/>
            </div>
            <div className="font-inter mt-auto">
                <p className="textarea-md md:text-[16px] font-semibold lg:font-bold">
                    {toyName} 
                </p>
                <div className="mt-2 text-sm md:textarea-md font-medium lg:font-semibold mb-2">
                    <p className="text-[#25BF0C] ">Price: ${price}</p>
                    <p className="text-sm md:textarea-md font-medium lg:font-semibold mt-2">Quantity: {availableQuantity}</p>
                </div>
                <div className="flex items-center gap-2 text-sm md:textarea-md font-medium lg:font-semibold mb-2">
                    Rating: <span className="flex"><FaStarHalfStroke color="red"></FaStarHalfStroke></span> {rating}
                </div>
                <div className="flex flex-col-reverse ">
                    <Link to={`/toyDetails/${toyId}`} className="border-2 border-black w-full text-sm px-3 py-2 rounded-xl font-bold text-white bg-linear-to-r from-[#0d0245] via-[#090979] to-[#481391]
                    hover:bg-linear-to-r hover:from-[#2A7B9B] hover:via-[#57C785] hover:to-[#EDDD53] transition-all duration-500 text-center">View More</Link>

                </div>
            </div>
        </div>
    )
}
export default ToyCard