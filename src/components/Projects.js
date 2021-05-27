import React from 'react';
import { ProjectItem } from './ProjectItem';
import './Projects.css';

export const Projects = () => {
    return (
        <div className='Projects' id="projects">
            <h1>My Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <ProjectItem
                            src='images/covid-data-charts.png'
                            text='Covid data charts from Brazil and Europe'
                            label='Covid Data Charts'
                            path='https://covidinfo.clmn.link/'
                        />
                        <ProjectItem
                            src='images/brazilian-league-dash.png'
                            text='Dashboard info of the brazilian league'
                            label='Dashboard - Serie A'
                            path='https://www.brazilianleaguedashboard.link/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
