import React from 'react';
import './Navbar.css'
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import About from './About'
import Home from './Home'
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pos: window.pageYOffset,
            visible: true
        }
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
  
    handleScroll = () =>{
        //const{ pos } = this.state;
        const temp = window.pageYOffset;
        const visible = temp < 60;
        this.setState({
            pos:temp,
            visible
        });
    }
    render(){
        return(
            <div>
            <div className={"nav-panel " + (!this.state.visible ? "nav-panel-scroll" : " ")}>
                <div className={"nav-logo " + (!this.state.visible ? "nav-logo-hide" : " ")}>
                    <div className="logo-tab">
                        <ul className="logo">
                            <NavLink to="/home" id="Nackie">
                                Eiei
                            </NavLink>   
                            <li className="menu-ni" id="barmen">
                                <NavLink to="/home">
                                    HOME    
                                </NavLink>
                            </li>
                            <li className="menu-ni" id="barmen">
                                <NavLink to="/about">
                                    ABOUT ME  
                                </NavLink>
                            </li>  
                            <li className="menu-ni" id="barmen">
                                <NavLink to="test2">
                                    TEST2    
                                </NavLink>
                            </li> 
                            <li className="menu-ni" id="barmen">
                                <NavLink to="test3">
                                    TEST3   
                                </NavLink>
                            </li> 
                        </ul>   
                    </div>
                         
                </div> 
                
            </div>
            <div className={"nav-content-panel " + (!this.state.visible ? "nav-content-show" : " ")}>
            <div className="nav-content">
                <ul className="menu">
                    <li className="menu-n" id="home">
                        <NavLink to="home">
                            HOME    
                        </NavLink>
                    </li>
                    <li className="menu-n" id="submen">
                        <NavLink to="about">
                            ABOUT ME  
                        </NavLink>
                    </li>  
                    <li className="menu-n" id="submen">
                        <NavLink to="test2">
                            TEST2    
                        </NavLink>
                    </li> 
                    <li className="menu-n" id="submen">
                        <NavLink to="test3">
                            TEST3   
                        </NavLink>
                    </li>       
                </ul>  
            </div>  
            </div> 
            <Switch>
                <Redirect exact from="/" to="/home" />

                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test2" component={Home} />
                <Route exact path="/test3" component={About} />
            </Switch>
            </div>
        );
    }
}

export default Navbar;