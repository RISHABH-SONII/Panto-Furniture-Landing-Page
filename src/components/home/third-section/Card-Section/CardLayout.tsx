import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import classes from "./CardLayout.module.css";

interface IProps {
  image: string;
  category: string;
  chairName: string;
  ratings: number;
  price: string;
}
const CardLayout: React.FC<IProps> = ({
  image,
  category,
  chairName,
  ratings,
  price,
}) => {
  return (
    <div className={classes.cardLayout}>
      <img src={image} className={classes.chairImages} alt="#SellingProduct" />
      <div className={classes.card}>
        <p>{category}</p>
        <h3>{chairName}</h3>
        <i className={classes.starRatings}>
          {Array(ratings)
            .fill(null)
            .map((_, index) => (
              <IoMdStar
                className={classes.IoMdStart}
                key={index}
                color="rgba(246, 183, 111, 1)"
                style={{ height: "2.5vh", width: "1.25vw" }}
              />
            ))}
        </i>
        <div className={classes.priceDiv}>
          <h3>{price}</h3>
          <button>
            <IoAddCircle size={45} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
