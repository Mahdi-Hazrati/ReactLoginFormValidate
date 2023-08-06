import React from "react"
import SignIn from "../Sign-In/SignIn"
import SignUp from "../Sign-Up/SignUp"

import "./App.css"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="app">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}