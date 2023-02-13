import * as React from 'react';

import './Menu.scss';
import { BasicTabs } from '../tabPanel/';

export const Menu = () => {
  return (
    <div className='Menu'>
      <div className='Menu__pos'>
        <BasicTabs />
      </div>
    </div>
  )
};


