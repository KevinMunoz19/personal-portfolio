import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Volunteer from './volunteer';
import Achievements from './achievements';


class Resume extends Component{
  render() {
    return(
      <div>
        <Grid className="resume-left-col">
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src = "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt = "avatar"
                style = {{height:'200px'}}
              />
            </div>
            <h2 style={{paddingTop: "2em"}}>Kevin Estuardo Muñoz Muñoz</h2>
            <h4 style={{color: 'grey'}}>Programmer, Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
            <p>Dynamic and creative software developer, quality and detail oriented with experience coding in
              different programming languages, database management, and web development, with the ability
              to lead teams through project development and testing.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
            <h5>Languages</h5>
            <p>Spanish - Native</p>
            <p>English - Full Professional Proficiency</p>
            <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
            <h5>Address</h5>
            <p>Zona 14, Guatemala City, Guatemala</p>
            <h5>Phone</h5>
            <p>(502) 3007-5592</p>
            <h5>Email</h5>
            <p>kevin.munoz11@hotmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Universidad del Valle de Guatemala"
              schoolDescription="Mechatronics Engineer"
            />
            <Education
              startYear={2012}
              endYear={2014}
              schoolName="Colegio La Preparatoria"
              schoolDescription="High School Diploma, Computer Hardware and Software Oriented"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear="Aug 2014"
              endYear = "Sep 2014"
              jobName= "DHL Express IT Trainee"
              jobDescription = "Repairing and replacement of hardware. Software installation."
            />
            <Experience
              startYear= "Oct 2013"
              endYear = "Oct 2013"
              jobName= "DHL Aviation IT Trainee"
              jobDescription = "Hardware enhancement. Software installation "
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
              skill="HTML"
              sskill="Teamwork"
            />
            <Skills
              skill="CSS"
              sskill="Adaptability"
            />
            <Skills
              skill="JavaScript"
              sskill="Leadership"
            />
            <Skills
              skill="Python"
              sskill="Problem Solving"
            />
            <Skills
              skill="NodeJS"
              sskill="Autodidact"
            />
            <Skills
              skill="ExpressJS"
            />
            <Skills
              skill="React"
            />
            <Skills
              skill="REST API"
            />
            <Skills
              skill="MATLAB"
            />
            <Skills
              skill="SQL"
            />
            <Skills
              skill="UNIX"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Volunteer Experience</h2>
            <Volunteer
              startYear="Dec 2018"
              volunteerName= "DHL Social Labor"
              volunteerDescription = "Repairing of desks and chalkboards. Classroom walls painting."
            />
            <Volunteer
              startYear="July 2018"
              volunteerName= "TecniKids Judge"
              volunteerDescription = "Scoring judge for robotics competition."
            />
            <Volunteer
              startYear="June 2017"
              volunteerName= "TecniKids Judge"
              volunteerDescription = "Scoring judge for robotics competition."
            />
            <Volunteer
              startYear="Dec 2015"
              volunteerName= "Starbucks Carretera a El Salvador"
              volunteerDescription = "Public school backyard restoration and sports field delimitation."
            />
            <Volunteer
              startYear="Aug 2014"
              volunteerName= "DHL Express"
              volunteerDescription = "School year end celebration. Lunch and dessert distribution."
            /><hr style={{borderTop: '3px solid #e22947'}}/>
          <h2>Achievements</h2>
            <Achievements
              startYear="Jan 2019"
              achievementsName= "Academic Distinction"
              achievementsDescription = "Distinciton for outstanding academic record for the year 2018."
            />
          <Achievements
              startYear="June 2018"
              achievementsName= "Entrepreneurship and Innovation Project Competition"
              achievementsDescription = "1st Place at the intra university entrepreneurship competition."
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
