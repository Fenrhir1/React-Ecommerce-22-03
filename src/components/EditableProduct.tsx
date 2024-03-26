import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Product } from "../declarations/general";
import { useContext } from "react";
import { ContextApp } from "../context/Provider";

interface ProductCardProps {
  product: Product;
}

export default function EditableProduct({ product }: ProductCardProps) {
  const { title, price, image, stock, id } = product;
  const { adminDeleteProduct } = useContext(ContextApp);

  return (
    <Card key={id} sx={{ width: 300, height: 350 }}>
      <CardOverflow>
        <AspectRatio>
          <img src={image} loading="lazy" alt="" />
        </AspectRatio>
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
        <Button variant="solid" color="primary" size="lg">
          Modifica
        </Button>
        <Button
          variant="solid"
          color="success"
          size="lg"
          onClick={() => {
            adminDeleteProduct(product.id);
          }}
        >
          Cancella
        </Button>
      </CardOverflow>
    </Card>
  );
}
