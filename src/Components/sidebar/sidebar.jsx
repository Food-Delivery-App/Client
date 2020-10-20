import React from 'react';
import './sideBar.css';
import close from '../../images/close-white.svg';
import user from '../../images/user-white.svg';

import { TreeView } from '@progress/kendo-react-treeview';

const tree = [
    {
        text: 'Furniture', expanded: false, items: [
            { text: 'Tables & Chairs' }, 
            { text: 'Sofas' }, 
            { text: 'Occasional Furniture' }
        ]
    }, 
    {
        text: 'Decor', items: [
            { text: 'Bed Linen' }, 
            { text: 'Curtains & Blinds' }, 
            { text: 'Carpets' }
        ]
    }];

class SideBar extends React.Component {

    onItemClick = (event) => {
        event.item.selected = !event.item.selected;
        this.forceUpdate();
    }
        onExpandChange = (event) => {
        event.item.expanded = !event.item.expanded;
        this.forceUpdate();
    }

    closeSidebar = (event) => {
        var element = document.getElementById("sidebar-display");
        element.classList.add("sidebar-hide");
    }

    render() {
        return(
            <div id="sidebar-display" className="sidebar sidebar-hide">
                <div className="sidebar-profile">
                    <div className="customer-details"><span><img src={user} width="30px"/></span><span className="customer-name"><b>Hello,Balaji</b></span></div>
                    <img src={close} className="close-image" onClick={this.closeSidebar} />
                </div>
                <div className="sidebar-content">
                    <div className="siderbar-content-header">SHOP BY CATEGORY</div>
                    <TreeView
                        data={tree}
                        expandIcons={true}
                        onExpandChange={this.onExpandChange}
                        onItemClick={this.onItemClick}
                        aria-multiselectable={true}
                    /> 
                </div>
            </div>
        );
    };
};

export default SideBar;