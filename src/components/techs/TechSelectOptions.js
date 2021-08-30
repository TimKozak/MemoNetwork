import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Redux actions
import { getTechs } from "../../actions/techActions";

// Redux
import { connect } from "react-redux";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
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
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
