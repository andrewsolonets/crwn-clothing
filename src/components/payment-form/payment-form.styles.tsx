import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  @media screen and (max-width: 800px) {
    height: 200px;
    margin-bottom: 50px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  max-width: 700px;
  @media screen and (max-width: 800px) {
    min-width: 80vw;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
