import { ContainerHeader } from "./styles";
import { HeaderDesktop } from "./ui/Desktop";
import { Mobile } from "./ui/Mobile";
import { Top } from "./ui/Top";

export const Header = () => {
	return (
		<>
			<ContainerHeader>
				<div className="desktop">
					<Top />
					<HeaderDesktop />
				</div>
				<div className="mobile">
                    <Mobile />
                </div>
			</ContainerHeader>
		</>
	);
};
