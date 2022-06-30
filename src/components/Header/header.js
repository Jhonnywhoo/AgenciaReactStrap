import './header.css'
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { UncontrolledDropdown } from 'reactstrap';
import { DropdownToggle } from 'reactstrap';
import { DropdownMenu } from 'reactstrap';
import { DropdownItem } from 'reactstrap';

function Header() {
    return (
        <div ClassName="App">
            <div className="navbar">
                <Navbar
                    color="dark"
                    expand="md"
                    light
                >
                    <NavbarBrand className='brand'>
                        <a href='#'>Melhor Agencia de Todas</a>
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem className='navitem'>
                                <NavLink href="/components/">
                                    HOME
                                </NavLink>
                            </NavItem >
                            <NavItem className='navitem'>
                                <NavLink href="#services">
                                    SOBRE
                                </NavLink>
                            </NavItem >
                            <NavItem className='navitem'>
                                <NavLink href="#testimonials">
                                    AVALIÇÕES
                                </NavLink>
                            </NavItem >
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle className='navitem'
                                    caret
                                    nav
                                >
                                    MAIS!
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem><NavLink href='#footer'>
                                        NEWSLETTER!</NavLink>
                                    </DropdownItem>
                                    <DropdownItem><NavLink href='#social-media'>
                                        FALE CONOSCO!</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Sair
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        </div>
    )
}

export default Header;