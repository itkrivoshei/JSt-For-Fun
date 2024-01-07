import React, { useState, ChangeEvent, FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Box, IconButton, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { AppDispatch } from '../../redux/store';
import {
  toggleRegionFormat,
  fetchWeather,
} from '../../redux/slices/weatherSlice';

const SettingsMenu: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [city, setCity] = useState<string>('');

  const handleToggleRegion = () => dispatch(toggleRegionFormat());

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleFetchWeather = () => {
    dispatch(fetchWeather({ city }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFetchWeather();
  };

  return (
    <Box position='absolute' top={0} margin={2}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box display='flex' alignItems='center' gap={1} marginY={2}>
            <TextField
              type='text'
              value={city}
              onChange={handleCityChange}
              label='Enter City'
              variant='outlined'
              size='small'
              sx={{ label: { color: '#4cc9f0' } }}
            />
            <IconButton
              aria-label='search'
              type='submit'
              sx={{ color: '#4cc9f0' }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </form>
        <Button
          onClick={handleToggleRegion}
          variant='outlined'
          size='small'
          sx={{ color: '#4cc9f0' }}
        >
          UNIT
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsMenu;
