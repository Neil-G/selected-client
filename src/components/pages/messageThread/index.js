import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { SendMessageForm } from './../../forms/TextForms'

const Container = styled.div`
  display: flex;
  width: 1020px;
  margin: auto;
`

const InfoContainer = styled.div`
  width: fit-content;
  padding: 8px;
  background: whitesmoke;
  margin-right: 24px;
`

const InfoSection = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 0;
`

const ActionButtonsContainer = styled.div`
  padding-bottom: 8px;
  button:not(:last-child) {
    margin-right: 4px;
  }
`

const MessageThreadContainer = styled.div`
  flex-grow: 1;
`

class MessageThread extends React.Component {
  _renderCandidateInfo = () => {
    return (
      <InfoContainer>
        <div>
          <ActionButtonsContainer>
            <button>Pass</button>
            <button>Greenhouse</button>
            <button>Resume</button>
          </ActionButtonsContainer>
          <InfoSection>
            <div>portrait</div>
            <div>firstName lastName</div>
            <div>email</div>
            <div>headline</div>
            <div>tags</div>
          </InfoSection>
          <InfoSection>
            <div>years experience</div>
            <div>grade levels</div>
            <div>subjects</div>
          </InfoSection>
          <InfoSection>
            <div>certifications</div>
          </InfoSection>
          <InfoSection>
            <div>education</div>
          </InfoSection>
          <InfoSection>
            <div>Notable schools taught at</div>
          </InfoSection>
          <InfoSection>
            <div>History</div>
          </InfoSection>
        </div>
      </InfoContainer>
    )
  }

  _renderEmployerInfo = () => {
    return (
      <InfoContainer>
        <div>
          <ActionButtonsContainer>
            <button>Pass</button>
            <button>Greenhouse</button>
            <button>Resume</button>
          </ActionButtonsContainer>
          <InfoSection>
            <div>portrait</div>
            <div>firstName lastName</div>
            <div>email</div>
            <div>headline</div>
            <div>tags</div>
          </InfoSection>
          <InfoSection>
            <div>years experience</div>
            <div>grade levels</div>
            <div>subjects</div>
          </InfoSection>
          <InfoSection>
            <div>certifications</div>
          </InfoSection>
          <InfoSection>
            <div>education</div>
          </InfoSection>
          <InfoSection>
            <div>Notable schools taught at</div>
          </InfoSection>
          <InfoSection>
            <div>History</div>
          </InfoSection>
        </div>
      </InfoContainer>
    )
  }
  render() {
    const { appName } = this.props
    return (
      <Container>
        {appName === 'employer' && this._renderCandidateInfo()}
        {appName === 'candidate' && this._renderEmployerInfo()}
        <MessageThreadContainer>
          <SendMessageForm />
        </MessageThreadContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.session.user,
    teacher: state.session.teacher,
    employer: state.session.employer,
  }
}

export default connect()(MessageThread)
