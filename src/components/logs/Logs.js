import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";

// Redux actions
import { getLogs } from "../../actions/logActions";

// Redux
import { connect } from "react-redux";

// Actions and state go as props
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Memo Network</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">{`Add some memories 😉`}</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

// What we need from state
// Connects with index.js in 'reducers' folder
const mapStateToProps = (state) => ({
  log: state.log,
  getLogs: PropTypes.func.isRequired,
});

// Connect redux to this component
// Usage: connect(state, actions)(Component)
export default connect(mapStateToProps, { getLogs })(Logs);
