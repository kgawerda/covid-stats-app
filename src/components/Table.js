import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "../styles/Table.css";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  const columns = [
    { label: "Country", accessor: "Country" },
    { label: "Total Confirmed Cases", accessor: "TotalConfirmed" },
    { label: "New Confirmed Cases", accessor: "NewConfirmed" },
    { label: "Total Deaths", accessor: "TotalDeaths" },
    { label: "New Deaths", accessor: "NewDeaths" },
    { label: "Total Recovered Cases", accessor: "TotalRecovered" },
    { label: "New Recovered Cases", accessor: "NewRecovered" },
  ];

  useEffect(() => {
    const getData = () => {
      fetch("https://api.covid19api.com/summary")
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setTableData(myJson.Countries);
        });
    };
    getData();
  }, []);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <>
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
