import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { Container } from "./styles";
import { useBanner } from "../../../../../hooks/Banner/useBanner";
import { URL_HOST } from "../../../../../config/configUrl";

export const Banner = () => {
	const { findAllBanner } = useBanner();
	const banner = findAllBanner?.data?.content;

	return (
		<Container>
			<Swiper
				modules={[Autoplay, Pagination, Navigation]} 
				autoplay={{ delay: 5000 }}
				pagination={{ clickable: true }}
				navigation={true}
				loop={true}
				className="banner-swiper"
			>
				{banner?.map((item) => (
					<SwiperSlide key={item.id_banner}>
						<img src={`${URL_HOST}${item.image_path}`} alt={`Banner ${item.name}`} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="destaque">
				<div className="card">
					01
				</div>
				<div className="card">
					02
				</div>
				<div className="card">
					03
				</div>
				<div className="card">
					04
				</div>
			</div>
		</Container>
	);
};
