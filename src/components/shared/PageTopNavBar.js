import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import capitalize from 'lodash.capitalize'
import { withRouter } from 'react-router'
import { topNavHeight } from './../../styles/globalLayout'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  box-sizing: border-box;
  background: #434343;
  border-radius: 36px;
  height: 32px;
  margin: 0 auto 10px;
  max-width: 945px;
  display: flex;
  align-items: center;
  padding: 8px 9px;
  position: sticky;
  top: ${topNavHeight + 3}px;
  z-index: 100;
  @media (max-width: 945px) {
    max-width: 99%;
  }
`

const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  background: ${({ isActive }) => (isActive ? '#dc968e' : '#434343')};
  color: ${({ isActive }) => (isActive ? 'black' : 'white')};
  border-radius: 36px;
  padding: 2px 10px;
  margin-right: 14px;
  cursor: ${({ isActive }) => isActive && 'default !important'};
  font-size: 12px;
  @media (max-width: 540px) {
    font-size: 11px;
    margin-right: 0;
    padding: 2px 6px;
  }
  &:hover {
    color: ${({ isActive }) => !isActive && 'antiquewhite'};
  }
  a {
    text-decoration: none;
  }
`

const TotalCount = styled.div`
  background: ${({ isActive }) => isActive && 'white'};
  color: ${({ isActive }) => (isActive ? 'black' : '#CBCBCB')};
  border-radius: 100px;
  margin-left: 5px;
  padding: 1px 5px;
  @media (max-width: 540px) {
    margin-left: 3px;
  }
  &:hover {
    color: ${({ isActive }) => !isActive && 'antiquewhite'};
  }
`
/*
|--------------------------------------------------------------------------
| Stateless Components
|--------------------------------------------------------------------------
*/

const NavItem = ({ label, isActive, to }) => {
  return (
    <Link to={to}>
      <StyledNavItem isActive={isActive}>
        {capitalize(label)}
        {/* <TotalCount isActive={isActive} /> */}
      </StyledNavItem>
    </Link>
  )
}

/*
|--------------------------------------------------------------------------
| Main Export
|--------------------------------------------------------------------------
*/

export default withRouter(
  ({ location: { pathname }, navItems = [], rootPath }) => {
    return (
      <Container>
        {/* New */}

        {navItems.map(label => (
          <NavItem
            key={label}
            label={label}
            to={`${rootPath}/${label.split(' ').join('-')}`}
            isActive={pathname.includes(label)}
          />
        ))}
      </Container>
    )
  }
)
