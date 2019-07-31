export default [
  {
    name: 'Connecticut',
    dbName: 'CT',
    locations: [
      {
        displayName: 'Central',
        dbName: 'CT - Central',
        analyticsName: 'ct-central',
      },
      { displayName: 'South', dbName: 'CT - South', analyticsName: 'ct-south' },
    ],
    subRegions: [],
  },
  {
    name: 'Delaware',
    dbName: 'DE',
    locations: [
      { displayName: 'North', dbName: 'DE - North', analyticsName: 'de-north' },
      { displayName: 'South', dbName: 'DE - South', analyticsName: 'de-south' },
    ],
    subRegions: [],
  },
  {
    name: 'Massachusetts',
    dbName: 'MA',
    locations: [
      {
        displayName: 'Greater Boston and East',
        dbName: 'Greater Boston and East',
        analyticsName: 'ma-greater boston and east',
      },
      {
        displayName: 'Central',
        dbName: 'MA - Central',
        analyticsName: 'ma-central',
      },
      { displayName: 'West', dbName: 'MA - West', analyticsName: 'ma-west' },
    ],
    subRegions: [],
  },
  {
    name: 'Maryland',
    dbName: 'MD',
    locations: [
      {
        displayName: 'Baltimore',
        dbName: 'Baltimore',
        analyticsName: 'md-baltimore',
      },
      {
        displayName: 'Greater DC',
        dbName: 'Greater DC',
        analyticsName: 'dc-washington dc',
      },
    ],
    subRegions: [],
  },
  {
    name: 'New Jersey',
    dbName: 'NJ',
    locations: [
      { displayName: 'North', dbName: 'NJ - North', analyticsName: 'nj-north' },
      {
        displayName: 'Central',
        dbName: 'NJ - Central',
        analyticsName: 'nj-central',
      },
      { displayName: 'South', dbName: 'NJ - South', analyticsName: 'nj-south' },
    ],
    subRegions: [],
  },
  {
    name: 'New York',
    dbName: 'NYC',
    locations: [
      {
        displayName: 'Manhattan',
        dbName: 'Manhattan',
        analyticsName: 'nyc-manhattan',
      },
      {
        displayName: 'Brooklyn',
        dbName: 'Brooklyn',
        analyticsName: 'myc-brooklyn',
      },
      { displayName: 'Bronx', dbName: 'Bronx', analyticsName: 'nyc-bronx' },
      { displayName: 'Queens', dbName: 'Queens', analyticsName: 'nyc-queens' },
      {
        displayName: 'Staten Island',
        dbName: 'Staten Island',
        analyticsName: 'nyc-staten island',
      },
    ],
    subRegions: [
      {
        name: 'Outside of New York City',
        dbName: 'NYS',
        locations: [
          {
            displayName: 'Long Island',
            dbName: 'Long Island',
            analyticsName: 'nys-long island',
          },
          {
            displayName: 'Upstate',
            dbName: 'NY - Upstate',
            analyticsName: 'nys-upstate',
          },
          {
            displayName: 'Westchester/Hudson Valley',
            dbName: 'Westchester / Hudson Valley',
            analyticsName: 'nys-westchester and hudson valley',
          },
        ],
      },
    ],
  },
  {
    name: 'Virginia',
    dbName: 'VA',
    locations: [
      { displayName: 'North', dbName: 'VA - North', analyticsName: 'va-north' },
    ],
    subRegions: [],
  },
  {
    name: 'Pennsylvania',
    dbName: 'PA',
    locations: [
      {
        displayName: 'Pittsburgh',
        dbName: 'Pittsburgh',
        analyticsName: 'pa-pittsburg',
      },
      {
        displayName: 'Philadelphia',
        dbName: 'Philadelphia',
        analyticsName: 'pa-philadelphia',
      },
    ],
    subRegions: [],
  },
  {
    name: 'Washington DC',
    dbName: 'DC',
    locations: [
      {
        displayName: 'Washington DC',
        dbName: 'Washington DC',
        analyticsName: 'dc-washington dc',
      },
    ],
    subRegions: [],
  },
  {
    name: 'Los Angeles',
    dbName: 'LA',
    locations: [
      {
        displayName: 'Central',
        dbName: 'LA - Central',
        anayticsName: 'la-central',
      },
      {
        displayName: 'San Fernando Valley',
        dbName: 'LA - San Fernando Valley',
        analyticsName: 'la-san fernando',
      },
      { displayName: 'East', dbName: 'LA - East', anayticsName: 'la-east' },
      { displayName: 'West', dbName: 'LA - West', anayticsName: 'la-west' },
      { displayName: 'South', dbName: 'LA - South', anayticsName: 'la-south' },
    ],
  },
].sort((a, b) => a.name.localeCompare(b.name))
