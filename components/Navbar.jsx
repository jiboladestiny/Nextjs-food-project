import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          Foodie
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <button className="btn direct-order">
              <i class="bx bxs-phone-call bx-flashing"></i> Direct Order
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
