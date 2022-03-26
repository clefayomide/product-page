import productOne from "../../../../assets/image-product-1.jpg";
import productTwo from "../../../../assets/image-product-2.jpg";
import productThree from "../../../../assets/image-product-3.jpg";
import productFour from "../../../../assets/image-product-4.jpg";
import thumbnailOne from "../../../../assets/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../../../../assets/image-product-2-thumbnail.jpg";
import thumbnailThree from "../../../../assets/image-product-3-thumbnail.jpg";
import thumbnailFour from "../../../../assets/image-product-4-thumbnail.jpg";

const products = [
  {
    company: "sneaker company",
    images: [
      {
        img: productOne,
      },
      {
        img: productTwo,
      },
      {
        img: productThree,
      },
      {
        img: productFour,
      },
    ],
    thumbnails: [
      {
        thumbnail: thumbnailOne,
      },
      {
        thumbnail: thumbnailTwo,
      },
      {
        thumbnail: thumbnailThree,
      },
      {
        thumbnail: thumbnailFour,
      },
    ],
    name: "Fall Limited Edition Sneakers",
    text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. They'll withstanding everything the weather can offer",
    price: 125.00,
    discount: 50,
    discountPrice : 250.00
  },
];

export default products;
