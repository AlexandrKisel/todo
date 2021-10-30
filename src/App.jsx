import React from 'react';
import Header from './components/base/Header';
import Side from './components/base/Side';
import Main from './components/base/Main';
import styles from './app.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className={`${styles.main} ${styles.container} ${styles.container_vertical}`}>
        <Header/>
        <div className={`${styles.container} ${styles.container_horizontal}`}>
          <Side/>
          <Main/>
        </div>
      </div>
    );
  }
}
export default App;
