import { styled } from "@mui/system";
import Button from "components/Button";

type BlockFlex = {
  justifyContent?: 'center' | 'space-between'
}

export const HeaderBackground = styled('header')`
  background: #fff;
  padding: 13px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  z-index: 1;
  @media (max-width: 1200px) {
    padding: 13px 32px;
  }
  @media (max-width: 400px) {
    padding: 13px 16px;
  }
`

export const BlockFlex = styled('div')<BlockFlex>(
  ({ justifyContent = 'center' }) => `
  display: flex;
  align-items: center;
  justify-content: ${justifyContent};
`)

export const LogoTitle = styled('span')`
  text-transform: uppercase;
  font-weight: 500;
`

export const ButtonStyled = styled(Button)`
  margin-left: 10px;
`

export const LogoBlock = styled(BlockFlex)`
  cursor: pointer;
  @media (max-width: 350px) {
    flex-direction: column;
  }
`