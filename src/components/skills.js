import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
  render(){
    return(
      <Grid>
        <Cell col={6}>
          <div style={{display: 'flex'}}>
            {this.props.skill}
          </div>
        </Cell>
        <Cell col={6}>
          <div style={{display: 'flex'}}>
            {this.props.sskill}
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
