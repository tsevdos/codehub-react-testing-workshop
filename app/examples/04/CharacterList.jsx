import React from "react";
import PropTypes from "prop-types";

const CharacterList = ({ data, onSelectCharacter }) => (
  <div>
    <h2>My title</h2>
    <div id="cards">
      {Boolean(data.length) &&
        data.map(({ name, gender }) => (
          <div className="card m-b" key={name}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{gender}</p>
              <button className="btn btn-primary" onClick={onSelectCharacter}>
                edit
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
);

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectCharacter: PropTypes.func
};

CharacterList.defaultProps = {
  onSelectCharacter: () => console.log("Clicked")
};

export default CharacterList;
