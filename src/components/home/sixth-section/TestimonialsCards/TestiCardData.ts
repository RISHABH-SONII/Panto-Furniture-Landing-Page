import BackgroundImage1 from "../../../../assets/images/Section-6 Images/Container-3 Image-1.png";
import BackgroundImage2 from "../../../../assets/images/Section-6 Images/Container-3 Image-2.png";
import BackgroundImage3 from "../../../../assets/images/Section-6 Images/Container-3 Image-3.png";
import SubImage1 from "../../../../assets/images/Section-6 Images/SubImage-1.png";
import SubImage2 from "../../../../assets/images/Section-6 Images/SubImage-2.png";
import SubImage3 from "../../../../assets/images/Section-6 Images/SubImage-3.png";
interface ITestiCardData {
  image: string;
  cardHeader: string;
  cardSubHeader: string;
  cardDescription: string;
  ratings: number;
  subImage: string;
}
export const TestiCardData: ITestiCardData[] = [
  {
    image: BackgroundImage1,
    cardHeader: "Bang Upin",
    cardSubHeader: "Pedagang Asongan",
    cardDescription:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    ratings: 5,
    subImage: SubImage1,
  },
  {
    image: BackgroundImage2,
    cardHeader: "Ibuk Sukijan",
    cardSubHeader: "Ibu Rumah Tangga",
    cardDescription:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    ratings: 5,
    subImage: SubImage2,
  },
  {
    image: BackgroundImage3,
    cardHeader: "Mpok Ina",
    cardSubHeader: "Karyawan Swasta",
    cardDescription:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    ratings: 5,
    subImage: SubImage3,
  },
];
