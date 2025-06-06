import { FaPhoneAlt } from "react-icons/fa";
import { Container } from "./styles";
import { useStore } from "../../../../../../../hooks/Store/useStore";
import { formatNumberPhone } from "../../../../../../../utils/formatNumberPhone";
import { MdEmail } from "react-icons/md";

export const Top = () => {
	const { findOneStore } = useStore();

	return (
		<>
			<Container>
				<div className="container">
					<div className="phone">
						{findOneStore?.data?.content?.PHONES?.filter(
							(fil) => fil.is_show === 1
						)?.map((item) => (
							<div className="infos">
								<span>
									<FaPhoneAlt />
								</span>
								<a href="">{formatNumberPhone(item.number)}</a>
							</div>
						))}
					</div>
					<div className="phone">
						{findOneStore?.data?.content?.EMAILS?.filter(
							(fil) => fil.is_show === 1
						)?.map((item) => (
							<div className="infos">
								<span>
									<MdEmail />
								</span>
								<a href="">{item.email}</a>
							</div>
						))}
					</div>
					
				</div>
			</Container>
		</>
	);
};
