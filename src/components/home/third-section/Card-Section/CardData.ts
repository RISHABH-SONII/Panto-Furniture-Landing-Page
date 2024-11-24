import Chair1Image from "../../../../assets/images/Section-2 Images/chair-1 Image.png";
import Chair2Image from "../../../../assets/images/Section-2 Images/chair-2 image.png";
import Chair3Image from "../../../../assets/images/Section-2 Images/chair-3 image.png";
import Chair4Image from "../../../../assets/images/Section-2 Images/chair-4 image.png";
interface ICardData {
  image: string;
  category: string;
  chairName: string;
  ratings: number;
  price: string;
}
export const CardData: ICardData[] = [
  {
    image: Chair1Image,
    category: "Chair",
    chairName: "Sakarias Armchair",
    ratings: 5,
    price: "$392",
  },
  {
    image: Chair2Image,
    category: "Chair",
    chairName: "Baltsar Chair",
    ratings: 5,
    price: "$299",
  },
  {
    image: Chair3Image,
    category: "Chair",
    chairName: "Anjay Chair",
    ratings: 5,
    price: "$519",
  },
  {
    image: Chair4Image,
    category: "Chair",
    chairName: "Nyantuy Chair",
    ratings: 5,
    price: "$921",
  },
  {
    image: Chair4Image,
    category: "Chair",
    chairName: "Nyantuy Chair",
    ratings: 5,
    price: "$921",
  },
];
