// Names of multi-select and single-select application filters
import { GradeLevels, Subjects, Languages } from './../constants'

export const multiSelectSettings = [
  {
    label: 'Open Roles',
    placeholder: 'Search by Open Role',
    filterName: 'openRoles',
    options: [],
  },
  {
    label: 'Grade levels',
    placeholder: 'Search by Grade level',
    filterName: 'gradeLevels',
    options: GradeLevels.map(({ label }) => ({
      label,
      value: label,
    })),
  },
  {
    label: 'Subjects',
    placeholder: 'Search by subjects',
    filterName: 'subjects',
    options: Subjects.map(({ label }) => ({
      label,
      value: label,
    })),
  },
  {
    label: 'Locations',
    placeholder: 'Search by location',
    filterName: 'locations',
    options: [],
  },
  {
    label: 'Certification States',
    placeholder: 'Search by certifications by state',
    filterName: 'certificationStates',
    options: [],
  },
  {
    label: 'Languages',
    placeholder: 'Search by language',
    filterName: 'languages',
    options: Languages.map(({ label }) => ({
      label,
      value: label,
    })),
  },
].map(setting => {
  setting.options.map(({ filterName }) => {
    option.filterName = setting.filterName
    return { ...option, filterName }
  })
  return setting
})

export const singleSelectOptions = [
  'textSearch',
  'minYrsExperience',
  'maxYrsExperience',
  'startDate',
]

// returns an object representing applications filter settings
// with everything unselected
export const getResetFilterSettings = () => {
  const filterSettings = {}
  multiSelectSettings.forEach(({ filterName }) => {
    filterSettings[filterName] = { selectedOptions: [] }
  })
  singleSelectOptions.forEach(setting => {
    filterSettings[setting] = { selectedOption: undefined }
  })
  return filterSettings
}
