import { styled } from "@mui/system";
import InputField from "components/FormFields/InputField";

export const SignUpContainer = styled('div')`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 0 32px 100px;
  }
  @media (max-width: 400px) {
    padding: 0 16px 100px;
  }
`

export const FormFields = styled('div')`
  padding: 50px 0;
  max-width: 380px;
  margin: 0 auto;
`

export const InputFieldStyled = styled(InputField)`
  margin-bottom: 50px;
`

export const PositionsBlock = styled('div')`
  margin: 25px 0 50px;
`

export const ButtonBlock = styled('div')`
  text-align: center;
`