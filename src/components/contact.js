import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilepic from './saifulislam.jpg'





class Contact extends Component {

  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    347-593-9713
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    Saiful_topu89@yahoo.com
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>


        

    

        </Grid>
      </div>
    );
  }
}


export default Contact;
