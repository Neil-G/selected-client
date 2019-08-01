import React from 'react'
import get from 'lodash.get'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faChevronDown,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import updater from './../../redux/updater'

/*
|--------------------------------------------------------------------------
| Styled Components
|--------------------------------------------------------------------------
*/

const Container = styled.div`
  @media (max-width: 720px) {
  }
`

const TopContainer = styled.div`
  background: #fafaff;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 945px;
  padding: 6px;
`

const SearchTextInput = styled.input`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 3px;
  box-sizing: border-box;
  padding: 6px 12px 6px 38px !important;
  width: 360px;
  margin-right: 2px;
  height: 36px;
  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 720px) {
    width: 240px;
  }
  @media (max-width: 540px) {
    width: 150px;
  }
`

const SearchBarButton = styled.button`
  color: white;
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 3px;
  padding: 0px 16px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #d7dadc;
  }
  ${({ toggleFilterButton }) => {
    return (
      toggleFilterButton &&
      css`
        background: white;
        border: 2px solid #2996cc;
        color: #2996cc;
        &:hover {
          border: 2px solid #2996cc;
          color: #2689ba;
        }
      `
    )
  }}
  ${({ applySearchButton }) => {
    return (
      applySearchButton &&
      css`
        background: #ef5350;
        &:hover {
          background: #e53935;
        }
      `
    )
  }}
`

const FilterCount = styled.span`
  width: 20px;
  color: white;
  border-radius: 100px;
  height: 20px;
  background: rgb(41, 150, 204);
  padding: 2px;
  box-sizing: border-box;
  margin-right: 8px;
`

const TagsContainer = styled.div`
  background: #fafaff;
  display: flex;
  flex-wrap: wrap;
  margin: 4px auto;
  max-width: 945px;
  padding: 0px 4px 4px;
`

const SelectedFilterOptionTag = styled.div`
  align-items: center;
  border-radius: 100px;
  background: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  margin: 0 5px 3px 0;
  padding: 6px 16px;
  font-size: 13px;
`

const ClearFiltersText = styled.p`
  margin: 8px 0 2px 6px;
  font-size: 11px;
  cursor: pointer;
  color: #37474f;
  &:hover {
    color: #546e7a;
  }
`

/*
|--------------------------------------------------------------------------
| Helper Function
|--------------------------------------------------------------------------
*/

const combineSelectedOptions = ({
  gradeLevels,
  subjects,
  openRoles,
  startDate,
  locations,
  certificationStates,
  minYrsExperience,
  maxYrsExperience,
  textSearch,
  languages,
}) => {
  // multi-select
  const selectedOptions = [
    ...certificationStates.selectedOptions,
    ...gradeLevels.selectedOptions,
    ...locations.selectedOptions,
    ...subjects.selectedOptions,
    ...languages.selectedOptions,
  ]

  // single-select
  if (!!openRoles.selectedOption) selectedOptions.push(openRoles.selectedOption)
  if (!!startDate.selectedOption) selectedOptions.push(startDate.selectedOption)
  if (!!minYrsExperience.selectedOption)
    selectedOptions.push(minYrsExperience.selectedOption)
  if (!!maxYrsExperience.selectedOption)
    selectedOptions.push(maxYrsExperience.selectedOption)
  if (!!textSearch.selectedOption)
    selectedOptions.push({
      tagLabel: `Text search: ${textSearch.selectedOption}`,
      filterName: 'textSearch',
      isMulti: false,
    })
  return selectedOptions
}

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export default class SearchBar extends React.Component {
  state = {
    inputValue: undefined,
  }
  componentDidMount() {
    // hydrates the input value on render in case of page change etc.
    // this.setState({
    //   inputValue: this.props.filterSettings.textSearch.selectedOption,
    // })
  }
  componentDidUpdate(prevProps) {
    // TODO: add comment
    // const hasTextSearchValueBeenApplied =
    //   this.props.filterSettings.textSearch.selectedOption !==
    //   prevProps.filterSettings.textSearch.selectedOption
    // if (hasTextSearchValueBeenApplied) {
    //   this.setState({
    //     inputValue: this.props.filterSettings.textSearch.selectedOption,
    //   })
    // }
  }
  render() {
    const { isFilterBarOpen, appName, pageName, filterSettings } = this.props
    const { inputValue } = this.state
    const selectedOptions = combineSelectedOptions(filterSettings)
    // const selectedOptions = []
    const { selectedOption } = filterSettings.textSearch
    // const selectedOption = ''
    const isCurrentTextSearchApplied =
      selectedOption === inputValue ||
      (selectedOption === undefined && inputValue === '')
    return (
      <Container>
        <TopContainer>
          <div style={{ display: 'flex' }}>
            <div style={{ position: 'relative' }}>
              <SearchTextInput
                placeholder='Search...'
                value={inputValue}
                onKeyPress={e => {
                  if (e.key === 'Enter')
                    return updater.updateFilterSetting({
                      pageName: 'search',
                      settingsPath: 'textSearch.selectedOption',
                      updateValue: inputValue,
                    })
                }}
                onChange={e => this.setState({ inputValue: e.target.value })}
              />
              <FontAwesomeIcon
                color='rgba(0,0,0,0.3)'
                icon={faSearch}
                style={{
                  left: '12px',
                  position: 'absolute',
                  top: '11px',
                  cursor: 'pointer',
                }}
              />
              <FontAwesomeIcon
                color={!inputValue ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.5)'}
                icon='times-circle'
                style={{
                  right: '12px',
                  position: 'absolute',
                  top: '11px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  this.setState({ inputValue: '' })
                }}
              />
            </div>
            {!isCurrentTextSearchApplied && !!inputValue && (
              <SearchBarButton
                applySearchButton
                disabled={isCurrentTextSearchApplied}
                inAlertState={!isCurrentTextSearchApplied}
                onClick={() => {
                  this.setState({ inputValue: '' })
                  updater.updateFilterSetting({
                    pageName,
                    settingsPath: 'textSearch.selectedOption',
                    updateValue: inputValue,
                  })
                }}
              >
                Apply Search
              </SearchBarButton>
            )}
          </div>
          <div>
            <SearchBarButton
              toggleFilterButton
              inAlertState
              onClick={() =>
                updater.updatePage({
                  appName,
                  pageName,
                  updatePath: 'isFilterBarOpen',
                  updateValue: !isFilterBarOpen,
                })
              }
            >
              <FontAwesomeIcon
                color='#2996cc'
                icon={faChevronDown}
                style={{
                  marginRight: '8px',
                  transition: 'transform .6s',
                  transform: isFilterBarOpen
                    ? 'rotate(-180deg)'
                    : 'rotate(0deg)',
                }}
              />
              {selectedOptions.length > 0 && (
                <FilterCount>{selectedOptions.length}</FilterCount>
              )}
              Filter
            </SearchBarButton>
          </div>
        </TopContainer>

        {selectedOptions.length > 0 && (
          <TagsContainer>
            {selectedOptions
              .sort((a, b) => {
                return String(a.label).localeCompare(String(b.label))
              })
              .map(({ filterName, label, tagLabel, isMulti, value }) => (
                <SelectedFilterOptionTag>
                  {tagLabel || label}
                  <FontAwesomeIcon
                    onClick={() => {
                      return updater.unselectFilterOption({
                        pageName,
                        value,
                        filterName,
                        isMulti,
                      })
                    }}
                    icon={faTimesCircle}
                    color='rgba(0,0,0,0.3)'
                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                  />
                </SelectedFilterOptionTag>
              ))}
          </TagsContainer>
        )}
        {selectedOptions.length > 0 && (
          <ClearFiltersText>
            <span
              onClick={() => {
                this.setState({ inputValue: '' })
                updater.unselectAllFilterOptions({ appName, pageName })
              }}
            >
              clear all filters
            </span>
          </ClearFiltersText>
        )}
      </Container>
    )
  }
}
