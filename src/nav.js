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

    render() {
        const navItems = nav.map(function mapper(item) {
            return item.items === undefined ? <li key={item.title}>{item.title}</li> : <li key={item.title}>{item.title}<ul>{item.items.map(mapper)}</ul></li>;
        });

        return <div>{navItems}</div>;
    }
}
