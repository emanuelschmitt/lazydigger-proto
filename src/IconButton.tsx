import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: transparent;
  display: inline-flex;
  justify-content: center;
  user-select: none;

  border-radius: var(--border-radius);
  border: 0;
  font-size: 1.5em;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  & > svg {
    display: block;
  }

  &:hover:disabled {
    cursor: no-drop;
  }

  &:active {
    opacity: 0.65;
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    opacity: var(--btn-disabled-opacity);
  }
`;

type Props = {
  icon: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function IconButton(props: Props) {
  const { icon, ...buttonProps } = props;
  return <Container {...buttonProps}>{icon}</Container>;
}

export default IconButton;
