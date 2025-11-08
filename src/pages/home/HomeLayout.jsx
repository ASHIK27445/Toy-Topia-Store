import { Outlet } from "react-router"
import Navbar from "../../components/header/Navbar"
import Top from "../../components/header/Top"
import { ToastContainer } from "react-toastify"
import Footer from "../../components/Footer/Footer"

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
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer />
        </div>
    )
}
export default HomeLayout