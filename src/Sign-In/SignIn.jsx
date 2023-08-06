import React from "react"
import SignContainer from "../SignContainer/SignContainer"
import Input from "../Input/Input"
import SubmitButton from "../SubmitButton/SubmitButton"
import "./SignIn.css"

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // email input state
            emailInput: "",
            emailInputStatus: false, // 'true' status means input got error [ true ||  false]
            emailInputErrorMessage: "", // if error message is empty not show anything
            // password input state
            passwordInput: "",
            passwordInputStatus: false, // [ true ||  false]
            passwordInputErrorMessage: "",
            // submit
            submitButtonStatus: false // true means active style
        }
    }
    // Handle Email Input Value
    handleEmailInput(event) {
        // change value of input and sync with state
        this.setState({ emailInput: event.target.value })
        // ---------------------
        // email validation
        let emailInputValue = event.target.value
        if (emailInputValue === "mahdi@gmail.com") {
            this.setState({
                emailInputStatus: true,
                emailInputErrorMessage: `This Email Exist! try another or Login`

            })
        } else {
            this.setState({
                emailInputStatus: false,
                emailInputErrorMessage: ""
            })
        }


    }
    // Handle Password Input Value
    handlePasswordInput(event) {
        //  change value of input and sync with state
        this.setState({ passwordInput: event.target.value })
        // validate password
        let passwordInputValue = event.target.value
        if (passwordInputValue === "1234") {
            this.setState({
                passwordInputStatus: true,
                passwordInputErrorMessage: "password incorect try another"
            })
        } else {
            this.setState({
                passwordInputStatus: false,
                passwordInputErrorMessage: ""
            })
        }
    }
    // Handle Form Submit when click on Submit button
    handleSubmit(event) {
        // Check input value from server in this function
        event.preventDefault()
        console.log("prevent Default submit", this.state)
        // validate input and submit
        let emailInput = this.state.emailInput
        let passwordInput = this.state.passwordInput
        if(emailInput && passwordInput){
            alert("Thank You ! Login Success")
        }else{
            alert("Form Can Not Be empty ! Failed")

        }


    }
    render() {
        return (
            <SignContainer pageTitle="Wellcome Back" pageSubtitle="Dont have an account?" headerLinkTag={<a href="/sign-up">Sign Up</a>} >
                <form className="sign-in">
                    <Input
                        type="email"
                        label="Email Address"
                        placeholder="Example@gmail.com"
                        required
                        onChange={this.handleEmailInput.bind(this)}
                        value={this.state.emailInput}
                        errorStatus={this.state.emailInputStatus}
                        errorMessage={this.state.emailInputErrorMessage}

                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="password@user1234"
                        required
                        onChange={this.handlePasswordInput.bind(this)}
                        value={this.state.passwordInput}
                        errorStatus={this.state.passwordInputStatus}
                        errorMessage={this.state.passwordInputErrorMessage}
                    />
                    <SubmitButton
                        innertext="Log in"
                        onClick={this.handleSubmit.bind(this)}
                        status={this.state.submitButtonStatus}
                    />
                </form>
            </SignContainer>
        )
    }
}