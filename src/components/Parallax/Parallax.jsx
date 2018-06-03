import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import parallaxStyle from 'assets/jss/components/parallaxStyle.jsx';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    var windowScrollTop = window.pageYOffset / 3;
    this.state = {
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    });
    window.addEventListener('scroll', this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.resetTransform);
  }
  resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    });
  }
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small
    } = this.props;

    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      className
    });

    return (
      <div
        className = {parallaxClasses}
        style={{
          ...style,
          backgroundImage: 'url(' + image + ')',
          ...this.state
        }}
        ref='parallax'
      >
        {children}
      </div>
    );
  }H
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string
};

export default withStyles(parallaxStyle)(Parallax);
