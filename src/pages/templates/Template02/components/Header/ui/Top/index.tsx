import { FaPhoneAlt } from "react-icons/fa";
import { ContainerGlobal } from "../../../../styles/styles";
import { Container } from "./styles";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { useStore } from "../../../../../../../hooks/Store/useStore";
import { formatNumberPhone } from "../../../../../../../utils/formatNumberPhone";

export const Top = () => {
	const { findOneStore } = useStore();

	const stores = findOneStore?.data?.content;
	const address = stores?.ADDRESSES[0];
	const phone = formatNumberPhone(stores?.PHONES[0]?.number);
	const email = stores?.EMAILS[0]?.email;

	return (
		<>
			<ContainerGlobal style={{ background: "transparent" }}>
				<Container>
					<div className="container">
						<div className="container_icons">
							<FaPhoneAlt />
							<p>{phone}</p>
						</div>
						<div className="container_icons">
							<FaLocationDot />
							<p>{`${address?.public_area}, ${address?.number} - ${address?.city} - ${address?.state}`}</p>
						</div>
						<div className="container_icons">
							<MdMail />
							<p>{email}</p>
						</div>
					</div>
				</Container>
			</ContainerGlobal>
		</>
	);
};
