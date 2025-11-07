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
            <section>
                <HeroSection></HeroSection>
            </section>
            <h2 className="text-center text-3xl font-bold mt-15 mb-5">Top picks for your little ones.</h2>
            <TopToys toysData={toysData}></TopToys>
            <div className="flex justify-center my-5">
                <NavLink to='/alltoys' className="btn">See All</NavLink>
            </div>
            
        </div>
    )
}
export default Home