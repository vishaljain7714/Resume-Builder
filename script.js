// script.js 

// Taking elements from HTML 
// script.js

// Selecting elements from HTML
const inputForm = document.querySelector('.inputField');
const main = document.querySelector('.resume-builder');
const outputContainer = document.querySelector('.output_container');

let isHidden = true;

// Function to toggle between input form and resume preview
function hide() {
    if (isHidden) {
        // Hide the input form and show the resume preview
        main.style.display = 'none';
        outputContainer.style.display = 'block';

        // Populate the output container with resume content
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${document.getElementById('name').value}</h1>
                    <h4>${document.getElementById('title').value}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${document.getElementById('objective').value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${document.getElementById('skills').value}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${document.getElementById('academic_details').value}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${document.getElementById('contact').value}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${document.getElementById('work_experience').value}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${document.getElementById('achievements').value}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${document.getElementById('projects').value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="printResume()">Print Resume</button>
        `;
        
        isHidden = false;
    } else {
        // Show the input form and hide the resume preview
        main.style.display = 'block';
        outputContainer.style.display = 'none';
        outputContainer.innerHTML = '';

        isHidden = true;
    }
}

// Function to print the resume
function printResume() {
    window.print(); // This triggers the browser's print dialog
}
