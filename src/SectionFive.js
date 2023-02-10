import React from 'react'
// import kiraWittle from "../src/images/image-kira.jpg";
import "./SectionFive.css"
import teamone from "../src/assets/teamone.jpg"

function SectionFive() {
    return (
        <div className="section_five pt-11">
        <div className="section_five__name">
       <img
       className="image"
       src={teamone}
       alt="kira's-avatar"
       />
       <div className="person">
       <p>Patrick Abrams</p>
       <small>Verified Graduate</small>
       </div>
       </div>
       <h1>Awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome awesome</h1>
       <p> “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nisi leo, ac interdum turpis tincidunt non. Integer sit amet risus ultricies, blandit nisl quis, consequat leo. Cras blandit sit amet nulla et cursus. Fusce commodo id libero a placerat. Donec ut quam convallis, varius neque eu, semper nisl. ”</p>
   </div>
    )
}

export default SectionFive
