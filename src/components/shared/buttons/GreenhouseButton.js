import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { EmployerAts } from './../../../constants/urlPaths'

const Container = styled.div`
  button {
    width: 100px;
  }
`

const ConnectLinkButton = styled.button``

export default ({
  componentName,
  employer: {
    greenhouse: { ingestionToken },
    greenhouseJobs,
  },
  application: { greenhouseApplicationId },
}) => {
  // if application as a greenhouse id, it's been exported to greenhouse
  if (!!greenhouseApplicationId) {
    return (
      <Container>
        <a href='#'>
          {componentName === 'inboxListItem' && (
            <span>
              Sent <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          )}
          {componentName === 'candidateCard' && (
            <button className='primary'>See in Greenhouse</button>
          )}
        </a>
      </Container>
    )
  }

  // token and jobs, the token is valid
  if (!!ingestionToken && !!greenhouseJobs) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
      <div>
        <Container>
          <button
            className='primary'
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Send
          </button>
        </Container>
        <SendToGreenhouseModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    )
  }

  // no token or jobs, employer has never connected
  if (!ingestionToken && !greenhouseJobs) {
    return (
      <Container>
        <Link to={EmployerAts}>
          <button className='primary-alt'>Connect</button>
        </Link>
      </Container>
    )
  }

  // token but no jobs, token is invalid
  if (!!ingestionToken && !greenhouseJobs) {
    return (
      <Container>
        <button className='primary-alt'>Reconnect </button>
      </Container>
    )
  }
}

const SendToGreenhouseModal = ({ isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel='Add a degree'
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'visible',
          width: '540px',
        },
      }}
    >
      Send to Greenhouse Here
      <button onClick={closeModal}>cancel</button>
    </Modal>
  )
}
