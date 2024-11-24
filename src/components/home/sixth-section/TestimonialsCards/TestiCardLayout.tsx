import classes from "./testiCardLayout.module.css";
import { IoMdStar } from "react-icons/io";

interface ITestiCardLayout {
  image: string;
  cardHeader: string;
  cardSubHeader: string;
  cardDescription: string;
  ratings: number;
  subImage: string;
}
const TestiCardLayout: React.FC<ITestiCardLayout> = ({
  image,
  cardHeader,
  cardSubHeader,
  cardDescription,
  ratings,
  subImage,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.BackgroundImage}>
        <img src={image} alt="#TestimonialCard1" />
        <div className={classes.Testicard}>
          <div className={classes.subImageBackground}>
            <img src={subImage} alt="#TestimonialCard2" />
          </div>
          <h3>{cardHeader}</h3>
          <p>{cardSubHeader}</p>
          <br />
          <span>{cardDescription}</span>
          <br />
          <i className={classes.starRatings}>
            {Array(ratings)
              .fill(null)
              .map((_, index) => (
                <IoMdStar
                  className={classes.IoMdStar}
                  key={index}
                  color="rgba(246, 183, 111, 1)"
                />
              ))}
          </i>
        </div>
      </div>
    </div>
  );
};

export default TestiCardLayout;
