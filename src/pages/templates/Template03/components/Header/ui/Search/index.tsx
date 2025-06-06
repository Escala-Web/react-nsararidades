import { IoSearch } from "react-icons/io5";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useSearch } from "../../../../../../../hooks/products/useSearch";
import { useState } from "react";

export const Search = () => {
	const [search, setSearch] = useState<string>("");
	const { data } = useSearch(search);

	return (
		<>
			<Container>
				<div className="search_container">
					<input
						placeholder="O que procura?"
						type="text"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>
					<span className="icon">
						<IoSearch />
					</span>
				</div>
				{data?.content?.length > 1 && (
					<div className="results">
						<ul>
							{data?.content?.map((item) => (
								<li key={item?.id_product}>
									<Link>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</Container>
		</>
	);
};
