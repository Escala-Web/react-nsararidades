import { useEffect, useState } from "react";
import { Container, Section } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react"; // Importação correta do Swiper
import { Navigation, Pagination, A11y } from "swiper/modules"; // Importação dos módulos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useBanner } from "../../../../../hooks/Banner/useBanner";
import { URL_HOST } from "../../../../../config/configUrl";


export const Banner = () => {
	
	const { findAllBanner } = useBanner();

	const banner = findAllBanner?.data?.content;


	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Container>
			<Section w="100%">
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					style={{ width: "100%", height: isMobile ? "300px" : "620px" }}
				>
					{banner?.map((item, index) => (
						<SwiperSlide key={index}>
							<img
								style={{
									width: "100%",
									height: isMobile ? "300px" : "620px",
									objectFit: "cover",
								}}
								className="swiper-image"
								src={`${URL_HOST}${item.image_path}`}
								alt={`banner ${index + 1}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Section>
		</Container>
	);
};
