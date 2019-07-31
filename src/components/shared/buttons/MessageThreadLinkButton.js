import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { EmployerMessageThreadRoot } from './../../../constants/urlPaths'

/*
|--------------------------------------------------------------------------
| Message Button
|--------------------------------------------------------------------------
*/

const StyledMessageLinkButton = styled.button``

export default ({ application }) => {
  return (
    <Link to={`${EmployerMessageThreadRoot}/${application.id}`}>
      <StyledMessageLinkButton>
        <FontAwesomeIcon icon={faEnvelope} /> Message
      </StyledMessageLinkButton>
    </Link>
  )
}
