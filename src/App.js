import React from 'react'
import './App.css'
import Person from './Person'
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm'

const people = [
  { name: 'Morgan', favoriteColor: 'blue' },
  { name: 'Lana', favoriteColor: 'orange' },
  { name: 'Sim', favoriteColor: 'baby blue' },
  { name: 'Kevin', favoriteColor: 'green' }
]
// const nameComponents = names.map(name => <Name name={name} />)

const peopleComponents = people.map(person => (
  <Person key={person.name} {...person} />
))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPeople: false,
      anotherThing: true,
      title: 'app title',
      time: new Date()
    }
  }
  toggleShow = () => {
    this.setState(prevState => {
      return {
        showPeople: !prevState.showPeople,
        title: 'changed'
      }
    })
  }

  tick = () => {
    this.setState({ time: new Date() })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to my Example App</p>
          <h2>It is {this.state.time.toLocaleTimeString()}</h2>
          <button onClick={this.toggleShow}>
            {this.state.showPeople ? 'Hide' : 'Show'}
          </button>
          {this.state.title}
          {this.state.showPeople ? <ul>{peopleComponents}</ul> : null}
          <UncontrolledForm />
          <ControlledForm />
        </header>
      </div>
    )
  }
}

export default App
