import React from "react";
import { FcGoogle } from "react-icons/fc"
import { AiFillApple } from "react-icons/ai"
import "./SignContainer.css"

export default class SignContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="sign-container">
                <div className="left">
                    <div className="wrapper">
                        <div className="header">
                            <img src="go-green-logo.png" alt="brand logo" className="brand-logo" />
                            <h2 className="title">{this.props.pageTitle}</h2>
                            <div className="subtitle">
                                <p>{this.props.pageSubtitle}</p>
                                {this.props.headerLinkTag}
                            </div>
                        </div>
                        {/* Children of container */}
                        <div className="main">
                            {this.props.children}
                        </div>
                        {/* Children of container */}
                        <div className="footer">
                            <div className="br-section">
                                <div className="line"></div>
                                <span>or</span>
                                <div className="line"></div>
                            </div>
                            <div className="sign-with">
                                <div className="google">
                                    <FcGoogle className="icon" />
                                </div>
                                <div className="apple">
                                    <AiFillApple className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="green-bg.png" alt="green background" className="bg" />
                </div>
            </div>
        )
    }
}
SignContainer.defaultProps = {
    pageTitle:"default title",
    pageSubtitle:"default subtitle",
    headerLinkTag:<a href="#default-link">Default link</a>
}