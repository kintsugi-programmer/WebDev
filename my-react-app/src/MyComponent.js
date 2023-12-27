// MyComponent.js
/*
In React, UIs are built using components. 
Components can be either functional or 
class-based. Create a new file for your 
first component, for example, MyComponent.js:
*/
// MyComponent.js
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default MyComponent;

