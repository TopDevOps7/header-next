import logo from "../images/logo.png";

const Header = () => {
  return (
    <section>
      <div className="container makeatrasition pb-lg-4 pb-md-4 pb-sm-4 pt-4">
        <div className="row">
          <div className="col-lg-5 boxshadowonMedia headerIConRes col-sm-5 col-md-5">
            <a className="aaggg" href="/">
              <img
                className="mediaLogoSet"
                src={logo}
                alt="EstivaSoftech Company Logo"
                width="250"
                height="65"
                draggable={false}
              />
            </a>
          </div>
          <div className="col-lg-7 py-3 py-sm-0 col-md-7 col-sm-7">
            <div className="row">
              <div className="col p-0 d-sm-none d-md-block">
                <div className="d-flex responsiveTopHeaderICons justify-content-center gap-2">
                  <div className="d-flex justify-content-center hClose align-items-center">
                    <span className="timerofnavbar">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div>
                    <div className="taCenter">
                      <a className="anchorofnavbar" href="whatsapp://send?phone=+91 9311 69 1080">
                        Live Chat
                      </a>
                    </div>
                    <div className="taCenter">
                      <span className="appointspan">With Expert </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-0 d-sm-block d-md-block">
                <div className="d-flex responsiveTopHeaderICons justify-content-center gap-2">
                  <div className="d-flex hClose justify-content-center align-items-center">
                    <span className="timerofnavbar">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                    </span>
                  </div>
                  <div>
                    <div>
                      <div className="taCenter">
                        <a className="anchorofnavbar" href="/contact">
                          Sales Support
                        </a>
                      </div>
                    </div>
                    <div className="taCenter">
                      <span className="appointspan">
                        {" "}
                        <a href="tel:+919990140888" className="text-black" style={{ textDecoration: "none" }}>
                          +91-9990 140 888
                        </a>{" "}
                      </span>
                    </div>
                  </div>
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
