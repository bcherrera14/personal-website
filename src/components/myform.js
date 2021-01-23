import React from "react"
import StyledButton from "../styles/button"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        className="d-flex flex-column justify-content-center"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mleoznyk"
        method="POST"
      >
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea type="text" className="form-control" name="message" />
        </div>

        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <StyledButton type="button" textAlign="center" center>
            Submit
          </StyledButton>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
