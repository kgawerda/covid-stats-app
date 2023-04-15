import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "../styles/Table.css";

const Table = () => {
  const [data, setData] = useState([]);

  const columns = [
    { label: "Country", accessor: "Country" },
    { label: "New Confirmed Cases", accessor: "NewConfirmed" },
    { label: "Total Confirmed Cases", accessor: "TotalConfirmed" },
    { label: "New Deaths", accessor: "NewDeaths" },
    { label: "Total Deaths", accessor: "TotalDeaths" },
    { label: "New Recovered Cases", accessor: "NewRecovered" },
    { label: "Total Recovered Cases", accessor: "TotalRecovered" },
  ];

  useEffect(() => {
    const getData = () => {
      fetch("https://api.covid19api.com/summary")
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setData(myJson.Countries);
        });
    };
    getData();
  }, []);
  return (
    <>
      <table className="table">
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={data} />
      </table>
    </>
  );
};

export default Table;
