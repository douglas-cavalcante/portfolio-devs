import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const DevItem = ({ onSelect, email, favoriteAnimal, name }) => {
  console.log('item')
  return (
    <li className="devitem-container" onClick={onSelect}>
      
      <div>
      <p className="devitem-name">Nome: {name}</p>
        <p className="devitem-name">Email: {email}</p>
        <p className="devitem-name">Favorito: {favoriteAnimal}</p>
      </div>
    </li>
  );
};

DevItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  expertise: PropTypes.string.isRequired,
};

export default DevItem;
