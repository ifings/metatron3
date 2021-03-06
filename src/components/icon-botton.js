/** @jsx jsx */
import React from 'react';
import { IconButton as ThemeUIIconButton, jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const IconButton = ({ sx, label, ...props }) => (
  <ThemeUIIconButton sx={sx} aria-label={label} {...props} />
);

IconButton.defaultProps = {
  sx: {},
};

IconButton.propTypes = {
  sx: PropTypes.object,
  label: PropTypes.string.isRequired,
};

export default IconButton;
