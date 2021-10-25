import React from 'react'
function Project() 
{
    return(
          <div>
<h2>
    <a id="user-content-project-directory-structure" class="anchor" aria-hidden="true" href="#project-directory-structure"  target="_blank">
        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
            </path>
            </svg>
            </a>
        Project Directory Structure
</h2>
<div class="snippet-clipboard-content position-relative overflow-auto">
    <pre>
        <code>
            ├── src <br/>
│   ├── server.ts <br/>
│   ├── app.ts <br/>
│   ├── config.ts<br/>
│   ├── auth<br/>
│   │   ├── apikey.ts <br/>
│   │   ├── authUtils.ts<br/>
│   │   ├── authentication.ts<br/>
│   │   ├── authorization.ts<br/>
│   │   └── schema.ts<br/>
│   ├── core<br/>
│   │   ├── ApiError.ts<br/>
│   │   ├── ApiResponse.ts<br/>
│   │   ├── JWT.ts<br/>
│   │   └── Logger.ts<br/>
│   ├── database<br/>
│   │   ├── index.ts<br/>
│   │   ├── model<br/>
│   │   │   ├── ApiKey.ts<br/>
│   │   │   ├── Blog.ts<br/>
│   │   │   ├── Keystore.ts<br/>
│   │   │   ├── Role.ts<br/>
│   │   │   └── User.ts<br/>
│   │   └── repository<br/>
│   │       ├── ApiKeyRepo.ts<br/>
│   │       ├── BlogRepo.ts<br/>
│   │       ├── KeystoreRepo.ts<br/>
│   │       ├── RoleRepo.ts<br/>
│   │       └── UserRepo.ts<br/>
│   ├── helpers<br/>
│   │   ├── asyncHandler.ts<br/>
│   │   ├── role.ts<br/>
│   │   └── validator.ts<br/>
│   ├── routes<br/>
│   │   └── v1<br/>
│   │       ├── access<br/>
│   │       │   ├── login.ts<br/>
│   │       │   ├── logout.ts<br/>
│   │       │   ├── schema.ts<br/>
│   │       │   ├── signup.ts<br/>
│   │       │   └── token.ts<br/>
│   │       ├── blog<br/>
│   │       │   ├── blogDetail.ts<br/>
│   │       │   ├── blogList.ts<br/>
│   │       │   ├── editor.ts<br/>
│   │       │   ├── schema.ts<br/>
│   │       │   └── writer.ts<br/>
│   │       ├── index.ts<br/>
│   │       └── profile<br/>
│   │           ├── schema.ts<br/>
│   │           └── user.ts<br/>
│   └── types<br/>
│       └── app-request.d.ts<br/>
├── tests<br/>
│   ├── auth<br/>
│   │   ├── apikey<br/>
│   │   │   ├── mock.ts<br/>
│   │   │   └── unit.test.ts<br/>
│   │   ├── authUtils<br/>
│   │   │   ├── mock.ts<br/>
│   │   │   └── unit.test.ts<br/>
│   │   ├── authentication<br/>
│   │   │   ├── mock.ts<br/>
│   │   │   └── unit.test.ts<br/>
│   │   └── authorization<br/>
│   │       ├── mock.ts<br/>
│   │       └── unit.test.ts<br/>
│   ├── core<br/>
│   │   └── jwt<br/>
│   │       ├── mock.ts<br/>
│   │       └── unit.test.ts<br/>
│   ├── routes<br/>
│   │   └── v1<br/>
│   │       ├── blog<br/>
│   │       │   ├── blogDetail<br/>
│   │       │   │   ├── mock.ts<br/>
│   │       │   │   └── unit.test.ts<br/>
│   │       │   └── writer<br/>
│   │       │       ├── mock.ts<br/>
│   │       │       └── unit.test.ts<br/>
│   │       ├── login<br/>
│   │       │   ├── integration.test.ts<br/>
│   │       │   ├── mock.ts<br/>
│   │       │   └── unit.test.ts<br/>
│   │       └── signup<br/>
│   │           ├── mock.ts<br/>
│   │           └── unit.test.ts<br/>
│   ├── .env.test<br/>
│   └── setup.ts<br/>
├── addons<br/>
│   └── init-mongo.js<br/>
├── keys<br/>
│   ├── private.pem<br/>
│   └── public.pem<br/>
├── .env<br/>
├── .gitignore<br/>
├── .dockerignore<br/>
├── .eslintrc<br/>
├── .eslintignore<br/>
├── .prettierrc<br/>
├── .prettierignore<br/>
├── .travis.yml<br/>
├── .vscode<br/>
│   └── launch.json<br/>
├── Dockerfile<br/>
├── docker-compose.yml<br/>
├── package-lock.json<br/>
├── package.json<br/>
├── jest.config.js<br/>
└── tsconfig.json<br/>
</code>
</pre>
<div class="zeroclipboard-container position-absolute right-0 top-0">
<clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" 
value="├── src
│   ├── server.ts
│   ├── app.ts
│   ├── config.ts
│   ├── auth
│   │   ├── apikey.ts
│   │   ├── authUtils.ts
│   │   ├── authentication.ts
│   │   ├── authorization.ts
│   │   └── schema.ts
│   ├── core
│   │   ├── ApiError.ts
│   │   ├── ApiResponse.ts
│   │   ├── JWT.ts
│   │   └── Logger.ts
│   ├── database
│   │   ├── index.ts
│   │   ├── model
│   │   │   ├── ApiKey.ts
│   │   │   ├── Blog.ts
│   │   │   ├── Keystore.ts
│   │   │   ├── Role.ts
│   │   │   └── User.ts
│   │   └── repository
│   │       ├── ApiKeyRepo.ts
│   │       ├── BlogRepo.ts
│   │       ├── KeystoreRepo.ts
│   │       ├── RoleRepo.ts
│   │       └── UserRepo.ts
│   ├── helpers
│   │   ├── asyncHandler.ts
│   │   ├── role.ts
│   │   └── validator.ts
│   ├── routes
│   │   └── v1
│   │       ├── access
│   │       │   ├── login.ts
│   │       │   ├── logout.ts
│   │       │   ├── schema.ts
│   │       │   ├── signup.ts
│   │       │   └── token.ts
│   │       ├── blog
│   │       │   ├── blogDetail.ts
│   │       │   ├── blogList.ts
│   │       │   ├── editor.ts
│   │       │   ├── schema.ts
│   │       │   └── writer.ts
│   │       ├── index.ts
│   │       └── profile
│   │           ├── schema.ts
│   │           └── user.ts
│   └── types
│       └── app-request.d.ts
├── tests
│   ├── auth
│   │   ├── apikey
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authUtils
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   ├── authentication
│   │   │   ├── mock.ts
│   │   │   └── unit.test.ts
│   │   └── authorization
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── core
│   │   └── jwt
│   │       ├── mock.ts
│   │       └── unit.test.ts
│   ├── routes
│   │   └── v1
│   │       ├── blog
│   │       │   ├── blogDetail
│   │       │   │   ├── mock.ts
│   │       │   │   └── unit.test.ts
│   │       │   └── writer
│   │       │       ├── mock.ts
│   │       │       └── unit.test.ts
│   │       ├── login
│   │       │   ├── integration.test.ts
│   │       │   ├── mock.ts
│   │       │   └── unit.test.ts
│   │       └── signup
│   │           ├── mock.ts
│   │           └── unit.test.ts
│   ├── .env.test
│   └── setup.ts
├── addons
│   └── init-mongo.js
├── keys
│   ├── private.pem
│   └── public.pem
├── .env
├── .gitignore
├── .dockerignore
├── .eslintrc
├── .eslintignore
├── .prettierrc
├── .prettierignore
├── .travis.yml
├── .vscode
│   └── launch.json
├── Dockerfile
├── docker-compose.yml
├── package-lock.json
├── package.json
├── jest.config.js
└── tsconfig.json
" tabindex="0" role="button">
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
<path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path>
<path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
<path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
</clipboard-copy>
</div></div>
</div>

    )
}
export default Project;
