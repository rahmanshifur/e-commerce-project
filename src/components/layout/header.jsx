import { Link } from '@reach/router'
import { useState } from 'react'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap"

export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <Navbar color='dark' dark expand='md' className='my-5 p-2 '>
            <NavbarBrand href='/' className='ps-3 '>LOGO</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem><Link to='/about' className='nav-link'>About</Link></NavItem>
                    <NavItem><Link to='/contact' className='nav-link'>Contact</Link></NavItem>
                    <NavItem><Link to='/faq' className='nav-link'>FAQ</Link></NavItem>
                    <NavItem><Link to='/all-product' className='nav-link'>All Product</Link></NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret > DashBoard</DropdownToggle>
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
                </Nav>
            </Collapse>
        </Navbar>

        // <Navbar color="light" light expand="md" className='my-5 p-3'>
        //     <NavbarBrand href="/">reactstrap</NavbarBrand>
        //     <NavbarToggler onClick={toggle} />
        //     <Collapse isOpen={isOpen} navbar>
        //         <Nav className="ms-auto" navbar>
        //             <NavItem>
        //                 <NavLink href="/components/">Components</NavLink>
        //             </NavItem>
        //             <NavItem>
        //                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        //             </NavItem>
        //             <UncontrolledDropdown nav inNavbar>
        //                 <DropdownToggle nav caret>
        //                     Options
        //                 </DropdownToggle>
        //                 <DropdownMenu right>
        //                     <DropdownItem>
        //                         Option 1
        //                     </DropdownItem>
        //                     <DropdownItem>
        //                         Option 2
        //                     </DropdownItem>
        //                     <DropdownItem divider />
        //                     <DropdownItem>
        //                         Reset
        //                     </DropdownItem>
        //                 </DropdownMenu>
        //             </UncontrolledDropdown>
        //         </Nav>
        //     </Collapse>
        // </Navbar>
    )
}