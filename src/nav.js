import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

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

const HamburgerButton = {
    Wrapper: styled.button`
      height: 3rem;
      width: 3rem;
      position: relative;
      font-size: 12px;
      margin-left: 85%;
  
      display: none;
  
      @media only screen and (max-width: 54em) {
        display: block;
      }
  
      /* Remove default button styles */
      border: none;
      background: transparent;
      outline: none;
  
      cursor: pointer;
  
      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        top: -25%;
        left: -25%;
      }
    `,
    Lines: styled.div`
      bottom: 30%;
      margin-bottom: -0.125em;
  
      &,
      &:after,
      &:before {
        /* Create lines */
        height: 2px;
        pointer-events: none;
        display: block;
        content: "";
        width: 100%;
        background-color: white;
        position: absolute;
      }
  
      &:after {
        /* Move bottom line below center line */
        top: -0.8rem;
      }
  
      &:before {
        /* Move top line on top of center line */
        top: 0.8rem;
      }
    `
  };

export class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.toggleProjects = this.toggleProjects.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.state = { projectsDisplayed: false, mobileMenuDisplayed: false};
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    toggleProjects() {
        this.setState({projectsDisplayed: !this.state.projectsDisplayed });
    }

    toggleMobileMenu() {
      this.setState({mobileMenuDisplayed: !this.state.mobileMenuDisplayed });
      console.log("Displayed: " + this.state.mobileMenuDisplayed);
  }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if(!domNode || !domNode.contains(event.target))
        {
            this.setState({projectsDisplayed: false, mobileMenuDisplayed: false });
        }
    }

    mapper(items) {
        return items.map((item) => {
            return item.items === undefined 
            ? <a key={item.title} href={item.link} target="_blank" rel="noreferrer"><li key={item.title + "-title"}>{item.title}</li></a>
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
                <nav className={this.state.mobileMenuDisplayed ? "mobileMenuDisplayed" : ""}>
                    <a href="../" id="brand">Tyler Woodfin</a>
                    <HamburgerButton.Wrapper onClick={this.toggleMobileMenu}><HamburgerButton.Lines /></HamburgerButton.Wrapper>
                    <ul key="header" className={this.state.mobileMenuDisplayed ? "navItems" : "navItems hiddenOnMobile"}>
                        {this.mapper(nav)}
                    </ul>
                </nav>
            </header>
        );
    }
}