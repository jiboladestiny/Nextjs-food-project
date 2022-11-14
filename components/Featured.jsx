import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className="intro">
      <div className="content">
        <h2 className="first-head">
          Hot, Fresh and Spicy
        </h2>
        <h2 className="second-head">
          Reserved just for you
        </h2>
        <button>
        Order now
        </button>
      </div>
    </div>
  );
};

export default Featured;
