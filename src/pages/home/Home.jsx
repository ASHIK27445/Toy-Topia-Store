import { useLoaderData } from "react-router"
import ImageSilder from "../../components/ImageSlider"
import TopToys from "../../components/TopToys"
import HeroSection from "../../components/HeroSection/HeroSection"
import { NavLink } from "react-router";
import Newsletter from "../../components/Others/Newsletter";
const Home = () => {
    const toysData = useLoaderData()
    console.log(toysData)
    return(
        <div>
            <section className="w-11/12 mx-auto py-6 md:py-12 border-y border-y-gray-500 border-dotted">
                <HeroSection></HeroSection>
            </section>
            <section className="w-11/12 mx-auto mb-4 mt-5 border-b border-gray-500 border-dotted">
                <div className="flex flex-col items-center mt-5 mb-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-15 mb-5">Find the Perfect Toy</h2>
                    <div className="flex gap-4 text-center">
                        <div className="border-2 border-blue-500 rounded-xl px-5 py-8 w-[150px] lg:w-[180px] hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <p className="text-gray-900 text-2xl lg:text-4xl font-bold">11+</p>
                            <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide mb-1">Category</p>
                        </div>
                        <div className="border-2 border-purple-500 rounded-xl px-5 py-8 w-[150px] lg:w-[180px] hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <p className="text-purple-900 text-2xl lg:text-4xl font-bold mb-1">14+</p>
                            <p className="text-purple-600 text-xs font-semibold uppercase tracking-wide">Trusted Brands</p>
                        </div>
                    </div>
                </div>
                <ImageSilder toysData={toysData}></ImageSilder>
            </section>
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mt-15 mb-5">Top picks for your little ones.</h2>
            <TopToys toysData={toysData}></TopToys>
            <div className="flex justify-center mt-5 mb-15">
                <NavLink to='/alltoys' className="btn border-2 border-black rounded-lg px-10">See All</NavLink>
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    )
}
export default Home