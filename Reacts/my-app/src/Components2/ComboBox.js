import React, { useState, Fragment } from 'react';

import {
  EuiComboBox,

} from '@elastic/eui';

const options = [
    {
    label: 'A',
  },
  {
    label: 'B',
  },
  {
    label: 'C',
  },
  {
    label: 'D',
  },
  {
    label: 'E',
  },
  {
    label: 'F',
  },
  {
    label: 'G',
  },
  {
    label: 'H',
  },
];

export default () => {
  const [selectedOptions, setSelected] = useState([options[0], options[1]]);
  

  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
    if (!searchValue) {
      return;
    }

    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        option => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      options.push(newOption);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };




  
  return (
    <Fragment>
       <EuiComboBox
      placeholder="Select or create options"
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
      style={{ width: '700px' }}
    />
     
     
    </Fragment>
  );
};