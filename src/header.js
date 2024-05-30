import React, { Component } from "react";
import { NavStyle, UiStyle, AStyle } from "./StyleHeader";

class Header extends Component{
    render() {
        return(
            <NavStyle>
                <h3>Logo</h3>
                <UiStyle>
                    <li><AStyle>Home</AStyle></li>
                    <li><AStyle>About</AStyle></li>
                    <li><AStyle>Work</AStyle></li>
                    <li><AStyle>Carrers</AStyle></li>
                    <li><AStyle>Contact Us</AStyle></li>
                </UiStyle>
            </NavStyle>
        );
    }
}

export default Header;