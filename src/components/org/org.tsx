import './org.css';
import React from 'react';

type LoginState = "connecting" | "connected" | "auth_code_requested" | "logging" | "logged";

interface IOrgProps {

}

interface IOrgState {
    state: LoginState;
}

export default class Org extends React.Component<IOrgProps, IOrgState> {
    state: IOrgState = {
        state: "connecting"
    };
    render(): React.ReactNode {
        return <>
        <div className='org-management-container'>
        <span>Org</span>
        {this.state.state !== "logged"?<div className='org-management-loginform'>
            <div className='org-management-loginform-intro'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sit amet consectetur adipiscing elit duis tristique. Amet tellus cras adipiscing enim eu turpis egestas. Nunc aliquet bibendum enim facilisis. Lectus sit amet est placerat in egestas erat. Ultricies leo integer malesuada nunc. Porta nibh venenatis cras sed felis eget velit. Semper quis lectus nulla at volutpat. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Blandit aliquam etiam erat velit scelerisque in dictum non. Gravida cum sociis natoque penatibus et magnis dis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Sed enim ut sem viverra. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nisl rhoncus mattis rhoncus urna. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Nisi scelerisque eu ultrices vitae auctor. Viverra justo nec ultrices dui.
            </div>
            <label style={{gridArea:'label1'}}>I have an organization</label>
            <input style={{gridArea:'orgname1'}} placeholder='Organization name'/>
            <input style={{gridArea:'authcode'}} placeholder='Auth code'/>
            <button style={{gridArea:'btnlogin'}}>Login</button>
            <span style={{gridArea:'or', textAlign:'center'}}>or</span>
            <label style={{gridArea:'label2'}}>I want to create new one</label>
            <input style={{gridArea:'orgname2'}} placeholder='Organization name'/>
            <input style={{gridArea:'tguser'}} placeholder='Telegram user'/>
            <button style={{gridArea:'btncreate'}}>Create</button>
        </div>:<></>}
        </div>
        </>;
    }
}