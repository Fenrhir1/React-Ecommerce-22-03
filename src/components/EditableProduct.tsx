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
    <Card key={id} sx={{ width: 300, height: 400 }}>
      <CardOverflow>
        <div
          style={{
            marginBottom: "10",
            overflow: "hidden",
            height: "200px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <img
            src={image}
            loading="lazy"
            alt=""
            width={"50%s"}
            style={{ objectFit: "contain", margin: "0 auto" }}
          />
        </div>
      </CardOverflow>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flex: "none",
          }}
        >
          <div>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              endDecorator={<ArrowOutwardIcon />}
              title={title}
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                textOverflow: "ellipsis",
              }}
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
                  <Chip
                    component="span"
                    size="sm"
                    variant="soft"
                    color="success"
                  >
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
            sx={{
              marginBottom: "20px",
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#F14444" },
            }}
            variant="solid"
            size="lg"
          >
            Modifica
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#F14444" },
            }}
            variant="solid"
            size="lg"
            onClick={() => {
              adminDeleteProduct(product.id);
            }}
          >
            Cancella
          </Button>
        </CardOverflow>
      </div>
    </Card>
  );
}
