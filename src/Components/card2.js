// CardItems.js
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./card2.css";
import RecentlyViewedCard from "./recentlyViewedCard";

const CardItems = ({
  card,
  onCardClick,
  recentlyViewed,
  category,
  subCategory,
  details,
}) => {
  return (
    <>
      <div className="card-container">
        <div className="heading">Our Products</div>
        <div className="cardholder">
          {Array.prototype.map.call(card, (card, index) => (
            <Card key={index} className="card" sx={{ maxWidth: 700 }}>
              <CardMedia
                component="img"
                image={card.src}
                alt={card.alt}
                height="140"
                sx={{ width: "100%", height: "80%", objectFit: "fill" }}
                onClick={() => onCardClick(card)}
              />

              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {card.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardItems;
