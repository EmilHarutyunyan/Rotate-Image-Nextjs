import styled, { css } from "styled-components";

export const Btn = styled.button`
  display: block;
  border: 0px;
  outline: 0px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  max-width: 240px;
  border-radius: 16px;

  &:hover:not(:disabled) {
		opacity: 0.8;
	}
	&:disabled {
		opacity: 0.6;
    filter: saturate(60%);
  }
  ${props => props.primary && css`
    color: #fff;
    background: #338fff;
    padding:10px 57px;
    margin: 24px auto 0;
    @media only screen and (max-width: 520px) {
      padding:10px 15px;
    }
  `}
  ${props => props.icon && css`
    display: flex;
    align-items: center;
    column-gap: 20px;
    padding:8px 15px;
    background: transparent;
    color: black;
    border: 1px dashed #121212;
    
  `}
`;
