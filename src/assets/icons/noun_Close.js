import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <g>
      <polygon points="60.993,31.66 48,44.653 35.007,31.66 31.66,35.007 44.653,48 31.66,60.993 35.007,64.34 48,51.347 60.993,64.34    64.34,60.993 51.347,48 64.34,35.007  " />
      <path d="M48,8C25.944,8,8,25.944,8,48c0,22.057,17.944,40,40,40c22.057,0,40-17.943,40-40C88,25.944,70.057,8,48,8z M48,83.267   c-19.446,0-35.266-15.82-35.266-35.267c0-19.446,15.82-35.266,35.266-35.266c19.446,0,35.267,15.82,35.267,35.266   C83.267,67.446,67.446,83.267,48,83.267z" />
    </g>
    <text
      x="0"
      y="111"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      Created by Fahmihorizon
    </text>
    <text
      x="0"
      y="116"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      from the Noun Project
    </text>
  </CloseIconWrapper>
);

export default CloseIcon;
