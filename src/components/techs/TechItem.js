import React from "react";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

// Redux actions
import { deleteTech } from "../../actions/techActions";

// Redux
import { connect } from "react-redux";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech);
    M.toast({ html: `${tech.firstName} ${tech.lastName} was removed` });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
