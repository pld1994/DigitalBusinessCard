import React from "react"

export default function Header() {
    return (
        <div className="Top">
        <div className="user-icon"><i id="user" class="fa-solid fa-user"></i></div>
        <h1>Paul Dyerson</h1>
        <h3>Junior Front End Developer</h3>
        <div className="portfolio">
        <a href="https://pld1994.github.io/portfolio/">My Portfolio</a>
        </div>
        <div className="buttons">
        <button className="email"><a className="email-link" href="mailto:pauldyerson_ca@outlook.com"><i id="mail" class="fa-solid fa-envelope"></i>Email</a></button>
        <button className="linkedin"><a className="link-link" target="_blank" href="https://www.linkedin.com/in/paul-dyerson-0a17ab240/"><i id="linked" class="fa-brands fa-linkedin"></i>LinkedIN</a></button>
        </div>
        </div>
    )
}