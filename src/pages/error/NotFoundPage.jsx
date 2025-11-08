import TextType from "../../components/ReactBlitz/TextType";
import ElectricBorder from '../../components/ReactBlitz/ElectricBorder'
import { Link, useNavigate } from "react-router";
const NotFoundPage = () => {
    const navigate = useNavigate()
  return (
    <div className=" min-h-[400px] lg:min-h-[550px] flex flex-col justify-center items-center gap-7 bg-linear-to-r from-[#051c12] to-[#050404]">
        <div className="font-baina font-bold text-white text-2xl lg:text-3xl">
            <TextType
                text={["This page is not found!", "Want to go back", "Just Click below!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
            />
        </div>
        <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={3}
            style={{ borderRadius: 16 }}
            >
            <div className="px-8 py-3">
                <Link onClick={()=> {navigate(-1)}} className="font-bold text-cyan-300 hover:text-white hover:cursor-pointer">Click Here!</Link>
            </div>
        </ElectricBorder>
    </div>
  );
};
export default NotFoundPage;
