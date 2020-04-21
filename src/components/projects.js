import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'red', height: '50px', background: 
          'url() center / cover'}} >My Portfolio</CardTitle>
            <CardText>
              This is my Portfolio WebSites. Please Click the GitHub link 
              below it will take to my GitHub repo.

            </CardText>
            <CardActions border>
            <Button  href="https://github.com/saiful-csc/saiful89.github.io.git">Github</Button>
           
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'red', height: '50px', background: 'url() center / cover'}} >Design Pad</CardTitle>
            <CardText>
            This is my Design Pad project. This project will drag and drop color from one pad to 
            another pad. Please Click the GitHub link below it will take to my GitHub repo.
            </CardText>
            <CardActions border>
              <Button  href = "https://github.com/saiful-csc/design-pad.git">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: 'gray'}}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'red', height: '50px', background: 'url() center / cover'}} >Fave Link</CardTitle>
            <CardText>
              This is my Fav Link project. You can add name and Link and it will connect you 
              to the link. Also you can delete the link from the list. Please Click the GitHub link below it will take to my GitHub repo.
            </CardText>
            <CardActions border>
              <Button  href = "https://github.com/saiful-csc/favLinks.git">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>


      )
      
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>GitHub Projects</Tab>  
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
