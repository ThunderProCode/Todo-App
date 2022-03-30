import React from "react";
import './styles.css';
import { AiFillTwitterCircle,AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Header() {
    return (
        <header>
            <h1>TodoApp</h1>

            <div className="contact-info">
                <a href="https://twitter.com/hector889ju">
                    <AiFillTwitterCircle className="icon"/>
                </a>
                <a href="https://github.com/ThunderProCode">
                    <AiFillGithub className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/hector-acosta-najera-6a3643144/">
                    <AiFillLinkedin className="icon"/>
                </a>
            </div>

        </header>
    );
}

export { Header };