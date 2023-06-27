import './user.css';
import React from 'react';

type LoginState = "connecting" | "connected" | "auth_code_requested" | "logging" | "logged";

interface IUserProps {

}

interface IUserState {
    state: LoginState;
}

export default class User extends React.Component<IUserProps, IUserState> {
    state: IUserState = {
        state: "connecting"
    };
    render(): React.ReactNode {
        return <>
        <div className='user-management-container'>
        <span>User</span>
        {this.state.state !== "logged"?<div className='user-management-loginform'>
            <div className='user-management-loginform-intro'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sit amet consectetur adipiscing elit duis tristique. Amet tellus cras adipiscing enim eu turpis egestas. Nunc aliquet bibendum enim facilisis. Lectus sit amet est placerat in egestas erat. Ultricies leo integer malesuada nunc. Porta nibh venenatis cras sed felis eget velit. Semper quis lectus nulla at volutpat. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Blandit aliquam etiam erat velit scelerisque in dictum non. Gravida cum sociis natoque penatibus et magnis dis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Sed enim ut sem viverra. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nisl rhoncus mattis rhoncus urna. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Nisi scelerisque eu ultrices vitae auctor. Viverra justo nec ultrices dui.            </div>
            <span></span><label>Telegram user or id</label><input/><button>Get code</button><span></span>
            <span></span><button>I have Auth code →</button><input/><button>Login</button><span></span>
        </div>:<></>}
        </div>
        </>;
    }
}