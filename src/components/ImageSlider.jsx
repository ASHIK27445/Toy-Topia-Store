import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSilder = ({toysData}) => {
    return(
        <Swiper 
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={
                {
                    delay: 2500,
                    disableOnInteraction: false
                }
            }
            pagination={
                {
                    clickable: true
                }
            }
            navigation={true}
            loop={true}
            className="w-full mx-10 max-w-[850px] max-h-[600px] md:mx-5 mb-20">
            {
                toysData
                    .slice(0,3)
                    .map(toy=> <SwiperSlide key={toy.toyId}>
                        <img src={toy.pictureURL} className="w-full h-[500px] object-contain rounded-lg" />
                    </SwiperSlide>)
            }         
        </Swiper>
    )
}
export default ImageSilder