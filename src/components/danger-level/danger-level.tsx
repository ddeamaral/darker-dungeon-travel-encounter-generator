import * as React from 'react';
import './styles.scss';

const DangerLevel = () => {
  return (
    <div className="danger-level-container">
      <label htmlFor='danger-level'>Danger Level:</label>
      <input
        list='danger-levels'
        id='danger-level'
        name='danger-level-choice'
      />
      <datalist id='danger-levels'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </datalist>
    </div>
  );
};

export default DangerLevel;
