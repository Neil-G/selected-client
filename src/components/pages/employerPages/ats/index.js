import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Ats extends React.Component {
  render() {
    return (
      <div>
        <h1>Connect ATS</h1>
        <p>
          Connect Selected to your school’s Applicant Tracking System to pass
          candidate info (e.g., name, contact info, resume, and qualifications).
          More integrations will be added.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(Ats)
