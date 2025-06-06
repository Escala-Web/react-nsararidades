import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProductAside = ({ categories, breads }) => {

	const navigate = useNavigate();

	return (
		<>
			<Container>
				<div className="container">
					<h4 className="title">Categorias</h4>

					<FormGroup>
						{categories?.map((item: any) => (
							<FormControlLabel
								key={item.id_category}
								control={
									<Checkbox
										value={item.name}
										onChange={() =>
											navigate(
												`/produtos?categoria=${item.name.toLowerCase().replace(/\s+/g, "-")}`
											)
										}
									/>
								}
								label={item.name}
							/>
						))}
					</FormGroup>
				</div>
				<div className="container">
					<h4 className="title">Marcas</h4>

					<FormGroup>
						{breads?.map((item: any) => (
							<FormControlLabel
								key={item.id_brand}
								control={
									<Checkbox
										value={item.name}
										onChange={() =>
											navigate(
												`/produtos?marca=${item.name.toLowerCase().replace(/\s+/g, "-")}`
											)
										}
									/>
								}
								label={item.name}
							/>
						))}
					</FormGroup>
				</div>
			</Container>
		</>
	);
};
