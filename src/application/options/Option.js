import React from 'react';
import { Link } from 'react-router-dom';
import { CardItem } from './style';


export default function Option(props) {

  return (
    <Link to={props.path}>
      <CardItem>
        <div className="card-item__button">
          <svg className="icon card-item__button__tag" aria-hidden="true">
             <use xlinkHref={'#' + props.icon}></use>
          </svg>
        </div>
        <div className="card-item__detail">{props.detail}</div>
      </CardItem>
    </Link>
  )
}