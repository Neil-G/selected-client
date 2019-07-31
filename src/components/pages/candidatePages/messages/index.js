import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PageTopNavBar from './../../../shared/PageTopNavBar'
import { CandidateMessages } from './../../../../constants/urlPaths'
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

class SearchPage extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle>Messages With Schools</PageTitle>
        <PageTopNavBar
          rootPath={CandidateMessages}
          navItems={['active', 'respond', 'passed']}
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
  return {}
}

export default connect(mapStateToProps)(SearchPage)
