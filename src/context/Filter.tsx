import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type FilterContextType = {
	selectedCategories: string[];
	selectedBrands: string[];
	handleCategoryChange: (id: string, checked: boolean) => void;
	handleBrandChange: (id: string, checked: boolean) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("categorias");
    const brand = params.get("marcas");

    setSelectedCategory(cat);
    setSelectedBrand(brand);
  }, [location.search]);

  const updateFiltersInURL = (category: string | null, brand: string | null) => {
    const searchParams = new URLSearchParams();

    if (category) searchParams.set("categorias", category);
    if (brand) searchParams.set("marcas", brand);

    navigate(`/produtos?${searchParams.toString()}`);
  };

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    updateFiltersInURL(id, selectedBrand);
  };

  const handleBrandChange = (id: string) => {
    setSelectedBrand(id);
    updateFiltersInURL(selectedCategory, id);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        selectedBrand,
        handleCategoryChange,
        handleBrandChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
