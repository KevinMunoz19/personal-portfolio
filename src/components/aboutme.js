import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component{
  render() {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={4}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px'}}
            />
          </Cell>
          <Cell col={8}>
            <h2>Kevin Estuardo Muñoz Muñoz</h2>
            <h4>
              Mechatronics Engineer graduated from Universidad del Valle de Guatemala.
            </h4>
            <hr style={{borderTop: '5px dashed #2C5364'}}/>
            <p>
              I'm about to graduate as a mechatronics engineer, passionate about programming, math and problem solving.
            </p>
            <p>
              Two of my deep interests are data science, because you can collect data and extract useful information and find patters
              with tools such as machine learning, combining statistical models and algotirhms; and full stack developments, because you are
              able to work with both the front and the back end of a website.
            </p>
            <p>
              Some of my hobbies are boxing, working out, reading, gaming and watching F1.
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
