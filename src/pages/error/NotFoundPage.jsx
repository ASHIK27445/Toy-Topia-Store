import TextType from "../../components/ReactBlitz/TextType";

const NotFoundPage = () => {
  return (
    <div className=" min-h-[450px] lg:min-h-screen flex justify-center items-center ">
        <div className="font-baina font-bold text-white text-2xl lg:text-3xl bg-black">
            <TextType
                text={["This page is not found!", "Want to go back", "Just Click below!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
            />
        </div>

    </div>
  );
};
export default NotFoundPage;
