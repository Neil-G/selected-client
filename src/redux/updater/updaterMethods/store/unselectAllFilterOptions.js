import { set } from 'lodash'
import { animateScroll as scroll } from 'react-scroll'
import multiSelectSettings from '../../../../utils/filterSettings'

export const singleSelectOptions = [
  'textSearch',
  'minYrsExperience',
  'maxYrsExperience',
  'startDate',
]

export default ({ appName = 'employer', pageName }) => {
  return {
    updateType: 'store',
    actions: [
      {
        name: 'unselectAllFilterOptions',
        type: `${appName}Pages`,
        description: `unselecting all values in all filters on ${pageName} page`,
        updateFunction: ({}, state) => {
          const page = { ...state[pageName] }
          let updatedPage
          multiSelectSettings.forEach(({ filterName }) => {
            updatedPage = set(
              page,
              `applicationsFilter.settings.${filterName}.selectedOptions`,
              (page.applicationsFilter.settings[
                `${filterName}`
              ].selectedOptions = [])
            )
          })

          scroll.scrollToTop({
            duration: 1600,
            delay: 100,
            smooth: true,
          })

          return { ...state, [pageName]: updatedPage }
        },
      },
    ],
  }
}
