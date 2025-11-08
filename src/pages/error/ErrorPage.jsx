import FuzzyText from '../../components/ReactBlitz/FuzzyText'
import Top from '../../components/header/Top';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/Footer/Footer';
const ErrorPage = () => {
    const enableHover = true
    const hoverIntensity = 0.5
  return (
    <div>
        <header>
            <Top></Top>
            <nav>
                <Navbar></Navbar>
            </nav>
        </header>
        <div className='flex flex-col gap-5 justify-center items-center bg-black min-h-screen'>
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}>
            404
          </FuzzyText>
          <FuzzyText fontSize="2rem" baseIntensity={0.1}>
            Oops! Not Found
          </FuzzyText>
        </div>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  );
};
export default ErrorPage;
