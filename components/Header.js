const Header = () => {
  return (
    <section>
      <div className="container pb-sm-3 pt-3">
        <div className="row container" style={{ marginTop: -5 }}>
          <div className="col-md-2 col-sm-2 col-xs-12">
            <a href="/">
              <img
                className="logo-img"
                src="https://www.himedialabs.com/media/logo/stores/2/himedia_logo_1.png"
                draggable={false}
              />
            </a>
          </div>
          <div className="col-md-10 col-sm-10 col-xs-12 d-flex">
            <div className="gap-1 header-icon" style={{ margin: 5 }}>
              <div className="d-flex hClose align-items-center" style={{ marginLeft: 24, marginTop: -10 }}>
                <img
                  src="https://www.himedialabs.com/media/wysiwyg/hotline_img.png"
                  draggable={false}
                  style={{ marginTop: -20 }}
                  width={48}
                />
              </div>
              <div>
                <div className="taCenter">
                  <div className="anchorofnavbar">Contact</div>
                  <div className="anchorofnavbar">Number</div>
                </div>
                <div className="taCenter">
                  <span className="appointspan">(484)-734-4401</span>
                </div>
              </div>
            </div>
            <div className="search-content" id="search-content_1">
              <div className="search-div">
                <div style={{ marginTop: 8 }}>
                  <select className="search-div-select">
                    <option value="All Categories">All Categories</option>
                    <option value="Microbiology">Microbiology</option>
                    <option value="Cell Biology">Cell Biology</option>
                    <option value="Molecular Biology">Molecular Biology</option>
                    <option value="Plant Tissue Culture">Plant Tissue Culture</option>
                    <option value="Lab Chemicals and BioChemicals">Lab Chemicals and BioChemicals</option>
                    <option value="Labware">Labware</option>
                    <option value="Laboratory Instruments">Laboratory Instruments</option>
                    <option value="Fields of Application">Fields of Application</option>
                    <option value="Services">Services</option>
                    <option value="Literatures">Literatures</option>
                  </select>
                  <input type="text" className="search-div-text" placeholder="Search Entire Store Here…" />
                </div>
                <div>
                  <button className="search-div-button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
