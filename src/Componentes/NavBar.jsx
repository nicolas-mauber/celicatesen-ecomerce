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
    color: #fff;
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

  a{
    color: "#fff",
    text-decoration: "none",
    margin-right: "1rem",
    }
  
  .links{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
        color: #333;
        font-size: 1.5rem;
        display: block;
    }
    @media (min-width: 768px) {
        position: inital;
        margin:0;
        a{
            font-size: 1rem;
            color: #black;
            display: inline;
        }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 100px;
    left: 100px; 
    right: 100px;
    text-align: center;
    a{
     color: #black;
    }
  } 

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }

`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #444;
  top: 0;
  left: 0;
  &active {
    width: 100%;
    height: 100%;
  }
  z-index: -1;
`;
