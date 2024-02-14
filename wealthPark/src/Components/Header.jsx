import React from "react";

export const Header = () => {
  return (
    <>
      <header
        style={{
          position: "fixed",
          backgroundColor: "white",
          boxShadow: "1px 1px 10px black",
          width: "100%",
        }}
        class="d-flex flex-wrap justify-content-center py-2 mb-4 border-bottom"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span class="fs-4" style={{ marginLeft: "1.8rem" }}>
          <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/circled-w.png" alt="circled-w"/>
            <b style={{ fontFamily: "Plasma" }}>WealthPark</b>
          </span>
        </a>

        <div
          class="btn-group"
          style={{ marginLeft: "50px", marginRight: "0", padding: "18px" }}
        >
          <a
            class="btn dropdown-toggle "
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Service
          </a>
          <ul class="dropdown-menu dropdown-menu-lg-end">
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              Services
            </h4>

            <li>
              <div
                style={{
                  padding: "8px",
                  justifyContent: "center",
                  width: "280px",
                  height: "fit-content",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/nav_ico_pic6.svg"
                  style={{ width: "55px", height: "55px" }}
                ></img>
                <a href="" style={{ marginLeft: "8px", fontSize: "18px" }}>
                  WealthPark Asset Management
                </a>
                <p style={{ marginLeft: "8px" }}>
                  New synergy between property managers and investors.
                </p>
              </div>
            </li>
            <li>
              <div
                style={{
                  padding: "8px",
                  justifyContent: "center",
                  width: "280px",
                  height: "fit-content",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src="https://wealth-park.com/wp-content/themes/wp-next-landing-page/business/img/nav_ico_pic5.svg"
                  style={{ width: "55px", height: "55px" }}
                ></img>

                <a href="" style={{ marginLeft: "8px", fontSize: "18px" }}>
                  WealthPark Asset Management
                </a>
                <p style={{ marginLeft: "8px" }}>
                  Leader in Japan Inbound Real Estate Asset and Property
                  Management for Foreign Investors.
                </p>
              </div>
            </li>
          </ul>
          <button
            class="btn  dropdown-toggle "
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Company
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end">
            <li>
              <button class="dropdown-item" type="button">
                News
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Company Profile
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Carrers
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
