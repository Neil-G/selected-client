import React from 'react'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import styled from 'styled-components'
import { topNavHeight } from './../../styles/globalLayout'

const Container = styled.div`
  background: #fafaff;
  border: 2px solid #2996cc;
  max-width: 945px;
  margin: 12px auto;
  border-radius: 4px;
  top: ${({ top }) => top || `${topNavHeight + 3}px`};
  z-index: 100;
  @media (min-width: 540px) {
    position: sticky;
  }
`

export default ({
  appName,
  pageName,
  isFilterBarOpen,
  filterSettings,
  top,
}) => {
  return (
    <Container top={top}>
      <SearchBar
        isFilterBarOpen={isFilterBarOpen}
        appName={appName}
        pageName={pageName}
        filterSettings={filterSettings}
      />
      <FilterBar
        isFilterBarOpen={isFilterBarOpen}
        appName={appName}
        pageName={pageName}
        filterSettings={filterSettings}
      />
    </Container>
  )
}
