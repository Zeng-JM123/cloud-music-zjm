import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { CarouselOuter } from './style';
import service from '../../api/request';

export default function CarouselComp() {

  const [imgList, setImgList] = useState([]);

  const getRecommendBan = () => {
    service.get('/recommend/ban').then(res => {
      setImgList(res.data);
    })
  }

  imgList.length === 0 && getRecommendBan();

  return (
    <CarouselOuter>
      <Carousel autoplay>
        {imgList.map((item, i) => {
          return (
            <li key={i} className="img-item">
              <img src={item} alt="推荐列表"/>
            </li>
          )
        })}
      </Carousel>
    </CarouselOuter>
  )
}