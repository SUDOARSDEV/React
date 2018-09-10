
import React from 'react';
import ReactDOM from 'react-dom';

import FirstCompo from './components/first_compo';

const App = () => {
  return <div>
    <FirstCompo />
  </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));