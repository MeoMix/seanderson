import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const style = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
};

function GridContainer({ classes, children, className, ...rest }) {
  return (
    <Grid container className = {classes.grid + ' ' + className} {...rest} >
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ''
};

GridContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(style)(GridContainer);
