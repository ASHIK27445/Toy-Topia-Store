import { useEffect, useState } from "react"
import { FaStarHalfStroke } from "react-icons/fa6"
import { useParams } from "react-router"
import { BiSolidCategory } from "react-icons/bi"
import { MdProductionQuantityLimits } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
const ToyDetails = () => {
    const {toyID} = useParams()
    const [toy, setToy] = useState(null)

    useEffect(()=>{
        fetch("/toy.json")
            .then(res => res.json())
            .then(data => {
                const foundToy = data.find(t=> t.toyId == toyID)
                setToy(foundToy)
            })
    }, [toyID])
    return(
        <div className="w-11/12 p-5 shadow-2xl shadow-gray-700 rounded-2xl mx-auto my-10 grid grid-cols-2 gap-5 py-10">
            <div>
                <div className="relative">
                    <img src={toy?.pictureURL} className="w-full h-full object-contain rounded-2xl"/>
                    <p className="absolute top-1 text-white font-bold font-baina text-2xl right-2">#ID:{toy?.toyId}</p>
                </div>
                <div className="pt-3 px-2 flex gap-3">
                    <p  className="flex rounded-xl pt-1.5 text-white gap-1 px-2 bg-emerald-500 font-baina text-xl"><BiSolidCategory color="red"></BiSolidCategory>{toy?.subCategory}</p>
                    <p className="flex rounded-xl pt-1.5 text-white gap-1 px-2 bg-indigo-800 font-baina text-xl"><MdProductionQuantityLimits color="orange"></MdProductionQuantityLimits>In stock {toy?.availableQuantity}</p>
                </div>
            </div>
            <div className="pl-5 flex items-center">         
                <div>
                    <h2 className="text-4xl font-baina font-bold">{toy?.toyName}</h2>
                    <div className="flex items-center gap-1 my-1"><FaStarHalfStroke color="yellow"></FaStarHalfStroke> {toy?.rating} <span className="text-gray-600 text-sm">/5.0</span> </div>
                    <div className="border-y py-4 mt-1.5">
                        <p className="text-gray-600 text-sm mb-1">Price</p>
                        <p className="text-4xl font-bold text-blue-600">
                            ${toy?.price}
                        </p>
                    </div>
                    <div className="mt-2">
                        <h3>Description</h3>
                        <p className="text-gray-600 text-sm">
                            {toy?.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row-span-1 mt-10">
                <h2 className="text-3xl font-baina font-semibold border-b pl-1">More Details Information</h2>
                <div>
                    <h3 className="font-inter font-semibold my-2">#Seller Information</h3>
                    <div className="flex items-center gap-2">
                        <CgProfile className="font-bold" size={40} color="black"></CgProfile>
                        <div className="text-sm">
                            <p>Seller Name: <span className="font-bold text-gray-700">{toy?.sellerName}</span></p>
                            <p>Seller Email: <span className="font-bold text-gray-700">{toy?.sellerEmail}</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-inter font-semibold mt-8">#Product Information</h3>
                    <div className="text-sm flex gap-2">
                        <p>Made In:</p>
                         <p className="font-bold">{toy?.madeIn}</p>
                    </div>
                    <div className="text-sm flex gap-2">
                        <p>Material:</p>
                         <p className="font-bold">{toy?.material}</p>
                    </div>
                    <div className="text-sm flex gap-2">
                        <p>Age Range:</p>
                         <p className="font-bold text-red-700">{toy?.ageRange}</p>
                    </div>
                    <div className="text-sm flex gap-2">
                        <p>Weight:</p>
                         <p className="font-bold">{toy?.weight}</p>
                    </div>
                    <div className="text-sm flex gap-2">
                        <p>Dimensions:</p>
                         <p className="font-bold">{toy?.dimensions}</p>
                    </div>
                    <div className="text-sm flex gap-2">
                        <p>Brand:</p>
                         <p className="font-bold">{toy?.brand}</p>
                    </div>
                    <div className="text-sm flex gap-2">
                        <p>Warranty:</p>
                         <p className="font-bold">{toy?.warranty}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ToyDetails