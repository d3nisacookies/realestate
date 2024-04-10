import React from "react";
import { Link } from "react-router-dom";

function SystemAdminMenu(){
    return(
    <div className="system-admin-menu">
            <h1>Hello system admin!!</h1>
        <ul>
            <li>
                <link to ="/dashboard" >Dashboard</link>
            </li>
            <li>
                <link to ="/users" >Users</link>
            </li>
            <li>
                <link to ="/Settings" >Settings</link>
            </li>
        </ul>
    </div>
    );
}

export default SystemAdminMenu;