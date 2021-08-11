import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import CancelOrder from './cancel-order';
import MyOrder from './my-order';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={activeTab === '1' ? 'active' : ''}
                        onClick={() => { toggle('1'); }}
                    >
                        Order
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === '2' ? 'active' : ''}
                        onClick={() => { toggle('2'); }}
                    >
                        Cancel
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === '3' ? 'active' : ''}
                        onClick={() => { toggle('3'); }}
                    >
                        Processing
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <MyOrder />
                </TabPane>
                <TabPane tabId="2">
                    <CancelOrder />
                </TabPane>
                <TabPane tabId="3">
                    tab2
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Tab;