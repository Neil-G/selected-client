import set from 'lodash.set'
import { animateScroll as scroll } from 'react-scroll'

export default ({
  appName = 'employer',
  pageName,
  settingsPath,
  updateValue,
}) => {
  return {
    updateType: 'store',
    actions: [
      {
        type: `${appName}Pages`,
        description: `update filter setting for ${appName} ${pageName} page`,
        updateFunction: ({}, state) => {
          const page = { ...state[pageName] }
          const updatedPage = set(
            page,
            `applicationsFilter.settings.${settingsPath}`,
            updateValue
          )
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
