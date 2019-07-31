const uuidv1 = require('uuid/v1')

export const employer = {
  id: uuidv1(),
  greenhouse: {},
}

export const employerIntegratedWithAts = {
  id: uuidv1(),
  greenhouse: {
    ingestionToken: 1,
  },
}

export const employerWithValidIngestionToken = {
  id: uuidv1(),
  ...employer,
  greenhouse: {
    ingestionToken: uuidv1(),
  },
  greenhouseJobs: [],
}

export const employerWithInvalidIngestionToken = {
  id: uuidv1(),
  ...employer,
  greenhouse: {
    ingestionToken: uuidv1(),
  },
  greenhouseJobs: undefined,
}
