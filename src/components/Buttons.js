import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
   font-size: ${typeScale.helperText};
   padding: 8px;
  `,
  large: () => `
  font-size: ${typeScale.header5};
  padding: 16px 24px;
 `,
  warning: ({ theme }) => `
  background-color: ${theme.status.warningColor};
  border-color: ${theme.status.errorColor};
  color: ${theme.textColorInverted};
  &:hover, &:focus{
      background-color: ${theme.primaryColor};
      color: ${theme.status.warningColor};
      border-color: ${theme.status.warningColor};
  }
  `,
  error: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    border-color: ${theme.status.errorColor};
    color: ${theme.textColor};
    &:hover, &:focus{
        background-color: ${theme.primaryColor};
        color: ${theme.status.errorColor};
        border-color: ${theme.status.errorColor};
    }
    `,
  success: ({ theme }) => `
  background-color: ${theme.status.successColor};
  color: ${theme.textColorInverted};
  border-color: ${theme.status.successColor};
  &:hover, &:focus{
      background-color: ${theme.primaryColor};
      color: ${theme.status.successColor};
      border-color: ${theme.status.successColor};
  }
  `
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear,
    border-color 0.2s linear;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  border-color: ${props => props.theme.secondaryColor};
  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    border-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorInverted};
  }
  &:focus {
    background-color: ${props => props.theme.primaryColorHover};
    border-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorInverted};
  }
  &:disabled {
    background: none;
    background-color: ${props => props.theme.disabledColor};
    border-color: ${props => props.theme.disabledColor};
    color: ${props => props.theme.textColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.secondaryColor};
  border-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorInverted};
  &:hover {
    background-color: ${props => props.theme.secondaryColorHover};
    border-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.textColor};
  }
  &:focus {
    background-color: ${props => props.theme.secondaryColorHover};
    border-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.textColor};
  }
  &:disabled {
    background: none;
    border-color: ${props => props.theme.disabledColor};
    color: ${props => props.theme.textColorDisabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.textColor};
  border-color: transparent;
  &:hover {
    border-color: ${props => props.theme.secondaryColor};
  }
  &:focus {
    border-color: ${props => props.theme.secondaryColor};
  }
  &:disabled {
    background: none;
    border: none;
    color: ${props => props.theme.textColorDisabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
