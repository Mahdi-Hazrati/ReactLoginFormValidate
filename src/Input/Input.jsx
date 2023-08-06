import React from "react"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage"
import "./Input.css"

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        if (this.props.type === "email") {
            return (
                <div className="input-container">
                    <div className="label">
                        <span className="innertext">{this.props.label}</span>
                        {this.props.required && <span className="star">*</span>}

                    </div>
                    <div className={`input input-email ${this.props.errorStatus && "error-in-input"}`}>
                        <input
                            type="email"
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            value={this.props.value}

                        />
                    </div>
                    <div className="message">
                        <InputErrorMessage message={this.props.errorMessage} />
                    </div>
                </div>
            )
        }
        else if (this.props.type === "password") {
            return (
                <div className="input input-container">
                    <div className="label">
                        <span className="innertext">{this.props.label}</span>
                        {this.props.required && <span className="star">*</span>}

                    </div>
                    <div className={`input input-password ${this.props.errorStatus && "error-in-input"}`}>
                        <input
                            type="password"
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            value={this.props.value}
                        />
                        <AiOutlineEyeInvisible className="icon" />
                    </div>
                    <div className="message">
                        <InputErrorMessage message={this.props.errorMessage} />
                    </div>
                </div>
            )
        }
        else if (this.props.type === "text") {
            return (
                <div className="input-container">
                    <div className="label">
                        <span className="innertext">{this.props.label}</span>
                        {this.props.required && <span className="star">*</span>}

                    </div>
                    <div className={`input input-text ${this.props.errorStatus && "error-in-input"}`}>
                        <input
                            type="text"
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            value={this.props.value}
                        />
                    </div>
                    <div className="message">
                        <InputErrorMessage message={this.props.errorMessage} />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="input-container">
                    <div className="label">
                        <span className="innertext">{this.props.label}</span>
                        {this.props.required && <span className="star">*</span>}

                    </div>
                    <div className={`input input-text ${this.props.errorStatus && "error-in-input"}`}>
                        <input
                            type="text"
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            value={this.props.value}
                        />
                        <div className="message">
                            <InputErrorMessage message={this.props.errorMessage} />
                        </div>
                    </div>
                </div>
            )


        }
    }
}
// Default Props for Input Component
Input.defaultProps = {
    // Type Of input : Text / Email / Password / Default
    type: "text",
    // Label of Input
    label: "default label",
    // Placeholder of Input
    placeholder: "default text input",
    // if required is true a red star in input label show and make input required to fill
    required: false,
    // onChange event for change value of input in state with function
    onchange: () => { },
    // main value of input get from input state
    value: "default value"
}