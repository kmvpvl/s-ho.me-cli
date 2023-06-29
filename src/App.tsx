import React from 'react';
import './App.css';
import User from './components/org/org';

interface IAppProps {

}
interface IAppState {

}
export default class App extends React.Component<IAppProps, IAppState> {
    render(): React.ReactNode {
        return (<>
        <div className='home-container'>
            <img src="./favicon-32x32.png" alt=''/>
        </div>
        <div className='location-selector-container'>Location</div>
        <User/>
        <div className='layers-selector-container'>Layers</div>
        <div className='devices-management-container'>Devices</div>
        </>
        );
    }
}
