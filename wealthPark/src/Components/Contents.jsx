import React from "react";

import "./Contents.css";

const Contents = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "39px",
        display: "flex",
        maxWidth: "100%",
        margin: "0",
        flexDirection: "column",
      }}
    >
      <div className="top-Container">
        <div className="left-div">
          <div className="containerH1">
            <h1 class="typed">A modern real estate management platform</h1>
          </div>

          <p>Democratize Alternative Asset Investment for Everyone</p>
        </div>
        <div className="right-div">
          <img
            className="top-bg"
            src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/kv.png"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          maxWidth: "inherit",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Monospace",
          fontWeight: "bold",
          alignItems: "center",
          boxShadow: "1px 1px 10px rgb(233,233,233)",
          marginTop: "28px",
        }}
      >
        <h3>Digital transform your real estate management</h3>
      </div>
      <div
        style={{
          margin: "0.5rem",
          maxWidth: "100%",
          height: "150px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          className="div-1"
          style={{
            padding: "8px",
            width: "28rem",
            minWidth: "28rem",
            height: "30rem",
            display: "flex",
            margin:"4px",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            border: "1px solid rgb(233,233,233)",
          }}
        >
          <div>
            <img src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/lead_a.png"></img>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <h4>
              A powerful cloud base asset management SaaS for asset operators
              and managers
            </h4>
            <p>Digitize operations to provide stand-out service to Investors</p>
          </div>
        </div>

        <div
          className="div-2"
          style={{
            padding: "8px",
            width: "28rem",
            minWidth: "28rem",
            height: "30rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            margin:"4px",
            border: "1px solid rgb(233,233,233)",
          }}
        >
          <div>
            <img src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/lead_b2.png"></img>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <h4>A modern wealth management tool for asset Investors</h4>
            <p>Amazing mobile experience to manage assets</p>
          </div>
        </div>
        <div
          className="div-3"
          style={{
            padding: "8px",
            width: "25rem",
            minWidth: "25rem",
            height: "30rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            margin:"4px",
            border: "1px solid rgb(233,233,233)",
          }}
        >
          <div>
            <img src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/lead_c.png"></img>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <h4>
              A powerful cloud base asset management SaaS for asset operators
              and managers
            </h4>
            <p>
              Gain access to capital source and unique investment opportunities
            </p>
          </div>
        </div>

        {/* Track Record part */}

        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "20rem",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "20rem",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontFamily: "fantasy",
            }}
          >
            <h1>Track Record</h1>
          </div>
          <div
            style={{
              borderLeft: "1px solid white",

              width: "20rem",

              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h1 style={{ height: "fit-content", fontFamily: "Monospace" }}>
              $40Bn+
            </h1>
            <p>Real state Managed</p>
          </div>
          <div
            style={{
              width: "20rem",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderLeft: "1px solid white",
              flexDirection: "column",
              color: "white",
            }}
          >
            <h1 style={{ height: "fit-content", fontFamily: "Monospace" }}>
              50k+
            </h1>

            <p>Investors</p>
          </div>
          <div
            style={{
              width: "15rem",

              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderLeft: "1px solid white",
              color: "white",
            }}
          >
            <h1 style={{ height: "fit-content", fontFamily: "Aerial" }}>14</h1>
            <p>Countries/Regions</p>
          </div>
        </div>
        <div
          style={{
            margin: "6rem",
            width: "100%",
            flexDirection: "row",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-around",
          }}
        >
          <img
            src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/logo_a.png"
            alt=""
          />
          <img
            class="lp-product-record__logo-item--image"
            src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/logo_b.png"
            alt=""
          />
          <img
            class="lp-product-record__logo-item--image"
            src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/logo_c.png"
            alt=""
          ></img>
          <img
            class="lp-product-record__logo-item--image"
            src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/logo_d.png"
            alt=""
          ></img>
        </div>
        {/* Tracking news   */}

        <div class="container" style={{ marginTop: "25px", zIndex: "-1" }}>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" >
              <div class="card shadow-sm" style={{border:"none"}} >
                <img
                  style={{
                    width: "200px",
                    height: "250px",
                    alignSelf: "center",
                  }}
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/lead_c.png"
                ></img>
                <div class="card-body">
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://wealth-park.com/en/news/20221020002-fintech-taipei/"
                    class="card-text"
                  >
                    WealthPark RealEstate Technologies Exhibits at FinTech
                    Taipei 2022
                  </a>

                  <div class="d-flex justify-content-between align-items-center">
                    <div
                      class="btn-group"
                      style={{
                        marginTop: "8px",
                        padding: "8px",
                        width: "5rem",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      News
                    </div>
                    <small class="text-body-secondary">2022.10.20</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  style={{
                    width: "200px",
                    height: "250px",
                    alignSelf: "center",
                  }}
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/lead_c.png"
                ></img>
                <div class="card-body">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: "14px",
                    }}
                    href="https://wealth-park.com/en/news/20221020002-fintech-taipei/"
                    class="card-text"
                  >
                    WealthPark Lab Releases White Paper — WealthPark Global
                    Residential PropTech Study 2022 Vol.2
                  </a>

                  <div class="d-flex justify-content-between align-items-center">
                    <div
                      class="btn-group"
                      style={{
                        marginTop: "8px",
                        padding: "8px",
                        width: "5rem",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      News
                    </div>
                    <small class="text-body-secondary">2022.10.07</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  style={{
                    width: "200px",
                    height: "250px",
                    alignSelf: "center",
                  }}
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/lp/lead_c.png"
                ></img>
                <div class="card-body">
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://wealth-park.com/en/news/20221020002-fintech-taipei/"
                    class="card-text"
                  >
                    WealthPark NYC 2022 – NYC Real Estate Tech Week Official
                    Event
                  </a>

                  <div class="d-flex justify-content-between align-items-center">
                    <div
                      class="btn-group"
                      style={{
                        marginTop: "8px",
                        padding: "8px",
                        width: "5rem",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      Event
                    </div>
                    <small class="text-body-secondary">2022.08.09</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 style={{ textAlign: "center", margin: "10rem" }}>Team</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div class="card" style={{ width: "18rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_profile_kawada.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Ryuta Kawada</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Founder &amp; CEO
                  <br /> Representative Director of the Board &amp;
                  <br />
                  WealthPark Alternative Investments
                  <br />
                  CEO
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_profile_tezuka.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Kensuke Tezuka</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Executive Vice President COO
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_profile_shirasaki.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Jumpei Shirasaki</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Senior Managing Director CFO
                  <br />
                  Head of USA
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          {/*line number 2 */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_kan.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Chunyi Kan</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Executive officer
                  <br /> WealthPark RealState &amp;
                  <br />
                  Technologies
                  <br />
                  Executive officer CEO
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_tomiyasu.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Tatsuya Tomiyasu</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Executive Officer &amp; WealthPark Real Estate
                  <br /> Technologies &amp;
                  <br />
                  Director
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_yoshimoto.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Yuki Yoshimoto</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Executive officer
                  <br></br>
                  CDO
                  <br></br>
                  WealthPark Alternative
                  <br />
                  Investments Director
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_profile_ishimura.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Yuki Ishimura</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Executive Officer
                  <br />
                  WealthPark Alternative
                  <br></br>
                  Investements Director
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent:"space-evenly"
            }}
          >
            <div
              class="card"
              style={{
                width: "15rem",
                marginBottom: "8px",
                marginRight: "8px",
              }}
            >
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_yamaji.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Sota Yamaji</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Executive &amp; officer
                  <br /> Head of Buisness Development &amp;
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_toriya.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Takuma Toriya</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Executive Officer
                  <br /> Head of Customer Success &amp;
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          {/* line 4 */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_kato.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Kosuke Kato</h5>
                <p class="card-text">
                  WealthPark Lab
                  <br />
                  President / &amp; Investment Evangelist
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_kikuchi.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Masayoshi Kikuchi</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  SVP of &amp;Engineering for Fintech
                  <br />
                  Engineering Department
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_takahiro_fujii.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Takahiro Fujii</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  SVP of Engineering
                  <br />
                  VPoE Office
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_yamashita.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Kazuhiko Yamashita</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  SVP of HR
                  <br />
                  HR Department
                </p>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_torii.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Shunji Torii</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  Vp &amp; Of Product
                  <br />
                  Product Department
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_murakami.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Tomokazu Murakami</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  VP of DX &amp; Consulting
                  <br /> Enterprise Division &amp;
                  <br />
                  DX Consulting Department
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="		https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_miyashi.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Tomoharu Miyashi</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  VP Of Accounting <br />
                  Adminitration Department
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_profile_matsuzaki.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Taro Matsuzaki</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  RealEstate Technologies
                  <br />
                  VP of transaction
                  <br />
                  Transaction & Service Department
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          {/*line 6 */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",

              justifyContent:"space-evenly"
            }}
          >
            <div
              class="card"
              style={{
                width: "15rem",
                marginBottom: "8px",
                marginRight: "8px",
              }}
            >
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_kouguchi.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Yurina Koguchi</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  RealEstate Technologies
                  <br /> VP of AssetManagement
                  <br />
                  AssetManagement Department
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="		https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_profile_yanagawa.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Junji Yanagawa</h5>
                <p class="card-text">
                  WealthPark
                  <br />
                  VP of Corporate Engineering
                  <br /> Corporate Division
                  <br />
                  Corporate Engineering Department
                </p>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="		https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_horikoshi.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Yuka Horikoshi</h5>
                <p class="card-text">
                  Independent Director
                  <br />
                  Chuo Sogo Law Office, P.C.
                  <br /> Partner
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="		https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_yonekura_002.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Minoru Yonekura</h5>
                <p class="card-text">
                  Independent Director
                  <br />
                  Seven Seas Advisors Co. Ltd.
                  <br />
                  Co-Founder and CEO
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="			https://wealth-park.com/wp-content/themes/wp-next-landing-page/app/img/team_ph_nakajima.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Ryo Nakashima</h5>
                <p class="card-text">
                  Independent Director
                  <br />
                  SBI Investment Co. Ltd. Manager
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "15rem", marginBottom: "8px" }}>
              <img
                style={{
                  margin: "0.5rem",
                  alignSelf: "center",
                  width: "fit-content",
                  height: "180px",
                }}
                src="	https://wealth-park.com/wp-content/uploads/2024/01/team_ph_nakae.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5>Fumito Nakae</h5>
                <p class="card-text">
                  Auditor
                  <br />
                  institution for Global Society,Inc.
                  <br />
                  Director
                </p>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <h1>Talk with an Expert</h1>
            <div className="myForm">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address{" "}
                    <span class="badge rounded-pill text-bg-dark">
                      Required
                    </span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Confirm Email address{" "}
                    <span class="badge rounded-pill text-bg-dark">
                      Required
                    </span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Name{" "}
                    <span class="badge rounded-pill text-bg-dark">
                      Required
                    </span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Confirm Name{" "}
                    <span class="badge rounded-pill text-bg-dark">
                      Required
                    </span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Company Name{" "}
                    <span class="badge rounded-pill text-bg-dark">
                      Required
                    </span>
                  </label>
                  <input
                    type="password"
                    class="form-control required"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Contact Number
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message{" "}
                    <span class="badge rounded-pill text-bg-dark">
                      Required
                    </span>
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Handling Information{" "}
                    <span class="badge rounded-pill text-bg-dark">
                      Required
                    </span>
                  </label>
                  <div
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    style={{ backgroundColor: "rgb(233,231,231)" }}
                  >
                    <p>
                      Your information will be used for checking and answering
                      for the inquiry. Please check our
                      https://wealth-park.com/en/corporate/privacy-policy/ and
                      check the checkbox on the right if you consent the
                      handling
                    </p>
                    <br></br>
                    <input id="check" type="checkbox"></input>
                    <label for="check">
                      I agree with all terms of the privacy policy.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    alert("Form Submitted!!");
                  }}
                >
                  SEND
                </button>
              </form>
            </div>

            {/*Footer */}
          </div>

          <div
            class="container"
            style={{
              width: "100%",
              marginTop: "10rem",
              borderTop: "1px solid rgb(127,128,128)",
            }}
          >
            <footer class="py-5">
              <div class="row">
                <div class="col-6 col-md-2 mb-3">
                  <h5>Service</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        WealthPark Buisness
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        WealthPark Asset Management
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        WealthPark Investment
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        WealthPark Lab
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        WealthPark Blog
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                  <h5>Product</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Play Store
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        App Store
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Wealth PARK web
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                  <h5>Company</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Corporate
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Company Profile
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        About Wealth Park
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        RealState
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Technologies
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-5 offset-md-1 mb-3">
                  <img
                    style={{ width: "250px", height: "60px" }}
                    src="	https://wealth-park.com/wp-content/themes/wp-next-landing-page/img/logo_isms_2.png"
                  ></img>
                  <p>
                    <b>Certified organisation: Head Office</b>
                  </p>
                </div>
              </div>

              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2024 Company, Inc. All rights reserved.</p>
                <p>
                  Created by <b>Manish kumar Pandey</b>
                </p>
                <ul class="list-unstyled d-flex">
                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  </li>

                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                  </li>

                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                  </li>

                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                      </svg>
                    </a>
                  </li>

                  <li class="ms-3">
                    <a class="link-body-emphasis" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
