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
    {title: "LinkedIn", link: "https://linkedin.com/in/tylerjwoodfin"}
];

export class Nav extends React.Component {

    render() {
        const navItems = nav.map(function mapper(item) {
            return item.items === undefined ? <li key={item.title}><a href={item.link} target="_blank">{item.title}</a></li> : <li key={item.title}>{item.title}<ul>{item.items.map(mapper)}</ul></li>;
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
