import React from 'react'
import './CovidDeath.css';
import { ReactComponent as CovidTomb } from './coviddead.svg';

export default function CovidDeath() {
    return (
        <div>
            <p>Covid Death</p>
            <CovidTomb className="covid-tomb" />
        </div>
    )
}
