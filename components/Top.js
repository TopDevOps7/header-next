const Top = () => {
  return (
    <div className="top">
      <div className="container pt-0" style={{ padding: "0px 26px" }}>
        <div className="row">
          <div className="col-lg-6 flat-address_">
            <div className="flat-address">
              <div className="custom-info">
                <img
                  src="https://www.himedialabs.com/media/wysiwyg/header_address_icon.png"
                  width={12}
                  height={17}
                  style={{ marginRight: 5 }}
                />
                <span>107 W Dorothys Way, Lincoln University, West Chester, Pennsylvania, USA.</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="top-navigator" style={{ textAlign: "center" }}>
              <div className="social-links">
                <a href="#" title="My Account">
                  My Account
                </a>
                <a className="vl" style={{ padding: "0px !important" }}></a>
                <a href="#">My Wishlist (0)</a>
                <a href="#">COA/SDS/TD</a>
                <a className="vl" style={{ padding: "0px !important" }}></a>
                <a href="#" title="Sign In">
                  Sign In
                </a>
                <a className="vl" style={{ padding: "0px !important" }}></a>
                <a href="#" title="Compare Products">
                  Compare (0)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
