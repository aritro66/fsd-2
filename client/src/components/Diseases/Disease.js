import React from "react";
import { Link } from "react-router-dom";
import styles from "./disease.module.css";

export default function Disease({ disease }) {
  console.log(disease)
  return (
    <Link to={`/disease/${disease.id}`}>
      <div className={styles["box"]}>
            <div className={styles["image"]}>
                <img src={disease.image} alt="" />
            </div>
            <div className={styles["content"]}>
                <div className={styles["icon"]}> 
                </div>
                <h3>{disease.name}</h3>
                {/* <!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p> --> */}
                <a href="#" className={styles["btn"]}> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>
    </Link>
  );
}
