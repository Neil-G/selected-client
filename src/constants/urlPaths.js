export const RootPath = ''

// Candidate Paths
export const CandidateRoot = [RootPath, 'candidate'].join('/')
export const CandidateOnboarding = [CandidateRoot, 'onboarding'].join('/')
export const CandidateProfile = [CandidateRoot, 'profile'].join('/')
export const CandidateMessages = [CandidateRoot, 'messages', 'inbox'].join('/')
export const CandidateMessageThread = [CandidateRoot, 'messages'].join('/')
export const CandidateSettings = [CandidateRoot, 'settings'].join('/')

// Employer Paths
export const EmployerRoot = [RootPath, 'employer'].join('/')
// onboarding paths
export const EmployerOnboardingRoot = [EmployerRoot, 'onboarding'].join('/')
export const EmployerOnboardingHrRoleFormPath = [
  EmployerOnboardingRoot,
  'hr-role',
].join('/')
export const EmployerOnboardingSchoolTypeFormPath = [
  EmployerOnboardingRoot,
  'school-type',
].join('/')
export const EmployerOnboardingSchoolStructureFormPath = [
  EmployerOnboardingRoot,
  'school-structure',
].join('/')
export const EmployerOnboardingLocationsFormPath = [
  EmployerOnboardingRoot,
  'locations',
].join('/')
export const EmployerOnboardingGradeLevelsFormPath = [
  EmployerOnboardingRoot,
  'grade-levels',
].join('/')
export const EmployerOnboardingTermsFormPath = [
  EmployerOnboardingRoot,
  'terms-of-service',
].join('/')
// page paths
export const EmployerOpenRoles = [EmployerRoot, 'open-roles'].join('/')
export const EmployerProfile = [EmployerRoot, 'profile'].join('/')
export const EmployerSearch = [EmployerRoot, 'candidate-pool'].join('/')
export const EmployerInterview = [EmployerRoot, 'messages', 'inbox'].join('/')
export const EmployerAts = [EmployerRoot, 'ats'].join('/')
export const EmployerSettings = [EmployerRoot, 'settings'].join('/')
export const EmployerMessageThreadRoot = [
  EmployerRoot,
  'messages',
  'threads',
].join('/')
export const EmployerMessageThread = [
  EmployerRoot,
  'messages',
  'threads',
  ':threadId',
].join('/')

// Admin Paths
export const SettingsPath = '/settings'
export const UserProfile = '/user-profile'
