import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import './Jobs.scss'

export const Jobs = () => {
  const works = {
    vacancy: ['Administrator', 'Marcetolog', 'JS Coder', 'Ingeneer'],
    respon: ['Fluent knowledge of JavaScript and TypeScript, Familiarity with modern frameworks/libraries (ideally both React and Vue),Experience working in a team environment (familiarity with Git, habit of writing clean and well documented code).', 'Fluent knowledge of JavaScript and TypeScript, Familiarity with modern frameworks/libraries (ideally both React and Vue),Experience working in a team environment (familiarity with Git, habit of writing clean and well documented code).', 'Fluent knowledge of JavaScript and TypeScript, Familiarity with modern frameworks/libraries (ideally both React and Vue),Experience working in a team environment (familiarity with Git, habit of writing clean and well documented code).', 'Fluent knowledge of JavaScript and TypeScript, Familiarity with modern frameworks/libraries (ideally both React and Vue),Experience working in a team environment (familiarity with Git, habit of writing clean and well documented code).']
  };

  return (
    <>
      {/* <SimpleAccordion /> */ }

      <div className='WorkPlace'>
        <div>
          <div className='WorkPlace__text'>CURRENT</div>
          <div className='WorkPlace__text'>OPENING</div>
        </div>


        <div className='Place-for-job'>
          <SimpleAccordion vacancy={ works.vacancy } resp={ works.respon } />
        </div>
      </div>




    </>
  );
};

const SimpleAccordion = ({ vacancy, resp }) => {
  return (
    <div>
      { vacancy.map((vac, index) => (
        <Accordion key={ vac }>
          <AccordionSummary
            expandIcon={ <ExpandMoreIcon /> }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{ vac }</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              { resp[index] }
            </Typography>
          </AccordionDetails>
          <Button>Click to message</Button>
        </Accordion>
      )) }

    </div>
  );
}