import React from 'react';
import './devices.css';
interface IDevicesProps {
    devices: any[];
}

interface IDevicesState {

}

export class Devices extends React.Component<IDevicesProps, IDevicesState> {
    render(): React.ReactNode {
        return <>
        <div className='devices-management-container'><span>Devices</span>
        {this.props.devices.map((v, i)=> 
            <span key={i}>
                <div><img src={`img/${v.type}.gif`} alt={v.name} className='device-icon'/></div>
                <div>{v.value}</div>
                <div>{new Date(v.timestamp).toString()}</div>
            </span>
        )}
        </div>
        </>;
    }
}