import React from 'react';
import Slot from './Slot';
import { generateGearSet } from '../generator';

class Equipment extends React.Component {
  constructor() {
    super();
    this.generateGear = this.generateGear.bind(this);
    this.state = {
      ammo: [2],
      body: [11834],
      boots: [1837],
      cape: [4409],
      gloves: [10085],
      head: [1042],
      legs: [11832],
      neck: [6585],
      ring: [10],
      shield: [2366],
      weapon: [1355],
    };
  }

  generateGear() {
    const NUM_ROULETTE = 8;
    const gearSet = generateGearSet(NUM_ROULETTE);
    console.log(gearSet);
    this.setState(gearSet);
  }

  render() {
    return (
      <div>
        <section className='equipment'>
          <div>
            <Slot order={0} slotName={'Head'} items={this.state.head}/>
          </div>
          <div>
            <Slot order={1} slotName={'Cape'} items={this.state.cape}/>
            <Slot order={2} slotName={'Neck'} items={this.state.neck}/>
            <Slot order={3} slotName={'Ammo'} items={this.state.ammo}/>
          </div>
          <div>
            <Slot order={4} slotName={'Weapon'} items={this.state.weapon}/>
            <Slot order={5} slotName={'Body'} items={this.state.body}/>
            <Slot order={6} slotName={'Shield'} items={this.state.shield}/>
          </div>
          <div>
            <Slot order={7} slotName={'Legs'} items={this.state.legs}/>
          </div>
          <div>
            <Slot order={8} slotName={'Gloves'} items={this.state.gloves}/>
            <Slot order={9} slotName={'Boots'} items={this.state.boots}/>
            <Slot order={10} slotName={'Ring'} items={this.state.ring}/>
          </div>
        </section>
        <section className='generate'>
          <button onClick={this.generateGear}>Generate Gear!</button>
        </section>
      </div>
    );
  }
}

export default Equipment;
