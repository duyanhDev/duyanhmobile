import { useEffect, useState } from "react";
import FlashSale from "../FlashSale/FlashSale";
import ProductSlider from "../ContentProduct/ProductSlider";
import { getAllProduct, getAllLaptop } from "../../severs/ApiSever";
const Home = () => {
  const [product, setProduct] = useState([]);
  const [productLaptop, setProductLaptop] = useState([]);
  const [block, setBlock] = useState(true);
  const [fitter, setFitter] = useState(false);
  useEffect(() => {
    FetchApi();
    FetchApiLaptop();
  }, []);
  const FetchApi = async () => {
    let res = await getAllProduct();

    if (res && res.data && res.data && res.data.products) {
      setProduct(res.data.products);
    }
  };

  const FetchApiLaptop = async () => {
    let res = await getAllLaptop();
    if (res && res.data && res.data && res.data.products) {
      setProductLaptop(res.data.products);
    }
  };
  const handleMobile = () => {
    setBlock(true);
    setFitter(false);
  };
  const handleLaptop = () => {
    setBlock(false);
    setFitter(true);
  };

  return (
    <>
      <div className="sale-navigation">
        <FlashSale
          handleLaptop={handleLaptop}
          block={block}
          fitter={fitter}
          handleMobile={handleMobile}
        />
      </div>
      <div className="Product-navigation">
        <ProductSlider
          product={product}
          block={block}
          fitter={fitter}
          productLaptop={productLaptop}
        />
      </div>
    </>
  );
};

export default Home;
