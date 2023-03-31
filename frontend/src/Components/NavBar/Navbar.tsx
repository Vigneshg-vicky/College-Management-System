
// import React from 'react';
import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
// import { MenuItem } from 'primereact/menuitem';

export default function NavBar(){

    const end = <h4>DashBoard</h4>
    return (
        <div className="card position">
            <Menubar style={{height:'8vh'}} start = {'College ERP'} end={end}  />
        </div>
    )
}
        