import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="col-md-3 col-6">
      <div className="pizza-container">
        <div className="row align-items-center">
          <div className="col-7">
            <Link href={`/product/${pizza._id}`} passHref>
              <Image src={pizza.img} alt="" width="500" height="500" />
            </Link>
          </div>
          <div className="col-5">
            <div>
              <h1 className="pizza-title">{pizza.title}</h1>
              <span className="pizza-price">${pizza.prices[0]}</span>
              <p className="pizza-desc">{pizza.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;