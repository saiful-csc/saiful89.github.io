import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from './saifulislam.jpg'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profilepic}
              
              alt="Profilepic"
              className="avatar-img"
              />

            <div className="">
              <h1>Saiful Islam</h1>
              <p><b>web Developer</b></p>
           
            <hr/>

          

        <div className="social-links">

          

          {/* Github */}
          <a href="https://github.com/Saiful-csc" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Instgram */}
          <a href="https://www.instagram.com/sai_topu/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
