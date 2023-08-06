import React from "react"
import "./SubmitButton.css"

export default class SubmitButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
            <input className={`submit-button ${this.props.status && "disabled"}`} type="submit" value={this.props.innertext} onClick={this.props.onClick} />
            </>

        )
    }
}

SubmitButton.defaultProps = {
    innertext: "default submit"
}

