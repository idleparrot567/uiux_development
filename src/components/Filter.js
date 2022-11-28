import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter(props) {
    const{type, sort, sortProducts, filterProducts} = props;
    console.log("type in filter component", type);
    console.log("sort in filter component", sort);

  return (
       <div>
       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label"> Order </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort || ''}
          onChange={sortProducts}
          label="Baked Goods Type"
        >
          <MenuItem value="">
            <em> Popular </em>
          </MenuItem>
          <MenuItem value={10}> Highest </MenuItem>
          <MenuItem value={20}> Lowest </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label"> Baked Goods Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={type || ''}
          onChange={filterProducts}
          defaultValue = ""
          label="Baked Goods Type"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}> Cakes</MenuItem>
          <MenuItem value={20}> Desserts </MenuItem>
          <MenuItem value={30}> Breads </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

