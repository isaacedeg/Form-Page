import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: ${(props: { height?: any }) => props.height || "45px"};
  box-sizing: border-box;
  padding: 12px 10px;
  color: rgba(8, 17, 32, 0.6);

  :focus {
    outline: 0;
  }
`;

interface Props {
  onChange: (S: any) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  type?: string;
  value?: string;
  height?: string;
  disabled?: boolean;
  children?: JSX.Element;
  required?: boolean;
  onBlur?: React.FocusEventHandler;
  maxLength?: number;
}

export const Input: React.FC<Props> = ({
  onChange,
  placeholder,
  className,
  children,
  ...props
}) => (
  <StyledInput
    className={className}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
);
