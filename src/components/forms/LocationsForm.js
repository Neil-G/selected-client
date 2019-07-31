const LocationsForm = ({ employer, updateSelectedStates, selectedStates }) => {
  return (
    <h1>LocationsForm</h1>
    // <div>
    //   <div>
    //     {
    //       // SELECTED STATES
    //       stateOptions.filter(({ value }) => {
    //         return employer.states[value]
    //       }).sort((a, b) => {
    //         const aIdx = selectedStates.findIndex(selectedState => selectedState === a.value)
    //         const bIdx = selectedStates.findIndex(selectedState => selectedState === b.value)
    //         return aIdx - bIdx
    //       }).map(({ label, value }) => {
    //         const isSelected = employer.states[value]
    //         return (
    //           <SelectedStateContainer>
    //             <h3 style={{ textAlign: 'center' }}>{label}</h3>

    //             {/* close button */}
    //             <FontAwesomeIcon icon="times-circle" style={{ color: '#9E9E9E', position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }} onClick={() => {
    //               // if (Object.keys(locations).every(location => !locations[location])) check if all locations for the state are unselected
    //               const areAnyRegionsSelected = value === 'NY'
    //                 ? regionOptions[value].some(regionOption => employer.locations[regionOption.reduxKey]) ||
    //                 regionOptions.NYC.some(regionOption => employer.locations[regionOption.reduxKey])
    //                 : regionOptions[value].some(regionOption => employer.locations[regionOption.reduxKey])

    //               if (areAnyRegionsSelected) {
    //                 alert(`Please unselect all regions  in ${label} before deselecting it.`)
    //               } else {
    //                 updater.updateEmployerNestedField({ key: 'states', nestedKey: value, value: false }).then(() => {
    //                   updateSelectedStates('remove', value)
    //                 })
    //               }
    //             }} />

    //             {/* primary locations container */}
    //             <ButtonsContainer>
    //               {
    //                 regionOptions[value].map(({ label: regionLabel, value: regionValue, reduxKey }) => {
    //                   const isRegionSelected = employer.locations[reduxKey]
    //                   return (
    //                     <ButtonContainer>
    //                       <OptionButton
    //                         rounded
    //                         isSelected={isRegionSelected}
    //                         onClick={() => {
    //                           updater.updateEmployerNestedField({ key: 'locations', nestedKey: regionValue, value: !isRegionSelected, returnField: reduxKey })
    //                         }}>
    //                         {regionLabel}
    //                       </OptionButton>
    //                     </ButtonContainer>
    //                   )
    //                 })
    //               }
    //             </ButtonsContainer>

    //             {/* NYC Metro area */}
    //             {
    //               value === 'NY' && <div>
    //                 <h4 style={{ textAlign: 'center' }}>NYC Metro Area</h4>
    //                 <ButtonsContainer>
    //                   {
    //                     regionOptions.NYC.map(subregionOption => {
    //                       const isSubregionSelected = employer.locations[subregionOption.reduxKey]
    //                       return (
    //                         <ButtonContainer>
    //                           <OptionButton
    //                             rounded
    //                             isSelected={isSubregionSelected}
    //                             onClick={() => {
    //                               updater.updateEmployerNestedField({ key: 'locations', nestedKey: subregionOption.value, value: !isSubregionSelected, returnField: subregionOption.reduxKey })
    //                             }}>
    //                             {subregionOption.label}
    //                           </OptionButton>
    //                         </ButtonContainer>
    //                       )
    //                     })
    //                   }
    //                 </ButtonsContainer></div>
    //             }
    //           </SelectedStateContainer>
    //         )
    //       })
    //     }
    //   </div>
    //   <ButtonsContainer>
    //     {
    //       // UNSELECTED STATES
    //       stateOptions
    //         .sort((a, b) => {
    //           return a.label.localeCompare(b.label)
    //         })
    //         .map(({ label, value }) => {
    //           const isSelected = employer.states[value]
    //           if (isSelected) return null
    //           return (
    //             <ButtonContainer>
    //               <OptionButton
    //                 isSelected={isSelected}
    //                 onClick={() => {
    //                   updater.updateEmployerNestedField({ key: 'states', nestedKey: value, value: true })
    //                   updateSelectedStates('add', value)
    //                 }}
    //               >{label}</OptionButton>
    //             </ButtonContainer>
    //           )
    //         })
    //     }
    //   </ButtonsContainer>
    // </div>
  )
}
