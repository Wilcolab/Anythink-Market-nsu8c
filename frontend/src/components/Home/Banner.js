import React from "react";
import logo from "../../imgs/logo.png";
import styled from 'styled-components';

const StyledBanner = styled.div`
  background-color: ${(props) => props.theme.dark};
  /* Add more styles here */
`;


const Banner = () => {
  return (
    <StyledBanner>
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
    </StyledBanner>
  );
};

export default Banner;
