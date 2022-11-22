import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7474bf; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #7474bf, #348ac7);
  background: linear-gradient(to right, #7474bf, #348ac7); 
  background-size: 100% ;
  background-repeat: repeat-x;
  text-align: center;
  padding: 100px 20px;

  & > h1 {
    font-size: 35px;
    color: #fff;
  }
  & > h2 {
    font-size: 24px;
    color: #fff;
    margin-top: 5px;
  }
`;
