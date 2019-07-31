import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import { EmployerInterview } from './../../../../constants/urlPaths'
import SearchAndFilterBar from './../../../forms/SearchAndFilterBar'
import Modal from 'react-modal'
import { Route, Link } from 'react-router-dom'
import { SendMessageForm } from './../../../forms/TextForms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

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
| Table Columns
|--------------------------------------------------------------------------
*/

const profileImageCol = {
  id: 'profileImage',
}

const nameCol = {
  id: 'fullName',
  Header: 'Name',
}

const lastMessageCol = {
  id: 'lastMessage',
  Header: 'Last Message',
}

const handlersCol = {
  id: 'handlers',
  Header: 'Header(s)',
}

const resumeCol = {
  id: 'resume',
  Header: 'Resume',
}

const matchesCol = {
  id: 'matches',
  Header: 'Matches',
}

const atsStatusCol = {
  id: 'atsStatus',
  Header: 'ATS Status',
}

/*
|--------------------------------------------------------------------------
| React Component
|--------------------------------------------------------------------------
*/

class Interview extends React.Component {
  _renderTable = () => {
    const columns = [
      profileImageCol,
      nameCol,
      lastMessageCol,
      matchesCol,
      handlersCol,
      resumeCol,
      atsStatusCol,
    ]
    const mobileColumns = [nameCol, lastMessageCol]
    return (
      <ReactTable
        data={[]}
        columns={columns}
        showPaginationTop={false}
        showPaginationBottom={false}
        noDataText={null}
        className='-striped'
      />
    )
  }
  render() {
    const { isFilterBarOpen, pageSettings } = this.props
    return (
      <Container>
        <PageTitle>Your Candidates</PageTitle>
        <SearchAndFilterBar
          appName='employer'
          pageName='interview'
          isFilterBarOpen={isFilterBarOpen}
          filterSettings={pageSettings.applicationsFilter.settings}
        />
        {this._renderTable()}
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
    isFilterBarOpen: state.employerPages.interview.isFilterBarOpen,
    pageSettings: state.employerPages.interview,
  }
}

export default connect(mapStateToProps)(Interview)
