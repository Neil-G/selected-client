import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Select from 'react-select'
import { Subjects } from './../../../../constants'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  p,
  h1 {
    text-align: center;
  }
`

/*
|--------------------------------------------------------------------------
| Select Options
|--------------------------------------------------------------------------
*/

const selectInputs = [
  { label: 'Early childhood (B-2)', gradeLevel: '_B_2', value: 'B-2' },
  { label: 'Elementary school (K-5)', gradeLevel: '_K_5', value: 'K-5' },
  { label: 'Middle school (6-8)', gradeLevel: '_6_8', value: '6-8' },
  { label: 'High school (9-12)', gradeLevel: '_9_12', value: '9-12' },
]

/*
|--------------------------------------------------------------------------
| React
|--------------------------------------------------------------------------
*/

class OpenRoles extends React.Component {
  render() {
    const { employerId, desiredHires = [], gradeLevels = [] } = this.props
    return (
      <Container>
        <h1>What teachers do you want to hire?</h1>
        <p style={{ margin: '0' }}>
          See relevant candidates by listing as many open roles as you want.
        </p>
        <p style={{ margin: '0' }}>
          Candidates that meet your criteria will have the <span>Role</span>
        </p>
        <p style={{ margin: '0 0 36px' }}>
          This will not filter out or remove candidates from your view.
        </p>

        {selectInputs.map(({ label, gradeLevel, value, name }) => {
          return (
            // gradeLevels[gradeLevel] &&
            true && (
              <div
                className='field-react-content'
                style={{ marginBottom: '36px', minWidth: '200px' }}
              >
                <label
                  style={{
                    fontWeight: '600',
                    textAlign: 'center',
                    display: 'block',
                  }}
                >
                  {label}
                </label>
                <Select
                  isMulti
                  // value={desiredHires
                  //   .filter(({ gradeLevel }) => {
                  //     return gradeLevel === value
                  //   })
                  //   .sort((a, b) => {
                  //     return a.subject.localeCompare(b.subject)
                  //   })
                  //   .map(({ subject }) => ({
                  //     label: subject,
                  //     value: subject,
                  //   }))}
                  options={Subjects.map(({ label }) => {
                    return { label, value: label }
                  })}
                  // onChange={(_, action) => {
                  //   action.gradeLevel = value
                  //   action.employerId = employerId
                  //   switch (action.action) {
                  //     case 'remove-value':
                  //       action.subject = action.removedValue.value
                  //       break
                  //     case 'select-option':
                  //       action.subject = action.option.value
                  //       break
                  //     case 'clear':
                  //       action.subject = action.name
                  //       break
                  //     default:
                  //       break
                  //   }
                  //   return updater.updateOpenRoles(action)
                  // }}
                />
              </div>
            )
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
export default connect(mapStateToProps)(OpenRoles)
