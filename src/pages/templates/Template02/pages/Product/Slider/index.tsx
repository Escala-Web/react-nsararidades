// BannerSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { Container } from "./styles";
import { URL_HOST } from "../../../../../../config/configUrl";

interface Images {
	is_main: number;
	position: number;
	image_path: string;
}

export const Slider = ({ data }: SliderProps) => {
	return (
		<>
			<Container>
				<Swiper
					modules={[Autoplay]}
					autoplay={{ delay: 3000 }}
					loop={true}
					spaceBetween={10}
				>
					{data?.map((banner) =>
						banner?.pictures?.map((image: Images) => (
							<SwiperSlide key={image?.position}>
								<img
									className="swiper-image"
									src={`${URL_HOST}${image?.image_path}`}
									alt={`Banner ${image?.image_path}`}
								/>
							</SwiperSlide>
						))
					)}
				</Swiper>
			</Container>
		</>
	);
};
