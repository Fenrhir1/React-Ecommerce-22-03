import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useContext } from "react";
import { ContextApp } from "../context/Provider";
import { Product } from "../declarations/general";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { handleAddToCart } = useContext(ContextApp);
  const { title, price, image, stock, id } = product;

  return (
    <Card key={id} sx={{ width: 300, height: 350 }}>
      <CardOverflow>
        <div
          style={{
            overflow: "hidden",
            height: "200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={image} loading="lazy" alt="" width={"50%"} />
        </div>
      </CardOverflow>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link
            href="#product-card"
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            endDecorator={<ArrowOutwardIcon />}
          >
            {title}
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            level="title-lg"
            sx={{
              fontWeight: "md",
            }}
            endDecorator={
              stock > 0 ? (
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              ) : (
                <Chip
                  component="span"
                  size="sm"
                  variant="outlined"
                  color="success"
                >
                  In Stock!
                </Chip>
              )
            }
          >
            {price} €
          </Typography>
        </div>
      </CardContent>
      <CardOverflow>
        <Button
          variant="solid"
          size="lg"
          sx={{
            gap: 5,
            color: "white",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#F14444",
            },
          }}
          onClick={() => {
            handleAddToCart(product);
          }}
        >
          <ShoppingCartIcon />
          AGGIUNGI AL CARRELLO
        </Button>
      </CardOverflow>
    </Card>
  );
}
