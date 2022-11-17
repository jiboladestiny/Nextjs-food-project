import PizzaCard from "./PizzaCard";
import { useState } from "react";

const PizzaList = ({ pizzaList }) => {
  const tabs = ["All","International","local","Snack"];
  const [show, setShow] = useState(0);
  
    const tabses = tabs.map((number,i) => (
      <button onClick={()=>{
        console.log(i)
      }} className="btn me-2 btn-success" key={number}>
        <i className="bx bxs-star"></i> {number}
      </button>
    ));
  return (
    <div className="containers container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <h1 className="titles mb-3">WELOCME TO FOODIE</h1>
          <p className="descs">
            Choose from ranges of food and dishes below, if you cannot find your
            preffered choice do not panic. Make your direct order for your
            custom dish.
          </p>
        </div>
      </div>

      <div className="food-wrapper">
        <div className="tab-wrapper">{tabses}</div>

        <div className="tab-content-wrapper">
          {show === 0 && <div className="tab-content">1</div>}
          {show === 1 && <div className="tab-content">2</div>}
          {show === 2 && <div className="tab-content">3</div>}
          {show === 3 && <div className="tab-content">4</div>}
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
