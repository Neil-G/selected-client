import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import {
  Subjects,
  Genders,
  RaceEthnicities,
  GradeLevels,
  SchoolTypes,
} from './../../constants'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 840px;
  margin: 24px auto;
`

const ButtonContainer = styled.div`
  margin-bottom: 2px;
  width: ${({ width }) => width || '50%'};
  box-sizing: border-box;
  padding: 8px;
  /* min-width: 320px; */
  @media (max-width: 720px) {
    width: 100%;
  }
`

const OptionButton = styled.div`
  cursor: pointer;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ isSelected }) => (isSelected ? '#4CAF50' : 'rgba(0,0,0,0.16)')};
  border: ${props =>
    props.isSelected ? `2px solid #3BD142` : '1px solid #EAECEC'};
  border-radius: ${({ rounded }) => (rounded ? '80px' : '6px')};
  cursor: pointer;
`

export const ButtonForm = ({ options }) => {
  return (
    <ButtonsContainer>
      {options.map(({ label, value }) => {
        return (
          <ButtonContainer>
            <OptionButton
            // isSelected={employer.type === value}
            // onClick={() => {
            //   updater.updateEmployerField({ key: 'type', value })
            // }}
            >
              {label}
            </OptionButton>
          </ButtonContainer>
        )
      })}
    </ButtonsContainer>
  )
}

/*
|--------------------------------------------------------------------------
| Forms
|--------------------------------------------------------------------------
*/
const rolesFormOptions = [
  { label: 'Teacher' },
  { label: 'Teaching Assistant or Aide' },
  { label: 'Substitute Teacher' },
  { label: 'Leadership Position' },
]

export const RolesForm = () => <ButtonForm options={rolesFormOptions} />

export const SchoolTypeForm = () => <ButtonForm options={SchoolTypes} />

export const GradeLevelForm = () => <ButtonForm options={GradeLevels} />

export const SubjectsForm = () => {
  return <ButtonForm options={Subjects.map(({ label }) => ({ label }))} />
}

const schoolStructureFormOptions = [{ label: 'School' }, { label: 'Network' }]

export const SchoolStructureForm = () => (
  <ButtonForm options={schoolStructureFormOptions} />
)

export const GenderForm = () => {
  return (
    <div>
      <label>What gender do you identify with?</label>
      <ButtonForm options={Genders} />
    </div>
  )
}

export const RaceEthnicityForm = () => {
  return (
    <div>
      <label>What gender do you identify with?</label>
      <ButtonForm options={RaceEthnicities} />
    </div>
  )
}

const HrRoles = [
  { label: 'Recruiter', value: 'recruiter' },
  { label: 'HR Executive', value: 'hrExecutive' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'School Executive', value: 'schoolExecutive' },
  { label: 'Other', value: 'other' },
]
export const HrRoleForm = ({ employer, employerUser }) => {
  return (
    <div>
      <label>Welcome! What is your role at</label>
      <ButtonForm options={HrRoles} />
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Yes No Forms
|--------------------------------------------------------------------------
*/

const YesNoButtonForm = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <ButtonForm options={[{ label: 'Yes' }, { label: 'No' }]} />
    </div>
  )
}

export const AuthorizedToWorkInUSForm = () => (
  <YesNoButtonForm label='Are you authorized to work in the US?' />
)

export const AmericorpsForm = () => (
  <YesNoButtonForm label='Have you served in an AmeriCorps teaching program (e.g., TFA, TNTP, Teaching Fellows)?' />
)

export const TeachingFellowForm = () => (
  <YesNoButtonForm label='Are you currently a teaching fellow?' />
)

export const TerminationHistoryForm = () => (
  <YesNoButtonForm label='Have you ever been terminated or received an unsatisfactory performance rating for any position in a school?' />
)

/*
|--------------------------------------------------------------------------
| Culture Form
|--------------------------------------------------------------------------
*/
const cultureQuestions = [
  {
    label:
      'The primary form and method of instruction should be inquiry-based, not direct and explicit instruction.',
  },
  {
    label:
      'Instructional time should prioritize the whole child, not academic achievement.',
  },
  { label: 'How important is this to you?' },
  {
    label:
      'Curriculum development and control should be teacher-created, not school-provided.',
  },
  {
    label:
      'Classroom rules, expectations, and procedures should primarily be teacher-decided, not mandated school-wide',
  },
]

const cultureResponseOptions = [
  { label: 'Strongly Agree' },
  { label: 'Agree' },
  { label: 'Disagree' },
  { label: 'Strongly Disagree' },
]

const cultureIntensityOptions = [
  { label: 'Very' },
  { label: 'Some' },
  { label: 'Not at all' },
]

export const CultureForm = () => {
  return (
    <div>
      {cultureQuestions.map(({ label }) => {
        return (
          <div>
            <label>{label}</label>
            <Select options={cultureResponseOptions} />
            <ButtonsContainer>
              {cultureIntensityOptions.map(({ label }) => {
                return (
                  <ButtonContainer width='33%'>
                    <OptionButton>{label}</OptionButton>
                  </ButtonContainer>
                )
              })}
            </ButtonsContainer>
          </div>
        )
      })}
    </div>
  )
}
