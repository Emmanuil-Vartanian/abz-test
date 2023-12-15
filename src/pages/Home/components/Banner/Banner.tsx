import React from 'react'
import { Typography } from "@mui/material";

import { BannerImage, BannerTextBlock } from "./style.tsx";

import main from 'assets/images/main.png'
import Button from "components/Button";
import { HeaderProps } from "../Header/Header.tsx";


const Banner: React.FC<HeaderProps> = ({ scrollToNextBlock }) => {
  return (
    <BannerImage image={main}>
      <BannerTextBlock>
        <Typography variant={'h1'} color={'#fff'}>Test assignment for front-end developer</Typography>
        <Typography variant={'h5'} color={'#fff'} margin={'21px 0 32px'}>
          What defines a good front-end developer is one that has skilled knowledge of
          HTML, CSS, JS with a vast understanding of User design thinking as they'll be building
          web interfaces with accessibility in mind. They should also be excited to learn, as the
          world of Front-End Development keeps evolving.
        </Typography>
        <Button text={'Sign up'} onClick={scrollToNextBlock('signup')} />
      </BannerTextBlock>
    </BannerImage>
  )
}

export default Banner