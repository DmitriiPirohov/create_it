import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import classNames from 'classnames';
import './Content.scss';
import { useEffect, useState } from 'react';
import { maxWidth, positions, width } from '@mui/system';
import sumuraiIcon from '../../images/samurai.png'

import * as React from 'react';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import { SimpleZoom } from './simpleZoom/SimpleZoom';

export const Content = ({ title, content, classForCss }) => {
  const [activePage, SetActivePage] = useState(false);
  const [timeout, SetTimeOut] = useState(10000);

  const handleSubmit = () => {
    SetTimeOut(15000);
    SetActivePage(prev => !prev)
  }

  useEffect(() => {
    setTimeout(() => {
      // SetActivePage(false)

      if (activePage === true) {
        SetActivePage(false)
      } else {
        SetActivePage(true)
      }
    }, timeout);
  }, [activePage])

  return (
    <div className="container">
      { (classForCss === 'forthPage') ?
        <div><SimpleZoom /></div> :
        <></>
      }
      <div className={ classNames(
        'BlockContent', `${classForCss}`,
        (!activePage) && 'thirdPage--active'
      ) }
      >
        <div className='BlockContent__container'>
          <p className={ classNames(`${classForCss}__text ${classForCss}__text--bold`) }>
            { title.split('*')[0] } <br /> { title.split('*')[1] }
          </p>
          <p className={ classNames(`${classForCss}__text`) }>{ content }</p>

        </div>

      </div>

      { (classForCss === 'thirdPage') &&
        <div className='Button'>
          <Stack
            spacing={ 2 }
            suxxes
            direction="row"

          >
            <Button
              variant="contained"
              color="success"
              onClick={ () => handleSubmit() }
              style={ { zIndex: 0 } }
            >
              MORE
            </Button>
          </Stack>
        </div>
      }

    </div>

  );
};

