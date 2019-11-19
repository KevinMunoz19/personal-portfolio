import React, { Component, Link } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, CardText, IconButton, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}>Personal Portfolio</CardTitle>
            <CardText>
              Personal portfolio using react app.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Portfolio-Dev-Build" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>
        </div>

      )
    } else if(this.state.activeTab ===1) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://nodejs.org/static/images/logo.svg) center / cover'}}>CSV to JSON</CardTitle>
            <CardText>
              Convert data in csv file to a json file.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/CSV-to-JSON" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://nodejs.org/static/images/logo.svg) center / cover'}}>Node Web Crawler</CardTitle>
            <CardText>
              Download and save HTML file of target URL.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Node-Web-Crawler" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab ===2) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}}>Data Wrangling</CardTitle>
            <CardText>
              Clean a provided dataset.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Data-Wrangling" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}}>Data Analysis</CardTitle>
            <CardText>
              Analysis of automobile dataset.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/DataAnalysis" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}}>Model Development</CardTitle>
            <CardText>
              Comparison of three predictive models.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Model-Development" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}}>Stuttering Speech Disorder</CardTitle>
            <CardText>
              Simulation of stuttering using TTS.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Speech-Disorder-Simulation" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab ===3) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png) center / cover'}}>Data Analysis and Plot</CardTitle>
            <CardText>
              Analysis of csv files to create plots.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Codigo-Trabajo-de-Graduacion" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png) center / cover'}}>Robot Delivery Simulation</CardTitle>
            <CardText>
              Robot item delivery simulation.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Robot-Item-Delivery" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{marginWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height:'180px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png) center / cover'}}>Mobile Robotics</CardTitle>
            <CardText>
              Point to point control algorithm for mobile robot.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KevinMunoz19/Mobile-Robotics" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  }


  render() {
    return(
      <div className = "category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Python</Tab>
          <Tab>Matlab</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className = "content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
