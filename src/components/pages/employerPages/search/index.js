import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PageTopNavBar from './../../../shared/PageTopNavBar'
import { EmployerSearch } from './../../../../constants/urlPaths'
import SearchAndFilterBar from './../../../forms/SearchAndFilterBar'
import { employer } from './../../../../mockData/employers'
import { acceptedApplication } from './../../../../mockData/applications'
import { CandidateCard } from './../../../shared'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  color: #333;
  padding: 0 12px 40px;
  max-width: 945px;
  margin: auto;
`

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 100;
  margin: 10px auto;
`

/*
|--------------------------------------------------------------------------
| React Component
|--------------------------------------------------------------------------
*/

class Search extends React.Component {
  render() {
    const { isFilterBarOpen, pageSettings } = this.props
    return (
      <Container>
        <PageTitle>Your Matches</PageTitle>
        <PageTopNavBar
          rootPath={EmployerSearch}
          navItems={['new', 'invited', 'passed', 'all']}
        />
        <SearchAndFilterBar
          top='83px'
          appName='employer'
          pageName='search'
          isFilterBarOpen={isFilterBarOpen}
          filterSettings={pageSettings.applicationsFilter.settings}
        />
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
    isFilterBarOpen: state.employerPages.search.isFilterBarOpen,
    pageSettings: state.employerPages.search,
  }
}

export default connect(mapStateToProps)(Search)
