import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profilepic from './saifulislam.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src={profilepic}
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Saiful Islam</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> Engaged, 
             energetic, creative computer science experience. Seeking to leverage 
             exemplary leadership skills, analytical skills, and excellent coding 
             skills. Computer expertise in front desk, cashier, troubleshooting, 
             fixing computer, internet troubleshooting, and helping both employee 
             and customer with technical issue.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1270 gerard ave Bronx, NY 10452</p>
            <h5>Phone</h5>
            <p>347-593-9713 </p>
            <h5>Email</h5>
            <p>Saiful_topu89@yahoo.com</p>
            <h5>Web</h5>
            <p>Coming soon</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={'Fall 2019'}
              endYear={'Present'}
              schoolName="Lehman College, New York"
              Degree ="Bachelor in Computer science"
              GPA = "3.52 GPA"
              schoolDescription="At Lehman College I'm taking Networking, 
              Operating system, Database Systems, Software Engineering, Web development.
              And in the future I will take Mobile programming, Game programming"
               />

               <Education
                 startYear={"Fall 2016"}
                 endYear={'Spring 2019'}
                 schoolName="Borough of Manhattan Community College, New York"
                 Degree ="Associate degree in Computer science"
                 GPA = "Graduated with a 3.70 GPA"
                 schoolDescription="At Borough of Manhattan Community 
                 College I took Java, C++, Assembly language, Data Structures"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"Feb 2019"}
              endYear={"Present"}
              jobName="Field service engineer"
              CompanyName = "Nautilus Hyosung America.inc"
              one = "Installation, repair, software loading and maintenance of ATMs or other products in a defined geographical territory."
              two = "Train bank staff or vendors on required maintenance tasks of equipment."
              three = "Work with internal and external support departments required to provide maintenance support to the end user."
              four = "Perform preventive maintenance functions of an ATM including diagnostics, testing and cleaning."

              />

              <Experience
                startYear={"July 2015"}
                endYear={"Jan 2019"}
                jobName="Assistant Manager"
                CompanyName = "Dunkin Donuts"
                one = "Daily sales report and employee maintenance in computer data base."
                two = "Responsible for professional growth & development of assistant managers, shift leaders and sales associates."
                three = "Responsible for monitoring performance/customer service and morale of store employees."
                four = "Fixing machine and repairing parts."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={90}
                />
                <Skills
                skill="C++"
                progress={80}
                /><Skills
                skill="Database System"
                progress={50}
                />
                <Skills
                skill="Assembly language"
                progress={70}
                />
               <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
