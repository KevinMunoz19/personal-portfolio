import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Achievements extends Component {
  render(){
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop: '0px'}}>{this.props.achievementsName}</h4>
          <p>{this.props.achievementsDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Achievements;
