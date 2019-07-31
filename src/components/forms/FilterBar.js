import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import updater from './../../redux/updater'
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FilterBarMultiSelect } from './SelectInputs'
import { GradeLevels, Subjects, Locations, Languages } from './../../constants'
import { multiSelectSettings } from './../../utils/filterSettings'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  background: #fafaff;
  border-right: 1px solid whitesmoke;
  border-top: 1px solid #cdcdd1;
  border-bottom: 1px solid whitesmoke;
  border-left: 1px solid whitesmoke;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 945px;
`

const FilterSection = styled.div`
  padding: 14px;
  align-items: stretch;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 12px;
`

const FilterSectionHeader = styled.h4`
  margin: 0 0 18px;
  color: #0d47a1;
  display: none;
`

const FilterInputColumn = styled.div`
  padding-right: 12px;
  width: 25%;
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

const FilterBarButton = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 3px;
  padding: 0px 16px;
  margin-right: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

const CloseButton = styled.button`
  background: #eeeeee;
  color: black;
  cursor: pointer;
  display: block;
  margin: 20px auto 6px;
  padding: 5px 13px;
  font-size: 12px;
  text-align: center;
  &:hover {
    background: #cccccc;
  }
`
/*
|--------------------------------------------------------------------------
| Stateless Component
|--------------------------------------------------------------------------
*/

const Placeholder = ({ text }) => {
  return (
    <div style={{ fontSize: '.8rem', color: '#CCCCCC' }}>
      <FontAwesomeIcon icon='search' style={{ marginRight: '8px' }} />
      {text}
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export default class FilterBar extends React.Component {
  render() {
    const {
      employer,
      filterSettings,
      isFilterBarOpen,
      pageName,
      appName,
    } = this.props

    return (
      <Container hidden={!isFilterBarOpen}>
        {/* FILTER SELECT DROPDOWNS */}
        <FilterSection>
          {multiSelectSettings.map(filterInput => {
            return (
              <FilterBarMultiSelect
                pageName={pageName}
                filterSettings={filterSettings}
                {...filterInput}
              />
            )
          })}
        </FilterSection>

        {/* CLOSE FILTR BAR BUTTON */}
        <CloseButton
          onClick={() => {
            updater.updatePage({
              appName,
              pageName,
              updatePath: 'isFilterBarOpen',
              updateArgs: false,
            })
          }}
        >
          <FontAwesomeIcon
            icon='times'
            style={{
              marginRight: '8px',
            }}
          />
          close & save
        </CloseButton>
      </Container>
    )
  }
}
