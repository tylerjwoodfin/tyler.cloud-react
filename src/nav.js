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
        this.state = { projectsDisplayed: false};
    }

    toggleProjects() {
        this.setState({projectsDisplayed: !this.state.projectsDisplayed });
        alert("Projects Displayed: " + this.state.projectsDisplayed);
    }

    mapper() {
        return nav.map((item) => {
            return item.items === undefined 
            ? <a key={item.title} href={item.link} target="_blank" rel="noreferrer"><li>{item.title}</li></a>
            : <div>
                <li key={item.title} onClick={this.toggleProjects}>{item.title}<i className="fa fa-caret-down"></i></li>
                
         </div>;
        });
    }

    render() {
        return (
            <header>
                <nav>
                    <a href="../" id="brand">Tyler Woodfin</a>
                    <ul id="navItems">{this.mapper()}</ul>
                </nav>
            </header>
        );
    }
}
