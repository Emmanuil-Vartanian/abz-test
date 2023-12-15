import { styled } from "@mui/system";

type BannerImage = {
  image: string
}

export const BannerImage = styled('div')<BannerImage>(({ image }) => `
  height: 650px;
  background-image: url(${image});    
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`)

export const BannerTextBlock = styled('div')`
  max-width: 392px;
  text-align: center;
  @media (max-width: 400px) {
    padding: 0 16px;
  }
`