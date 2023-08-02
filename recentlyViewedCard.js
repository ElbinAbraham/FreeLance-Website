import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./card2.css";

const RecentlyViewedCard = ({ recentlyViewed, onCardClick, details }) => {
  const matchedItems = getMatchedItems(recentlyViewed, details);

  return (
    <div className="card-container">
      <div className="heading">Recently Viewed</div>
      <div className="cardholder">
        {matchedItems &&
          Array.prototype.map.call(matchedItems, (card, index) => (
            <Card key={index} className="card" sx={{ maxWidth: 600 }}>
              <CardMedia
                image={card.src}
                alt={card.alt}
                height="140"
                sx={{ width: 400, height: 170 }}
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
  );
};

function getMatchedItems(recentlyViewed, details) {
  return recentlyViewed.map((item) => {
    const detailItem = details.find(
      (detail) =>
        detail.category === item.category && detail.subCategory === item.subCategory
    );
    return { ...item, ...detailItem };
  });
}

export default RecentlyViewedCard;
