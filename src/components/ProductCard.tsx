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
    <Card
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        width: "320px",
        flexBasis: "320px",
        flexGrow: 1,
        height: "inherit",
        boxShadow: "lg",
      }}
    >
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200, height: 200 }}>
          <img src={image} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Typography level="body-xs">{title}</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {title}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {price} THB
        </Typography>
        <Typography level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
