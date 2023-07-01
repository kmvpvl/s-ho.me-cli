import React from 'react';
import './devices.css';
import { Device } from './device';
interface IDevicesProps {
    devices: any[];
}

interface IDevicesState {

}

export class Devices extends React.Component<IDevicesProps, IDevicesState> {
    render(): React.ReactNode {
        return <>
        <div className='devices-management-container' style={{backgroundImage:`url(img/customers/${'TestEntrance'}.png)`}}>
        {this.props.devices.map((v, i)=> 
            <Device key={i} data={v}/>
        )}
        </div>
        </>;
    }
}