import React from 'react';
import Slot from './Slot';
import './Equipment.css';

class Equipment extends React.Component {

  render() {
    return (
      <section className='equipment'>
        <div>
          <Slot name={'Head'}/>
        </div>
        <div>
          <Slot name={'Cape'}/>
          <Slot name={'Neck'}/>
          <Slot name={'Quiver'}/>
        </div>
        <div>
          <Slot name={'Sword'}/>
          <Slot name={'Body'}/>
          <Slot name={'Shield'}/>
        </div>
        <div>
          <Slot name={'Legs'}/>
        </div>
        <div>
          <Slot name={'Gloves'}/>
          <Slot name={'Boots'}/>
          <Slot name={'Ring'}/>
        </div>
      </section>
    );
  }
}

export default Equipment;
