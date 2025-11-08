import { useLoaderData } from "react-router"
import ToyCard from "../components/Toys/ToyCard"
import { useMemo, useState } from "react"

const AllToys = () => {
    const toysData = useLoaderData()
    const [selectedCategories, setSelectedCategories] = useState(null)

    //remove duplicate category
    const uniqueCategory = useMemo(() => 
        [...new Set(toysData.map(toy => toy.subCategory))],
        [toysData]
    )

    const handleSelectCategory = (category) => {
        setSelectedCategories(category)
    }

    const filtredToyCard = useMemo(()=>
        selectedCategories ? 
        toysData.filter(toy => toy.subCategory === selectedCategories) : toysData,
        [selectedCategories, toysData]
    ) 

    return(
        <div className="w-11/12 mx-auto mt-16">
            <main className="flex justify-center gap-10">
                <div>
                    <div className="border border-gray-900 border-dashed rounded-2xl px-1 py-1.5">
                        <h2 className="font-comfortaa font-extrabold text-lg">Product Categories</h2>
                        <p onClick={()=> handleSelectCategory(null)}
                            className={`py-1.5 cursor-pointer ${!selectedCategories? 'text-blue-700 font-semibold' : 'hover:text-blue-700 hover:font-semibold'}`}
                            >
                            + All toys
                        </p>
                        {
                            uniqueCategory.map(category => 
                            <p 
                            key={category} 
                            onClick={()=> handleSelectCategory(category)}
                            className={`py-1.5 cursor-pointer ${selectedCategories === category ? 
                             'text-blue-700 font-semibold' : 'hover:text-blue-700 hover:font-semibold'}`}> 
                            + {category}</p>)
                        }
                    </div>
                </div>
                <div className="w-8/12">
                    <h2 className="font-extrabold text-[42px] mb-3 font-comfortaa">{selectedCategories || 'All Toys'}</h2>
                    <div className="grid grid-cols-3 gap-5 mb-8">
                    {
                        filtredToyCard
                        .map(toys=> <ToyCard key={toys.toyId} toys={toys}></ToyCard>)
                    }
                    </div>

                </div>
            </main>
        </div>
    )
}
export default AllToys