import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';
import ImageFigure from './components/ImageFigure'


var getRangeRandom = (low, high)=>Math.floor(Math.random() * (high - low) + low);

class App extends Component {

  constructor(props) {
    super(props);

    this.Constant = {
      centerPos: {
        left: 0,
        right: 0
      },
      hPosRange: { //水平方向的取值范围
        leftSecX: [0, 0],
        rightSecX: [0, 0],
        y: [0, 0]
      },
      vPosRange: { //垂直方向
        x: [0, 0],
        topY: [0, 0]
      }
    };

    // 初始化数据
      var dataArray = this.props.imageDataArray;
      var tempArray = [];
      for (var i = 0; i < dataArray.length; i++) {
          var pos = {
              left: 0,
              top: 0
          };
          tempArray.push(pos);
      }

       this.state = {
         imageArrangeArray: tempArray,
       };

  }

  // 组件加载以后计算其位置
  componentDidMount() {

    // 获取舞台的大小
    var stageDom = ReactDOM.findDOMNode(this.refs.stage);
    var stageWidth = stageDom.scrollWidth;
    var stageHeight = stageDom.scrollHeight;

    var halfStageWidth = Math.ceil(stageWidth/2);
    var halfStageHeight = Math.ceil(stageHeight/2);

    //获取ImageFigure的大小
    var imageFigureDom = ReactDOM.findDOMNode(this.refs.imageFigure0);

    var imageWidth = imageFigureDom.scrollWidth;
    var imageHeight = imageFigureDom.scrollHeight;

    var halfImageWidth = Math.ceil(imageWidth/2);
    var halfImageHeight = Math.ceil(imageHeight/2);

    // 计算中心图片的位置
    this.Constant.centerPos =  {
      left: halfStageWidth - halfImageWidth,
      top: halfStageHeight - halfImageHeight
    }

    // 计算左侧 右侧区域图片排布位置的范围
    this.Constant.hPosRange.leftSecX[0] = -halfImageWidth;
    this.Constant.hPosRange.leftSecX[1] = halfStageWidth - 3 * halfImageWidth;
    this.Constant.hPosRange.rightSecX[0] = halfStageWidth + halfImageWidth;
    this.Constant.hPosRange.rightSecX[1] = stageWidth - halfImageWidth;

    this.Constant.hPosRange.y[0] = -halfImageHeight;
    this.Constant.hPosRange.y[1] = stageHeight - halfImageHeight;

    // 计算上测 区域图片排布位置的范围
    this.Constant.vPosRange.topY[0] = -halfImageHeight;
    this.Constant.vPosRange.topY[1] = halfStageHeight - halfImageHeight * 3;

    this.Constant.vPosRange.x[0] = halfStageWidth - imageWidth;
    this.Constant.vPosRange.x[1] = halfStageWidth;

    this.rearrange(0);
  }

  //重新布局所有图片
  rearrange(centerIndex) {

    let imgsArrangeArr = this.state.imageArrangeArray,
      Constant = this.Constant,
      centerPos = Constant.centerPos,
      hPosRange = Constant.hPosRange,
      vPosRange = Constant.vPosRange,
      hPosRangeLeftSecX = hPosRange.leftSecX,
      hPosRangeRightSecX = hPosRange.rightSecX,
      hPosRangeY = hPosRange.y,
      vPosRangeTopY = vPosRange.topY,
      vPosRangeX = vPosRange.x,

      imgsArrangTopArr = [],
      topImgNum = Math.floor(Math.random() * 2),//取一个或者不取
      topImgSpiceIndex = 0,
      imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

      imgsArrangeCenterArr[0] = centerPos;
      //取出要布局上测的图片的状态信息
      topImgSpiceIndex = Math.floor(Math.random() * (imgsArrangeArr.length - topImgNum));
      imgsArrangTopArr = imgsArrangeArr.splice(topImgSpiceIndex, topImgNum);

      //布局位于上侧的图片
     imgsArrangTopArr.forEach((value, index)=> {
       imgsArrangTopArr[index] = {
           top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
           left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
       };
     });

     //布局左两侧的图片
     for (let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
       let hPosRangeLORX = null;

       //前半部分布局左边,右边部分布局右边
       if (i < k) {
         hPosRangeLORX = hPosRangeLeftSecX;
       } else {
         hPosRangeLORX = hPosRangeRightSecX
       }
       imgsArrangeArr[i] = {
           top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
           left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
       }
     }

     if (imgsArrangTopArr && imgsArrangTopArr[0]) {
       imgsArrangeArr.splice(topImgSpiceIndex, 0, imgsArrangTopArr[0]);
     }
     imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);
     this.setState({
       imageArrangeArray: imgsArrangeArr
     });
  }


  render() {

    var controllerUnits = [],
        imageFigures = [];

    var dataArray = this.props.imageDataArray;
    dataArray.forEach( function(value, index) {

        imageFigures.push(<ImageFigure arrange={this.state.imageArrangeArray[index]}
                              key={index} data={value} ref={'imageFigure'+index}/>);
    }.bind(this));

    return (
      <section className="stage" ref="stage">

          {/* 图片*/}
          <section className="img-section">
            {imageFigures}
          </section>

          {/* 导航栏 */}
          <nav className="controller-nav">
            {controllerUnits}
          </nav>

      </section>
    );
  }
}

export default App;
