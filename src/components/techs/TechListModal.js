import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TechItem from "./TechItem";

// Redux actions
import { getTechs } from "../../actions/techActions";

// Redux
import { connect } from "react-redux";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>List of Members</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

// What we need from state
// Connects with index.js in 'reducers' folder
const mapStateToProps = (state) => ({
  tech: state.tech,
});

// Connect redux to this component
// Usage: connect(state, actions)(Component)
export default connect(mapStateToProps, { getTechs })(TechListModal);
