import * as React from 'react';
import { render } from 'react-dom';
import DangerLevel from './components/danger-level/danger-level';

const App = () => {
  return (
    <main>
      <DangerLevel />
    </main>
  );
};

render(<App />, document.getElementById('root'));
