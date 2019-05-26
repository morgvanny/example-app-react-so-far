import React from 'react'

class ControlledForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { controlledValue: '', suggestions: null, error: '' }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ controlledValue: '' })
  }

  handleChange = e => {
    if (e.target.value.toUpperCase() !== e.target.value) {
      this.setState({ error: 'please type in upper case' })
    } else {
      this.setState({ error: '' })
    }
    this.setState({ controlledValue: e.target.value })
  }
  render() {
    return (
      <>
        <h1>Controlled:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{' '}
            <input
              value={this.state.controlledValue}
              onChange={this.handleChange}
              type="text"
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
          <p>{this.state.error}</p>
        </form>
      </>
    )
  }
}

export default ControlledForm
