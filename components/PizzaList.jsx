import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className="containers">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <h1 className="titles mb-3">RESERVED JUST FOR YOU</h1>
          <p className="descs">
            Choose from ranges of food and dishes below, if you can find your
            preffered choice do not panic. Make your direct order for your
            custom dish.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="">
          {" "}
          <ul class="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <i class="bx bxs-star"></i> All
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <i class="bx bx-current-location"></i> Local
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <i class="bx bx-globe"></i> International
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-snacks-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-snacks"
                type="button"
                role="tab"
                aria-controls="pills-snacks"
                aria-selected="false"
              >
                <i class="bx bxs-baguette"></i> Snacks
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="wrappers row justify-content-center">
            {pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="wrappers row justify-content-center">
            {pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="wrappers row justify-content-center">
            {pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-snacks"
          role="tabpanel"
          aria-labelledby="pills-snacks-tab"
        >
          <div className="wrappers row justify-content-center">
            {pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
