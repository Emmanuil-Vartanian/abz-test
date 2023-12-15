import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const UsersContainer = styled('div')`
  margin: 140px 0;
  text-align: center;
  @media (max-width: 1200px) {
    padding: 0 32px;
  }
  @media (max-width: 400px) {
    padding: 0 16px;
  }
`

export const UsersBlock = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 29px;
  margin: 50px 0;
  @media (max-width: 768px) {
    gap: 16px;
  }
`

export const CardBlock = styled('div')`
  max-width: 370px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
`

export const CardImage = styled('img')`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

export const TypographyCut = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`