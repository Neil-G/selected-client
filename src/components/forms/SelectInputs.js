import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import updater from './../../redux/updater'
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Locations } from './../../constants' /*
|--------------------------------------------------------------------------
| Common
|--------------------------------------------------------------------------
*/

const Placeholder = ({ text }) => {
  return (
    <div style={{ fontSize: '.8rem', color: '#CCCCCC' }}>
      <FontAwesomeIcon icon={faSearch} style={{ marginRight: '8px' }} />
      {text}
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Filter Bar Selects
|--------------------------------------------------------------------------
*/

const FilterBarSelectContainer = styled.div`
  padding-right: 12px;
  width: 33%;
  box-sizing: border-box;
  margin-bottom: 12px;
  > label {
    font-weight: 500;
    margin: 0 3px 1px 2px;
    font-size: 13px;
  }
  @media (max-width: 720px) {
    width: 50%;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`

export const FilterBarMultiSelect = ({
  label,
  placeholder,
  options,
  value = [],
  pageName,
  filterName,
  filterSettings,
}) => {
  return (
    <FilterBarSelectContainer>
      <label>{label}</label>
      <Select
        isMulti
        placeholder={<Placeholder text={placeholder} />}
        options={options}
        value={filterSettings[filterName].selectedOptions}
        onChange={selectedOptions => {
          updater.updateFilterSetting({
            pageName,
            settingsPath: `${filterName}.selectedOptions`,
            updateValue: selectedOptions || [],
          })
        }}
      />
    </FilterBarSelectContainer>
  )
}

export const FilterBarSingleSelect = ({
  label,
  placeholder,
  options,
  value,
  pageName,
  filterName,
}) => {
  return (
    <FilterBarSelectContainer>
      <label>{label}</label>
      <Select
        placeholder={<Placeholder text={placeholder} />}
        onChange={selectedOption => {
          updater.updateFilterSetting({
            pageName,
            settingsPath: `${filterName}.selectedOption`,
            updateValue: selectedOption,
          })
        }}
      />
    </FilterBarSelectContainer>
  )
}

/*
|--------------------------------------------------------------------------
| Candidate Start Date Form
|--------------------------------------------------------------------------
*/

export const StartDateForm = () => {
  return (
    <div>
      <label>Month</label>
      <Select />

      <label>Year</label>
      <Select />
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Candidate Start Date Form
|--------------------------------------------------------------------------
*/

export const LocationsForm = () => {
  return (
    <div>
      {Locations.States.map(state => {
        return (
          <div>
            <label>{state.label}</label>
            <Select isMulti options={state.regions} />
          </div>
        )
      })}
    </div>
  )
}
