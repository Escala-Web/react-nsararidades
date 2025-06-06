import { useState } from "react";
import favicon from "../assets/Logo/icon.png";
import { useLogo } from "../hooks/Logo/useLogo";
import { URL_HOST } from "../config/configUrl";
import { useStore } from "../hooks/Store/useStore";

interface SeoProps {
	title: string;
	description: string;
	keywords: string;
}

export const Seo = (seo: SeoProps) => {
	const { findAllLogo } = useLogo();

	const { findOneStore } = useStore();

	const google = findOneStore?.data?.content;

	return (
		<>
		
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<meta name="keywords" content={seo.keywords} />
				<link
					rel="icon"
					href={`${URL_HOST}${findAllLogo?.data?.content?.FAVICON?.path || ""}`}
				/>

			
		
		</>
	);
};
