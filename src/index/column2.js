import React from 'react';
import styled from 'styled-components';
import Ripples from 'react-ripples'

export class Column2 extends React.Component {

    getPage()
    {
        return (
            <div></div>
        );
    }

    render() {

        const Button = styled.button`
            background: transparent;
            border: 3px solid transparent;
            border-bottom: 3px #236f92 dashed;
            border-radius: 3px;
            color: white;
            font-size: 26pt;
            font-family: "productSans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif;

            &:hover {
                border: 3px solid transparent;
                border-bottom: 3px solid transparent;
            }
        `;

        var headline = <h1 class="headline">Hi, I'm Tyler Woodfin.</h1>;

        var subHeadlineIcons = 
            <p style={{fontSize: `18px`, paddingBottom: `20px`}}>

                <div class="attributeContainer">
                    <div class="attributeMap"><em class="fa fa-map-marker" aria-hidden="true"></em>Austin, TX</div>
                    <div class="attributeCode"><em class="fa fa-code"></em>Software Engineer</div>
                </div>
            </p>;

        var ripples = <Button>reach out</Button>;
        
        var bodyFeedback = 
            <h2 id="bodyFeedback">This is a space to host all of my projects.
            <br/><br/>Please {ripples} if you'd like to get in touch.<br/><br/></h2>;

        return (
            <div>{headline}{subHeadlineIcons}{bodyFeedback}</div>
        );
    }
}

/*
<h1 class="headline">Hi, I'm Tyler Woodfin.</h1>
        
        <p style="font-size: 18px; padding-bottom: 20px;">

          <div class="attributeContainer">
            <div class="attributeMap"><em class="fa fa-map-marker" aria-hidden="true"></em>Austin, TX</div>
            <div class="attributeCode"><em class="fa fa-code"></em>Software Engineer</div>
          </div>
        
        </p>

        <h2 id="bodyFeedback">
          This is a space to host all of my projects.<br><br>Please <a onClick="feedback()" class="dashed" >reach out</a> if you'd like to get in touch.
        </h2>
*/