import React from 'react';
import { withStyles, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import buttonStyle from 'assets/jss/components/buttonStyle.jsx';

function RegularButton({ classes, color, round, children, fullWidth, disabled, simple, size, block, link, justIcon, className, ...rest }) {
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });

  return (
    <Button className = {btnClasses} {...rest}>
      {children}
    </Button>
  );
}

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'facebook',
    'twitter',
    'google',
    'github',
    'transparent'
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool
};

export default withStyles(buttonStyle)(RegularButton);
