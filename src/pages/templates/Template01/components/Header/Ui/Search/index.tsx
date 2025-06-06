import { useRef, useState } from "react";
import { ContainerSearch } from "./styles";
import { useSearch } from "../../../../../../../hooks/products/useSearch";
import { Link } from "react-router-dom";
import { formatUrl } from "../../../../../../../utils/formatUrl";
import { IoSearch } from "react-icons/io5";

export const Search = () => {
	const [search, setSearch] = useState("");
	const { data } = useSearch(search);

	const inputRef = useRef<HTMLInputElement>(null); 

	return (
		<>
			<ContainerSearch>
				<div className="container_search">
					<input
						ref={inputRef}
						placeholder="O que você está procurando?"
						type="text"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						name="search"
					/>
					<button onClick={() => {
						inputRef.current?.focus()
					}}>
						<IoSearch />
					</button>
				</div>

				{search !== "" && (
					<ul className="container_search_results">
						{data?.content?.map((item) => {
                            const category = formatUrl(item?.category);
                            const nameProduct = formatUrl(item?.name);
                            const url = `/${category}/${nameProduct}/${item?.id_product}`
							return (
								<li onClick={() => setSearch('')} key={item.id_product} className="results">
									<Link to={url}>{item.name}</Link>
								</li>
							);
						})}
					</ul>
				)}
			</ContainerSearch>
		</>
	);
};
