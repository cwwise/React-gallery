/**
 * ImageFigure
 */
import React, { Component } from 'react';

class ImageFigure extends Component {

  // constructor() {
  //   super();
  // }
  //

  handleClick = (event) => {
    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }

     event.stopPropagation();
     event.preventDefault();
  }

  render() {
    var styleObj = {};
    //如果props属性中指定了这种图片的位置
    if (this.props.arrange.pos) {
      styleObj = this.props.arrange.pos;
    }
    // 如果图片的旋转角度有值 并且不为0
    if (this.props.arrange.rotate) {
        (['Moz', 'ms', 'Webkit']).forEach( (value)=> {
        styleObj[value+'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
      });
    }

    if (this.props.arrange.isCenter) {
        styleObj.zIndex = 11;
    }

    var ImageFigureClassName = 'img-figure';
    ImageFigureClassName += (this.props.arrange.isInverse ? ' is-inverse' : '');

    return(

      <figure className={ImageFigureClassName} onClick={this.handleClick} style={styleObj}>
        <img src={this.props.data.imageURL}
             alt={this.props.data.title} />
         <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p>
              {this.props.data.desc}
            </p>
          </div>
        </figcaption>
      </figure>
    );
  }

}


export default ImageFigure;
