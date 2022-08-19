import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 100px;
    line-height: 20px;
    
  }
`;
