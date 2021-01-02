import React from "react";
import Home from './Home'
import Apps from './Apps'
import Games from './Games'
import Music from './Music'
import Movies from './Movies'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../components/assets/style/NavMenu.css"

const NavMenu = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/" exact>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/apps">Apps</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/games">Games</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/music">Music</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/movies">Movies&TV</Link>
                        </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/apps">
                    <Apps />
                </Route>
                <Route path="/games">
                    <Games />
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default NavMenu