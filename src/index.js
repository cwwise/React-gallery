import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './data/imageDatas.json';


// 获取图片相关数据
var imageDatas = require('./data/imageDatas.json');
// 利用自执行函数，将图片名信息转成图片URL
imageDatas = (function genImageURL(imageDataArray) {

    for (var i = 0; i < imageDataArray.length; i++) {
      var imageData = imageDataArray[i];
      // 本地路径
      // imageData.imageURL = require("./images/" + imageData.fileName);
      //网络路径
      imageData.imageURL = "https://oc9rdv0u6.qnssl.com/" + imageData.fileName;

      imageDataArray[i] = imageData;
    }

    return imageDataArray;
})(imageDatas);


ReactDOM.render(
  <App imageDataArray={imageDatas}/>,
  document.getElementById('content')
);
