import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: [
      {
        id: 1, company: 'ServiceChannel',
        time: 'October 2016 - PRESENT',
        desc: 'I am currently working with an amazing team of engineers to build a facilities management tool built with Ember.js & Django.  My focus on this project is building components that are well tested and reusable.  I’ve developed complex features such as error handling, permissions matrix, authentication flow. I’ve  also participated in architecture planning, code reviews & code-pair sessions.',
        tech: 'Technologies -  Javascript, Ember.js, Python, Django , Scss, Bootstrap 3'
      },
      {
        id: 2, company: 'Teliax, Inc',
        time: 'October 2011 - September 2016',
        desc: 'While at Teliax I helped build and launch a new single page app built with Ember.js and Ruby on Rails. My focus was to build a highly interactive interface app to allow customers to manage there VoIP systems. I worked and led a small team to bring business requirements to life. I helped develop features such as permissions workflows, contextual menus & video clients. I also participated in a agile environment and daily code reviews',
        tech: 'Technologies -  Javascript, Ember.js, Ruby, Ruby on Rails , Scss, Bootstrap 3'
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <Name name={"Terrance Bryant"} />
        <Header header={"EXPERIENCE"} />
        <ExpList data={this.state.data} />
        <div className="side-bar">side bar</div>
      </div>
    );
  }
}


class ExpList extends Component {
  render() {
    return (
      <div className="exp">
        {this.props.data.map(exp => (
          <div className="exp-wrapper">
            <h3 key={exp.id} className="company">{exp.company}</h3>
            <div className="time">{exp.time}</div>
            <p className="desc">{exp.desc}</p>
            <div className="tech">{exp.tech}</div>
          </div>
        ))}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="section-header">{this.props.header}</div>
    )
  }
}

class Name extends Component {
  render() {
    return (
      <div className="name">{this.props.name}</div>
    )
  }
}

export default App;
