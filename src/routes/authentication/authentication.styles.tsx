import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
  justify-content: space-between;

  margin: 30px auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    gap: 20px;
    flex-direction: column;
  }
`;
