import React from 'react'
import teamone from "../src/assets/teamone.jpg"
import './SectionTwo.css';

function SectionTwo() {
    return (
        <div className="section_two">
            <div className="section_two__name ">
            <img
            className="image"
            src={teamone}
            alt="jonathan's-avatar"
            />
            <div className="person ">
            <p>Jonathan Walters</p>
            <small>Verified Graduate</small>
            </div>
            </div>
            <h1>Awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome</h1>
            <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nisi leo, ac interdum turpis tincidunt non. Integer sit amet risus ultricies, blandit nisl quis, consequat leo. Cras blandit sit amet nulla et cursus. Fusce commodo id libero a placerat. Donec ut quam convallis, varius neque eu, semper nisl. ”</p>
        </div>
    )
}

export default SectionTwo