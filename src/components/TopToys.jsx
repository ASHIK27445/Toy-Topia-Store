import ToyCard from "./Toys/ToyCard"

const TopToys = ({toysData}) => {
    return(
        <div className="w-10/12 mx-auto grid grid-cols-4 gap-5 mb-8">
            {
                toysData
                .slice(0,8)
                .map(toys=> <ToyCard key={toys.toyId} toys={toys}></ToyCard>)
            }
        </div>
    )
}
export default TopToys