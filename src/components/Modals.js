import React from "react";
import { useSpring, animated, config } from "react-spring";
import { typeScale } from "../utils";
import styled from "styled-components";
import { Icons } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textColor};
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 100px;
  height: 100px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(200%)`,
    config: config.molasses,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <SignUpHeader>Sign up</SignUpHeader>
        <SignUpText>Sign up today</SignUpText>
        <PrimaryButton>Sign up</PrimaryButton>
        <CloseModalButton aria-label="Close modal">
          <Icons.CloseIcon></Icons.CloseIcon>
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
