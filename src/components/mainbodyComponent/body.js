import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <section className="white-background">

                <main>
                    <p>This is a test of my first ReactJs single page</p>
                    <p>Including some content on pace university.</p>
                    <h2 className="all-caps">Colleges and Schools at pace university</h2>
                    <p> <ul>
                            <li>College of Health Professions</li>
                            <li>Dyson College of Arts & Sciences</li>
                            <li>Lubin School of Business</li>
                            <li>School of Education</li>
                            <li><a href={"https://law.pace.edu/"}>School of Law</a></li>
                            <li>Seidenberg School of CSIS</li>
                        </ul>
                    </p>
                </main>
                <aside>
                    <p>I'm a graduate student in Seidenberg</p>
                    <ul>
                        <li><a href="http://www.pace.edu/seidenberg/sections/explore-programs/graduate-programs">Graduate Programs</a></li>
                        <li><a href="https://csis.pace.edu/library/worksheets/GradWorksheets/worksheet_Grad_MSCS_17.pdf">Worksheet</a></li>
                        <li><a href="https://pace.smartcatalogiq.com/2017-2018/Graduate-Catalog/Schools/Seidenberg/Graduate-Degree-Programs/Masters-of-Science-Programs/Information-Systems-MS">Curriculum</a></li>
                    </ul>
                </aside>
            </section>

        );
    }
}

export default Body;
