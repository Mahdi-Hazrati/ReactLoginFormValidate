import React from "react";
import "./InputErrorMessage.css"

export default class InputErrorMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        if (this.props.message) {
            return (<p className="InputErrorMessage">{this.props.message}</p>)
        }
        else {
            return (<p className="InputErrorMessage"></p>)
        }

    }
}