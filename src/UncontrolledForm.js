import React from 'react'

const UncontrolledForm = () => {
  const input = React.createRef()
  const handleSubmit = e => {
    console.log(input.current.value)
    e.preventDefault()
    console.log(e.target.name.value)
    e.target.reset()
  }
  return (
    <>
      <h1>Uncontrolled:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="name" type="text" ref={input} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default UncontrolledForm
