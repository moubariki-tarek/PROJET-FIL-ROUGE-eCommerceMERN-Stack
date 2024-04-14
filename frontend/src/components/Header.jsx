import { useState, useEffect } from "react";
// import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import { useGetTopProductsQuery } from "../serverApi/productApi";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  // const { data, isLoading, error } = useGetTopProductsQuery();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  console.log("data", data);
  const fetchTopProduct = () => {
    setIsLoading(true);
    useGetTopProductsQuery()
      .then(({ data }) => setData(data))
      .catch((err) => setIsError(err))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetchTopProduct();

    return () => {};
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <div className="flex justify-around">
        <div className="xl:block lg:hidden md:hidden:sm:hidden">
          <div className="grid grid-cols-2">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
