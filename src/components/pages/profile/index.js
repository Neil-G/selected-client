import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Element, scroller } from 'react-scroll'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import {
  RolesForm,
  SchoolTypeForm,
  GradeLevelForm,
  SubjectsForm,
  SchoolStructureForm,
  AuthorizedToWorkInUSForm,
  AmericorpsForm,
  TeachingFellowForm,
  TerminationHistoryForm,
  GenderForm,
  RaceEthnicityForm,
  CultureForm,
} from './../../forms/ButtonForms'
import {
  CandidateBasicsForms,
  CandidateEducationForm,
  CandidateCertificationsForm,
  CandidateYearsExperienceForm,
  CandidateNotableSchoolsForm,
  CandidateLanguagesForm,
  EmployerIdealCandidateForm,
  EmployerStudentsForm,
  EmployerFacultyForm,
  EmployerBasicInfoForm,
} from './../../forms/TextForms'

import { StartDateForm, LocationsForm } from './../../forms/SelectInputs'
import 'react-tabs/style/react-tabs.css'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  display: flex;
  max-width: 945px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CandidatePageContainer = styled.div`
  display: flex;
  justify-content: center;
`
const CandidateFormsContainer = styled.div`
  max-width: 65%;
  margin-right: 30px;
  width: 960px;
  @media (max-width: 540px) {
    width: 95%;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const TabContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
`

const CandidateTimeLineContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
`

const TabSectionContainer = styled.div`
  padding: 12px;
  &:not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`
const EmployerPageContainer = styled.div`
  width: 945px;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
/*
|--------------------------------------------------------------------------
| Tabs
|--------------------------------------------------------------------------
*/

const candidateTabs = [
  {
    label: 'Your Info',
    path: '',
  },
  {
    label: 'Job You Want',
    path: '',
  },
  {
    label: 'Privacy',
    path: '',
  },
]

const employerTabs = [
  {
    label: 'Basic Info',
    to: '/employer/profile/basic-info',
    tabs: [
      {
        tabName: 'basic info',
        formComponents: [<EmployerBasicInfoForm />],
      },
      {
        tabName: 'school structure',
        formComponents: [<SchoolStructureForm />],
      },
      {
        tabName: 'school type',
        formComponents: [<SchoolTypeForm />],
      },
      {
        tabName: 'school culture',
        formComponents: [<CultureForm />],
      },
      {
        tabName: 'students',
        formComponents: [<EmployerStudentsForm />],
      },
      {
        tabName: 'faculty',
        formComponents: [<EmployerFacultyForm />],
      },
    ],
  },
  {
    label: 'Candidates you want',
    to: '/employer/profile/candidates-you-want',
    tabs: [
      {
        tabName: 'grade levels',
        formComponents: [<GradeLevelForm />],
      },
      {
        tabName: 'locations',
        formComponents: [<LocationsForm />],
      },
      {
        tabName: 'ideal candidate',
        formComponents: [<EmployerIdealCandidateForm />],
      },
    ],
  },
  {
    label: 'Preview',
    to: '/employer/profile/preview',
    Component: () => <div>Profile Preview</div>,
  },
]

/*
|--------------------------------------------------------------------------
| Tab Sections
|--------------------------------------------------------------------------
*/

// Candidate App
const yourInfoTabSections = [
  {
    tabName: 'basics',
    formComponents: [<CandidateBasicsForms />],
  },
  {
    tabName: 'education',
    formComponents: [<CandidateEducationForm />],
  },
  {
    tabName: 'certification',
    formComponents: [<CandidateCertificationsForm />],
  },
  {
    tabName: 'work experience',
    formComponents: [
      <CandidateYearsExperienceForm />,
      <CandidateNotableSchoolsForm />,
      <CandidateLanguagesForm />,
    ],
  },
  {
    tabName: 'other info',
    formComponents: [
      <AuthorizedToWorkInUSForm />,
      <AmericorpsForm />,
      <TeachingFellowForm />,
      <TerminationHistoryForm />,
      <GenderForm />,
      <RaceEthnicityForm />,
    ],
  },
  {
    tabName: 'school culture',
    formComponents: [<CultureForm />],
  },
]

const jobYouWantTabSections = [
  {
    tabName: 'roles',
    formComponents: [<RolesForm />],
  },
  {
    tabName: 'start date',
    formComponents: [<StartDateForm />],
  },
  {
    tabName: 'locations',
    formComponents: [<LocationsForm />],
  },
  {
    tabName: 'school type',
    formComponents: [<SchoolTypeForm />],
  },
  {
    tabName: 'grade levels',
    formComponents: [<GradeLevelForm />],
  },
  {
    tabName: 'subjects',
    formComponents: [<SubjectsForm />],
  },
]

/*
|--------------------------------------------------------------------------
| Global Layout
|--------------------------------------------------------------------------
*/

class ProfilePage extends React.Component {
  state = {
    openTab: undefined,
  }

  _renderTabSection = ({ tabName, formComponents }) => {
    const { openTab } = this.state
    const isTabHidden = openTab !== tabName
    return (
      <TabSectionContainer>
        <Element name={tabName} />
        <h2 style={{ fontSize: '1.2rem' }} id={tabName}>
          {tabName.toUpperCase()}
          <span style={{ float: 'right', cursor: 'pointer' }}>
            {isTabHidden ? (
              <FontAwesomeIcon
                color='#f48022'
                icon={faPencilAlt}
                onClick={() => {
                  this.setState({ openTab: tabName })
                  scroller.scrollTo(tabName, {
                    duration: 800,
                    smooth: true,
                    delay: 250,
                    offset: -60,
                  })
                }}
              />
            ) : (
              <FontAwesomeIcon
                color='gray'
                icon={faTimesCircle}
                onClick={() => this.setState({ openTab: undefined })}
              />
            )}
          </span>
        </h2>
        <div hidden={isTabHidden}>{formComponents}</div>
      </TabSectionContainer>
    )
  }

  _renderCandidateForms = () => {
    return (
      <CandidatePageContainer>
        <CandidateFormsContainer>
          <TabList>
            {candidateTabs.map(({ label }) => {
              return <Tab>{label}</Tab>
            })}
          </TabList>
          <TabPanel>{yourInfoTabSections.map(this._renderTabSection)}</TabPanel>
          <TabPanel>
            {jobYouWantTabSections.map(this._renderTabSection)}
          </TabPanel>
        </CandidateFormsContainer>
        <CandidateTimeLineContainer>SUBMIT BUTTON</CandidateTimeLineContainer>
      </CandidatePageContainer>
    )
  }

  _renderEmployerForms = () => {
    return (
      <EmployerPageContainer>
        <TabList>
          {employerTabs.map(({ label, to }) => {
            return (
              <Tab>
                <Link to={to}>{label}</Link>
              </Tab>
            )
          })}
        </TabList>
        {employerTabs.map(({ tabs, Component }) => {
          return (
            <TabPanel>
              {!!Component ? <Component /> : tabs.map(this._renderTabSection)}
            </TabPanel>
          )
        })}
      </EmployerPageContainer>
    )
  }
  render() {
    const {
      appName,
      location: { pathname },
      history: { push },
    } = this.props
    let selectedIndex
    employerTabs.forEach(({ to }, idx) => {
      if (pathname === to) selectedIndex = idx
    })
    return (
      <Container>
        <Tabs selectedIndex={selectedIndex}>
          {appName === 'candidate' && this._renderCandidateForms()}
          {appName === 'employer' && this._renderEmployerForms()}
        </Tabs>
      </Container>
    )
  }
}

export default withRouter(connect()(ProfilePage))
