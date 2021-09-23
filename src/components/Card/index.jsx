/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import food from '../../assets/food.jpeg';
import heartFill from '../../assets/heart-fill.png';
import heartOutline from '../../assets/heart-outline.png';

import './styles.css';

const Card = (props) => {
  const {
    title,
    author = 'khriztian',
    description,
    date,
    image = food,
    liked,
    likeCount,
  } = props;

  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{title}</h5>
          <div className="card-date">{date}</div>
        </div>
      </div>
      <img className="card-image" src={image} alt="Logo" />
      <div className="card-text">{description}</div>
      <div className="card-like-bar">
        {liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{likeCount}</b> LIKES
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * Title card
   */
  title: PropTypes.string,
  /**
   * Name of author
   */
  author: PropTypes.string.isRequired,
  /**
   * Name of author
   */
  image: PropTypes.string,
  /**
   * Description
   */
  description: PropTypes.string,
  /**
   * Date post
   */
  date: PropTypes.string,
  /**
   * is liked
   */
  liked: PropTypes.bool,
  /**
   * Number of likes
   */
  likeCount: PropTypes.number,
};

Card.defaultProps = {
  title: 'Tacos arabes',
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero exercitationem odio, doloremque soluta enim, corporis labore quidem officia eius quisquam iusto eligendi natus molestiae culpa ab possimus cum, quia eum.`,
  date: new Date().toDateString(),
  liked: false,
  likeCount: 0,
};

export default Card;
