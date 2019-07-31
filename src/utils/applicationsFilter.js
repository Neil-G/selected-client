import moment from 'moment'

// documentation @ https://www.lucidchart.com/documents/view/ef6d27cd-84a8-4612-8098-34990ea952c5/0
export default ({ filterSettings, applications }) => {
  return applications.filter(app => {
    const { teacher } = app
    const {
      roles,
      gradeLevels,
      subjects,
      languages,
      locations,
      startDate,
      textSearch,
      minYrsExperience,
      maxYrsExperience,
      certificationStates,
    } = filterSettings

    /*
    |--------------------------------------------------------------------------
    | Roles
    |--------------------------------------------------------------------------
    */

    if (roles.selectedOptions.length > 0) {
      // teacher roles {roleName:bool}
      const doesAppPassRolesFilter = app.roleMatches.some(({ id }) => {
        return roles.selectedOptions.some(({ id: _id }) => id === _id)
      })

      if (!doesAppPassRolesFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Grade levels
    |--------------------------------------------------------------------------
    */

    if (gradeLevels.selectedOptions.length > 0) {
      // teacher gradeLevels {_X_X:bool}
      const doesAppPassGradeLevelsFilter = gradeLevels.selectedOptions.some(
        ({ value }) => {
          return teacher.gradeLevels[value]
        }
      )

      if (!doesAppPassGradeLevelsFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Subjects
    |--------------------------------------------------------------------------
    */

    if (subjects.selectedOptions.length > 0) {
      // teacher subjects [str]
      const doesAppPassSubjectsFilter = subjects.selectedOptions.some(
        ({ value }) => {
          return teacher.subjects.includes(value)
        }
      )

      if (!doesAppPassSubjectsFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Locations
    |--------------------------------------------------------------------------
    */

    if (locations.selectedOptions.length > 0) {
      // teacher regions [str]
      const doesAppPassLocationsFilter = locations.selectedOptions.some(
        ({ value }) => {
          return teacher.regions.includes(value)
        }
      )

      if (!doesAppPassLocationsFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Start date
    |--------------------------------------------------------------------------
    */

    if (!!startDate.selectedOption) {
      // teacher startDate str
      const doesAppPassStartDateFilter = moment(
        teacher.startDate,
        'M/YYYY'
      ).isSameOrBefore(moment(startDate.selectedOption.value, `MMM 'YY`))

      if (!doesAppPassStartDateFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Text Search
    |--------------------------------------------------------------------------
    */

    if (!!textSearch.selectedOption) {
      const {
        headline,
        languages,
        certifications,
        schoolsTaught,
        degrees,
        subjects,
        user: { firstName, lastName, isAnonymous },
      } = teacher
      const doesAppPassTextSearchFilter =
        [
          `${firstName[0]}.${lastName[0]}.`,
          isAnonymous ? '' : firstName,
          isAnonymous ? '' : lastName,
          headline,
          languages.join(' '),
          certifications.map(({ subject }) => subject).join(' '),
          subjects.join(' '),
          schoolsTaught.map(({ schoolName }) => schoolName).join(' '),
          degrees.map(
            ({ institution, concentration }) =>
              `${institution} ${concentration}`
          ),
        ]
          .join(' ')
          .search(new RegExp(textSearch.selectedOption.trim(), 'gi')) !== -1

      if (!doesAppPassTextSearchFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Min Years Experience
    |--------------------------------------------------------------------------
    */

    if (!!minYrsExperience.selectedOption) {
      const doesAppPassMinYrsExpFilter =
        teacher.yearsTeaching >= minYrsExperience.selectedOption.value

      if (!doesAppPassMinYrsExpFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Max Years Experience
    |--------------------------------------------------------------------------
    */

    if (!!maxYrsExperience.selectedOption) {
      const doesAppPassMaxYrsExpFilter =
        teacher.yearsTeaching <= maxYrsExperience.selectedOption.value

      if (!doesAppPassMaxYrsExpFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Languages
    |--------------------------------------------------------------------------
    */

    if (languages.selectedOptions.length > 0) {
      // teacher languages [str]
      const doesAppPassLanguagesFilter = languages.selectedOptions.some(
        ({ value }) => {
          return (
            teacher.languages.join('').search(new RegExp(value, 'gi')) !== -1
          )
        }
      )

      if (!doesAppPassLanguagesFilter) return false
    }

    /*
    |--------------------------------------------------------------------------
    | Certification States
    |--------------------------------------------------------------------------
    */

    if (certificationStates.selectedOptions.length > 0) {
      // teacher certificationStates [str]
      const teacherCertifiedStates = teacher.certifications
        .map(({ state }) => state)
        .join('')

      const canCandidateBeCertifiedAnywhere = certificationStates.selectedOptions.some(
        ({ value }) => {
          return value === 'hasCertification'
        }
      )

      const doesAppPassCertificationStateFilter =
        certificationStates.selectedOptions.some(({ value }) => {
          return teacherCertifiedStates.search(new RegExp(value, 'gi')) !== -1
        }) ||
        (canCandidateBeCertifiedAnywhere && teacher.certifications.length > 0)

      if (!doesAppPassCertificationStateFilter) return false
    }

    return true
  })
}
