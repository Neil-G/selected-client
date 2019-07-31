export default [
  { label: 'Math' },
  { label: 'English' },
  { label: 'Foreign Language' },
  { label: 'Science' },
  { label: 'Computer Science', shortName: 'Comp. Sci.' },
  { label: 'ESL' },
  { label: 'Visual Art' },
  { label: 'Music' },
  { label: 'Social Studies' },
  { label: 'General Education', shortName: 'General Ed.' },
  { label: 'Special Education', shortName: 'Special Ed.' },
  { label: 'Physical Education', shortName: 'Phys. Ed.' },
  { label: 'Health' },
  { label: 'Theater' },
].sort((a, b) => {
  return a.label.toLowerCase().localeCompare(b.label.toLowerCase())
})
