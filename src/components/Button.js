import React from 'react';

/*  it is a common practice to use destructuring of props
    like this:
    const Button = (props) => <button></button>
    becomes:
    const Button = ({ text }) = <button></button>
    So you don't have to write props. all the time, but
    directly access the props, like:
    <button>{text}</prop> */
/*  You are not using the icon prop yet, wait for the
    respective test to be written */
const Button = ({ text }) => <button>{text}</button>	

export default Button; 