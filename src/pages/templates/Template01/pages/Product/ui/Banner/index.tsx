// BannerSwiper.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSwiper.css"; // estilos customizados (opcional)
import { URL_HOST } from "../../../../../../../config/configUrl";
import { Skeleton } from "@mui/material";


interface BannerImage {
	is_main: number;
	position: number;
	image_path: string;
}

interface BannerProps {
	pictures: BannerImage[];
}

export const Banner = ({ data, load }: BannerProps) => {

	return (
		<>
			{load? 

				<Skeleton width={'900px'} height={'700px'}/>
			
			: (
				<Swiper
				modules={[Autoplay, Pagination, Navigation]}
				spaceBetween={30}
				loop={true}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				navigation
				className="bannerSwiper"
			>
				{data.pictures
				.map((image: BannerImage) => (
					<SwiperSlide>
						<img
							src={`${URL_HOST}${image.image_path}`}
							alt={image.image_path}
							style={{ width: "100%", height: "auto", objectFit: "cover" }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			)}

		</>
	);
};
