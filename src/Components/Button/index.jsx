import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, href, className = '', type = 'button', ...props }) => {
  const classes = `${styles.button} ${className}`.trim();
  return href
    ? <a href={href} className={classes} {...props}>{children}</a>
    : <button type={type} className={classes} {...props}>{children}</button>;
};

export default Button;
