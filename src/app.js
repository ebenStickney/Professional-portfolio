import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import About from './components/About';
import ContactForm from './components/ContactForm';


const Site = () => (
  <div>
    <Welcome />
    <About />
    <Projects />
    <ContactForm />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true}
  }

  componentDidMount() {
    this.setState(() => ({isLoading: false}))
      }

  render() {
    return (
      <div>
        { this.state.isLoading ?
          <LoadingPage /> :
          <Site />
        }
      </div>

    )
  }
};







//component to render
const jsx = (

    <AppRouter />

);


ReactDOM.render(<App />, document.getElementById('app'));
