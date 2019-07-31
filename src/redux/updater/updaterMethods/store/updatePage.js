import set from 'lodash.set'

export default ({ appName, pageName, updatePath = '', updateValue }) => {
  return {
    updateType: 'store',
    actions: [
      {
        type: `${appName}Pages`,
        description: `update the ${appName} ${pageName} page settings at: ${updatePath}, with value: ${updateValue}`,
        updateFunction: ({}, state) => {
          const page = { ...state[pageName] }
          const updatedPage = set(page, updatePath, updateValue)
          return { ...state, [pageName]: updatedPage }
        },
      },
    ],
  }
}
