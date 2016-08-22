/**
 * ImageFigure
 */
import React, { Component } from 'react';

class ImageFigure extends Component {

  // constructor() {
  //   super();
  // }

  render() {
    var styleObj = {};
    //如果props属性中指定了这种图片的位置
    if (this.props.arrange) {
      styleObj = this.props.arrange;
    }
    return(

      <figure className="img-figure" style={styleObj}>
        <img src={this.props.data.imageURL}
             alt={this.props.data.title}
             role="presentation" />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>

    );
  }

}


export default ImageFigure;
