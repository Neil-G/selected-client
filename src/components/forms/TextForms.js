import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import Select from 'react-select'
import { Degrees, GradeLevels, Locations } from './../../constants'
import DonutChart from 'react-minimal-pie-chart'
/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const TextInputContainer = styled.div`
  width: ${({ width }) => width || '50%'};
  box-sizing: border-box;
  margin-bottom: 14px;
`
const StyledTextInput = styled.input`
  width: 99%;
  margin: auto;
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
`

const StyledTextArea = styled.textarea`
  width: 100%;
  margin: auto;
  max-width: 100%;
  box-sizing: border-box;
  padding: 12px;
  outline: none;
  border-radius: 3px;
`
/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

export const TextInput = ({ width, label, type = 'text' }) => {
  return (
    <TextInputContainer width={width}>
      <div>{label}</div>
      <StyledTextInput type={type} />
    </TextInputContainer>
  )
}

export const TextArea = ({ label, type = 'text' }) => {
  return (
    <TextInputContainer width='100%'>
      <div>{label}</div>
      <StyledTextArea />
    </TextInputContainer>
  )
}

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

export const CandidateBasicsForms = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
        <label>Upload photo</label>
        <input type='file' />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
        <label>Upload resume</label>
        <input type='file' />
      </div>

      <TextInput label='First name' />
      <TextInput label='Last name' />
      <TextInput label='Email' type='email' width='100%' />
      <TextInput label='Mobile phone' />
      <TextInput label='4-Digit verification code' />
      <TextArea label='Headline' />
      <button className='primary'>submit</button>
    </div>
  )
}

export class CandidateEducationForm extends React.Component {
  state = {
    isModalOpen: false,
  }

  _renderDegreeItem = ({ degree, institution, concentration, gpa }) => {
    return (
      <div>
        <div>degree</div>
        <div>institution</div>
        <div>concentration</div>
        <div>gpa</div>
      </div>
    )
  }
  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <button onClick={() => this.setState({ isModalOpen: true })}>
          Add a degree
        </button>
        <div>{[].map(this._renderDegreeItem)}</div>
        <Modal
          isOpen={isModalOpen}
          contentLabel='Add a degree'
          style={{
            content: {
              top: '20%',
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '50%',
                paddingRight: '20px',
                boxSizing: 'border-box',
              }}
            >
              <label>Degree</label>
              <Select
                options={Degrees.map(({ label }) => {
                  return {
                    label,
                    value: label,
                  }
                })}
              />
            </div>
            <TextInput label='Name of institution' />
            <TextInput label='Concentration' />
            <TextInput label='GPA' />
            <button onClick={() => this.setState({ isModalOpen: false })}>
              cancel
            </button>
            <button>submit</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export class CandidateCertificationsForm extends React.Component {
  state = {
    isModalOpen: false,
  }

  _renderCertificationItem = ({ degree, institution, concentration, gpa }) => {
    return (
      <div>
        <div>degree</div>
        <div>institution</div>
        <div>concentration</div>
        <div>gpa</div>
      </div>
    )
  }
  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <button onClick={() => this.setState({ isModalOpen: true })}>
          Add a certification
        </button>
        <div>{[].map(this._renderCertificationItem)}</div>
        <Modal
          isOpen={isModalOpen}
          contentLabel='Add a degree'
          style={{
            content: {
              top: '20%',
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <label>State</label>
            <Select
              options={Locations.States.map(({ label }) => {
                return {
                  label,
                  value: label,
                }
              })}
            />
            <label>Grade levels</label>
            <Select
              options={GradeLevels.map(({ label }) => {
                return {
                  label,
                  value: label,
                }
              })}
            />
            <TextInput label='Content area' />
            <TextInput label='Status' />
            <button onClick={() => this.setState({ isModalOpen: false })}>
              cancel
            </button>
            <button>submit</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export const CandidateYearsExperienceForm = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <TextInput type='number' label='Years of full-time teacher' />
    </div>
  )
}

export class CandidateNotableSchoolsForm extends React.Component {
  state = {
    isModalOpen: false,
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <h3>Name of notable schools</h3>
        <button onClick={() => this.setState({ isModalOpen: true })}>
          Add a school
        </button>
        <Modal
          isOpen={isModalOpen}
          contentLabel='Add a degree'
          style={{
            content: {
              top: '20%',
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TextInput label='Notable School you have taught at' />
            <button onClick={() => this.setState({ isModalOpen: false })}>
              cancel
            </button>
            <button>submit</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export class CandidateLanguagesForm extends React.Component {
  state = {
    isModalOpen: false,
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <h3>Languages you are fluent in</h3>
        <button onClick={() => this.setState({ isModalOpen: true })}>
          Add a language
        </button>
        <Modal
          isOpen={isModalOpen}
          contentLabel='Add a degree'
          style={{
            content: {
              top: '20%',
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <TextInput label='Language you are fluent in' />
            <button onClick={() => this.setState({ isModalOpen: false })}>
              cancel
            </button>
            <button>submit</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export const EmployerIdealCandidateForm = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <TextArea label='You should believe:' />
      <TextArea label="You're a strong fit here if:" />
    </div>
  )
}

export const EmployerStudentsForm = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <DonutChart
          data={[
            {
              title: '% Free / reduced lunch',
              value: 30,
              color: '#E38627',
            },
            {
              title: '',
              value: 80,
              color: '#C13C37',
            },
          ]}
          lineWidth={15}
          rounded
          radius={20}
          animationDuration={100}
        />
        <TextInput type='number' label='% Free / reduced lunch' />
      </div>
      <div>
        <DonutChart
          data={[
            {
              title: '% of Color',
              value: 90,
              color: '#E38627',
            },
            {
              title: '',
              value: 10,
              color: '#C13C37',
            },
          ]}
          lineWidth={15}
          rounded
          radius={20}
          animationDuration={100}
        />
        <TextInput type='number' label='% of Color' />
      </div>
      <div>
        <DonutChart
          data={[
            {
              title: '% English language learners',
              value: 42,
              color: '#E38627',
            },
            {
              title: '',
              value: 58,
              color: '#C13C37',
            },
          ]}
          lineWidth={15}
          rounded
          radius={20}
          animationDuration={100}
        />
        <TextInput type='number' label='% English language learners' />
      </div>

      <div>
        <DonutChart
          data={[
            {
              title: '% Special needs',
              value: 50,
              color: '#E38627',
            },
            {
              title: '',
              value: 50,
              color: '#C13C37',
            },
          ]}
          lineWidth={15}
          rounded
          radius={20}
          animationDuration={100}
        />
        <TextInput type='number' label='% Special needs' />
      </div>
    </div>
  )
}

export const EmployerFacultyForm = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <DonutChart
          data={[
            {
              title: '% of Color',
              value: 50,
              color: '#E38627',
            },
            {
              title: '',
              value: 50,
              color: '#C13C37',
            },
          ]}
          lineWidth={15}
          rounded
          radius={20}
          animationDuration={100}
        />
        <TextInput type='number' label='% of Color' />
      </div>

      <div>
        <DonutChart
          data={[
            {
              title: '% with > 3 yrs experience',
              value: 50,
              color: '#E38627',
            },
            {
              title: '',
              value: 50,
              color: '#C13C37',
            },
          ]}
          lineWidth={15}
          rounded
          radius={20}
          animationDuration={100}
        />
        <TextInput type='number' label='% with > 3 yrs experience' />
      </div>
    </div>
  )
}

export const EmployerBasicInfoForm = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <TextInput label='Name' />
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label>Upload your school logo</label>
        <input type='file' />
      </div>
      <TextInput label='Website' />
      <TextInput label='Year found' />
      <TextArea label='About us' />
      <TextArea label='What makes us unique:' />
      <TextArea label='Fun fact:' />
      <button className='primary'>Save</button>
    </div>
  )
}

export const SendMessageForm = () => {
  return (
    <div>
      <TextArea width='100%' />
      <button class='primary' style={{ width: '100%' }}>
        Send
      </button>
    </div>
  )
}
