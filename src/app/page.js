"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import Table from "./table";
import paginatedTable from "./table";
const country = require("../../public/countries.json");

const itemsPerPage = 20;
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setData(country);
  }, [country]);

  const handleSearch = (data, searchVal) => {
    let searchedData = data.filter((item) => {
      return item.name.toLowerCase().startsWith(searchVal.toLowerCase());
    });
    setData(searchedData);
  };
  return (
    <div>
      <h1>COUNTRY CODE TABLES</h1>
      <input onChange={(e) => setSearchVal(e.target.value)} value={searchVal} />
      <button onClick={() => handleSearch(country, searchVal)}>Search</button>
      <button
        onClick={() => {
          handleSearch(country, "");
          setSearchVal("");
        }}
      >
        Clear
      </button>

      <div style={{ width: "100%", height: "70vh" }}>
        <Table
          data={data}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        datalength={data.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Home;
