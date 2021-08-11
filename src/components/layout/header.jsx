import { Link } from '@reach/router'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useState } from 'react'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledAlert, UncontrolledDropdown } from "reactstrap"

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const authData = useStoreState(state => state.auth.data)
    const logoutHandler = useStoreActions(action => action.auth.logout)

    return (
        <Navbar color='dark' dark expand='md' className='my-5 p-2 '>
            <NavbarBrand href='/' className='ps-3 '>LOGO</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ms-auto' navbar>

                    <NavItem><Link to='/all-product' className='nav-link'>All-Product</Link></NavItem>
                    <NavItem><Link to='/checkout' className='nav-link'>Check-Out</Link></NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret > Admin Panel</DropdownToggle>
                        <DropdownMenu right >
                            <DropdownItem >
                                <Link to='/category' className='nav-link text-dark'>Category</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/subcategory' className='nav-link text-dark'>sub Category</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/color' className='nav-link text-dark'>Color</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/size' className='nav-link text-dark '>Size</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/tag' className='nav-link text-dark'>Tag</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/product' className='nav-link text-dark'>Product</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/review' className='nav-link text-dark'>Review</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/user' className='nav-link text-dark'>User</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {authData.length === 0 ?
                        <NavItem><Link to='/login' className='nav-link'>Login</Link></NavItem> : <>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>{authData[0].name}</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem >
                                        <Link to='/order' className='nav-link text-dark'>Order</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem><Link to='#blank' className='nav-link' onClick={() => logoutHandler()}>Logout</Link></NavItem>
                        </>}
                </Nav>
            </Collapse>
        </Navbar>
    )
}