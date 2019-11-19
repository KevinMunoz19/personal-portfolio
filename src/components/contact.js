import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kevin Estuardo Muñoz Muñoz</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px'}}
            />
            <p style={{width: "75%", margin: 'auto', paddingTop:'1em'}}>
              Dynamic and creative software developer, quality and detail oriented with experience coding in
              different programming languages, database management, and web development, with the ability
              to lead teams through project development and testing.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className = "contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily:'Josefin Sans'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (502) 3007-5592
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'20px', fontFamily:'Josefin Sans'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    kevin.munoz11@hotmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}













export default Contact;
