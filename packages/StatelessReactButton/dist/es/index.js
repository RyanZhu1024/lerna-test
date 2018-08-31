import React from 'react';

var StatelessReactButton = function StatelessReactButton(_ref) {
  var handleOnclick = _ref.handleOnclick;

  return React.createElement(
    'button',
    { onClick: handleOnclick },
    'react stateless button'
  );
};

export default StatelessReactButton;
