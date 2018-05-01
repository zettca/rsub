import React from 'react';

class Equipment extends React.Component {

  render() {
    const {name} = this.props;
    return (
      <span className='slot'>{name}</span>
    );
  }
}

export default Equipment;
