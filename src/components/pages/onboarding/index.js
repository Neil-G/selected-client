import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import {
  EmployerOnboardingHrRoleFormPath,
  EmployerOnboardingSchoolTypeFormPath,
  EmployerOnboardingSchoolStructureFormPath,
  EmployerOnboardingLocationsFormPath,
  EmployerOnboardingGradeLevelsFormPath,
  EmployerOnboardingTermsFormPath,
  EmployerSearch,
} from './../../../constants/urlPaths'
import {
  HrRoleForm,
  SchoolStructureForm,
  SchoolTypeForm,
  GradeLevelForm,
} from './../../forms/ButtonForms'
import { TermsForm } from './../../forms/TermsForm'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div``

/*
|--------------------------------------------------------------------------
| Employer Onboarding Configuration
|--------------------------------------------------------------------------
*/

const employerOnboardingForms = [
  {
    path: EmployerOnboardingHrRoleFormPath,
    FormComponent: HrRoleForm,
  },
  {
    path: EmployerOnboardingSchoolStructureFormPath,
    FormComponent: SchoolStructureForm,
    title: 'Are you a single school or a network of schools?',
  },
  {
    path: EmployerOnboardingSchoolTypeFormPath,
    FormComponent: SchoolTypeForm,
    title: 'What type of school are you?',
  },
  // {
  //   path: EmployerOnboardingLocationsFormPath,
  //   FormComponent: LocationsForm,
  //   title: 'Regions your school serves',
  // },
  {
    path: EmployerOnboardingGradeLevelsFormPath,
    FormComponent: GradeLevelForm,
    title: 'Grade level(s) your school serves',
  },
  {
    path: EmployerOnboardingTermsFormPath,
    FormComponent: TermsForm,
    title: 'Terms & Pricing',
  },
]

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

class Onboarding extends React.Component {
  render() {
    const {
      history: { push },
      appName,
    } = this.props
    let forms = []
    if (appName === 'employer') {
      forms = employerOnboardingForms
    }
    return (
      <Container>
        {forms.map(({ path, FormComponent }, idx) => {
          return (
            <Route
              key={path}
              exact
              path={path}
              render={() => {
                return (
                  <div>
                    {/* BACK BUTTON */}
                    {idx > 0 && (
                      <FontAwesomeIcon
                        onClick={() => {
                          push(employerOnboardingForms[idx - 1].path)
                        }}
                        icon={faArrowAltCircleLeft}
                        style={{ position: 'fixed', top: '12px', left: '12px' }}
                      />
                    )}

                    {/* FORM */}
                    <FormComponent />

                    {/* CONTINUE BUTTON */}
                    <button
                      style={{ margin: 'auto', display: 'block' }}
                      className='primary'
                      onClick={() => {
                        if (idx !== forms.length - 1) {
                          // navigate to next form
                          push(employerOnboardingForms[idx + 1].path)
                        } else {
                          // navigate to Search Page
                          push(EmployerSearch)
                        }
                      }}
                    >
                      CONTINUE
                    </button>
                  </div>
                )
              }}
            />
          )
        })}
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

export default withRouter(connect(mapStateToProps)(Onboarding))
