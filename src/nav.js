import React from 'react';

const projects = {title: "Projects", items: [
    {title: "Run, Dino", link: "/"},
    {title: "Billions Lottery", link: "/"},
    {title: "Four Letters", link: "/"},
    {title: "Memory Hole", link: "/"},
    {title: "2006", link: "/"}
]};

const nav = [
    {title: "Home", link: "/"},
    {title: "Github", link: "https://github.com/tylerjwoodfin"},
    {title: "LinkedIn", link: "https://linkedin.com/in/tylerjwoodfin"},
    projects
];

export class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.toggleProjects = this.toggleProjects.bind(this);
    }

    toggleProjects() {
        alert("Toggle");
    }

    render() {
        const navItems = nav.map((item) => {
            // return item.items === undefined ? <li key={item.title}><a href={item.link} target="_blank">{item.title}</a></li> : <li key={item.title}>{item.title}<ul>{item.items.map(mapper)}</ul></li>;
            return item.items === undefined 
            ? <a key={item.title} href={item.link} target="_blank" rel="noreferrer"><li>{item.title}</li></a>
            : <li key={item.title} onClick={this.toggleProjects}>{item.title}<i className="fa fa-caret-down"></i></li>;
        });

        return (
            <header>
                <nav>
                    <a href="../" id="brand">Tyler Woodfin</a>
                    <ul id="navItems">{navItems}</ul>
                </nav>
            </header>
        );
    }
}
