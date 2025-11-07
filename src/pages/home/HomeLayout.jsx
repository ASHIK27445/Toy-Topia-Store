import { Outlet } from "react-router"
import Navbar from "../../components/header/Navbar"
import Top from "../../components/header/Top"
import HeroSection from "../../components/HeroSection/HeroSection"
import { ToastContainer } from "react-toastify"

const HomeLayout = () => {
    return(
        <div>
            <header>
                <Top></Top>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <ToastContainer />
        </div>
    )
}
export default HomeLayout