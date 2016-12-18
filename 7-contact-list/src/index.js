import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';
import LogIn from './components/LogIn';
import ContactsContainer from './containers/ContactsContainer';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import 'spectre.css/dist/spectre.min.css';
import './styles.css';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Match pattern="/" component={AppContainer} />
        <Match pattern="/login" component={LogIn} />
        <Match exactly pattern="/contacts" component={ContactsContainer} />
        <Match pattern="/contacts/form/:type" component={ContactForm} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
