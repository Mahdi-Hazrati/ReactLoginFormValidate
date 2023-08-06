import React from "react"
import SignContainer from "../SignContainer/SignContainer"
import Input from "../Input/Input"
import SubmitButton from "../SubmitButton/SubmitButton"
import "./SignUp.css"

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // fullname input state
            formFullNameInput: "",
            fullnameInputErrorStatus: false, // [ true ||  false]
            fullnameInputErrorMessage: "",
            // email input state
            formEmailInput: "",
            emailInputErrorStatus: false, // 'true' status means input got error [ true ||  false]
            emailInputErrorMessage: "", // if error message is empty not show anything
            // password input state
            formPasswordInput: "",
            passwordInputErrorStatus: false, // [ true ||  false]
            passwordInputErrorMessage: "",
            // submit
            submitButtonStatus: false // true means active style
        }
    }
    // method for input onchange
    handleFullNameInputChange(event) {
        console.log("full name input onchange")
        this.setState({ formFullNameInput: event.target.value })

    }
    handleEmailInputChange(event) {
        console.log("email input onchange")
        this.setState({ formEmailInput: event.target.value })

    }
    handlePasswordInputChange(event) {
        console.log("password input onchange")
        this.setState({ formPasswordInput: event.target.value })

    }
    // Handle Form Submit when click on Submit button
    handleSubmit(event) {
        // Check input value from server in this function
        event.preventDefault()
        console.log("prevent Default submit", this.state)
        // validate input and submit
        let fullname = this.state.formFullNameInput
        let emailInput = this.state.formEmailInput
        let passwordInput = this.state.formPasswordInput

        if (fullname && emailInput && passwordInput) {
            alert("Thank You ! Create Account Success")
            this.setState({
                formFullNameInput: "",
                formEmailInput: "",
                formPasswordInput: ""
            })
        } else {
            alert("Error ! Try Again")

        }


    }
    render() {
        return (
            <SignContainer pageTitle="Create Your Account" pageSubtitle="Already have an account?" headerLinkTag={<a href="/sign-in">Sign In</a>} >
                <form className="sign-up">
                    <Input
                        type="text"
                        label="Full name"
                        placeholder="John Doe"
                        required
                        onChange={this.handleFullNameInputChange.bind(this)}
                        value={this.state.formFullNameInput}
                        errorStatus={this.state.fullnameInputErrorStatus}
                        errorMessage={this.state.fullnameInputErrorMessage}
                    />
                    <Input
                        type="email"
                        label="Email Adress"
                        placeholder="Example@gmail.com"
                        required
                        onChange={this.handleEmailInputChange.bind(this)}
                        value={this.state.formEmailInput}
                        errorStatus={this.state.emailInputErrorStatus}
                        errorMessage={this.state.emailInputErrorMessage}
                        
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="password@user1234"
                        required
                        onChange={this.handlePasswordInputChange.bind(this)}
                        value={this.state.formPasswordInput}
                        errorStatus={this.state.passwordInputErrorStatus}
                        errorMessage={this.state.passwordInputErrorMessage}
                    />
                    {/* Submit button */}
                    <SubmitButton
                        innertext="Sign Up"
                        onClick={this.handleSubmit.bind(this)}
                        status={this.state.submitButtonStatus}
                    />
                </form>
            </SignContainer>
        )
    }
}