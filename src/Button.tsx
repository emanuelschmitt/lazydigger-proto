import * as React from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "outlined" | "primary";
type FontVariant = "small" | "medium" | "large";

function getFontSizeVariant(variant?: FontVariant) {
  switch (variant) {
    case "small":
      return css`
        font-size: 0.9em;
      `;
    case "medium":
      return css`
        font-size: 1em;
      `;
    case "large":
      return css`
        font-size: 1.1em;
      `;
    default:
      return css``;
  }
}

function getVariantStyles(variant?: "outlined" | "primary") {
  switch (variant) {
    case "outlined":
      return css`
        border: 1px solid black;
        background: transparent;
      `;
    case "primary":
      return css`
        background: var(--btn-bg-color);
        color: var(--btn-color);
      `;
    default:
      return css``;
  }
}

function getIconStyles(icon?: boolean) {
  return icon
    ? css`
        align-items: center;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        display: inline-flex;

        & > svg {
          margin-right: 5px;
        }
      `
    : css``;
}

const buttonReset = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  color: inherit;
  font: inherit;
  line-height: normal;
`;

type ButtonProps = {
  variant?: ButtonVariant;
  size?: FontVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type StyledButtonProps = Omit<ButtonProps, "label">;
const Button = styled.button<StyledButtonProps>`
  ${buttonReset}

  padding: 4px 12px;
  border-radius: 12px;
  margin: 0 4px;
  user-select: none;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:hover:disabled {
    cursor: no-drop;
  }

  &:disabled {
    opacity: var(--btn-disabled-opacity);
  }

  ${props => getVariantStyles(props.variant)}
  ${props => getFontSizeVariant(props.size)}
  ${props => getIconStyles(Boolean(props.icon))}
  ${props => props.fullWidth && "width: 100%;"}
`;

function Component(props: ButtonProps) {
  const { label, icon, loading = false, ...rest } = props;
  const labelText = loading ? "Loading" : label;
  return (
    <Button {...rest} icon={icon}>
      {icon ? (
        <>
          {icon} {labelText}
        </>
      ) : (
        <>{labelText}</>
      )}
    </Button>
  );
}

export default Component;
