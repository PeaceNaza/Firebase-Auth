
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import bag from "../../assets/bag.jpg"
import shoe from "../../assets/shoe.jpg"
import cloth from "../../assets/cloth.jpg"
import chair from "../../assets/chair.jpg"


function Slider() {
  return (
    
       <Swiper
      spaceBetween={50}
      slidesPerView={2}
    >
      <SwiperSlide>
        <img src={shoe} alt="image" className='w-[400px] h-[400px] rounded-[10%] shadow' />
      </SwiperSlide>

      <SwiperSlide>
        <img src={bag} alt="image" className='w-[400px] h-[400px] rounded-[10%] shadow' />
      </SwiperSlide>

      <SwiperSlide>
        <img src={cloth} alt="image" className='w-[400px] h-[400px] rounded-[10%] shadow' />
      </SwiperSlide>

      <SwiperSlide>
        <img src={chair} alt="image" className='w-[400px] h-[400px] rounded-[10%] shadow' />
      </SwiperSlide>
    
    </Swiper>
    
  )
}

export default Slider