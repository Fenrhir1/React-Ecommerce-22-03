import React from "react";
import TextField from "@mui/material/TextField";

interface ProductSearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSearchBar: React.FC<ProductSearchBarProps> = ({ setSearchTerm }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      fullWidth
      label="Cerca prodotti..."
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default ProductSearchBar;
