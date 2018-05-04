import React from 'react';

class Slot extends React.Component {
  constructor(props) {
    super();
    this.state = {
      itemI: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ itemI: -1 });
    const { order, items } = nextProps;
    const DELAY = 300;
    const OFFSET = order * DELAY * items.length;
    items.forEach((item, i) => {
      setTimeout(() => {
        this.setState({ itemI: i });
      }, OFFSET + (i + 1) * DELAY);
    });
  }

  render() {
    const { itemI } = this.state;
    const { slotName, items } = this.props;
    const item = items[itemI];

    const imgItem = `https://services.runescape.com/m=itemdb_oldschool/1525085391993_obj_sprite.gif?id=${item}`;
    const bgImage = {
      backgroundImage: 'url(' + require(`../resources/img/gear_slots/${slotName.toLowerCase()}_slot.png`) + ')',
    };

    return (
      <span className='slot' style={bgImage}>
        {item && (<img src={imgItem} alt={slotName}/>)}
      </span>
    );
  }
}

export default Slot;
