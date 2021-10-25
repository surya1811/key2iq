import React from 'react'

function Run() 
{
    return(
      <div>  
<h2>
    <a id="user-content-how-to-build-and-run-this-project" class="anchor" aria-hidden="true" href="#how-to-build-and-run-this-project"  target="_blank">
        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
                </svg>
                </a>
                How to build and run this project
                </h2>
<ul>
<li>
    Install using Docker Compose [<strong>Recommended Method</strong>]
<ul>
<li>
    Clone this repo.</li>
<li>Make a copy of <strong>.env.example</strong> file to <strong>.env</strong>.</li>
<li>Make a copy of <strong>keys/private.pem.example</strong> file to <strong>keys/private.pem</strong>.</li>
<li>Make a copy of <strong>keys/public.pem.example</strong> file to <strong>keys/public.pem</strong>.</li>
<li>Make a copy of <strong>tests/.env.test.example</strong> file to <strong>tests/.env.test</strong>.</li>
<li>Install Docker and Docker Compose. <a href="https://docs.docker.com/install/" rel="nofollow"  target="_blank">Find Instructions Here</a>.</li>
<li>Execute <code>docker-compose up -d</code> in terminal from the repo directory.</li>
<li>You will be able to access the api from 
    <a href="http://localhost:3000" rel="nofollow"  target="_blank">http://localhost:3000</a></li>
<li><em>If having any issue</em> then make sure 3000 port is not occupied else provide a different port in <strong>.env</strong> file.</li>
<li><em>If having any issue</em> then make sure 27017 port is not occupied else provide a different port in <strong>.env</strong> file.</li>
</ul>
</li>
<li>Run The Tests
<ul>
<li>Install node.js and npm on your local machine.</li>
<li>From the root of the project executes in terminal <code>npm install</code>.</li>
<li><em>Use the latest version of node on the local machine if the build fails</em>.</li>
<li>To run the tests execute <code>npm test</code>.</li>
</ul>
</li>
<li>Install Without Docker [<strong>2nd Method</strong>]
<ul>
<li>Install MongoDB on your local.</li>
<li>Do steps 1 to 5 as listed for <strong>Install using Docker Compose</strong>.</li>
<li>Do steps 1 to 3 as listed for <strong>Run The Tests</strong>.</li>
<li>Create users in MongoDB and seed the data taking reference from the <strong>addons/init-mongo.js</strong></li>
<li>Change the <code>DB_HOST</code> to <code>localhost</code> in <strong>.env</strong> and <strong>tests/.env.test</strong> files.</li>
<li>Execute <code>npm start</code> and You will be able to access the API from
 <a href="http://localhost:3000" rel="nofollow"  target="_blank">http://localhost:3000</a></li>
<li>To run the tests execute <code>npm test</code>.</li>
</ul>
</li>
</ul>
</div>
    )
}
export default Run;