import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSilder = () => {
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
            className="w-full max-w-[850px] max-h-[500px]"
        >
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1760235128025-d0631be78bce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=385" alt="image1" className="w-full h-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1760235128025-d0631be78bce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=385" alt="image1" className="w-full h-full rounded-lg"/>
            </SwiperSlide>
        </Swiper>
    )
}
export default ImageSilder