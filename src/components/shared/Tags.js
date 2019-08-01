import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece, faStar } from '@fortawesome/free-solid-svg-icons'

const StyledTagsContainer = styled.div`
  display: flex;
  ${({ horizontal }) => {
    return (
      horizontal &&
      css`
        flex-direction: row;
      `
    )
  }}
  ${({ vertical }) => {
    return (
      vertical &&
      css`
        flex-direction: column;
      `
    )
  }}
`

const StyledTag = styled.div`
  align-items: center;
  border-radius: 80px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: ffd600;
  display: flex;
  justify-content: center;
  padding: 4px 12px;
  margin: 0 8px 4px 0;
  font-size: 0.8rem;
  width: fit-content;
  @media (max-width: 540px) {
    margin: 0 8px 3px 0;
  }
`

export const Tag = ({ icon, label }) => {
  return (
    <StyledTag>
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: '#444',
          marginRight: '8px',
          fontSize: '.65rem',
        }}
      />
      {label}
    </StyledTag>
  )
}

export const TagsContainer = ({
  isCultureMatch,
  roleMatches = [],
  isIvyLeagueGraduate,
  hasADoctorate,
  vertical = false,
  horizontal = false,
}) => {
  return (
    <StyledTagsContainer vertical={vertical} horizontal={horizontal}>
      {isCultureMatch && <Tag icon={faPuzzlePiece} label='Culture' />}
      {roleMatches &&
        roleMatches.map(({ id, gradeLevel, subject }) => {
          return <Tag icon={faStar} label={`${gradeLevel} ${subject}`} />
        })}
    </StyledTagsContainer>
  )
}

export default TagsContainer