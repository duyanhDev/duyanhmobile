import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.scss";
import { useNavigate } from "react-router-dom";
const ProductSlider = ({ product, productLaptop, block, fitter }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const Navigate = useNavigate();

  return (
    <Slider {...settings}>
      {block &&
        product &&
        product.length > 0 &&
        product.map((item, index) => {
          return (
            <div key={index + 1}>
              <h3 key={index}>
                <img
                  className="image"
                  src={item.images[0]}
                  alt="f"
                  onClick={() => Navigate(`/detail/${item.id}`)}
                />
                {item.title}
                <span
                  className="price"
                  onClick={() => Navigate(`/detail/${item.id}`)}
                >
                  {" "}
                  {item.price} đ
                </span>
              </h3>
            </div>
          );
        })}
      {fitter &&
        productLaptop &&
        productLaptop.length > 0 &&
        productLaptop.map((item, index) => {
          return (
            <div key={index + 1}>
              <h3 onClick={() => Navigate(`/detail/${item.id}`)}>
                <img
                  className="image"
                  src={item.images[0]}
                  alt="f"
                  onClick={() => Navigate(`/detail/${item.id}`)}
                />
                {item.title}
                <span
                  className="price"
                  onClick={() => Navigate(`/detail/${item.id}`)}
                >
                  {" "}
                  {item.price} đ
                </span>
              </h3>
            </div>
          );
        })}
    </Slider>
  );
};

export default ProductSlider;
