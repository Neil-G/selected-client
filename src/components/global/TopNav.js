import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import {
  RootPath,
  EmployerSearch,
  EmployerInterview,
  EmployerProfile,
  CandidateProfile,
  CandidateSettings,
  CandidateMessages,
  EmployerOpenRoles,
  EmployerAts,
  EmployerSettings,
} from './../../constants/urlPaths.js'
import globalLayout from '../../styles/globalLayout'

import updater from './../../redux/updater'

const withClickOutside = require('react-click-outside')

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: ${globalLayout.topNavHeightPx};
  display: flex;
  justify-content: center;
  background: white;
  z-index: 1000;
`

const SectionsContainer = styled.div`
  width: 100%;
  max-width: 945px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  @media (max-width: 720px) {
    display: none;
  }
`

const SectionContainer = styled.div`
  display: flex;
`

const SectionContainerLeft = styled(SectionContainer)``

const SectionContainerRight = styled(SectionContainer)``

const TopNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px 0 0;
  position: relative;

  > .user-menu-icon {
    font-size: 30px;
  }
  > .user-menu-dropdown {
    margin-left: 8px;
    cursor: pointer;
  }
  > .logo {
    font-size: 30px;
  }
`

const LinkContainer = styled.span`
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  ${({ isActive }) => {
    return (
      isActive &&
      css`
        border-color: tomato;
      `
    )
  }}
`

const UserMenuContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: white;
  position: absolute;
  width: 200px;
  top: ${globalLayout.topNavHeightPx};
  right: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 1000;
`

const UserMenuItem = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 6px;
  cursor: pointer;
  &:hover {
    background: snow;
  }
  > i {
    margin-right: 9px;
  }
`
const PortraitImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
`

const MobileMenuButtonContainer = styled.div`
  cursor: pointer;
  position: fixed;
  top: 8px;
  right: 14px;
  font-size: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  padding: 3px 14px;
  @media (min-width: 720px) {
    display: none;
  }
`

const MobileMenuContainer = styled.div`
  position: fixed;
  background: white;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  @media (min-width: 720px) {
    display: none;
  }
`

/*
|--------------------------------------------------------------------------
| User Menu Component
|--------------------------------------------------------------------------
*/

class UserMenuNavItemComponent extends React.Component {
  handleClickOutside = evt => {
    if (evt.target.id !== 'user-menu-toggle-icon') {
      this._closeMenu()
    }
  }

  _closeMenu = () => {
    updater.toggleOpenGlobal({
      componentName: 'topNav',
      shouldOpenComponent: false,
    })
  }

  render() {
    const { user, employer, teacher } = this.props
    const {
      firstName,
      lastName,
      email: { value: emailAddress },
    } = user
    let settingsPageLink = '/'
    if (!!employer) settingsPageLink = EmployerSettings
    if (!!teacher) settingsPageLink = CandidateSettings
    return (
      <UserMenuContainer>
        <UserMenuItem
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          signed in as:
          <div>
            {firstName} {lastName}
          </div>
          <div>{emailAddress}</div>
        </UserMenuItem>
        <Link to={settingsPageLink} onClick={() => this._closeMenu()}>
          <UserMenuItem>
            <i className='fal fa-cog' />
            Settings
          </UserMenuItem>
        </Link>
        <UserMenuItem>
          <i className='fal fa-sign-out-alt' />
          Logout
        </UserMenuItem>
      </UserMenuContainer>
    )
  }
}

const UserMenuNavItem = withClickOutside(UserMenuNavItemComponent)

/*
|--------------------------------------------------------------------------
| Top Nav Items
|--------------------------------------------------------------------------
*/
const employerAppTopNavItems = [
  { label: 'OPEN ROLES', to: EmployerOpenRoles },
  { label: 'SEARCH', to: EmployerSearch },
  { label: 'INTERVIEW', to: EmployerInterview },
  { label: 'PROFILE', to: EmployerProfile },
]

const candidateAppTopNavItems = [
  { label: 'MESSAGES', to: CandidateMessages },
  { label: 'SCHOOLS', to: RootPath, isAnchorTag: false },
  { label: 'PROFILE', to: CandidateProfile },
]

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

class TopNav extends React.Component {
  state = {
    isMobileMenuOpen: false,
  }
  render() {
    const {
      isUserMenuOpen,
      user,
      teacher,
      employer,
      location: { pathname },
    } = this.props
    const { photoUrl } = user
    const userIsOnboarding = pathname.includes('onboarding')
    if (userIsOnboarding) return null
    const { isMobileMenuOpen } = this.state
    return (
      <Container>
        <SectionsContainer>
          {/* Left Section */}
          {
            <SectionContainerLeft>
              {!!employer &&
                employerAppTopNavItems.map(({ label, to }) => {
                  return (
                    <TopNavItem key={label}>
                      <LinkContainer isActive={pathname.includes(to)}>
                        <Link to={to}>{label}</Link>
                      </LinkContainer>
                    </TopNavItem>
                  )
                })}
              {!!teacher &&
                candidateAppTopNavItems.map(({ label, to }) => {
                  return (
                    <TopNavItem key={label}>
                      <LinkContainer isActive={pathname.includes(to)}>
                        <Link to={to}>{label}</Link>
                      </LinkContainer>
                    </TopNavItem>
                  )
                })}
            </SectionContainerLeft>
          }

          {/* Right Section */}
          {
            <SectionContainerRight>
              {!!employer && (
                <TopNavItem>
                  <LinkContainer isActive={pathname.includes(EmployerAts)}>
                    <Link to={EmployerAts}>ATS</Link>
                  </LinkContainer>
                </TopNavItem>
              )}
              <TopNavItem>
                <PortraitImage src={photoUrl} />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  id='user-menu-toggle-icon'
                  className='fas fa-caret-down user-menu-dropdown'
                  onClick={() => {
                    updater.toggleOpenGlobal({
                      componentName: 'topNav',
                    })
                  }}
                />
                {isUserMenuOpen && (
                  <UserMenuNavItem
                    user={user}
                    employer={employer}
                    teacher={teacher}
                  />
                )}
              </TopNavItem>
            </SectionContainerRight>
          }
        </SectionsContainer>

        {/* MOBILE MENU */}
        <MobileMenuButtonContainer
          onClick={() => this.setState({ isMobileMenuOpen: !isMobileMenuOpen })}
        >
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuButtonContainer>
        <MobileMenuContainer hidden={!isMobileMenuOpen}>
          {!!employer &&
            employerAppTopNavItems.map(({ label, to }) => {
              return (
                <TopNavItem key={label}>
                  <LinkContainer
                    isActive={pathname.includes(to)}
                    onClick={() => {
                      return (
                        isMobileMenuOpen &&
                        this.setState({ isMobileMenuOpen: false })
                      )
                    }}
                  >
                    <Link to={to}>{label}</Link>
                  </LinkContainer>
                </TopNavItem>
              )
            })}
          {!!teacher &&
            candidateAppTopNavItems.map(({ label, to }) => {
              return (
                <TopNavItem key={label}>
                  <Link to={to}>{label}</Link>
                </TopNavItem>
              )
            })}
        </MobileMenuContainer>
      </Container>
    )
  }
}

/*
|--------------------------------------------------------------------------
| Redux
|--------------------------------------------------------------------------
*/

const mapStateToProps = state => {
  return {
    isUserMenuOpen: state.global.isOpen.topNav,
    user: state.session.user,
    employer: state.session.employer,
    teacher: state.session.teacher,
  }
}

export default withRouter(connect(mapStateToProps)(TopNav))
