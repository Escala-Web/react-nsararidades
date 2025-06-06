import { Frete } from "./Navigation/Frete";
import { LinksNavigation } from "./Navigation/Links";
import { HeaderContainer } from "./styles";
import { Actions } from "./ui/Actions";
import { Logo } from "./ui/Logo";
import { Search } from "./ui/Search";
import { Top } from "./ui/Top";

export const Header = () => {
	return (
		<>	
			<Top />

			<HeaderContainer>
				<div className="container">
					<div className="header_actions">
                        <Logo />
                        <Search />
                        <Actions />
                    </div>
					<div className="navigation">
                        <Frete />
						<LinksNavigation />
                    </div>
				</div>
			</HeaderContainer>
		</>
	);
};
