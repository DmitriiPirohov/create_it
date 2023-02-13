import * as React from 'react';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

import './SimpleZoom.scss';

export const SimpleZoom = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={ { height: 180 } }>
      <div ></div>
      <Box sx={ { display: 'grid', grid: 'repeat(3, 120px) / auto-flow', height: 90, ml: 5, mt: 15 } } onMouseEnter={ setChecked } onScroll={setChecked}>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '100ms' : '0ms' } }>
          <a href='https://www.s4m.ai/' target={ '_blank' } className='Links-partner Links-partner__Samurai'></a>
        </Zoom>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '300ms' : '0ms' } }>
          <a href='https://www.genesisai.io/' target={ '_blank' } className='Links-partner Links-partner__genesisai'></a>
        </Zoom>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '500ms' : '0ms' } }>
          <a href='https://www.micron.com/' target={ '_blank' } className='Links-partner Links-partner__micron'></a>
        </Zoom>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '700ms' : '0ms' } }>
          <a href='https://thetradedesk.com/us/' target={ '_blank' } className='Links-partner Links-partner__tradedesk'></a>
        </Zoom>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '900ms' : '0ms' } }>
          <a href='https://www.pymetrics.ai/' target={ '_blank' } className='Links-partner Links-partner__pymetrics'></a>
        </Zoom>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '1100ms' : '0ms' } }>
          <a href='https://ru.botostore.com/c/trade24/' target={ '_blank' } className='Links-partner Links-partner__trade24'></a>
        </Zoom>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '1300ms' : '0ms' } }>
          <a href='https://iris.ai/' target={ '_blank' } className='Links-partner Links-partner__iris'></a>
        </Zoom>
        <Zoom in={ checked } style={ { transitionDelay: checked ? '1500ms' : '0ms' } }>
          <a href='https://aibrain.com/' target={ '_blank' } className='Links-partner Links-partner__aibrain'></a>
        </Zoom>
      </Box>
    </Box>
  );
};
