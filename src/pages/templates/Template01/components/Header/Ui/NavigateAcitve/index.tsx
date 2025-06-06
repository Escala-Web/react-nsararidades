import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { useStore } from "../../../../../../../hooks/Store/useStore";
import { useContext } from "react";
import { FilterContext } from "../../../../../../../context/Filter";
// import { useNavigate } from "react-router-dom"; // opcional se quiser redirecionar

function renderRow(data, name, handleFilterChange, selectedId) {
  return function ({ index, style }) {
    const item = data[index];

    const isSelected =
      selectedId === String(item.id_brand || item.id_category);

    return (
      <ListItem
        style={{
          ...style,
          backgroundColor: isSelected ? "#f0f0f0" : "transparent",
        }}
        key={item.id_brand || item.id_category}
        component="div"
        disablePadding
      >
        <ListItemButton
          onClick={() =>
            handleFilterChange(String(item.id_brand || item.id_category))
          }
        >
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    );
  };
}

export const NavigateActive = ({ data, name }) => {
  const { findOneStore } = useStore();
  const {
    handleBrandChange,
    handleCategoryChange,
    selectedBrand,
    selectedCategory,
  } = useContext(FilterContext);
  // const navigate = useNavigate(); // opcional

  const handleFilterChange = (id: string) => {
    if (name === "marca") {
      handleBrandChange(id);
      // navigate(`/produtos?marca=${id}`); // opcional
    } else {
      handleCategoryChange(id);
      // navigate(`/produtos?categoria=${id}`); // opcional
    }
  };

  const selectedId = name === "marca" ? selectedBrand : selectedCategory;

  return (
    <Box sx={{ height: 400, maxWidth: 250, bgcolor: "background.paper" }}>
      <FixedSizeList
        height={400}
        width={250}
        itemSize={46}
        itemCount={data?.length}
        overscanCount={5}
      >
        {renderRow(data, name, handleFilterChange, selectedId)}
      </FixedSizeList>
    </Box>
  );
};
