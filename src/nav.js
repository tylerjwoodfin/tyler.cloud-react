import React from 'react';
import ReactDOM from 'react-dom';

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

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    toggleProjects() {
        this.setState({projectsDisplayed: !this.state.projectsDisplayed });
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if(!domNode || !domNode.contains(event.target))
        {
            this.setState({projectsDisplayed: false });
        }
    }
    

    mapper(items) {
        return items.map((item) => {
            return item.items === undefined 
            ? <a key={item.title} href={item.link} target="_blank" rel="noreferrer"><li>{item.title}</li></a>
            : <div id={item.title}>
                <li key={item.title} className={this.state.projectsDisplayed ? "selected" : ""} onClick={this.toggleProjects}>
                    {item.title}
                    <i className={this.state.projectsDisplayed ? "fa fa-caret-up" : "fa fa-caret-down"}></i></li>
                    <ul key={item.title + "-items"} className={this.state.projectsDisplayed ? "projectItems" : "projectItems hidden"}>{this.mapper(item.items)}</ul>
         </div>;
        });
    }

    render() {
        return (
            <header>
                <nav>
                    <a href="../" id="brand">Tyler Woodfin</a>
                    <ul id="navItems">{this.mapper(nav)}</ul>
                </nav>
            </header>
        );
    }
}
