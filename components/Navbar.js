const Navbar = () => {
  return (
    <section>
      <div className="container" style={{ padding: "0px 26px" }}>
        <div className="navbar_menu_border_"></div>
        <div className="navbar_ d-flex">
          <input type="checkbox" id="btnControl" />
          <label className="dropdown" for="btnControl">
            <div className="navbar_menu">
              <div className="d-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1.1em"
                  width="1.1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
                <div className="navbar_menu_title">PRODUCT CATEGORY</div>
              </div>
              <div className="navbar_menu_border"></div>
            </div>
            <ul className="dropdown-menu dropdown-content_" aria-labelledby="dropdownMenuButton">
              <li className="menu-top">
                <div>
                  PRODUCT CATEGORY
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 352 512"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="menu-close"
                  >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
                </div>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Microbiology
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Cell Biology
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Molecular Biology
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Plant Tissue Culture
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Lab Chemicals And BioChemicals
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Labware
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Laboratory Instruments
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Fields Of Application
                </a>
              </li>
              <div className="dropdown-hr"></div>
              <li>
                <a className="dropdown-item" href="#">
                  Services
                </a>
              </li>
            </ul>
          </label>
          <div className="navbar_sub">
            <div className="dropdown navbar_ele" style={{ marginLeft: 0 }}>
              <div className="navbar_ele" data-mdb-toggle="dropdown" aria-expanded="false">
                APPLICATIONS{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="mainiconshover"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </div>
              <ul className="dropdown-menu dropdown-content" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#">
                    Industry
                  </a>
                </li>
                <div className="dropdown-hr"></div>
                <li>
                  <a className="dropdown-item" href="#">
                    Clinical
                  </a>
                </li>
                <div className="dropdown-hr"></div>
                <li>
                  <a className="dropdown-item" href="#">
                    Food
                  </a>
                </li>
                <div className="dropdown-hr"></div>
                <li>
                  <a className="dropdown-item" href="#">
                    Dairy
                  </a>
                </li>
                <div className="dropdown-hr"></div>
                <li>
                  <a className="dropdown-item" href="#">
                    Water
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="navbar_a">
              LITERATURE
            </a>
            <a href="#" className="navbar_a">
              NEWSLETTER
            </a>
            <div className="dropdown navbar_ele" style={{ marginLeft: 0 }}>
              <div className="navbar_ele" data-mdb-toggle="dropdown" aria-expanded="false">
                ABOUT US{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="mainiconshover"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </div>
              <ul className="dropdown-menu dropdown-content" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#">
                    Company Profile
                  </a>
                </li>
                <div className="dropdown-hr"></div>
                <li>
                  <a className="dropdown-item" href="#">
                    Events
                  </a>
                </li>
                <div className="dropdown-hr"></div>
                <li>
                  <a className="dropdown-item" href="#">
                    Press Release
                  </a>
                </li>
                <div className="dropdown-hr"></div>
                <li>
                  <a className="dropdown-item" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="search-content" id="search-content_2">
            <div className="search-div">
              <div style={{ marginTop: 8 }}>
                <input
                  type="text"
                  className="search-div-text"
                  placeholder="Search Entire Store Here…"
                  style={{ marginTop: 5, marginLeft: 25 }}
                />
              </div>
              <div>
                <button className="search-div-button">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
