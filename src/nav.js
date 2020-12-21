import React from 'react';
import ReactDOM from 'react-dom';

const projects = [
    {title: "Run, Dino", link: "/"},
    {title: "Billions Lottery", link: "/"},
    {title: "Four Letters", link: "/"},
    {title: "Memory Hole", link: "/"},
    {title: "2006", link: "/"}
];

const nav = [
    {title: "Home", link: "/"},
    {title: "Github", link: "https://github.com/tylerjwoodfin"},
    {title: "LinkedIn", link: "https://linkedin.com/in/tylerjwoodfin"},
    projects
];

export class Nav extends React.Component {
    render() {
        return "Nav";
    }
}

ReactDOM.render(<Nav/>, document.getElementById('nav'));
