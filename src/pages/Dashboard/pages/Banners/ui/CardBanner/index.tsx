import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { URL_HOST } from "../../../../../../config/configUrl";
import { IBanner } from "../../../../../../types/IBanner";
import { Container } from "./styles";
import { useBanner } from "../../../../../../hooks/Banner/useBanner";
import { ModalBanner } from "../Modal";

export const CardBanner = ({ data }: IBanner) => {

    const { deleteBanner } = useBanner();

    const handleDelete = (id) => {
        deleteBanner.mutate(id)
    }

	return (
		<>
			<Container>
				<div className="container_bannerss">
					<img src={`${URL_HOST}${data.image_path}`} alt={data.name} />
					<div className="options">
						<p>{data.name}</p>
						<div className="opts">
							<div onClick={() => handleDelete(data.id_banner)}>
								<FaTrashAlt />
							</div>
							<div>
								<ModalBanner id={data.id_banner} edit={true} title={'E'} />
							</div>
						</div>
					</div>
				</div>
			</Container>

			

		</>
	);
};
