import "./App.css";
import React from "react";

import SiteList from "./selectSiteNumber";

function App() {
  const [isParentData, setIsParentData] = React.useState({
    siteNo: 1,
    syNo: "90/2",
    isCorner: "N",
    BMRDAApprovedNo: "NPA/LAO/13/2017-18",
    E: 16.2,
    W: 12.19,
    N: 7.12,
    S: 8.89,
    ScE: "private property",
    ScW: "Site.no 2",
    ScN: "Road",
    ScS: "private property",
    Facing: "North",
  });

  console.log("isParentData" + JSON.stringify(isParentData));
  const [initialPrice, setinitialPrice] = React.useState(1950);

  function handleOnPriceChange(e) {
    setinitialPrice(e.target.value)
    calCulateTotalSq()
    console.log(initialPrice);
  }

  function calCulateTotalSq(){
    return ((((isParentData.E + isParentData.W)/2)*((isParentData.N + isParentData.S)/2))*(3.281*initialPrice))
  }

  return (
    <div>
      <table
        width="100%"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        align="center"
        className="fullTable"
        bgcolor="#e1e1e1"
      >
        <tbody>
          <tr>
            <td height={20} />
          </tr>
          <tr>
            <td>
              <table
                width={700}
                border={0}
                cellPadding={0}
                cellSpacing={0}
                align="center"
                className="fullTable"
                bgcolor="#193d4d"
                style={{ borderRadius: "10px 10px 0 0", padding: "10px" }}
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        width={600}
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        align="center"
                        className="fullPadding"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                width={220}
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                align="left"
                                className="col"
                              >
                                <tbody>
                                  <tr>
                                    <td align="left">
                                      <img
                                        src="/PGC-Landmark-Logo.png"
                                        width={222}
                                        height={62}
                                        alt="logo"
                                        border={0}
                                      />
                                    </td>
                                  </tr>

                                  <tr>
                                    <td
                                      style={{
                                        fontSize: "12px",
                                        color: "#5b5b5b",

                                        lineHeight: "18px",
                                        verticalAlign: "top",
                                        textAlign: "left",
                                      }}
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                width={320}
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                align="right"
                                className="col"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        fontSize: "11px",
                                        color: "#adadad",
                                        lineHeight: "18px",
                                        verticalAlign: "top",
                                        textAlign: "right",
                                        paddingTop: "15px",
                                      }}
                                    >
                                      733, 2nd floor, 46th Cross Rd, 8th Block,
                                      TMC Layout,1st Phase,Jayanagar, Bengaluru,
                                      KA - 560082 | No : +91-9986930494
                                    </td>
                                  </tr>
                                  <tr />
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {/* /Header */}
      {/* Order Details */}
      <table
        width="100%"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        align="center"
        className="fullTable"
        bgcolor="#e1e1e1"
      >
        <tbody>
          <tr>
            <td>
              <table
                width={700}
                border={0}
                cellPadding={0}
                cellSpacing={0}
                align="center"
                className="fullTable"
                bgcolor="#ffffff"
              >
                <tbody>
                  <tr />
                  <tr className="hiddenMobile">
                    <td height={60} />
                  </tr>
                  <tr className="visibleMobile">
                    <td height={40} />
                  </tr>
                  <tr>
                    <td>
                      <table
                        width={600}
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        align="center"
                        className="fullPadding"
                      >
                        <tbody>
                          <tr>
                            <th
                              style={{
                                fontSize: "12px",

                                color: "#5b5b5b",
                                fontWeight: "bold",
                                lineHeight: 1,
                                verticalAlign: "top",
                                padding: "0 10px 7px 0",
                              }}
                              width="42%"
                              align="left"
                            >
                              Item
                            </th>
                            <th
                              style={{
                                fontSize: "12px",

                                color: "#5b5b5b",
                                fontWeight: "bold",
                                lineHeight: 1,
                                verticalAlign: "top",
                                padding: "0 0 7px",
                              }}
                              align="left"
                            >
                              Detail{" "}
                            </th>
                            <th
                              style={{
                                fontSize: "12px",

                                color: "#5b5b5b",
                                fontWeight: "bold",
                                lineHeight: 1,
                                verticalAlign: "top",
                                padding: "0 0 7px",
                              }}
                              align="center"
                            ></th>
                            <th
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                fontWeight: "bold",
                                lineHeight: 1,
                                verticalAlign: "top",
                                padding: "0 0 7px",
                              }}
                              align="right"
                            >
                              Cost
                            </th>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              style={{ background: "#bebebe" }}
                              colSpan={4}
                            />
                          </tr>

                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Site No
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              <SiteList
                                sendToParent={setIsParentData}
                              ></SiteList>
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>

                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Price per Sq.ft (Rs.)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              <input
                                type="number"
                                value={initialPrice}
                                onChange={handleOnPriceChange}
                              ></input>
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Sy.No.
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              {isParentData.syNo}
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Conversion order No
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              0
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Facing
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              {isParentData.Facing}
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Dimension (ft)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >-</td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              East (ft)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              {isParentData.E}
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              West (ft)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              {isParentData.W}
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              North (ft)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              {isParentData.N}
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              South (ft)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              {isParentData.S}
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Total Sq.ft
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                            {calCulateTotalSq()}
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            >
                              {" "}
                              A
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            >
                              ₹ 3,258,047
                            </td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Corner(Y/N)(10% Extra)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              Yes
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            >
                              {" "}
                              B
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            >
                              ₹ 325,805
                            </td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              className="article"
                            >
                              Schedule
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                            >
                              <b>EAST</b> : Site No.18 <br />
                              <b>WEST</b> : Road <br />
                              <b>NORTH</b> : Site No.20 <br />
                              <b>SOUTH</b> : Road
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="center"
                            ></td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#1e2b33",
                                lineHeight: "18px",
                                verticalAlign: "top",
                                padding: "10px 0",
                              }}
                              align="right"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              height={1}
                              colSpan={4}
                              style={{ borderBottom: "1px solid #e4e4e4" }}
                            />
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td height={20} />
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {/* /Order Details */}
      {/* Total */}
      <table
        width="100%"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        align="center"
        className="fullTable"
        bgcolor="#e1e1e1"
      >
        <tbody>
          <tr>
            <td>
              <table
                width={700}
                border={0}
                cellPadding={0}
                cellSpacing={0}
                align="center"
                className="fullTable"
                bgcolor="#ffffff"
              >
                <tbody>
                  <tr>
                    <td>
                      {/* Table Total */}
                      <table
                        width={600}
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        align="center"
                        className="fullPadding"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              Site Cost (A+B)
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                                whiteSpace: "nowrap",
                              }}
                              width={80}
                            >
                              $329.90
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              Legal, Khatha & Documentation
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              $15.00
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              Maintainance for 2 years
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              $15.00
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              Infrastructure Charges
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#646a6e",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              $15.00
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#000",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              <strong>Grand Total (Incl.Tax)</strong>
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#000",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              <strong>$344.90</strong>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#b0b0b0",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              <small>TAX</small>
                            </td>
                            <td
                              style={{
                                fontSize: "12px",

                                color: "#b0b0b0",
                                lineHeight: "22px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              <small>$72.40</small>
                            </td>
                          </tr>
                          <tr className="hiddenMobile">
                            <td height={60} />
                          </tr>
                        </tbody>
                      </table>
                      {/* /Table Total */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {/* /Total */}
      {/* Information */}
    </div>
  );
}

export default App;
