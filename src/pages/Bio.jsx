import Button from "../components/Button"
import LogoHs from "../assets/logoHs.jpeg"
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/corte1.jpeg"
import image2 from "../assets/corte2.jpeg"
import image3 from "../assets/corte3.jpeg"

const images = [
    { id: '1', image: image1 },
    { id: '2', image: image2 },
    { id: '3', image: image3 }
]


function Bio() {
    return (
        <div className="w-screen h-full ">


            <div className="flex items-center justify-center">
                <img src={LogoHs} alt="" className="m-auto h-[250px] mt-[-35px]" />
            </div>

            <p className="text-white text-center">@HSdocorte</p>


            <Button nome={"Agendar Agora"} icone={<FaCalendarAlt className="text-[30px] " />} />
            <Button nome={"WhatsApp"} icone={<FaWhatsapp className=" text-[30px] " />} />
            <a href="https://www.google.com/maps/place/R.+Jorn.+Jo%C3%A3o+Lopes+Ferreira+Filho,+2815+-+Rio+Novo,+Cascavel+-+CE,+62850-000/@-4.1346278,-38.2416533,16z/data=!4m6!3m5!1s0x7b8972fe6267231:0xa4b90c756a57596!8m2!3d-4.1346278!4d-38.2416533!16s%2Fg%2F11n0_y2r10?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">
                <Button nome={"Localização"} icone={<FaLocationDot className="text-[30px]" />} />

            </a>



            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true} // Corrigido para ser um booleano explícito
            >
                {images.map((item) => (
                    <SwiperSlide key={item.id} >
                        <img src={item.image} alt="slide" className="rounded-[25px] h-[300px] m-auto mt-[30px] mb-[40px] " />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Bio