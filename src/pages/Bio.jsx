import Button from "../components/Button"
import LogoHs from "../assets/logoHs.jpeg"
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/corte1.jpeg"
import image2 from "../assets/corte2.jpeg"
import image3 from "../assets/corte3.jpeg"
import image4 from "../assets/corte4.jpeg"
import image5 from "../assets/corte5.jpeg"
import fundo from "../assets/background.png"
import { FaInstagram } from "react-icons/fa";

const images = [
    { id: '1', image: image1 },
    { id: '2', image: image2 },
    { id: '3', image: image3 },
    { id: '4', image: image4 },
    { id: '5', image: image5 }
]


function Bio() {
    return (
        <div className="w-screen h-full ">


            <div className="flex items-center justify-center">
                <img src={LogoHs} alt="" className="m-auto h-[250px] mt-[-40px]" />
            </div>

            <strong>
                <p className="text-white text-center mt-[-20px]">@barbearia_hscortes</p>
            </strong>


            <a href="
                https://booksy.com/pt-br/dl/show-business/281620?utm_medium=c2c_referral">
                <strong><Button nome={"Agendar agora"} icone={<FaCalendarAlt className="text-[30px]  mr-[-13px]" />} /></strong>
            </a>

            <a href="https://w.app/1SaObW">

                <strong><Button nome={"WhatsApp" } icone={<FaWhatsapp className=" text-[30px] " />} /></strong>
            </a>

            <a href="https://www.google.com/maps/place/R.+Jorn.+Jo%C3%A3o+Lopes+Ferreira+Filho,+2815+-+Rio+Novo,+Cascavel+-+CE,+62850-000/@-4.1346278,-38.2416533,16z/data=!4m6!3m5!1s0x7b8972fe6267231:0xa4b90c756a57596!8m2!3d-4.1346278!4d-38.2416533!16s%2Fg%2F11n0_y2r10?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">

                <strong><Button nome={"Localização"} icone={<FaLocationDot className="text-[30px]" />} /></strong>

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

            <footer className="text-white  flex text-center justify-center gap-3  " >
                
                <a href="https://icaropaivadev.netlify.app" className="cursor-pointer">
                    <p className="mb-2">&copy; Icaro Paiva - 2024 </p>
                </a>
                <a href="">
                    <FaInstagram   className="mt-[5px]"/> 
                </a>
            </footer>

        </div>
    )
}

export default Bio