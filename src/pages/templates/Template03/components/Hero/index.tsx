// Hero.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useBanner } from '../../../../../hooks/Banner/useBanner';
import { URL_HOST } from '../../../../../config/configUrl';

export const Hero = () => {

    const { findAllBanner } = useBanner();

    return (
        <div className="hero-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="hero-swiper"
            >
                {findAllBanner?.data?.content?.map((item) => (
                <SwiperSlide>
                    <img src={`${URL_HOST}${item.image_path}`} alt="Banner 1" className="hero-image" />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
