import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GreenhouseButton } from './../shared/buttons'
// import { faBookmark as bookMarkOutline } from '@fortawesome/free-regular-svg-icons'
import { TagsContainer } from './Tags'
import moment from 'moment'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  border: 1px solid #eaecec;
  border-radius: 3px;
  // box-shadow: 0px 1px 2px 0px rgba(209, 212, 212, 0.9);
  margin: 24px auto;
  max-width: 945px;
  position: relative;
  h3 {
    font-weight 600;
  }
  ${({ isInViewingMode }) => {
    return (
      isInViewingMode &&
      css`
        max-width: 500px;
        margin: 8px;
        height: 360px;
        overflow: hidden;
      `
    )
  }}
  ${({ stateApplicationIsChangingTo }) => {
    return (
      stateApplicationIsChangingTo &&
      css`
        // opacity: 0.2;
      `
    )
  }}
`

const Header = styled.div`
  align-items: center;
  background: #f5f5f5;
  display: flex;
  height: 45px;
  padding: 5px 5px 5px 15px;
  position: relative;
  justify-content: space-between;
`

const NameContainer = styled.div`
  align-items: center;
  color: black;
  display: flex;
  font-family: AvenirNext-UltraLight;
  font-size: 20px;
  @media (max-width: 720px) {
    font-size: 16px;
  }
`

const ActionButtonsContainer = styled.div`
  align-items: center;
  color: black;
  display: flex;
  font-size: 12px;
`

const ActionButton = styled.div`
  border-radius: 3px;
  height: 27px;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 18px;
  cursor: pointer;
  @media (max-width: 540px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`

// ${({ disabled }) => {
//   return (
//     disabled &&
//     css`
//       cursor: default;
//     `
//   )
// }}
// ${({ passButton, disabled }) => {
//   return (
//     passButton &&
//     css`
//       background: ${colors.passButton};
//       &:hover {
//         background: ${!disabled && colors.passButtonHover};
//       }
//     `
//   )
// }}
// ${({ saveButton, disabled }) => {
//   return (
//     saveButton &&
//     css`
//       background: ${colors.saveButton};
//       &:hover {
//         background: ${!disabled && colors.saveButtonHover};
//       }
//     `
//   )
// }}
// ${({ messageButton, disabled }) => {
//   return (
//     messageButton &&
//     css`
//       background: ${colors.messageButton};
//       &:hover {
//         background: ${!disabled && colors.messageButtonHover};
//       }
//     `
//   )
// }}

const Body = styled.div`
  background: #fdfdfd;
  padding: 15px;
`

const ProfileContainer = styled.div`
  display: flex;
`

const PortraitImage = styled.img`
  /* height: 50px; */
  max-width: 80px;
  max-height: 80px;
  min-height: 80px;
  min-width: 80px;
  border-radius: 100px;
  margin-right: 24px;
`

const Tag = styled.div`
  align-items: center;
  border-radius: 80px;
  border: 1px solid #eaecec;
  color: ffd600;
  display: flex;
  padding: 4px 10px;
  margin: 0 8px 8px 0;
  font-size: 12px;
  @media (max-width: 540px) {
    margin: 0 8px 3px 0;
  }
`

const InfoContainer = styled.div`
  display: flex;
  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`

const InfoColumn = styled.div`
  width: 40%;
  box-sizing: border-box;
  &:not(:first-child) {
    padding-left: 24px;
  }
  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    padding-right: 24px;
  }
  @media (max-width: 540px) {
    width: 100%;
    padding-left: 0 !important;
    &:not(:first-child) {
      border-top: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
`

const InfoBoxTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  font-weight: bold;
`

const InfoItemList = styled.ul`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 14px;
`
const GradeLevelsContainer = styled.div`
  display: flex;
  borderradius: 3px;
  width: fit-content;
`
const GradeLevelDisplayItem = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px 0 0;
`

const MessageContainer = styled.a`
  align-items: center;
  color: #2996cc;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  width: 100%;
  background: #fafaff;
  padding: 10px;
  border-left: 4px solid #eaecec;
  border-radius: 4px;
  &:hover {
    color: #227ba7;
    background: rgb(248, 248, 253);
  }
  cursor: ${({ disabled }) => disabled && 'default'};
`

const HeaderInfoItem = styled.div`
  display: flex;
  margin-right: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
`

const HeaderInfoItemLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  padding: 4px 12px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`

const HeaderInfoItemData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  padding: 3px 12px;
`

/*
|--------------------------------------------------------------------------
| Maps
|--------------------------------------------------------------------------
*/

const stateNameMap = {
  Saved: 'saved',
  Passed: 'trashed',
  Invited: 'contacted',
}

const formattedLanguagesMap = {
  haitianCreole: 'Haitian Creole',
  chineseMandarin: 'Chinese (Mandarin)',
  chineseCantonese: 'Chinese (Cantonese)',
  americanSignLanguage: 'American Sign Language',
}

/*
|--------------------------------------------------------------------------
| Stateless Component
|--------------------------------------------------------------------------
*/

const StyledNewTag = styled.span`
  color: #3bd142;
  margin-right: 9px;
  font-size: 14px;
  @media (max-width: 720px) {
    font-size: 12px;
  }
  @media (max-width: 540px) {
    font-size: 10px;
  }
`
const NewTag = () => <StyledNewTag>new</StyledNewTag>

/*
|--------------------------------------------------------------------------
| Card Component
|--------------------------------------------------------------------------
*/

export default class CandidateCard extends React.Component {
  state = {
    stateApplicationIsChangingTo: undefined,
  }
  _changeApplicationStateTo = state => {
    const { id: applicationId } = this.props.application

    // turns on state change styling/animation
    this.setState({
      stateApplicationIsChangingTo: state,
    })
    // slight artificial delay on state change to alert the user
    window.setTimeout(() => {
      updater.updateApplicationState({
        state: stateNameMap[state],
        applicationId,
      })
    }, 2000)
  }

  componentDidUpdate(prevProps, prevState) {
    // remove the state change indicator
    if (!!prevState.stateApplicationIsChangingTo)
      this.setState({ stateApplicationIsChangingTo: undefined })
  }

  _renderRecentActivityBadge = () => {
    const {
      application: {
        teacher: {
          user: { daysActive = [] },
        },
      },
    } = this.props
    if (daysActive.length === 0) return null
    const lastDayActive = daysActive[daysActive.length - 1]
    const numDaysActiveAgo = moment().diff(
      moment(lastDayActive, 'M/D/YY'),
      'days'
    )
    if (numDaysActiveAgo > 8) return null
    return (
      <Tag>
        <FontAwesomeIcon
          icon='clock'
          style={{
            color: '#546e7a',
            marginRight: '8px',
            marginBottom: '2px',
            fontSize: '.8rem',
          }}
        />
        {moment().format('M/D/YY') === lastDayActive
          ? 'Active today'
          : numDaysActiveAgo < 2
          ? 'Active in the past day'
          : moment().format('w') === moment(lastDayActive, 'M/D/YY').format('w')
          ? 'Active this week'
          : 'Active in the past week'}
      </Tag>
    )
  }

  _renderTags = () => {
    const {
      application: {
        roleMatches = [],
        isCultureMatch,
        numActiveApplicationsWithOtherEmployers,
        teacher: { degrees = [] },
      },
    } = this.props
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this._renderRecentActivityBadge()}
        {degrees.some(({ degree }) => {
          return degree === 'doctoral'
        }) && (
          <Tag>
            <FontAwesomeIcon
              icon='graduation-cap'
              style={{
                color: '#1b5e20',
                marginRight: '8px',
                marginBottom: '2px',
                fontSize: '.8rem',
              }}
            />
            Doctorate
          </Tag>
        )}
        {degrees.some(({ institution }) => {
          return institution && institution.toLowerCase().includes('columbia')
        }) && (
          <Tag>
            <FontAwesomeIcon
              icon='graduation-cap'
              style={{
                color: '#1b5e20',
                marginRight: '8px',
                marginBottom: '2px',
                fontSize: '.8rem',
              }}
            />
            Ivy League
          </Tag>
        )}
        {roleMatches.map(({ gradeLevel, subject }) => {
          return (
            <Tag>
              <FontAwesomeIcon
                icon='star'
                style={{
                  color: '#ffd600',
                  marginRight: '8px',
                  marginBottom: '2px',
                  fontSize: '.8rem',
                }}
              />
              {gradeLevel} {subject}
            </Tag>
          )
        })}
        {isCultureMatch && (
          <Tag>
            <FontAwesomeIcon
              icon='puzzle-piece'
              style={{
                color: '#9575cd',
                marginRight: '8px',
                marginBottom: '2px',
                fontSize: '.8rem',
              }}
            />
            Culture Match
          </Tag>
        )}
        {numActiveApplicationsWithOtherEmployers >= 4 &&
          numActiveApplicationsWithOtherEmployers < 8 && (
            <Tag>
              <FontAwesomeIcon
                icon='fire'
                style={{
                  color: '#ef6c00',
                  marginRight: '8px',
                  marginBottom: '2px',
                  fontSize: '.8rem',
                }}
              />
              Popular
            </Tag>
          )}

        {numActiveApplicationsWithOtherEmployers >= 8 && (
          <Tag>
            <FontAwesomeIcon
              icon='fire'
              style={{
                color: '#ef6c00',
                marginRight: '4px',
                marginBottom: '2px',
                fontSize: '.8rem',
              }}
            />
            <FontAwesomeIcon
              icon='fire'
              style={{
                color: '#ef6c00',
                marginRight: '8px',
                marginBottom: '2px',
                fontSize: '.8rem',
              }}
            />
            Very Popular
          </Tag>
        )}
      </div>
    )
  }

  render() {
    const { employer, application } = this.props
    const {
      id: applicationId,
      numActiveApplicationsWithOtherEmployers = 0, // used to determine "popular" flag
      lastMessage,
      threadId,
      isCultureMatch,
      roleMatches,
      teacher: {
        headline,
        gradeLevels = {},
        subjects = [],
        languages = [],
        startDate,
        yearsTeaching,
        certifications = [],
        schoolsTaught = [],
        degrees = [],
        user: { id: userId, lastName, firstName, photoUrl, isAnonymous },
      },
      state,
    } = application
    const { stateApplicationIsChangingTo } = this.state

    const shouldHidePii =
      (isAnonymous &&
        ['new', 'saved', 'trashed', 'contacted'].includes(state)) ||
      (!employer.isApproved && !employer.approvedAt)

    const gradeLevelsString = Object.keys(gradeLevels)
      .filter(level => gradeLevels[level])
      .join(' ')
      .trim()
      .split('_')
    const gradeLevelRange = `${gradeLevelsString[1]} - ${
      gradeLevelsString[gradeLevelsString.length - 1] == 2
        ? 12
        : gradeLevelsString[gradeLevelsString.length - 1]
    }`
    return (
      <Container
        isInViewingMode={this.props.isInViewingMode}
        stateApplicationIsChangingTo={stateApplicationIsChangingTo}
      >
        {/* State change notification */}
        <div
          style={{
            display: !stateApplicationIsChangingTo && 'none',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.6)',
            zIndex: '50',
          }}
        >
          <p
            style={{
              background: 'white',
              textAlign: 'center',
              display: 'inline-block',
              margin: '18px auto',
              padding: '8px',
              borderRadius: '3px',
            }}
          >
            Moving Candidate to {stateApplicationIsChangingTo}
          </p>
        </div>

        {/* HEADER */}
        <Header>
          {/* Name */}
          <NameContainer>
            {/* TODO: format name using a function */}
            {state === 'new' && <NewTag />}
            {shouldHidePii
              ? `${firstName[0]}.${lastName[0]}.`
              : ['accepted', 'respondedTo', 'scheduled'].includes(state)
              ? `${firstName} ${lastName}`
              : `${firstName} ${lastName[0]}.`}
          </NameContainer>

          {/* Buttons */}
          <ActionButtonsContainer>
            {/* Pass */}
            {['new', 'contacted', 'trashed'].includes(state) && (
              <ActionButton
                passButton
                onClick={() => {
                  if (state === 'trashed') return
                  this._changeApplicationStateTo('Passed')
                }}
                disabled={state === 'trashed'}
              >
                <FontAwesomeIcon icon='ban' />
                <span style={{ marginLeft: '8px' }}>
                  {state === 'trashed'
                    ? 'Passed ' +
                      moment(application.historyTrashed.onDate, 'x').fromNow()
                    : 'Pass'}
                </span>
              </ActionButton>
            )}

            {/* Connect Button*/}
            {['new', 'saved', 'trashed', 'contacted'].includes(state) &&
              (state === 'contacted' ? (
                <ActionButton
                  disabled
                  style={{ background: 'rgba(0,0,0,0.15)' }}
                >
                  <FontAwesomeIcon icon='check-square' />
                  <span style={{ marginLeft: '8px' }}>
                    Requested{' '}
                    {moment(application.historyContacted.onDate, 'x').fromNow()}
                  </span>
                </ActionButton>
              ) : (
                <ConnectButton application={application} employer={employer} />
              ))}

            {/* Message */}
            {['accepted', 'respondedTo', 'scheduled'].includes(state) && (
              <a
                style={{ color: 'rgb(234, 245, 253)' }}
                href={
                  threadId
                    ? `/school/home/inbox/active/thread/${threadId}`
                    : '#'
                }
              >
                <ActionButton messageButton>
                  <FontAwesomeIcon
                    icon='paper-plane'
                    style={{
                      marginRight: '12px',
                    }}
                  />
                  Message
                </ActionButton>
              </a>
            )}

            {/* Greenhouse */}
            {['accepted', 'respondedTo', 'scheduled'].includes(state) && (
              <GreenhouseButton {...this.props} componentName='candidateCard'>
                Send to Greenhouse
              </GreenhouseButton>
            )}
          </ActionButtonsContainer>
        </Header>

        {/* BODY */}
        <Body>
          <div
            style={{
              display: 'flex',
              paddingBottom: '8px',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              marginBottom: '8px',
            }}
          >
            {shouldHidePii ? (
              <div style={{ marginRight: '16px' }}>
                <div>ANON</div>
              </div>
            ) : (
              <PortraitImage
                src={
                  shouldHidePii
                    ? `https://fullstory.com/s/img/avatars/${random(
                        10,
                        29
                      )}@2x.png`
                    : photoUrl
                }
              />
            )}

            {!lastMessage ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {moment(startDate, 'M/YYYY').isSameOrAfter(moment()) && (
                  <InfoBoxTitle style={{ marginTop: '0' }}>
                    Available {moment(startDate, 'M/YYYY').format('MMM YYYY')}
                  </InfoBoxTitle>
                )}

                <p
                  style={{ marginTop: '0', fontSize: '13px', display: 'flex' }}
                >
                  {headline}
                </p>

                <TagsContainer horizontal isCultureMatch />
              </div>
            ) : (
              <MessageContainer
                disabled={['new', 'trashed', 'contacted', 'saved'].includes(
                  state
                )}
                href={
                  threadId &&
                  !['new', 'passed', 'contacted', 'saved'].includes(state)
                    ? `/school/home/inbox/active/thread/${threadId}`
                    : '#'
                }
              >
                <p>
                  {lastMessage.senderUser.type !== 'employer' && (
                    <FontAwesomeIcon
                      icon='reply'
                      style={{ marginRight: '6px' }}
                    />
                  )}
                  <FontAwesomeIcon
                    icon='quote-left'
                    style={{
                      marginRight: '6px',
                      marginBottom: '2px',
                      fontSize: '1rem',
                    }}
                  />
                  {lastMessage.decryptedText}
                </p>
                <FontAwesomeIcon icon='chevron-right' />
              </MessageContainer>
            )}
          </div>

          <InfoContainer>
            {/* Subjects */}
            <InfoColumn>
              {/* Grade levels */}
              <InfoBoxTitle>
                Years experience:{' '}
                <span style={{ marginLeft: '6px', fontWeight: 'lighter' }}>
                  {yearsTeaching}
                </span>
              </InfoBoxTitle>

              <InfoBoxTitle>
                Grade levels:{' '}
                <span style={{ marginLeft: '6px', fontWeight: 'lighter' }}>
                  {gradeLevelRange}
                </span>
              </InfoBoxTitle>

              <InfoBoxTitle>Subjects</InfoBoxTitle>
              <InfoItemList>
                {subjects.map(subject => (
                  <li>{subject}</li>
                ))}
              </InfoItemList>

              {languages.length > 0 && [
                <InfoBoxTitle>Languages</InfoBoxTitle>,
                <InfoItemList>
                  {/* TODO: map out languages */}
                  {languages.map(language => (
                    <li>
                      {formattedLanguagesMap[language] || capitalize(language)}
                    </li>
                  ))}
                  {languages.length === 0 && 'None'}
                </InfoItemList>,
              ]}
            </InfoColumn>

            {/* Col 3 */}
            <InfoColumn>
              {/* Certifications */}
              <InfoBoxTitle>Certifications</InfoBoxTitle>
              <InfoItemList>
                {certifications.map(({ state, status, grades, subject }) => {
                  return (
                    <li style={{ marginBottom: '13px' }}>
                      <div style={{ fontSize: '14px' }}>{subject}</div>
                      <div style={{ fontSize: '10px' }}>
                        {state}, {grades}{' '}
                        {status === 'expected' && '(in progress)'}
                      </div>
                    </li>
                  )
                })}
                {certifications.length === 0 && 'None'}
              </InfoItemList>
            </InfoColumn>

            {/* Col 4 */}
            <InfoColumn>
              {/* Education */}
              <InfoBoxTitle>Education</InfoBoxTitle>
              <InfoItemList>
                {degrees.map(({ degree, institution, concentration }) => {
                  return (
                    <li style={{ marginBottom: '13px' }}>
                      <div style={{ fontSize: '14px' }}>{concentration}</div>
                      {!!concentration && (
                        <div style={{ fontSize: '10px' }}>
                          {typeof degree === 'string' &&
                            degree.substring(0, 2).toUpperCase()}
                          , {institution}
                        </div>
                      )}
                    </li>
                  )
                })}
              </InfoItemList>
            </InfoColumn>

            <InfoColumn>
              {/* Notable Schools */}
              <InfoBoxTitle>Notable schools taught at</InfoBoxTitle>
              {!shouldHidePii && (
                <InfoItemList>
                  {schoolsTaught.map(({ schoolName }) => {
                    return <li style={{ marginBottom: '8px' }}>{schoolName}</li>
                  })}
                  {schoolsTaught.length === 0 && 'None'}
                </InfoItemList>
              )}
            </InfoColumn>
          </InfoContainer>
        </Body>
      </Container>
    )
  }
}
