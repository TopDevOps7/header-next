const Navbar = () => {
  return (
    <section className="headerBlueColorbg">
      <div className="container p-0">
        <nav className="nav">
          <div className="wrapper">
            <input className="input" type="radio" name="slider" id="menu-btn"></input>
            <input className="input" type="radio" name="slider" id="close-btn"></input>
            <ul className="mb-0 nav-links" style={{ zIndex: 9999, overflowX: "hidden" }}>
              <label htmlFor="close-btn" className="btn close-btn">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 352 512"
                  className="text-black"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
              </label>
              <li className="MainLiNavbar MainLiNavbaractive" id="lieventAdd">
                <a href="/">HOME</a>
              </li>
              <li className="MainLiNavbar noliactive" id="lieventAdd">
                <a href="/estivasoftech-history">HISTORY</a>
              </li>
              <li className="mainiconshovertiajadf MainLiNavbar noliactive" id="lieventAddmega">
                <a href="#" className="desktop-item chekingone">
                  SERVICES{" "}
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
                  </svg>{" "}
                </a>
                <input className="input" type="checkbox" id="showMega"></input>
                <label htmlFor="showMega" className="mobile-item checkingtwo">
                  SERVICES{" "}
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
                  </svg>{" "}
                </label>
                <div id="megatakenbox" className="mega-box" style={{ visibility: "hidden", opacity: 0, display: "none" }}>
                  <div className="content slideInDownMegamenu padding0inmedia bfagksjna" style={{ padding: "0px 12px" }}>
                    <div
                      className="row"
                      style={{ backgroundColor: "rgb(246, 247, 251)", padding: " 6px 0px 12px 31px", borderRadius: 6 }}
                    >
                      <ul className="mega-links">
                        <li className="daimond bbflash p-0 my-3">
                          <a href="#" className="setancr" style={{ textTransform: "uppercase" }}>
                            Digital Marketing{" "}
                          </a>
                          <ul id="bydef" className="ma p-0 py-4 ulpadder padding0inmedia" style={{ height: "100%" }}>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/digital-marketing-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M15 13V14H1.5L1 13.5V0H2V13H15Z"></path>
                                        <path d="M13 3.20714L7.85353 8.35359H7.14642L5.49998 6.70714L1.85353 10.3536L1.14642 9.64648L5.14642 5.64648H5.85353L7.49998 7.29293L12.6464 2.14648H13.3535L15.3535 4.14648L14.6464 4.85359L13 3.20714Z"></path>
                                      </svg>{" "}
                                      DIGITAL MARKETING{" "}
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/seo-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 460 512"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"></path>
                                      </svg>{" "}
                                      SEARCH ENGINE OPTIMIZATION
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/sem-service">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zM19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                                      </svg>{" "}
                                      SEARCH ENGINE MARKETING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/social-media-optimization-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M4.217 0C2.474 0 1.06 1.413 1.06 3.156V15.77c0 1.744 1.414 3.158 3.157 3.158h9.367C13.567 22.498 8.756 24 8.756 24s8.138-.038 9.305-5.072h1.72c1.744 0 3.157-1.414 3.157-3.157V3.157C22.938 1.413 21.524 0 19.782 0H4.218zm4.527 2.53c.073-.013.132-.003.174.034.335.3-.556.593-.484 2.063.032.646-.16 1.146 1.076 1.146.826 0 .483-.734 1.523-.734.656 0 .86.435.934.767.072-.33.274-.768.93-.768 1.04 0 .7.733 1.525.733 1.237 0 1.044-.5 1.076-1.146.072-1.47-.82-1.764-.484-2.063.042-.037.1-.042.172-.02.5.143 1.607 1.558 1.638 2.155.038.71.04 1.825-1.015 2.407 1.19 1.167 1.352 2.72 1.352 2.72l-2.045-.034s-.464-2.118-2.94-2.01c-2.474.108-2.796.538-2.796 3.156 0 2.617 1.147 3.517 2.905 3.585 2.76.108 2.51-1.433 2.51-1.433l-1.29.072-.718-1.937h4.41c0 2.116-.897 5.414-5.092 5.2-4.196-.216-5.128-3.515-5.164-5.74-.018-1.225.188-2.602 1.2-3.574-1.052-.58-1.033-1.7-1.033-2.414 0-.88 1.13-2.084 1.637-2.17z"></path>
                                      </svg>{" "}
                                      SOCIAL MEDIA OPTIMIZATION
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/local-seo-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7.733 3.704a3.982 3.982 0 0 1 2.267 -.704h4a4 4 0 0 1 4 4v7m-.1 3.895a4 4 0 0 1 -3.9 3.105h-4a4 4 0 0 1 -4 -4v-10c0 -.3 .033 -.593 .096 -.874"></path>
                                        <path d="M12 7v1"></path>
                                        <path d="M3 3l18 18"></path>
                                      </svg>{" "}
                                      LOCAL SEO (GMB)
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/ecommerce-seo-service">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M6.277 1.538a.018.018 0 0 0-.012.007l-4.74 8.21-1.398 2.418c.446.774.794 1.353 1.22 2.09.671 1.164 1.548 1.597 3.13 1.889a12.9 12.9 0 0 1 .697-1.392l2.783-4.824 2.786-4.826c.404-.702 1.296-2.143 2.57-2.965-.04.025-.07.059-.109.085.07-.047.137-.094.209-.136.46-.278.98-.467 1.413-.515.339-.038 1.465-.041 2.74-.041zm11.59.505c-1.048-.008-1.462.007-2.545.008-1.39 0-2.381.887-3.083 1.773.372.493.68.971.863 1.288a13357.605 13357.605 0 0 0 5.571 9.648c.404.7 1.209 2.196 1.284 3.71.029.574-.079 1.165-.265 1.592-.131.3-.652 1.207-1.256 2.253L24 12.678v-.008a.013.013 0 0 0-.002-.005zM.001 8.163l.095 4.946L0 8.163zm.093 4.946 1.132 1.964 4.264 7.384a.015.015 0 0 0 .012.005h12.265c.446-.779.664-1.147 1.311-2.282.709-1.242.278-2.681-.037-3.472-.618.076-1.18.093-1.547.093H6.35c-.809 0-2.505-.05-3.853-.741-.513-.263-.972-.65-1.248-1.027-.176-.238-.625-1.003-1.156-1.924z"></path>
                                      </svg>{" "}
                                      ECOMMERCE SEO
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/pay-per-click-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm166.6 246.8L567.5 515.6h62c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V603h82c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V717c0 4.4-3.6 8-8 8h-54.3c-4.4 0-8-3.6-8-8v-68.1h-81.7c-4.4 0-8-3.6-8-8V611c0-4.4 3.6-8 8-8h81.7v-41.5h-81.7c-4.4 0-8-3.6-8-8v-29.9c0-4.4 3.6-8 8-8h61.4L345.4 310.8a8.07 8.07 0 0 1 7-11.9h60.7c3 0 5.8 1.7 7.1 4.4l90.6 180h3.4l90.6-180a8 8 0 0 1 7.1-4.4h59.5c4.4 0 8 3.6 8 8 .2 1.4-.2 2.7-.8 3.9z"></path>
                                      </svg>{" "}
                                      PAY PER CLICK
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/social-media-marketing-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M4.217 0C2.474 0 1.06 1.413 1.06 3.156V15.77c0 1.744 1.414 3.158 3.157 3.158h9.367C13.567 22.498 8.756 24 8.756 24s8.138-.038 9.305-5.072h1.72c1.744 0 3.157-1.414 3.157-3.157V3.157C22.938 1.413 21.524 0 19.782 0H4.218zm4.527 2.53c.073-.013.132-.003.174.034.335.3-.556.593-.484 2.063.032.646-.16 1.146 1.076 1.146.826 0 .483-.734 1.523-.734.656 0 .86.435.934.767.072-.33.274-.768.93-.768 1.04 0 .7.733 1.525.733 1.237 0 1.044-.5 1.076-1.146.072-1.47-.82-1.764-.484-2.063.042-.037.1-.042.172-.02.5.143 1.607 1.558 1.638 2.155.038.71.04 1.825-1.015 2.407 1.19 1.167 1.352 2.72 1.352 2.72l-2.045-.034s-.464-2.118-2.94-2.01c-2.474.108-2.796.538-2.796 3.156 0 2.617 1.147 3.517 2.905 3.585 2.76.108 2.51-1.433 2.51-1.433l-1.29.072-.718-1.937h4.41c0 2.116-.897 5.414-5.092 5.2-4.196-.216-5.128-3.515-5.164-5.74-.018-1.225.188-2.602 1.2-3.574-1.052-.58-1.033-1.7-1.033-2.414 0-.88 1.13-2.084 1.637-2.17z"></path>
                                      </svg>{" "}
                                      SOCIAL MEDIA MARKETING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/online-reputation-management-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>{" "}
                                      ONLINE REPUTATION MANAGEMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/content-marketing-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g>
                                          <path fill="none" d="M0 0h24v24H0z"></path>
                                          <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.828 10.071L18 24l-2.828-2.929c-1.563-1.618-1.563-4.24 0-5.858a3.904 3.904 0 0 1 5.656 0c1.563 1.618 1.563 4.24 0 5.858zm-1.438-1.39c.813-.842.813-2.236 0-3.078a1.904 1.904 0 0 0-2.78 0c-.813.842-.813 2.236 0 3.079L18 21.12l1.39-1.44z"></path>
                                        </g>
                                      </svg>{" "}
                                      CONTENT MARKETING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/amazon-product-listing-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM547.8 326.7c-7.2-10.9-20.1-16.4-38.7-16.4-1.3 0-3 .1-5.3.3-2.2.2-6.6 1.5-12.9 3.7a79.4 79.4 0 0 0-17.9 9.1c-5.5 3.8-11.5 10-18 18.4-6.4 8.5-11.5 18.4-15.3 29.8l-94-8.4c0-12.4 2.4-24.7 7-36.9s11.8-23.9 21.4-35c9.6-11.2 21.1-21 34.5-29.4 13.4-8.5 29.6-15.2 48.4-20.3 18.9-5.1 39.1-7.6 60.9-7.6 21.3 0 40.6 2.6 57.8 7.7 17.2 5.2 31.1 11.5 41.4 19.1a117 117 0 0 1 25.9 25.7c6.9 9.6 11.7 18.5 14.4 26.7 2.7 8.2 4 15.7 4 22.8v182.5c0 6.4 1.4 13 4.3 19.8 2.9 6.8 6.3 12.8 10.2 18 3.9 5.2 7.9 9.9 12 14.3 4.1 4.3 7.6 7.7 10.6 9.9l4.1 3.4-72.5 69.4c-8.5-7.7-16.9-15.4-25.2-23.4-8.3-8-14.5-14-18.5-18.1l-6.1-6.2c-2.4-2.3-5-5.7-8-10.2-8.1 12.2-18.5 22.8-31.1 31.8-12.7 9-26.3 15.6-40.7 19.7-14.5 4.1-29.4 6.5-44.7 7.1-15.3.6-30-1.5-43.9-6.5-13.9-5-26.5-11.7-37.6-20.3-11.1-8.6-19.9-20.2-26.5-35-6.6-14.8-9.9-31.5-9.9-50.4 0-17.4 3-33.3 8.9-47.7 6-14.5 13.6-26.5 23-36.1 9.4-9.6 20.7-18.2 34-25.7s26.4-13.4 39.2-17.7c12.8-4.2 26.6-7.8 41.5-10.7 14.9-2.9 27.6-4.8 38.2-5.7 10.6-.9 21.2-1.6 31.8-2v-39.4c0-13.5-2.3-23.5-6.7-30.1zm180.5 379.6c-2.8 3.3-7.5 7.8-14.1 13.5s-16.8 12.7-30.5 21.1c-13.7 8.4-28.8 16-45 22.9-16.3 6.9-36.3 12.9-60.1 18-23.7 5.1-48.2 7.6-73.3 7.6-25.4 0-50.7-3.2-76.1-9.6-25.4-6.4-47.6-14.3-66.8-23.7-19.1-9.4-37.6-20.2-55.1-32.2-17.6-12.1-31.7-22.9-42.4-32.5-10.6-9.6-19.6-18.7-26.8-27.1-1.7-1.9-2.8-3.6-3.2-5.1-.4-1.5-.3-2.8.3-3.7.6-.9 1.5-1.6 2.6-2.2a7.42 7.42 0 0 1 7.4.8c40.9 24.2 72.9 41.3 95.9 51.4 82.9 36.4 168 45.7 255.3 27.9 40.5-8.3 82.1-22.2 124.9-41.8 3.2-1.2 6-1.5 8.3-.9 2.3.6 3.5 2.4 3.5 5.4 0 2.8-1.6 6.3-4.8 10.2zm59.9-29c-1.8 11.1-4.9 21.6-9.1 31.8-7.2 17.1-16.3 30-27.1 38.4-3.6 2.9-6.4 3.8-8.3 2.8-1.9-1-1.9-3.5 0-7.4 4.5-9.3 9.2-21.8 14.2-37.7 5-15.8 5.7-26 2.1-30.5-1.1-1.5-2.7-2.6-5-3.6-2.2-.9-5.1-1.5-8.6-1.9s-6.7-.6-9.4-.8c-2.8-.2-6.5-.2-11.2 0-4.7.2-8 .4-10.1.6a874.4 874.4 0 0 1-17.1 1.5c-1.3.2-2.7.4-4.1.5-1.5.1-2.7.2-3.5.3l-2.7.3c-1 .1-1.7.2-2.2.2h-3.2l-1-.2-.6-.5-.5-.9c-1.3-3.3 3.7-7.4 15-12.4s22.3-8.1 32.9-9.3c9.8-1.5 21.3-1.5 34.5-.3s21.3 3.7 24.3 7.4c2.3 3.5 2.5 10.7.7 21.7zM485 467.5c-11.6 4.9-20.9 12.2-27.8 22-6.9 9.8-10.4 21.6-10.4 35.5 0 17.8 7.5 31.5 22.4 41.2 14.1 9.1 28.9 11.4 44.4 6.8 17.9-5.2 30-17.9 36.4-38.1 3-9.3 4.5-19.7 4.5-31.3v-50.2c-12.6.4-24.4 1.6-35.5 3.7-11.1 2.1-22.4 5.6-34 10.4z"></path>
                                      </svg>{" "}
                                      AMAZON PRODUCT LISTING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb brbbb hoverable p-0">
                              <a href="/flipkart-product-listing-services-india">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M3.833 1.333a.993.993 0 0 0-.333.061V1c0-.551.449-1 1-1h14.667c.551 0 1 .449 1 1v.333H3.833zm17.334 2.334H2.833c-.551 0-1 .449-1 1V23c0 .551.449 1 1 1h7.3l1.098-5.645h-2.24c-.051 0-5.158-.241-5.158-.241l4.639-.327-.078-.366-1.978-.285 1.882-.158-.124-.449-3.075-.467s3.341-.373 3.392-.373h3.232l.247-1.331c.289-1.616.945-2.807 1.973-3.693 1.033-.892 2.344-1.332 3.937-1.332.643 0 1.053.151 1.231.463.118.186.201.516.279.859.074.352.14.671.095.903-.057.345-.461.465-1.197.465h-.253c-1.327 0-2.134.763-2.405 2.31l-.243 1.355h1.54c.574 0 .781.402.622 1.306-.17.941-.539 1.36-1.111 1.36H14.9L13.804 24h7.362c.551 0 1-.449 1-1V4.667a1 1 0 0 0-.999-1zM20.5 2.333A.334.334 0 0 0 20.167 2H3.833a.334.334 0 0 0-.333.333V3h17v-.667z"></path>
                                      </svg>{" "}
                                      FLIPKART PRODUCT LISTING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="lieventAdd" className="daimond bbflash p-0 my-3">
                          <a className="setancr" href="#" style={{ textTransform: "uppercase" }}>
                            Desiging{" "}
                          </a>
                          <ul className="ma p-0 py-4 ulpadder padding0inmedia" style={{ height: "100%" }}>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/web-design-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6 48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z"></path>
                                      </svg>{" "}
                                      WEB DESIGNING SERVICES
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/web-designing-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M19.14 5.876a1.012 1.012 0 00-.442-.442L9.744.171c-.329-.226-.843-.226-1.203-.01L5.148 2.145c-.051.041-.102.082-.144.123a1.086 1.086 0 00-.288.72l.01 6.569-.02.215.062.123a.478.478 0 00.195.206.516.516 0 00.555.01L8.859 8.2a.573.573 0 00.175-.175l.082-.165V4.643l2.251 1.326 3.536 2.077a.413.413 0 01.164.185.442.442 0 01.062.226v7.052a.52.52 0 01-.072.257c-.041.072-.082.123-.154.154l-4.225 2.488-1.573.925v-3.228l1.953-1.172 1.049-.627.185-.175.021-.051a.542.542 0 00.062-.247V9.999a.51.51 0 00-.092-.288l-.062-.123-.144-.072c-.093-.041-.175-.041-.247-.041l-.175.01-6.363 3.865a1.129 1.129 0 00-.442.463 1.281 1.281 0 00-.144.607v6.559c0 .257.103.514.329.75.082.062.154.113.236.164l3.341 1.943c.186.113.381.164.597.164.216 0 .422-.051.596-.164l8.882-5.212c.195-.103.36-.267.442-.432.113-.185.164-.401.164-.617V6.483a1.236 1.236 0 00-.153-.607zM8.387 7.624L5.447 9.32V2.988c0-.072.031-.154.092-.216l.216-.123 2.632 1.563v3.412zm-2.951 6.795c0-.093.021-.185.062-.278a.409.409 0 01.175-.175l5.973-3.629v3.392l-.956.576-2.313 1.388-2.94 1.778v-3.052zm0 6.559v-2.663l2.94-1.768v3.218l-2.632 1.552-.103-.062c-.051-.031-.093-.051-.103-.062-.061-.071-.102-.143-.102-.215zm13.128-3.403a.518.518 0 01-.072.257.342.342 0 01-.165.154l-8.892 5.222a.405.405 0 01-.452 0l-2.508-1.47 4.575-2.693v-.01l4.215-2.478a.998.998 0 00.432-.442 1.13 1.13 0 00.175-.606V8.457c0-.216-.062-.421-.165-.596a1.189 1.189 0 00-.432-.442l-3.536-2.077-3.352-1.974-1.923-1.141L8.911.788a.446.446 0 01.452 0l8.985 5.294a.319.319 0 01.154.154.517.517 0 01.062.247v11.092z"></path>
                                      </svg>{" "}
                                      WEBSITE DESIGNING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/web-redesigning-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M20.97 7.27a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44l-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"></path>
                                      </svg>{" "}
                                      WEBSITE REDESIGNING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/website-maintenance-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0zm0 .75c2.871 0 5.482 1.082 7.469 2.85H4.53A11.197 11.197 0 0 1 12 .75zm-7.186 3.6h14.372L12 18.723 4.814 4.35zM3.6 4.53V19.47A11.197 11.197 0 0 1 .75 12c0-2.87 1.082-5.481 2.85-7.468zm16.8 0A11.197 11.197 0 0 1 23.25 12c0 2.871-1.082 5.482-2.85 7.469V4.53zM4.35 5.1l7.275 14.55H4.35V5.1zm15.3 0v14.55h-7.275L19.651 5.1zM4.533 20.4H19.469A11.197 11.197 0 0 1 12 23.25a11.197 11.197 0 0 1-7.468-2.85z"></path>
                                      </svg>{" "}
                                      WEBSITE MAINTENANCE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/ui-ux-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M20.97 7.27a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44l-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"></path>
                                      </svg>{" "}
                                      UI UX DESIGNING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="lieventAdd" className="daimond bbflash p-0 my-3">
                          <a className="setancr" href="#">
                            WEB DEVELOPMENT{" "}
                          </a>
                          <ul id="nbydef" className="ma p-0 py-4 nbydef ulpadder padding0inmedia" style={{ height: "100%" }}>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/web-development-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                      </svg>{" "}
                                      WEB DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/ecommerce-website-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z"></path>
                                      </svg>{" "}
                                      E-COMMERCE PORTAL
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/shopify-development">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z"></path>
                                      </svg>{" "}
                                      SHOPIFY WEBSITE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/wordpress-website-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"></path>
                                        <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"></path>
                                        <path
                                          fillRule="evenodd"
                                          d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"
                                        ></path>
                                      </svg>{" "}
                                      WORDPRESS WEBSITE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/magento-website-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1 65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0l221.5 127.9zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6.1 255.9 94.9 54.9 95.1-54.9v-256l-63.4-36.6v255.9z"></path>
                                      </svg>{" "}
                                      MAGENTO WEBSITE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/drupal-website-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M319.5 114.7c-22.2-14-43.5-19.5-64.7-33.5-13-8.8-31.3-30-46.5-48.3-2.7 29.3-11.5 41.2-22 49.5-21.3 17-34.8 22.2-53.5 32.3C117 123 32 181.5 32 290.5 32 399.7 123.8 480 225.8 480 327.5 480 416 406 416 294c0-112.3-83-171-96.5-179.3zm2.5 325.6c-20.1 20.1-90.1 28.7-116.7 4.2-4.8-4.8.3-12 6.5-12 0 0 17 13.3 51.5 13.3 27 0 46-7.7 54.5-14 6.1-4.6 8.4 4.3 4.2 8.5zm-54.5-52.6c8.7-3.6 29-3.8 36.8 1.3 4.1 2.8 16.1 18.8 6.2 23.7-8.4 4.2-1.2-15.7-26.5-15.7-14.7 0-19.5 5.2-26.7 11-7 6-9.8 8-12.2 4.7-6-8.2 15.9-22.3 22.4-25zM360 405c-15.2-1-45.5-48.8-65-49.5-30.9-.9-104.1 80.7-161.3 42-38.8-26.6-14.6-104.8 51.8-105.2 49.5-.5 83.8 49 108.5 48.5 21.3-.3 61.8-41.8 81.8-41.8 48.7 0 23.3 109.3-15.8 106z"></path>
                                      </svg>{" "}
                                      DRUPAL WEBSITE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/joomla-web-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M16.719 14.759L14.22 17.26l-2.37 2.37-.462.466c-1.368 1.365-3.297 1.83-5.047 1.397-.327 1.424-1.604 2.49-3.13 2.49C1.438 23.983 0 22.547 0 20.772c0-1.518 1.055-2.789 2.469-3.123-.446-1.76.016-3.705 1.396-5.08l.179-.18 2.37 2.37-.184.181c-.769.779-.769 2.024 0 2.789.771.78 2.022.78 2.787 0l.465-.465 2.367-2.371 2.502-2.506 2.368 2.372zm.924 6.652c-1.822.563-3.885.12-5.328-1.318l-.18-.185 2.365-2.369.18.184c.771.768 2.018.768 2.787 0 .765-.765.769-2.01-.004-2.781l-.466-.465-2.365-2.37-2.502-2.503 2.37-2.369 2.499 2.505 2.367 2.37.464.464c1.365 1.36 1.846 3.278 1.411 5.021 1.56.224 2.759 1.56 2.759 3.18 0 1.784-1.439 3.21-3.209 3.21-1.545 0-2.851-1.096-3.135-2.565l-.013-.009zM6.975 9.461l2.508-2.505 2.37-2.369.462-.461C13.74 2.7 15.772 2.251 17.58 2.79c.212-1.561 1.555-2.775 3.179-2.775 1.772 0 3.211 1.437 3.211 3.209 0 1.631-1.216 2.978-2.79 3.186.519 1.799.068 3.816-1.35 5.234l-.182.184-2.369-2.369.184-.184c.769-.77.769-2.016 0-2.783-.766-.766-2.011-.768-2.781.003l-.462.461-2.37 2.369-2.505 2.502-2.37-2.366zm-2.653 2.647l-.461-.462C2.43 10.215 1.986 8.17 2.529 6.358 1.1 6.029.03 4.754.03 3.224.03 1.454 1.47.015 3.24.015c1.596 0 2.92 1.166 3.17 2.691 1.73-.405 3.626.065 4.979 1.415l.184.185-2.37 2.37-.183-.181c-.77-.765-2.016-.765-2.785 0-.771.781-.77 2.025-.005 2.79l.465.466 2.37 2.369 2.505 2.505-2.367 2.37-2.51-2.505-2.371-2.37v-.012z"></path>
                                      </svg>{" "}
                                      JOOMLA WEBSITE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/web-portal-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        version="1.1"
                                        viewBox="0 0 32 32"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M17.859 9.882l4.544 2.479v7.023l-6.61 3.718-6.197-3.718v-5.784l-4.131-2.066v10.742l10.328 6.197 10.742-6.197v-12.394l-4.958-2.479-3.718 2.479zM19.512 6.164l-4.131-2.066-3.718 2.479 4.131 2.066 3.718-2.479z"></path>
                                      </svg>{" "}
                                      PORTAL WEBSITE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/content-management-system-service">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h7v14H4zm9 0V5h7l.001 14H13z"></path>
                                        <path d="M15 7h3v2h-3zm0 4h3v2h-3z"></path>
                                      </svg>{" "}
                                      CMS WEBSITE
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="lieventAdd" className="daimond bbflash p-0 my-3">
                          <a className="setancr" href="#">
                            SOFTWARE{" "}
                          </a>
                          <ul id="nbydef" className="ma p-0 py-4 nbydef ulpadder padding0inmedia" style={{ height: "100%" }}>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/software-development-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M6.375 23.999c-.95 0-1.95-.749-1.95-2.2v-3.4c0-1.349.85-2.899 2.05-3.548l4.75-2.8-4.75-2.8C5.325 8.5 4.425 7 4.425 5.65V2.2c0-1.45 1-2.2 2.002-2.2.4 0 .849.1 1.249.35l10.7 6.35c.75.45 1.15 1.149 1.15 1.849 0 .75-.452 1.45-1.15 1.85l-2.55 1.5 2.55 1.501c.75.45 1.2 1.15 1.2 1.85 0 .75-.452 1.45-1.2 1.85L7.674 23.65c-.45.25-.85.35-1.3.35zm7.15-10.599l-5.85 3.45c-.45.25-.9 1.05-.9 1.55v3.05l10.15-6zM6.775 2.6v3.05c0 .5.45 1.3.9 1.55l5.85 3.45 3.45-2.05z"></path>
                                      </svg>{" "}
                                      SOFTWARE DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/mlm-software-development">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10 16v5"></path>
                                        <path d="M14 16v5"></path>
                                        <path d="M9 9h6l-1 7h-4z"></path>
                                        <path d="M5 11c1.333 -1.333 2.667 -2 4 -2"></path>
                                        <path d="M19 11c-1.333 -1.333 -2.667 -2 -4 -2"></path>
                                        <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                      </svg>{" "}
                                      MLM SOFTWARE DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/crm-software-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M22.565 9.054c.248-.477.45-1.125.235-1.786-.25-.766-.939-1.275-2.051-1.511l-7.052-1.5L6.496.405C6.418.363 5.717 0 4.951 0 4.38 0 3.888.198 3.527.571c-.337.349-.539.834-.603 1.444a3.184 3.184 0 0 0-.199-.006c-1.089 0-1.648.456-1.926.839C.369 3.44.315 4.241.638 5.23l2.649 8.118.251 7.033c.044 1.222.719 2.536 2.098 2.537.264 0 .537-.051.82-.15.328.556.92 1.232 1.864 1.232.666 0 1.324-.357 1.956-1.063l5.11-5.697 6.783-4.283c.147-.094 1.444-.95 1.398-2.229-.022-.642-.362-1.202-1.002-1.674zM7.396 20.166l-2.328-7.134-.316-8.847 8.326 1.771 6.771 3.622-5.63 6.279-6.823 4.309zM20.377 7.51c.545.116.709.279.72.313.021.063-.017.196-.087.344l-1.623-.868.99.211zM4.951 1.792c.269 0 .607.145.7.193l1.738.929-2.693-.573c.013-.323.08-.484.12-.526.012-.011.062-.023.135-.023zm-2.61 2.882c-.195-.595-.093-.773-.092-.774.019-.026.167-.099.476-.099.083 0 .159.005.221.011l.109 3.05-.714-2.188zm2.988 15.642l-.029-.798.514 1.574a.68.68 0 0 1-.178.034c-.146 0-.293-.5-.307-.81zm3.614 1.424c-.414.463-.62.468-.622.468-.058 0-.185-.132-.301-.317l1.818-1.148-.895.997zm12.27-10.299l-1.445.913 1.695-1.89c.249.174.313.298.314.329.006.133-.287.468-.564.648z"></path>
                                      </svg>{" "}
                                      CRM SOFTWARE DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/emr-software-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title></title>
                                        <path d="M12.0214 1.4122c-1.064 0-.6118 1.5783-.5273 2.0925 0 .025.0857 3.5707.1024 4.3789.1619-.0429.3226-.0822.4761-.119l.3214-.081c.0154-.782.094-4.1658.0964-4.1837.0702-.551.6272-2.0877-.469-2.0877zm-.3118 12.0405c.119-.0405.238-.0762.3452-.1107l.2297-.0714c0-.2274.069-3.372.0809-3.9433a7.2271 7.2271 0 0 0-.732.2107c.0083.4285.0702 3.5719.0762 3.9147zm.3928 1.1926c-.0405.0143-.144.0583-.2095.081-.0655.0226-.1571.0606-.1571.0845 0 .0238.0666 3.6195.0666 3.6992 0 .744.3785.7487.3785 0 0-.0535.0762-3.9159.0762-3.9159s-.0905.0298-.1547.0512zm-.8558-10.1468a5.4953 5.4953 0 0 0-.8332.3392c-.2975.0988-.7141.119-1.151.588a5.8905 5.8905 0 0 0-.3963.5094c-.131.188-.1369.4904-.238.6535-.1381.238-.1048.3701-.1048.3701v.0072a.632.632 0 0 1-.1595.2952.6046.6046 0 0 1-.5546.2213c.1975.0988.476-.0392.476-.0392a3.6433 3.6433 0 0 0-.1047.3927c.2214-.501.425-.6843.488-.7355.0952.0214.2928.013.6594-.1976.4142-.238 1.0367-.6249 1.2129-.87a1.6175 1.6175 0 0 1 .7332-.5535c-.0131-.3773-.0203-.7035-.0274-.9808zM9.4993 6.0637L9.284 6.11l.257-.413.3.0095zm1.2795 8.64c0 .4665.3452.714.6892.9128 0-.0785-.0143-.801-.0143-.8129.0071-.144.1464-.2309.2595-.2845a5.6 5.6 0 0 1 .5463-.2082c.1023-.0358.1892-.0703.2868-.0988.6904-.2083 1.489-.4761 1.489-1.3093 0-.8332-.6844-1.1902-1.4283-1.4438 0 .2678-.013.6594-.019.9296.3166.119.526.275.526.5142 0 .3011-.3213.476-.5486.5618a5.9252 5.9252 0 0 1-.2797.0976c-.1833.0571-.381.119-.5654.1904a2.7126 2.7126 0 0 0-.2797.119c-.3285.1643-.663.406-.6618.832zm4.5753-8.1496c0-.8534-.619-1.8009-2.1365-2.1353a3.6528 3.6528 0 0 0-.463-.0536c0 .1286-.0095.4237-.0095.4237 0 .0929-.0095.4345-.012.5083a2.1424 2.1424 0 0 1 .2917.0404c.882.2107 1.1974.7142 1.1974 1.2165 0 .8105-.6927 1.1164-1.5473 1.3473l-.2821.0738c-.2583.0643-.5237.1262-.7868.1964a10.782 10.782 0 0 0-.2797.0797c-.9438.288-1.7556.7427-1.7556 1.9044 0 1.1617.926 1.5878 1.8294 1.8663q-.0083-.4987-.019-1.0022c-.3988-.1868-.6797-.4332-.6797-.8474 0-.4142.256-.6499.6475-.8332a3.0192 3.0192 0 0 1 .2786-.1083c.225-.0762.476-.1416.7439-.2059l.282-.0678c1.2724-.2976 2.7007-.6963 2.7007-2.4031zm-2.8482 9.5362c.4284.2166.8236.5165.989 1.0843.0726-.9403-.4546-1.3474-.9771-1.6223l-.012.538zM19.5199 5.29c.4595.5475 1.2629.87 1.733 1.4188-.3368-1.6223-1.589-2.947-3.0696-3.2637.7225.544.8784 1.2998 1.3366 1.845zM1.7235 9.4023c1.02-2.2198 2.5423-1.7497 3.1862-3.8647-.357.6487-2.0234.9224-2.7982 2.5852.394-.988.1964-2.4995.863-3.3148-1.9926 1.47-1.144 3.848-1.251 4.5943zm1.8472 5.324c.1833.864-.357 2.1114.5 3.304-.8856-.9926-2.7614-1.245-3.5256-2.7542.9522 3.6898 3.4517 2.928 4.5694 3.729-.9237-1.327-.1679-2.209-1.5438-4.2789zm-.2868 2.315c-.5463-2.0603.4273-2.7745-.3166-4.7503-.0774 1.114-.8201 1.6568-.319 3.6898C1.7639 14.2597.3963 13.6169 0 12.4338c.0274 3.2351 2.6269 3.7148 3.2839 4.6075zm3.992 3.4517c-.7653-1.0594-.238-1.658-2.3923-3.5815.4546.7023-.0143 1.5854 1.4354 2.959-1.4188-.8332-3.3755-.4761-4.3194-1.5962 1.6211 3.103 4.4694 1.8366 5.2763 2.2222zm10.4051-.6225c1.4497-1.3736.9808-2.2615 1.4354-2.959-2.1495 1.9235-1.627 2.5221-2.3923 3.5815.807-.3857 3.6552.8807 5.2751-2.2187-.9427 1.1213-2.8994.763-4.3182 1.5997zm2.2484-1.8437c.8534-1.1903.3166-2.44.4999-3.3041-1.376 2.0698-.6201 2.9518-1.5473 4.2848 1.1236-.801 3.6135-.0416 4.5693-3.729-.763 1.5069-2.6364 1.7592-3.522 2.7519zm-3.435 2.6126a10.617 10.617 0 0 0-2.3508-.3571 5.6834 5.6834 0 0 0-2.1424.3642 5.687 5.687 0 0 0-2.1424-.3642 10.617 10.617 0 0 0-2.3508.357c-1.2938.344-2.4114.6106-3.3862.119.9343.8332 2.0234 1.1249 3.5981.9523 1.3093-.1405 2.3698-.7963 3.6052-.7868h.0488a6.6023 6.6023 0 0 0-2.0377 1.5842l.5952.0798s.6272-1.2605 2.0698-1.589c1.4426.3285 2.0698 1.589 2.0698 1.589l.5951-.0798a6.6213 6.6213 0 0 0-2.0377-1.5758h.0488c1.2355-.0096 2.2936.6463 3.604.7867 1.5748.1702 2.665-.1262 3.5994-.9522-.9748.4868-2.0925.2202-3.3863-.1238zM3.0553 10.0569c-.5333 1.0236-1.3617 1.2581-1.27 3.3767-.45-1.883-1.5188-2.5804-1.5057-3.7813-.7427 3.1303 1.2426 3.5016 1.752 4.8133-.075-1.8794 1.1248-2.259 1.0236-4.4087zm.745-2.4162c-.1856.2595-.3154.3702-.8105.7785a4.0194 4.0194 0 0 0-1.4426 2.353c.0512-1.1473-.6582-2.7958-.1869-3.998-1.8246 2.577.1048 4.1207.1726 5.0538.4737-1.796 1.5616-1.8103 2.2674-4.1873zm18.6511 3.1316A4.0254 4.0254 0 0 0 21.01 8.4192c-.4951-.4083-.6249-.519-.8105-.7785.7058 2.3805 1.7937 2.3912 2.2614 4.1873.0679-.9331 1.9972-2.4769.1714-5.0537.4761 1.202-.232 2.8506-.1809 3.998zm1.5473 1.6663c-.3963 1.1831-1.764 1.8258-2.6483 3.5517.5011-2.0377-.238-2.5805-.319-3.6898-.7439 1.9782.238 2.6888-.3166 4.7503.6582-.9022 3.2577-1.3819 3.2851-4.617zm-3.0506-2.3817c-.1011 2.1496 1.0998 2.5293 1.0236 4.404.5106-1.3093 2.4995-1.683 1.752-4.8134.0143 1.201-1.0545 1.9044-1.5008 3.7754.0833-2.1079-.7451-2.3424-1.2748-3.366zM4.4824 5.296c.4607-.5474.6166-1.3009 1.3379-1.8448-1.4807.3166-2.7376 1.6413-3.0697 3.2636.463-.5546 1.2677-.8772 1.727-1.4247zm14.6126.2476c.644 2.1151 2.1663 1.645 3.1851 3.8648-.106-.7463.7427-3.1244-1.2497-4.5944.6665.8165.469 2.327.8629 3.3148-.7773-1.6687-2.44-1.9424-2.803-2.5911zm-5.1692 1.195a4.9895 4.9895 0 0 0-1.2176-.3273v.2714a4.761 4.761 0 0 1 1.1188.307.7141.7141 0 0 0 .0988-.251zM13.6175 4.12l.081-.0726-.1548-.0655-.407-.0083-.106.0738-.238-.0202v.0583a4.136 4.136 0 0 1 .419.044l.1987-.0178zm-.789 8.778c0-.069-.0917-.1368-.2274-.2011h-.025c0 .056 0 .332-.0084.4666.1679-.075.2607-.156.2607-.2655zM8.1126 7.7205a1.2997 1.2997 0 0 1 .0345-.1488.6891.6891 0 0 1-.1666.0167zm3.8956 11.9738a8.3031 8.3031 0 0 0 .8463-16.5598c0 .0155 0 .0321-.0095.0476-.0167.081-.0322.1535-.044.2178a8.0163 8.0163 0 0 1 4.8359 2.2615l-.9165.9165.0345-.162-.119-.0523-.1643-.0095.0345-.106-.1106-.3749-.2286-.2511-.7141-.3773-.062.0655-.1296.038a2.1424 2.1424 0 0 1 .3785 1.2034v.163l.357.4464-.1666.038.1107.1667-.313.3118-.1262-.238a2.133 2.133 0 0 1-.238.4678l.0702.0642-.9653.9653a3.2917 3.2917 0 0 0-.181-.1607 4.5833 4.5833 0 0 1-.2832.119l.0821.0643-.0488.0488-.119.0631-.0417.119-.0702-.0702-.2035.0679.056.0892.1404-.0369.0916.0072.0072-.05.0702-.0357.0214-.0417.1262-.0357h.0988c.019.0167.0392.0345.057.0524l-.388.369-.0285-.0405-.4.0654-.0892.0893-.0869.0107.2476-.238-.088-.044-.2322.3094.0679-.0071v.119l.0845.0333.0166.119-.1392-.0273-.1452.0261-.3571-.1797-.0286 1.4164c.8332.2785 1.708.6808 1.708 1.7378a1.3093 1.3093 0 0 1-.595 1.1164l-.018.0119-.0261.0179c-.3357.2213-.7665.3404-1.1403.457l-.0107.7403c.5951.2952 1.3152.7249 1.2486 1.9544-.0084.3023-.1262.3856-.2274.413a6.2511 6.2511 0 0 1-1.0712.1702v.2702a6.6499 6.6499 0 0 0 4.1397-1.8282l.964.9641a8.0186 8.0186 0 0 1-11.1049.0226l.9641-.964a6.6451 6.6451 0 0 0 4.0814 1.8031v-.2702a6.3785 6.3785 0 0 1-3.8945-1.7222l.257-.2583.3572.0405.188-.2024.4928.0167.0726-.1702-.0179-.0726a4.999 4.999 0 0 0 2.5102 1.0033v-.2713a4.7526 4.7526 0 0 1-2.7042-1.2403l.9653-.9652a3.4338 3.4338 0 0 0 .782.5249.913.913 0 0 1 .0976-.2536 3.1208 3.1208 0 0 1-.6892-.463l.9677-.9664a1.7687 1.7687 0 0 0 .5166.2868v-.2904a1.4842 1.4842 0 0 1-.319-.1893l.2725-.2725a6.7378 6.7378 0 0 1-.288-.0929l-.1833.1833a1.4759 1.4759 0 0 1-.2309-.344 3.2815 3.2815 0 0 1-.476-.2547 1.8675 1.8675 0 0 1-.9035-1.6401 1.9687 1.9687 0 0 1 .3904-1.2498l-.9617-.9617a4.7502 4.7502 0 0 1 2.5757-1.2664c0-.0928 0-.1845-.006-.2714a5.0204 5.0204 0 0 0-2.76 1.3498l-.1631-.1595a4.504 4.504 0 0 0-.1297.2511l.1023.1036a5.0145 5.0145 0 0 0-1.364 3.3552H5.6096a6.382 6.382 0 0 1 1.7699-4.3253l.4332.4345a.5487.5487 0 0 0 .062 0 .6546.6546 0 0 0 .2463-.0715l-.551-.551a6.488 6.488 0 0 1 .9521-.7594 1.7925 1.7925 0 0 1 .0679-.2 3.2053 3.2053 0 0 1 .2083-.2797 6.6653 6.6653 0 0 0-1.4188 1.0462l-.9641-.964a7.9984 7.9984 0 0 1 4.7729-2.2377 2.1298 2.1298 0 0 1-.012-.0595c-.0118-.0631-.0261-.1333-.0392-.2071a8.3043 8.3043 0 0 0 .8665 16.5622zm1.7985-5.731v-.0071zm4.0206-8.108a8.0056 8.0056 0 0 1 2.2198 5.4561h-1.37a6.626 6.626 0 0 0-.7141-2.9137l.0119-.0238.094.05.0226-.0726-.238-.4273-.2892-.3999-.3428-.2797c-.119-.1452-.238-.2857-.3654-.4213zm-1.7437 1.7462l.3273.0143.0786.094-.0393.1392.4511.2857.0893-.0107.5832.6665.238-.0833a6.3559 6.3559 0 0 1 .5952 2.6042h-1.364a4.9728 4.9728 0 0 0-.1274-1.0378l.063-.0846.0846-.4272-.0643-.4595-.1642-.5284-.381-.557.093.0487.0463-.0464-.3059-.2071-.0202.0678.3059.4369.1726.357.119.3571.0393.238.063.4024-.119.0083s-.132-.2464-.1725-.3476l.0607-.0916-.119-.1666V9.107l-.0834-.1047-.1035.013a2.924 2.924 0 0 0-.119-.2035l.0737.037.019-.0191-.0392-.0857.0893-.05-.0405-.05-.1321.05.0488-.207-.0786-.0453-.0702.1654a5.0752 5.0752 0 0 0-.4963-.6308zm-.2737 3.1981l.2451-.1333.25-.038.0547-.119.1393-.0834.0536-.119.0428-.2012a4.071 4.071 0 0 1 .0548.2155l-.1321.394v.1332l.1916-.2559a4.611 4.611 0 0 1 .0678.7142h-1.1902l-.0274-.1036.1393-.1107.0273-.0666.0607-.0452.162-.0167.0166-.0714zm-1.6378-.9367l.119-.0285v-.0286l-.119-.0821.0416-.2571.1464-.1464a3.2327 3.2327 0 0 1 .2536.3297l-.0512.1583-.1333-.0952-.1012.0273.05.094h.05l-.056.1393-.038-.056zm.5225 4.5313l-.2952-.0833-.088.032-.1667-.1273-.1571-.056c.0774-.0559.1524-.119.225-.176l.238.1713.1857.0976.0916.0917zm-.15-5.2633l.9653-.9653a4.8121 4.8121 0 0 1 .5951.8023l-.119.0333.006.2154.357.2286a4.6657 4.6657 0 0 1 .2262.6094l-.0631.0928-.131.0833-.032.2-.0893.05-.075.088-.075-.0273h-.1333l.0774-.1048.0559-.2725.088-.0548-.2487-.2559-.194.0655-.044.182-.119.1322-.1274-.1048-.0452-.1118.0726-.0453.0404.0738.0595-.0226-.0261-.119h-.0845l-.006.05-.056.0107-.3035-.3559-.1023-.0774.0393-.0428.0904-.031-.0833-.0333s-.106.0238-.119.0238l.0607.0762h-.1524a3.2982 3.2982 0 0 0-.3047-.3928zm.4916 5.136l-.131-.131.1-.1298.1262-.257-.0488-.0715.0833-.1904-.0095-.1714-.05-.1773-.119-.0417-.044.1-.0715-.019a3.235 3.235 0 0 0 .2857-.4988l.119-.0523.069-.0929.0334.0381.0833-.1-.0666-.0833.0607-.0167.1118.0453h.2107l.1274-.0667.3332-.088-.063-.1107-.0215-.1345.1786.0785.0666-.0393-.0333-.138-.2154.0869-.238-.05-.1834-.375h1.0439a4.7514 4.7514 0 0 1-1.3176 3.1042l-.1429-.144.062-.1917-.112-.4225zm.1845 2.6625l.1285-.2762-.05-.119.1893-.1666v-.1l-.1619-.1012.1333-.2654.2-.2618-.2-.2155h-.15l-.0928-.1511a7.5411 7.5411 0 0 0 .238-.206l.9654.9653a6.4725 6.4725 0 0 1-1.1998.8987zm1.2045-1.2736l.1071-.119-.1011-.5285-.069-.0273.0428-.0893-.2285-.0714-.044.188-.0227.238-.0476.0441-.4166-.4166a5.0192 5.0192 0 0 0 1.3973-3.2934h1.3653a6.3737 6.3737 0 0 1-1.7973 4.2587zm.3761.375a6.6463 6.6463 0 0 0 1.877-4.4492h1.364a8.008 8.008 0 0 1-2.2757 5.4144zm-8.2126-1.3224a5.1601 5.1601 0 0 1-.2833-.319l.0417-.3452-.144-.3308-.0358-.5178-.1618-.3142.0333-.1952-.1952-.375-.1702-.0856.069-.1988-.0702-.1571.0702-.1798h.1869l.0654-.1083h.319l.0488.094-.0595.3298-.038.0559.119.2607-.0786.0428-.0548-.069-.0238.0262.0548.1547.094.181h.044l.031-.1762-.0452-.0596v-.1095l-.0143-.2261.0595-.3975-.0643-.1072h.2286a3.3898 3.3898 0 0 0 .939 2.1627zm-.9046-2.6673l-.1286.2023h-.2213l-.0179-.013a4.849 4.849 0 0 1-.069-.6488h.4106l-.0988.3285zm.4487-.9368l.025-.2713.1619-.094.2892.0511.044.0524a3.2136 3.2136 0 0 0-.044.469h-.3273zm1.389 1.02l.0679-.0344.1702.1345-.0774.063.2012.1334-.0048-.1429.1071-.1773.1119.119.119.1643-.219.0452.094.188.144-.0761-.0142-.0595.1071-.0727.063-.2975a1.7746 1.7746 0 0 0 .3131.476l-.964.9642a3.1196 3.1196 0 0 1-.8451-1.8116l.1975.2107h.1857zm-.9926-3.9825l.964.9653a3.441 3.441 0 0 0-.5117.7368h-.0667l-.1357.0416h-.0476l-.144.1345.182-.038.1643-.0417-.0285.063-.144.0882h-.0726l-.212.1618-.2046-.0166-.2964.5522.0583.1107-.1607.1786-.025.238h-.6046a4.7514 4.7514 0 0 1 1.2855-3.1744zM7.283 15.4202l.3059.1797.063.0428-.2213.2214q-.1548-.1607-.3-.332zm-.306-3.8386c0 .1321.0168.2643.031.394l-.1666.038-.0345.1691-.3476.4428.0084.6082-.3571.119h-.1952a6.3654 6.3654 0 0 1-.3047-1.7723zm-1.3473 1.764l-.0797-.0155-.075-.0845-.3833-.0333.119.1606-.357-.0666.0928-.0857-.0869-.0857-.2559.1119-.0916.169.0357.3892.2952.6999.1416.2213.081.0298-.2226-.4225-.0488-.2155.05-.0523-.031-.119.1345.0178.206.3118.0511.0203v-.2274l.0833.0488.0179.119.2166.0572.0905-.0643.031.0214v.1655l.0951.119.119.0262.2524.4273.1535.0428.0476-.2a6.7034 6.7034 0 0 0 .9403 1.2141l-.964.9641a8.0127 8.0127 0 0 1-2.3115-5.4287h1.3652a6.6451 6.6451 0 0 0 .288 1.764zm.5952-7.514l.964.964a6.6546 6.6546 0 0 0-1.8496 4.5158h-1.364A8.008 8.008 0 0 1 6.219 5.8316zm9.879-.4975l-.0822-.1333-.1785-.0893-.1393.106.1786.0951.1916.1464zm-.8344 3.8504v.1047l.238-.0702.0726-.144-.163-.2143.0869-.1309.2202.1571.0404-.0321-.044-.031-.05-.0952.0905-.0523-.0881-.119-.2071.1047-.069.1297-.0417.113.0916.1536-.0333.0714zm-9.8671 6.1202l.0179-.0619-.119-.2666-.1453-.0536zm5.5798-5.1276c0 .2286.1393.3904.3928.5297v-.1024l-.1595-.1594.0845-.1536.069-.019c0-.2666-.0106-.5654-.0118-.6082h-.012c-.2356.1309-.363.288-.363.513Z"></path>
                                      </svg>{" "}
                                      EHR/ EMR SOFTWARE DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/mobile-application-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
                                        <path
                                          fillRule="evenodd"
                                          d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>{" "}
                                      MOBILE APPLICATION DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/hybrid-mobile-app-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                        <path d="M20 11v2"></path>
                                        <path d="M7 12h-.01"></path>
                                      </svg>{" "}
                                      HYBRID APPLICATION DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/custom-software-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                                      </svg>{" "}
                                      CUSTOM SOFTWARE DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/ios-app-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"></path>
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"></path>
                                      </svg>{" "}
                                      IOS DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/android-app-development-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M144 268.4V358c0 6.9 4.5 14 11.4 14H184v52c0 13.3 10.7 24 24 24s24-10.7 24-24v-52h49v52c0 7.5 3.4 14.2 8.8 18.6 3.9 3.4 9.1 5.4 14.7 5.4h.5c13.3 0 24-10.7 24-24v-52h27.6c7 0 11.4-7.1 11.4-13.9V192H144v76.4zM408 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24zM104 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z"></path>
                                        <g>
                                          <path d="M311.2 89.1l18.5-21.9c.4-.5-.2-1.6-1.3-2.5-1.1-.8-2.4-1-2.7-.4l-19.2 22.8c-13.6-5.4-30.2-8.8-50.6-8.8-20.5-.1-37.2 3.2-50.8 8.5l-19-22.4c-.4-.5-1.6-.4-2.7.4s-1.7 1.8-1.3 2.5l18.3 21.6c-48.2 20.9-55.4 72.2-56.4 87.2h223.6c-.9-15.1-8-65.7-56.4-87zm-104.4 49.8c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6 13.3-13.5 13.3zm98.4 0c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6.1 13.3-13.5 13.3z"></path>
                                        </g>
                                      </svg>{" "}
                                      ANDROID APPLICATION DEVELOPMENT
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="lieventAdd" className="my-3 p-0 bbflash daimond ">
                          <a className="setancr" href="#" style={{ textTransform: "uppercase" }}>
                            Multimedia{" "}
                          </a>
                          <ul id="nbydef" className="ma p-0 py-4 ulpadder nbydef padding0inmedia" style={{ height: "100%" }}>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/multimedia-presentation-services">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path>
                                      </svg>{" "}
                                      MULTIMEDIA PRESENTATION
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/catalogue-design-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill="none"
                                          stroke="#000"
                                          strokeWidth="2"
                                          d="M5,6 L1,4.5 L1,18.443038 L12,23 L23,18.443038 L23,4 L19,6 M5,16 L5,2 L12,5 L19,2 L19,16 L12,19 L5,16 Z M11.95,5 L11.95,19"
                                        ></path>
                                      </svg>{" "}
                                      CATALOGUE DESIGNING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/logo-designing-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M241.239 303.936c-15.322-10.357-30.742-20.569-46.062-30.93-2.03-1.373-3.43-1.472-5.502-.029l-38.871 26.154C181.966 319.905 244 361.317 244 361.317v-53.786c-.012-1.224-1.553-2.78-2.761-3.595zM195.092 240.666c15.454-10.16 30.851-20.409 46.109-30.86 1.486-1.018 2.775-3.509 2.799-5.334v-51.706s-62.033 41.124-93.262 61.942c13.7 9.159 26.671 17.913 39.787 26.443 1.02.662 3.396.284 4.567-.485zM269.838 209.354a4521.517 4521.517 0 0 0 47.627 31.815c.916.604 2.92.602 3.839 0l39.751-26.467L268 152.484v53.35c.01 1.201.805 2.821 1.838 3.52zM258.109 230.369c-1.21-.802-3.611-.528-4.743.168-4.817 2.962-9.463 6.203-14.164 9.355-8.248 5.53-25.356 17.023-25.356 17.023l38.842 25.865c1.748 1.157 4.436 1.22 6.26.111l39.014-25.993c.001 0-34.079-22.701-39.853-26.529zM141 237.116v39.609l29.622-19.838z"></path>
                                        <path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm139 265.006c0 5.785-2.652 9.868-7.511 13.094a38019.909 38019.909 0 0 0-123.286 82.188c-5.854 3.918-11.174 3.754-16.984-.137-40.783-27.314-81.719-54.546-122.625-81.676-5.11-3.389-7.594-7.557-7.594-13.73v-79.729c0-6.141 2.521-10.332 7.624-13.716 40.906-27.13 81.939-54.363 122.724-81.676 5.818-3.896 11.094-4.007 16.938-.095a41090.004 41090.004 0 0 0 123.261 82.195c4.678 3.106 7.453 6.943 7.453 12.66v80.622z"></path>
                                        <path d="M316.247 273.234a3826.352 3826.352 0 0 1-45.386 30.332c-2.412 1.588-2.888 3.318-2.861 6.189v51.346l93.039-62.004-38.527-25.882c-2.345-1.604-3.93-1.567-6.265.019zM370 276.676V237.06l-29.59 19.873z"></path>
                                      </svg>{" "}
                                      LOGO DESIGNING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/brochure-designing-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                      </svg>{" "}
                                      BROCHURE DESIGNING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/products-branding-company">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 10v8l7 -3v-2.6z"></path>
                                        <path d="M3 6l9 3l9 -3l-9 -3z"></path>
                                        <path d="M14 12.3v8.7l7 -3v-8z"></path>
                                      </svg>{" "}
                                      COMPLETE BRANDING
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="padding0inmedia daimond brbbb hoverable p-0">
                              <a href="/india/photoshoot-company-in-delhi-ncr">
                                <div className="d-flex gap-3">
                                  <div className="d-flex flex-column gap-1">
                                    <span style={{ fontSize: 14 }}>
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="megaiconset"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z"
                                        ></path>
                                      </svg>{" "}
                                      CORPORATE VIDEOS AND PHOTOS
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="noliactive MainLiNavbar" id="lieventAdd">
                <a href="/india/photography-company-in-delhi-ncr">PHOTOGRAPHY</a>
              </li>
              <li className="noliactive MainLiNavbar" id="lieventAdd">
                <a href="https://estivasoftech.com/blog/">BLOG</a>
              </li>
              <li className="noliactive MainLiNavbar" id="lieventAdd">
                <a href="/contact-estivasoftech">CONTACT US</a>
              </li>
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </label>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
