import herobg from '../../assets/hero_bg.png'

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center w-11/12 mx-auto my-10 gap-5">
        <div className='h-full lg:w-1/2 border-2 border-dotted border-[#50270e] rounded-3xl'>
            <img
            src={herobg}
            alt="Hero background"
            className="w-full h-full object-contain rounded-3xl "
            />
        </div>
        <div className='text-center md:text-left'>
            <h2 className='font-baina text-4xl md:text-5xl lg:text-[52px] text-[#1096B5] font-bold'>
                Play, learn, & grow!
            </h2>
            <p className='font-comfortaa text-[#375259] font-bold textarea-md mb-2'>
                Crafting smiles with every toy, <br className='md:hidden' /> made for learning, fun, and growth
            </p>
            <div className='flex justify-center lg:justify-normal'>
                <button className='btn bg-[#fdd695] rounded-3xl ml-2'>Shop Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection
