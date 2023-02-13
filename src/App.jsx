import './App.css';

import { Menu } from './components/menu/';
import { Content } from './components/content';

import { SpacingGrid as Skills } from './components/tehnology/Tehnology';
import { Jobs } from './components/jobs/Jobs';
import { Footer } from './components/fotter/Footer';

function App () {
  const firstPage = {
    title: 'Discover how to reinvent your * business with AI',
    content: 'Software development enhanced with AI products to unleash your potential',
    classForCss: 'FirstBlock'
  }
  const secondPage = {
    title: 'How we do it * We strive to do the impossible. Every day.',
    content: 'We act as an Entrepreneur Engine. We take early-stage startups and catapult them from an idea to an MVP to platforms with the potential to scale and transform whole industries while rapidly generating exponential growth for lejoybot.',
    classForCss: 'secondBlock'
  }
  const thirdPage = {
    title: 'We believe innovation is the fuel of reinvention. * And to reinvent our industry, we are reinventing how we ourselves innovate.',
    content: 'We say no to the Status Quo. lejoybot  is an incubator by, for and of innovation. An incubator to help productize lejoybot most transformative tech into platforms that will speed up how quickly we can change the world.',
    classForCss: 'thirdPage'
  }
  const forthPage = {
    title: '',
    content: 'With lejoybot, there\'s a more innovative way to innovate Our platforms enhance digital transformation, from using tech to make organizations and their cultures more human, to applying AI to reinvent how software is coded and tested.',
    classForCss: 'forthPage'
  }
  const fivesPage = {
    title: '',
    content: 'For more than 5 years the company Lejoybot has been solving complex technical problems. Our team of over 40 employees from all over the world. And the main thing that connects us is ideas and solutions in the field of AI. We create different business solutions using the latest technologies of our time.',
    classForCss: 'vivesPage'
  }
  const fivesPagevidthNumber = {
    title: '5',
    content: '40',
    classForCss: 'vivesPagevidthNumber'
  }


  return (
    <div className="App">
      <Menu />

      <Content { ...firstPage } />

      <div className='Slider'>
        <Content { ...secondPage } />
        <Content { ...thirdPage } />
      </div>

      <Content { ...forthPage } />

      <div className='AboutAs' style={{margin: '50px 0 0 0'}}>
        <Content { ...fivesPage } />
        <Content { ...fivesPagevidthNumber } />
      </div>

      <div className='tehnology'>
        <Skills />
      </div>

      <div>
        <Jobs/>
      </div>

      <Footer />

    </div>
  );
}

export default App;


