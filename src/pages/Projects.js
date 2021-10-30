import React from 'react';
import Navigation from '../components/Navigation';
import ButtonBottom from '../components/ButtonBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';
import Mouse from '../components/Mouse';

export const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0}/>
                <ButtonBottom left={"/"} right={'/project-2'} />
            </div>
        </main>
    );
};
export const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1}/>
                <ButtonBottom left={"/project-1"} right={'/project-3'} />
            </div>
        </main>
    );
};
export const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2}/>
                <ButtonBottom left={"/project-2"} right={'/contact'} />
            </div>
        </main>
    );
};
