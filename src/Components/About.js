import React from 'react'

function About() 
{
    return(
        
            <div>
                <h2>
                    <a id="user-content-about-this-open-source-project" class="anchor" aria-hidden="true" href="#about-this-open-source-project"  target="_blank">
                        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                        </svg>
                        </a>
                        About this Open Source Project
                </h2>
            <p>
                This open-source project is for you(community). Our Team at 
                <a href="https://afteracademy.com" rel="nofollow"  target="_blank">AfterAcademy
                </a> 
                has taken this initiative to promote Backend Learning in the best possible way. We are determined to provide quality content for everyone. Let's do it together by learning from this project.
                </p>
            <h2>    
                <a id="user-content-we-will-learn-and-build-the-backend-application-for-a-blogging-platform" class="anchor" aria-hidden="true" href="#we-will-learn-and-build-the-backend-application-for-a-blogging-platform"  target="_blank">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                         </path>
                    </svg>
                            </a>We will learn and build the backend application for a blogging platform.
                            </h2>
                            <p>The main focus will be to create a maintainable and highly testable architecture.
<br />
Following are the features of this project:</p>
<ul>
<li><strong>This backend is written in Typescript</strong>: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. We have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.</li>
<li><strong>Separation of concern principle is applied</strong>: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.</li>
<li><strong>Feature encapsulation is adopted</strong>: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.</li>
<li><strong>Centralised Error handling is done</strong>: We have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.</li>
<li><strong>Centralised Response handling is done</strong>: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.</li>
<li><strong>Mongodb is used through Mongoose</strong>: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.</li>
<li><strong>Async execution is adopted</strong>: We have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.</li>
<li><strong>Docker compose has been configured</strong>: We have created the Dockerfile to provide the easy deployability without any setup and configurations.</li>
<li><strong>Unit test is favored</strong>: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.</li>
<li><strong>A pure backend project</strong>: We have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.</li>
</ul>
<h2>
    <a id="user-content-we-have-also-open-source-a-complete-blogging-website-working-on-this-backend-project-goto-repository" className="anchor" aria-hidden="true" href="#we-have-also-open-source-a-complete-blogging-website-working-on-this-backend-project-goto-repository"  target="_blank">
        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
                </svg>
                </a>
                We have also open source a complete blogging website working on this backend project:
                 <a href="https://github.com/afteracademy/react-app-architecture"  target="_blank">Goto Repository
                 </a>
</h2>
<blockquote>
<p>
    In the above repository [
        <strong>React.js Isomorphic Web Application Architecture</strong>
        ] we will learn and build a React web application for a blogging platform using this project as its API server. 
        <a href="https://demo.react-app-architecture.afteracademy.com" rel="nofollow"  target="_blank">
            Visit demo website
       </a>
</p>
</blockquote>
 </div>
   )
   }
   export default About;
