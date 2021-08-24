import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import CancelOrder from './cancel-order';
import MyOrder from './my-order';
import AllOrder from './all-order';
import CompleteOrder from './complete-order';
import ProcessingOrder from './processing-order';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav className='tab' tabs >
                <NavItem >
                    <NavLink
                        className={activeTab === '1' ? 'active' : ''}
                        onClick={() => { toggle('1'); }}
                    >
                        All
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === '2' ? 'active' : ''}
                        onClick={() => { toggle('2'); }}
                    >
                        Order
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === '3' ? 'active' : ''}
                        onClick={() => { toggle('3'); }}
                    >
                        Cancel
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === '4' ? 'active' : ''}
                        onClick={() => { toggle('4'); }}
                    >
                        Processing
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === '5' ? 'active' : ''}
                        onClick={() => { toggle('5'); }}
                    >
                        Complete
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <AllOrder />
                </TabPane>
                <TabPane tabId="2">
                    <MyOrder />
                </TabPane>
                <TabPane tabId="3">
                    <CancelOrder />
                </TabPane>
                <TabPane tabId="4">
                    <ProcessingOrder />
                </TabPane>
                <TabPane tabId="5">
                    <CompleteOrder />
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Tab;