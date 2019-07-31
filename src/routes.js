import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import get from 'lodash.get'
import {
  CandidateOnboarding,
  CandidateProfile,
  CandidateMessageThread,
  CandidateMessages,
  CandidateSettings,
  EmployerOnboardingRoot,
  EmployerSearch,
  EmployerInterview,
  EmployerProfile,
  EmployerOpenRoles,
  EmployerAts,
  EmployerMessageThread,
  EmployerOnboardingHrRoleFormPath,
  EmployerSettings,
} from './constants/urlPaths.js'
import {
  Search as EmployerSearchPage,
  Interview as EmployerInterviewPage,
  OpenRoles as EmployerOpenRolesPage,
  Ats as AtsPage,
} from './components/pages/employerPages'
import {
  Profile as ProfilePage,
  MessageThread as MessageThreadPage,
  Onboarding as OnboardingPage,
  Settings as SettingsPage,
} from './components/pages'
import { Messages as CandidateMessagesPage } from './components/pages/candidatePages'
import App from './App'

/*
|--------------------------------------------------------------------------
| Augmented Routes
|--------------------------------------------------------------------------
*/

class RouteWithUtilsComponent extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
    this._checkThatUerCanAccessThisRoute()
  }

  _checkThatUerCanAccessThisRoute = () => {
    const {
      history: { push },
      location: { pathname },
    } = this.props

    // route to accessible page
  }

  render() {
    return <Route {...this.props} />
  }
}

const RouteWithUtils = withRouter(
  connect(state => ({
    user: get(state, 'session.user', {}),
  }))(RouteWithUtilsComponent)
)

/*
|--------------------------------------------------------------------------
| Pages Configuration
|--------------------------------------------------------------------------
*/
const redirects = [
  {
    from: EmployerOnboardingRoot,
    to: EmployerOnboardingHrRoleFormPath,
  },
  { from: EmployerSearch, to: [EmployerSearch, 'new'].join('/') },
  { from: EmployerSearch, to: [EmployerSearch, 'new'].join('/') },
  { from: CandidateMessages, to: [CandidateMessages, 'active'].join('/') },

  {
    from: EmployerProfile,
    to: `${EmployerProfile}/basic-info`,
  },
  {
    from: EmployerInterview,
    to: `${EmployerInterview}/connected`,
  },
]

const employerAppPages = [
  {
    path: EmployerOnboardingRoot,
    component: () => <OnboardingPage appName='employer' />,
  },
  { path: EmployerOpenRoles, component: EmployerOpenRolesPage },
  { path: EmployerSearch, component: EmployerSearchPage },
  { path: EmployerInterview, component: EmployerInterviewPage },
  { path: EmployerAts, component: AtsPage },
  { path: EmployerSettings, component: SettingsPage },
  {
    path: EmployerProfile,
    component: props => <ProfilePage {...props} appName='employer' />,
  },
  {
    path: EmployerMessageThread,
    component: () => <MessageThreadPage appName='employer' />,
  },
]

const candidateAppPages = [
  { path: CandidateOnboarding, component: OnboardingPage },
  { path: CandidateMessages, component: CandidateMessagesPage },
  {
    path: CandidateProfile,
    component: props => <ProfilePage {...props} appName='candidate' />,
  },
  {
    path: CandidateMessageThread,
    component: () => <MessageThreadPage appName='candidate' />,
  },
  {
    path: CandidateMessageThread,
    component: MessageThreadPage,
  },
]

/*
|--------------------------------------------------------------------------
| All Routes
|--------------------------------------------------------------------------
*/

export default (
  <BrowserRouter>
    <App>
      <Switch>
        {redirects.map(redirect => (
          <Redirect exact {...redirect} />
        ))}
        {employerAppPages.map(({ path, component }) => {
          return (
            <RouteWithUtils
              key={path}
              path={path}
              component={!!component ? component : () => <div>{path}</div>}
            />
          )
        })}

        {candidateAppPages.map(({ path, component }) => {
          return (
            <RouteWithUtils
              key={path}
              path={path}
              component={!!component ? component : () => <div>{path}</div>}
            />
          )
        })}
      </Switch>
    </App>
  </BrowserRouter>
)
