import React from "react";
import styled from "styled-components";

const Burguer = ({ clicked, handleClick }) => {
  return (
    <BurguerStyle>
      <div onClick={() => handleClick()} className={`icon nav-icon-5 ${clicked ? " open is-active " : ""} `}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </BurguerStyle>
  );
};

export default Burguer;

const BurguerStyle = styled.div`
  body {
    padding: 0;
    margin: 0;
    background: #3f51b5;
    background-image: linear-gradient(#7e57c2 50%, #3f51b5);
    text-align: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
  }
  h1 {
    color: #fff;
    font-family: "Lato";
    font-weight: 100;
    padding: 30px;
    display: block;
  }
  .wrapper {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
  }
  .wrapper .icon {
    margin: 20px;
  }
  /* nav-icon-5 */
  .nav-icon-5 {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;
