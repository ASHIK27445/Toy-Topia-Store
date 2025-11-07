import herobg from '../../assets/hero_bg.png'

const HeroSection = () => {
  return (
    <div className="flex justify-around items-center w-11/12 mx-auto my-10">
        <div className='h-[350px] border-2 border-dotted border-[#50270e] rounded-3xl'>
            <img
            src={herobg}
            alt="Hero background"
            className="w-full h-full object-contain rounded-3xl "
            />
        </div>
        <div>
            <h2 className='font-baina text-6xl text-[#1096B5] font-bold'>
                Play, learn, & grow!
            </h2>
            <p className='font-comfortaa text-[#375259] font-bold textarea-md mb-2'>
                Crafting smiles with every toy, made for learning, fun, and growth
            </p>
            <button className='btn bg-[#fdd695] rounded-3xl ml-2'>SHoP NOw</button>
        </div>
    </div>
  )
}

export default HeroSection
