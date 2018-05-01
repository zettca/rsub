import React from 'react';
import {generateGearSlot} from '../generator';

class Slot extends React.Component {
  constructor(props) {
    super();
    this.state = {
      itemId: props.itemId || 314,
    };

  }

  render() {
    //const {itemId} = this.state;
    const {slotName, itemId} = this.props;

    const imgSlot = require(`../resources/img/gear_slots/${slotName.toLowerCase()}_slot.png`);
    const imgItem = `http://services.runescape.com/m=itemdb_oldschool/1525085391993_obj_sprite.gif?id=${itemId}`;

    const parentStyle = {
      backgroundImage: 'url(' + imgSlot + ')',
    };

    return (
      <span
        className='slot'
        style={parentStyle}
        onClick={() => {
          this.setState({itemId: generateGearSlot(slotName)});
        }}>
        <img src={itemId && imgItem} alt={slotName}/>
      </span>
    );
  }
}

export default Slot;
