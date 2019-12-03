import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  addAction: () => dispatch({ type: 'ADD'}),
  removeAction: () => dispatch({ type: 'REMOVE'}),
  add10Action: () => dispatch({ type: 'ADD10'}),
  remove10Action: () => dispatch({ type: 'REMOVE10'}),
  resetAction: () => dispatch({ type: 'RESET'})

});

const CounterComponent = ({ count, addAction, removeAction, add10Action, remove10Action, resetAction}) => (
  <div>
    <p>{count}</p>
    <button onClick={addAction}>add 1</button>
    <button onClick={removeAction}>remove 1</button>
    <button onClick={add10Action}>add 10</button>
    <button onClick={remove10Action}>remove 10</button>
    <button onClick={resetAction}>reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);


