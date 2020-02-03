import React from 'react';
import './search-input.scss';
import { Icon, Input } from 'semantic-ui-react'

const SearchInput = () => {
  return (
    <div className="search kt-fluid">
      <Input iconPosition="left" icon placeholder='Search...' className="fluid">
        <input />
        <Icon name='search' />
      </Input>
    </div>
  )
}

export default SearchInput