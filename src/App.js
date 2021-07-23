import "./App.css";
import React from "react";

import SiteList from "./selectSiteNumber";

function App() {
  const [isParentData, setIsParentData] = React.useState({
    siteNo: "1",
    dimensions: "Odd",
    facing: "north",
    east: "53.14961",
    west: "40",
    north: "23.35958",
    south: "29.16667",
    area: "1223.199925565625",
    isCorner: 0,
    enFacing: "1",
    parkFacing: "1",
    syNo: "90/2",
    eastSchedule: "Private property",
    westSchedule: "Site.no 2",
    northSchedule: "Road",
    southSchedule: "Private property",
    isSoldOut: "No",
  });
  const [initialPrice, setinitialPrice] = React.useState(1950);

  function handleOnPriceChange(e) {
    setinitialPrice(e.target.value);
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
                              NPA/LAO/13/2017-18
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
                              {isParentData.facing}
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
                            >
                              {isParentData.dimensions}
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
                              {isParentData.east}
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
                              {isParentData.west}
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
                              {isParentData.north}
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
                              {isParentData.south}
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
                              {isParentData.area}
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
                              {(
                                isParentData.area * initialPrice
                              ).toLocaleString("en-IN", {
                                maximumFractionDigits: 2,
                                style: "currency",
                                currency: "INR",
                              })}
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
                              {isParentData.isCorner ? "Yes" : "No"}
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
                              {isParentData.isCorner === 0
                                ? 0
                                : (
                                    isParentData.area *
                                    initialPrice *
                                    0.1
                                  ).toLocaleString("en-IN", {
                                    maximumFractionDigits: 2,
                                    style: "currency",
                                    currency: "INR",
                                  })}
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
                              <b>EAST</b> : {isParentData.eastSchedule} <br />
                              <b>WEST</b> : {isParentData.westSchedule} <br />
                              <b>NORTH</b> : {isParentData.northSchedule} <br />
                              <b>SOUTH</b> : {isParentData.southSchedule}
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
                              width={110}
                            >
                              {isParentData.isCorner === 0
                                ? (
                                    isParentData.area * initialPrice
                                  ).toLocaleString("en-IN", {
                                    maximumFractionDigits: 2,
                                    style: "currency",
                                    currency: "INR",
                                  })
                                : (
                                    isParentData.area * initialPrice +
                                    isParentData.area * initialPrice * 0.1
                                  ).toLocaleString("en-IN", {
                                    maximumFractionDigits: 2,
                                    style: "currency",
                                    currency: "INR",
                                  })}
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
                              Other Expenditures
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
                              ₹25,000
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
                              {(19.992 * isParentData.area).toLocaleString(
                                "en-IN",
                                {
                                  maximumFractionDigits: 2,
                                  style: "currency",
                                  currency: "INR",
                                }
                              )}
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
                              {(30 * isParentData.area).toLocaleString(
                                "en-IN",
                                {
                                  maximumFractionDigits: 2,
                                  style: "currency",
                                  currency: "INR",
                                }
                              )}
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
                              Registration
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
                              {isParentData.isCorner === 0
                                ? (
                                    isParentData.area *
                                    initialPrice *
                                    0.0665
                                  ).toLocaleString("en-IN", {
                                    maximumFractionDigits: 2,
                                    style: "currency",
                                    currency: "INR",
                                  })
                                : (
                                    (isParentData.area * initialPrice +
                                      isParentData.area * initialPrice * 0.1) *
                                    0.0665
                                  ).toLocaleString("en-IN", {
                                    maximumFractionDigits: 2,
                                    style: "currency",
                                    currency: "INR",
                                  })}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: "14px",

                                color: "#000",
                                lineHeight: "30px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              <strong>Grand Total</strong>
                            </td>
                            <td
                              style={{
                                fontSize: "14px",

                                color: "#000",
                                lineHeight: "30px",
                                verticalAlign: "top",
                                textAlign: "right",
                              }}
                            >
                              <strong>
                                {isParentData.isCorner === 0
                                  ? (
                                      25000 +
                                      isParentData.area * initialPrice +
                                      isParentData.area *
                                        initialPrice *
                                        0.0665 +
                                      19.992 * isParentData.area +
                                      30 * isParentData.area
                                    ).toLocaleString("en-IN", {
                                      maximumFractionDigits: 2,
                                      style: "currency",
                                      currency: "INR",
                                    })
                                  : (
                                      25000 +
                                      (isParentData.area * initialPrice +
                                        isParentData.area *
                                          initialPrice *
                                          0.1) +
                                      (isParentData.area * initialPrice +
                                        isParentData.area *
                                          initialPrice *
                                          0.1) *
                                        0.0665 +
                                      19.992 * isParentData.area +
                                      30 * isParentData.area
                                    ).toLocaleString("en-IN", {
                                      maximumFractionDigits: 2,
                                      style: "currency",
                                      currency: "INR",
                                    })}
                              </strong>
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
