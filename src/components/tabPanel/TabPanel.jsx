import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { PersistentDrawerRight } from '../drawer/index'
import './TabPanel.scss'

function TabPanel (props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      id={ `simple-tabpanel-${index}` }
      aria-labelledby={ `simple-tab-${index}` }
      { ...other }
    >
      { value === index && (
        <Box sx={ { p: 3 } }>
          <Typography>{ children }</Typography>
        </Box>
      ) }
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const BasicTabs = () => {
  const [value, setValue] = React.useState(8);

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case '0':
        return setValue(8);

      default:
        break;
    }

    if (value === newValue) {
      return setValue(8);
    }

    setValue(newValue);
  };

  const changer = (par) => {
    if (par === value) {
      return setValue(8);
    }
  }

  return (
    <>
      <div className='DaskTop'>
        <Box sx={ { width: '100%'} } >
          <Box sx={
            {
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              background: '#fff'
            } }
          >
            <Tabs
              value={ value }
              onChange={ handleChange }
              aria-label="basic tabs example"
              sx={ {
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                margin: '0 100px',
                padding: 1,
              } }
            >
              <Tab
                label="Logo" { ...a11yProps(0) }
                sx={ { mr: 30, textUnderline: 'none' } }
                href='/'
              />
              <Tab label="Our Services" { ...a11yProps(1) } onClick={ () => changer(1) } />
              <Tab label="Our Work" { ...a11yProps(2) } onClick={ () => changer(2) } />
              <Tab label="Stay Relevant" { ...a11yProps(3) } onClick={ () => changer(3) } />
              <Tab label="About" { ...a11yProps(4) } onClick={ () => changer(4) } />
              <Tab label="Careers" { ...a11yProps(5) } onClick={ () => changer(5) } />
              <Tab label="Investors" { ...a11yProps(6) } onClick={ () => changer(6) } />

              <Button
                variant="contained"
                color="success"
                sx={ { borderRadius: 50 } }
              >
                CONTACT US
              </Button>
            </Tabs>

            <Box>
              <TabPanel value={ value } index={ 1 }>
                Our Services content
              </TabPanel>

              <TabPanel value={ value } index={ 2 }>
                Our Work content
              </TabPanel>

              <TabPanel value={ value } index={ 3 }>
                Stay Relevant content
              </TabPanel>

              <TabPanel value={ value } index={ 4 }>
                About content
              </TabPanel>

              <TabPanel value={ value } index={ 5 }>
                Careers content
              </TabPanel>

              <TabPanel value={ value } index={ 6 }>
                Investors content
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </div>

      <div className='PhoneTop'>
        <PersistentDrawerRight />
      </div>
    </>
  );
}
