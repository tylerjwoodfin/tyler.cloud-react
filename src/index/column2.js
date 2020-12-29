import React from 'react';
import styled from 'styled-components';

export class Column2 extends React.Component {

    constructor(props) {
        super(props);
        this.toggleReachOut = this.toggleReachOut.bind(this);
        this.state = { reachOutDisplayed: false};
    }

    submitFeedback()
    {
        var message = document.getElementById("feedback").value;

        fetch("feedback/post.php?subject=Website&message=" + message)
            .then(
                (result) => {
                    console.log("Success");
                    console.log(result);
                },
                (error) => {
                    console.log("Error");
                }
            );

        console.log("Done");
        
        // document.getElementById("bodyFeedback").innerHTML = `Thank you for your message.&nbsp;&nbsp;&nbsp;<a class="nodashed" onclick="resetBodyFeedback()"><em class="fa fa-rotate-left" style="font-size: 24px;"></em></a>`;
    }

    toggleReachOut()
    {
        this.setState({reachOutDisplayed: !this.state.reachOutDisplayed});
    }

    render() {

        const ButtonReachOut = styled.button`
            background: transparent;
            border: 3px solid transparent;
            color: #fccc75;
            border-bottom: 1px solid;
            border-radius: 3px;
            font-size: 26pt;
            font-family: "productSans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif;

            &:hover {
                border: 3px solid transparent;
                border-bottom: 1px solid transparent;
                cursor: pointer;
            }
        `;

        const ButtonReachOutActions = styled.button`
            background: transparent;
            border: 3px solid transparent;
            border-radius: 3px;
            color: white;
            font-size: 14pt;
            margin-top: 15px;
            margin-left: 20px;
            font-family: "productSans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif;

            &:hover {
                border: 3px solid transparent;
                cursor: pointer;
                color: #fccc75;
                border-bottom: 1px solid;
            }
        `;

        var headline = <h1 className="headline">Hi, I'm Tyler Woodfin.</h1>;

        var subHeadlineIcons = 
            <div style={{fontSize: `18px`, paddingBottom: `20px`}}>

                <div className="attributeContainer">
                    <div className="attributeMap"><em className="fa fa-map-marker" aria-hidden="true"></em>Austin, TX</div>
                    <div className="attributeCode"><em className="fa fa-code"></em>Software Engineer</div>
                </div>
            </div>;

        var reachOutButton = <ButtonReachOut onClick={this.toggleReachOut}>reach out</ButtonReachOut>;

        var reachOutPrompt = <h2 id="bodyFeedback">This is a space to host all of my projects.<br/><br/>Please {reachOutButton} if you'd like to get in touch.</h2>;

        var reachOutArea = (
            <div>
                <textarea id="feedback" autoFocus></textarea><br/>
                <div className="reachOutActions">
                    <ButtonReachOutActions onClick={this.toggleReachOut}>CANCEL</ButtonReachOutActions>
                    <ButtonReachOutActions onClick={this.submitFeedback}>SEND</ButtonReachOutActions>
                </div>
            </div>);
        
        var bodyFeedback = 
            <div>
                {this.state.reachOutDisplayed ? reachOutArea : reachOutPrompt}
            </div>;

        return (
            <div>{headline}{subHeadlineIcons}{bodyFeedback}</div>
        );
    }
}