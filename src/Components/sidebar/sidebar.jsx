import React from 'react';
import './sideBar.css';

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

    render() {
        return(
            <div className="sidebar">
                <div className="sidebar-profile">
                    <div className="customer-name"><b>Hello,Prasanth</b></div>
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