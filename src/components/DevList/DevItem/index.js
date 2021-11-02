import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const DevItem = ({ onSelect, photo, name, expertise }) => {
  console.log('item')
  return (
    <li className="devitem-container" onClick={onSelect}>
      {photo && <img className="devitem-photo" src={photo} alt={name} />}

      <div>
        <p className="devitem-name">{name}</p>
        <p className="devitem-expertise">{expertise}</p>
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
