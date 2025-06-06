import { FaPhoneAlt } from "react-icons/fa";
import { useStore } from "../../../../../../hooks/Store/useStore"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Container } from "./styles";
import { formatNumberPhone } from "../../../../../../utils/formatNumberPhone";

export const Infos = () => {

    const { findOneStore } = useStore();

    const address = findOneStore?.data?.content?.ADDRESSES[0];

    return (
        <>
            <Container>
                <div className="info">
                    <span className="icon">
                        <FaPhoneAlt />
                    </span>
                    <div className="content_text">
                        {findOneStore?.data?.content?.PHONES?.filter((fil) => fil.is_show === 1)
                        ?.map((item) => (
                            <p key={item?.number}>{formatNumberPhone(item.number)}</p>
                        ))
                        }
                    </div>
                </div>
                <div className="info">
                    <span className="icon">
                        <MdEmail />
                    </span>
                    <div className="content_text">
                        {findOneStore?.data?.content?.EMAILS?.filter((fil) => fil.is_show === 1)
                            ?.map((item) => (
                                <p key={item.email}>{item.email}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="info">
                    <span className="icon">
                        <FaLocationDot />
                    </span>
                    <div className="content_text">
                        <p>{address?.public_area} - {address?.city} - {address?.state} <br /> CEP: {address?.zip_code}</p>
                    </div>
                </div>
            </Container>
        </>
    )
}