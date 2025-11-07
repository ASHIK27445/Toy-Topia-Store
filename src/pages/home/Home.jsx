import { useLoaderData } from "react-router"
import ImageSilder from "../../components/ImageSlider"
import TopToys from "../../components/TopToys"
import HeroSection from "../../components/HeroSection/HeroSection"
import { NavLink } from "react-router";
const Home = () => {
    const toysData = useLoaderData()
    console.log(toysData)
    return(
        <div>
            <section className="w-11/12 mx-auto py-6 md:py-12 border-y border-y-gray-500 border-dotted">
                <HeroSection></HeroSection>
            </section>
            <section className="w-11/12 mx-auto my-20">
                <ImageSilder toysData={toysData}></ImageSilder>
            </section>
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mt-15 mb-5">Top picks for your little ones.</h2>
            <TopToys toysData={toysData}></TopToys>
            <div className="flex justify-center my-5">
                <NavLink to='/alltoys' className="btn border-2 border-black rounded-lg px-10">See All</NavLink>
            </div>
            
        </div>
    )
}
export default Home