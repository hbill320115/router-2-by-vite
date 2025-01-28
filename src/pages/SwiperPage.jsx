import { useState ,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../assets/swiperPage.css"

export default function SwiperPage() {
  const [carouselData] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "在金黃的麥田中，微風輕拂，她的笑容如陽光般溫暖，眼神裡藏著自由的詩篇",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=3801&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "披著厚重的毛大衣，她的冷靜目光如冬夜星辰般深邃，隱約透著堅毅的溫柔",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?q=80&w=3780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "粉紅色的夢境中，她靜靜傾聽音樂的旋律，彷彿置身於一場溫暖的靈魂漫遊",
    },
  ]);
  const swiperRef = useRef(null)
  const handleNext =()=>{
    if(swiperRef.current.isEnd){
      swiperRef.current.slideTo(0)
    }else{
      swiperRef.current.slideNext()
    }
  }
  const handlePrev = ()=>{
    if(swiperRef.current.isBeginning){
      swiperRef.current.slideTo(swiperRef.current.slides.length - 1)
    }else{
      swiperRef.current.slidePrev()
    }
  }
  return(
    <>
    <button type="button" className="btn btn-primary" onClick={handlePrev}>上一頁</button>
    <button type="button" className="btn btn-primary" onClick={handleNext}>下一頁</button>
    <Swiper slidesPerView={1} spaceBetween={40} 
            onSwiper={(swiper)=> swiperRef.current = swiper}>
        {carouselData.map((item)=>{
            return(
                <SwiperSlide key={item.id}>
                    <img src={item.image} alt="" className="picture"/>
                    <p className="text-center">{item.description}</p>
                </SwiperSlide>
            )
        })}
    </Swiper>
    </>
  )
}
