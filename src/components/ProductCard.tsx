import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  stock: number;
}

export default function ProductCard({
  title,
  price,
  image,
  stock,
}: ProductCardProps) {
  return (
    <Card sx={{ width: 300, height: 350 }}>
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
                  color="danger"
                >
                  Out of stock
                </Chip>
              )
            }
          >
            {price} THB
          </Typography>
        </div>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="primary" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
