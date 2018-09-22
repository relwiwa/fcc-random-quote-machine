import React from 'react';

<<<<<<< HEAD
const Button = props => <button className="button">{props.text}<i className="fab fa-twitter-square"></i></button>	
=======
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
>>>>>>> c45477e983da6d642b2cc7ce5467d5229106b280

export default Button; 