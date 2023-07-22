import React, { useState } from "react";
import heart from "../images/heart.png";
import bell from "../images/notifications.png";
import pro from "../images/stone.png";
import searchImageicon from "../images/search.png";

function Navbar({ onSearch }) {
    const [query,setQuery] =  useState("")

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch({query});
    };
  return (
    <nav className="navbar">
      <div className="log-div">
        <span>BookStore</span>
      </div>
      {/* <SearchBar onSearch2 ={onSearch}/> */}
      <form className="searchbar-div" onSubmit={handleSearch}>
        <div className="search-bar">
          <img src={searchImageicon} alt="search" className="search-icon-img" />
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          />
        </div>
        <div className="search-button">
          <button className="search-btn">Search</button>
        </div>
      </form>
      <div className="icons-div">
        <div className="icon-div icon-div-1">
          <img src={heart} alt="book" className="book image-nav" />
        </div>
        <div className="icon-div icon-div-2">
          <img src={bell} alt="notification" className="bell image-nav" />
        </div>
        <div className="icon-div icon-div-3">
          <img src={pro} alt="pro" className="pro image-nav" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
