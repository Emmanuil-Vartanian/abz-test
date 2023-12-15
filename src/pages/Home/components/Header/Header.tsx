import React from 'react'

import { BlockFlex, ButtonStyled, HeaderBackground, LogoBlock, LogoTitle } from "./style.tsx";
import { Container } from "../../style.tsx";

import logo from 'assets/images/logo.png'
import Button from "components/Button";

export interface HeaderProps {
  scrollToNextBlock: (name: 'top' | 'users' | 'signup') => () => void
}

const Header: React.FC<HeaderProps> = ({ scrollToNextBlock }) => {
  return (
    <HeaderBackground>
      <Container>
        <BlockFlex justifyContent={'space-between'}>
          <LogoBlock onClick={scrollToNextBlock('top')}>
            <img src={logo} alt="logo" />
            <LogoTitle>testtask</LogoTitle>
          </LogoBlock>
          <BlockFlex>
            <Button text={'Users'} onClick={scrollToNextBlock('users')} />
            <ButtonStyled text={'Sign up'} onClick={scrollToNextBlock('signup')} />
          </BlockFlex>
        </BlockFlex>
      </Container>
    </HeaderBackground>
  )
}

export default Header