import { set } from 'lodash'
import { animateScroll as scroll } from 'react-scroll'

export default ({ pageName, value, filterName, isMulti = true }) => {
  return {
    updateType: 'store',
    actions: [
      {
        name: 'unselectFilterOption',
        type: 'employerPages',
        description: `unselecting ${value} in ${filterName} filter on ${pageName} page`,
        updateFunction: ({}, state) => {
          const page = { ...state[pageName] }
          let updatedPage
          if (isMulti) {
            updatedPage = set(
              page,
              `applicationsFilter.settings.${filterName}.selectedOptions`,
              page.applicationsFilter.settings[
                filterName
              ].selectedOptions.filter(option => option.value !== value)
            )
          } else {
            updatedPage = set(
              page,
              `applicationsFilter.settings.${filterName}.selectedOption`,
              page.applicationsFilter.settings[
                filterName
              ].selectedOptions.filter(option => option.value !== value)
            )
          }

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
