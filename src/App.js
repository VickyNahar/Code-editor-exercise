import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <div style={{textAlign: 'center', backgroundColor: 'black', height: 50, width:1510, paddingTop: 0}}>
        <h1 style = {{fontSize: 40, color: 'white'}}>Code Editor</h1>
        </div>
        <div style={{textAlign: 'center', backgroundColor: 'oldlace', height: 600, width:1510, paddingTop: 0}}>
        <div style={{backgroundColor:'paleturquoise', border: 'solid 3 white',  display: 'inline-block', margin: 20, borderRadius: 10, overflow: 'hidden'}}>
          <label style={{margin: 5}}>HTML</label>
          <input type="radio" name="id"></input>
          <label style={{margin: 5, paddingLeft:80}}>CSS</label>
          <input type="radio" name="id"></input>
          <label style={{margin: 5, paddingLeft:80}}>JS</label>
          <input type="radio" name="id"></input>
        </div>
        <div><textarea  style={{ height: 450, width: 1000 }}></textarea></div>
        <button style={{backgroundColor: 'green', border: 'none',color: 'white', padding: '40', textAlign: 'center',textDecoration: 'none', display: 'inline-block', fontSize: 25}}>Execute</button>
        <button style={{backgroundColor: 'green', border: 'none',color: 'white', padding: '40', textAlign: 'center',textDecoration: 'none', display: 'inline-block', fontSize: 25, marginLeft: 5}}>View Result</button>
        </div>
      </div>
    );
  }
}