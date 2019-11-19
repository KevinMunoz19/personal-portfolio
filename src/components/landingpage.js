import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
  render() {
    return(
      <div style={{width : '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDD2aTSTe8Sf60QMGuUDwG0bzuDu-dKC56xQ1h4XZ5HR-Mxim&s"
              alt ="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Kevin Estuardo Muñoz Muñoz</h1>
              <h1>Web Developer</h1>

              <hr/>

              <p> HTML / CSS | Javascript | Python | Bootstrap | React | NodeJS | Express | MongoDB | SQL</p>
              <div className="social-links">
                {/* Linkedin*/}
                <a href="https://www.linkedin.com/in/kevin-munoz-777588193" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github*/}
                <a href="https://github.com/KevinMunoz19" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
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
