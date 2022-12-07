import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burguer from "./Burguer";

const NavBar = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>
          Navbar <span>responsive</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href={"/"}>Home Page</a>
          <a href={"/about"}>About Page</a>
          <a href={"/profile"}>Profile Page</a>
        </div>
        <div className="burguer">
          <Burguer clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}> </BgDiv>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
