import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../actions/productactions";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import productsStyles from "./products.module.css";

export default function ProductInfo() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productreducer?.data);
  useEffect(() => {
    dispatch(getProductsById(id));
  }, []);
  console.log(data);
  return (
    <>
      <Navbar styles={productsStyles} />
      <section className={`${productsStyles.container_sproducts} my-5 pt-5`}>
        {data && (
          <div className="row mt-5">
            <div className="col-lg-5 col-md-6 col-6">
              <img
                className=""
                src={`/${data.img}`}
                id={productsStyles.MainImg}
                style={{ height: "100%", width: "200px" }}
                alt=""
              />
            </div>

            <div className="col-lg-6 col-md-6 col-6">
              <h3>{data.name}</h3>

              <div className={productsStyles.price}>
                M.R.P. : <span>{data.price}</span>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className={productsStyles["product-description"]}>
        <div>
          <h2>Product Description</h2>
        </div>

        {data && (
          <div className={productsStyles.product_dic}>
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
          </div>
        )}
      </section>
      <Footer styles={productsStyles} />
    </>
  );
}
