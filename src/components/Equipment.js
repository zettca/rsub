import React from 'react';
import Slot from './Slot';
import {generateGearSet} from '../generator';

class Equipment extends React.Component {
  constructor() {
    super();
    this.state = {
      ammo: 2,
      body: 11834,
      boots: 1837,
      cape: 4409,
      gloves: 10085,
      head: 1042,
      legs: 11832,
      neck: 6585,
      ring: 10,
      shield: 2366,
      weapon: 1355,
    };
  }

  componentDidMount() {
    //btn.addEventListener('click', this.generateGear.bind(this));
  }


  generateGear() {
    const gearSet = generateGearSet();
    console.log(gearSet);
    this.setState(gearSet);
  }

  render() {

    return (
      <div>
        <section className='equipment'>
          <div>
            <Slot slotName={'Head'} itemId={this.state.head}/>
          </div>
          <div>
            <Slot slotName={'Cape'} itemId={this.state.cape}/>
            <Slot slotName={'Neck'} itemId={this.state.neck}/>
            <Slot slotName={'Ammo'} itemId={this.state.ammo}/>
          </div>
          <div>
            <Slot slotName={'Weapon'} itemId={this.state.weapon}/>
            <Slot slotName={'Body'} itemId={this.state.body}/>
            <Slot slotName={'Shield'} itemId={this.state.shield}/>
          </div>
          <div>
            <Slot slotName={'Legs'} itemId={this.state.legs}/>
          </div>
          <div>
            <Slot slotName={'Gloves'} itemId={this.state.gloves}/>
            <Slot slotName={'Boots'} itemId={this.state.boots}/>
            <Slot slotName={'Ring'} itemId={this.state.ring}/>
          </div>
        </section>
        <section className='generate'>
          <button onClick={this.generateGear.bind(this)}>Generate!
          </button>
        </section>
      </div>
    );
  }
}

export default Equipment;
