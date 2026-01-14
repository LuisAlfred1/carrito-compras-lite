import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useState } from "react";

export const CardProducto = ({ imagen, titulo, precio }) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    setAdded(true);
  };

  const clickQuitar = () => {
    setAdded(false);
  };

  return (
    <Card
      sx={{
        width: 220, //ancho fijo
        borderRadius: 3,
        boxShadow: "0 3px 3px rgba(0, 128, 0, 0.15)",
        transition: "all 0.25s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          height: 140, //altura fija
          backgroundColor: "#ecfdf5", // verde suave
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <CardMedia
          component="img"
          image={imagen}
          alt={titulo}
          sx={{
            height: 120,
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Contenido */}
      <CardContent sx={{ p: 1.5 }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: "#065f46",
            lineHeight: 1.2,
            mb: 0.5,
          }}
          noWrap
        >
          {titulo}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            color: "#047857",
            fontWeight: 700,
          }}
        >
          ${precio}
        </Typography>
        {added ? (
          <Button
            fullWidth
            variant="contained"
            color="error"
            startIcon={<RemoveShoppingCartIcon />}
            onClick={clickQuitar}
            sx={{ textTransform: "none" }}
          >
            Quitar del carrito
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            onClick={clickAgregar}
            sx={{
              backgroundColor: "#16a34a",
              "&:hover": { backgroundColor: "#15803d" },
              textTransform: "none",
            }}
          >
            Agregar al carrito
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
