import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }


  //Way 1 
//   reduceOpacity = (x) => {
//     return x >= .2 ? <ColorBox opacity= {x - .1} /> :
//     null
//   }

  //Way 2
  reduceOpacity(x) {
    if (x >= .2) {
      return <ColorBox opacity = {x - .1} />
    } else {
      return null
    }
  }


  render() {

    const opacityNumber = this.props.opacity

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.reduceOpacity(opacityNumber)}
      </div>
      
    )
  }
}

 

