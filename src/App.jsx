import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/base/Header';
import Side from './components/base/Side';
import Main from './components/base/Main';
import styles from './app.scss';
import store from './store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div
            className={`${styles.main} ${styles.container} ${styles.container_vertical}`}
          >
            <Header />
            <div
              className={`${styles.container} ${styles.container_horizontal}`}
            >
              <Side />
              <Main />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
