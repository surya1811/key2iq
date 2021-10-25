import React from 'react'

function Example() {
  return (
    <div>
      <h2><a id="user-content-directory-traversal-for-signup-api-call" class="anchor" aria-hidden="true" href="#directory-traversal-for-signup-api-call" target="_blank">
        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
          </path></svg>
      </a>
        Directory Traversal for Signup API call</h2>
      <p><code>/src → server.ts → app.ts → /routes/v1/index.ts → /auth/apikey.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → /routes/v1/signup.ts → schema.ts → /helpers/validator.ts → asyncHandler.ts → /database/repository/UserRepo.ts → /database/model/User.ts → /core/ApiResponses.ts</code></p>
      <h2><a id="user-content-api-examples" class="anchor" aria-hidden="true" href="#api-examples" target="_blank">
        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"  >
          </path>
        </svg>
      </a>API Examples</h2>
      <ul>
        <li>Signup
          <ul>
            <li>Method and Headers</li>
          </ul>
          <div class="snippet-clipboard-content position-relative overflow-auto"><pre><code>POST /v1/signup/basic HTTP/1.1
            Host: localhost:3000
            x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
            Content-Type: application/json
          </code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
              <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="POST /v1/signup/basic HTTP/1.1
Host: localhost:3000
x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
Content-Type: application/json
" tabindex="0" role="button">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                  <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
                  <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
              </clipboard-copy>
            </div></div>
          <ul>
            <li>Request Body</li>
          </ul>
          <div class="highlight highlight-source-json position-relative overflow-auto">
          <div>
          {
            `{"name" : "Janishar Ali",\n` }<br />
            {`"email": "ali@afteracademy.com",\n`} <br />
      {`"password": "changeit",\n`}<br />
      {`"profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4"`}

          <br />
        </div>
            <div class="zeroclipboard-container position-absolute right-0 top-0">
              <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="{
&quot;name&quot; : &quot;Janishar Ali&quot;,
&quot;email&quot;: &quot;ali@afteracademy.com&quot;,
&quot;password&quot;: &quot;changeit&quot;,
&quot;profilePicUrl&quot;: &quot;https://avatars1.githubusercontent.com/u/11065002?s=460&amp;u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&amp;v=4&quot;
}
" tabindex="0" role="button">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                  <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
                  <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
              </clipboard-copy>
            </div></div>
          <ul>
            <li>Response Body: 200</li>
          </ul>
          <div class="highlight highlight-source-json position-relative overflow-auto">
          {
          `{`}<br />
     { `"statusCode": "10000",`}<br />
    {`"message": "Signup Successful",`}<br />
      {`"data": {`}<br />
      {`"user": {`}<br />
      {`"_id": "5e7c9d32307a223bb8a4b12b",`}<br />
      {`"name": "Janishar Ali",`}<br />
      {`"email": "ali@afteracademy.com",`}<br />
      {`"roles": [`}<br />
  {`"5e7b8acad7aded2407e078d7"`}<br />
      {`}],`}<br />
{`"profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4"`}<br />
    {`},`}<br />
{`"tokens": {`}<br />
{`"accessToken": "some_token",`}<br />
{`"refreshToken": "some_token"`}<br />
  {`}`}
  {`}`}
  {`}`}
            <div class="zeroclipboard-container position-absolute right-0 top-0">
              <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="{
&quot;statusCode&quot;: &quot;10000&quot;,
&quot;message&quot;: &quot;Signup Successful&quot;,
&quot;data&quot;: {
&quot;user&quot;: {
&quot;_id&quot;: &quot;5e7c9d32307a223bb8a4b12b&quot;,
&quot;name&quot;: &quot;Janishar Ali&quot;,
&quot;email&quot;: &quot;ali@afteracademy.com&quot;,
&quot;roles&quot;: [
  &quot;5e7b8acad7aded2407e078d7&quot;
],
&quot;profilePicUrl&quot;: &quot;https://avatars1.githubusercontent.com/u/11065002?s=460&amp;u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&amp;v=4&quot;
},
&quot;tokens&quot;: {
&quot;accessToken&quot;: &quot;some_token&quot;,
&quot;refreshToken&quot;: &quot;some_token&quot;
}
}
}
" tabindex="0" role="button">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                  <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
                  <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
              </clipboard-copy>
            </div></div>
          <ul>
            <li>Response Body: 400</li>
          </ul>
          <div class="highlight highlight-source-json position-relative overflow-auto">
         {` {`}<br />
          {`"statusCode": "10001",`}<br />
{`"message": "Bad Parameters"`}<br />
{`}`}
            <div class="zeroclipboard-container position-absolute right-0 top-0">
              <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="{
&quot;statusCode&quot;: &quot;10001&quot;,
&quot;message&quot;: &quot;Bad Parameters&quot;
}
" tabindex="0" role="button">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                  <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
                  <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
              </clipboard-copy>
            </div></div>
        </li>
        <li>Profile Private
          <ul>
            <li>Method and Headers</li>
          </ul>
          <div class="snippet-clipboard-content position-relative overflow-auto"><pre><code>GET /v1/profile/my HTTP/1.1
            Host: localhost:3000<br />
            x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj<br />
            Content-Type: application/json<br />
            Authorization: Bearer &lt;your_token_received_from_signup_or_login&gt;<br />
          </code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
              <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="GET /v1/profile/my HTTP/1.1
Host: localhost:3000
x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
Content-Type: application/json
Authorization: Bearer <your_token_received_from_signup_or_login>
" tabindex="0" role="button">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                  <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
                  <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
              </clipboard-copy>
            </div></div>
          <ul>
            <li>Response Body: 200</li>
          </ul>
          <div class="highlight highlight-source-json position-relative overflow-auto">

          {`{`}<br />
          {`"statusCode": "10000",`}<br />
          {`"message": "success",`}<br />
          {`"data": {`}<br />
          {`"name": "Janishar Ali Anwar",`}<br />
          {`"profilePicUrl": "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4",`}<br />
          {`"roles": [`}<br />
          {`{`}<br />
            {`"_id": "5e7b8acad7aded2407e078d7",`}<br />
  {`"code": "LEARNER"`}
    {`},`}
      {`{`}
  {`"_id": "5e7b8c22d347fc2407c564a6",`}
  {`"code": "WRITER"`}
{`},`}
      {`{`}
  {`"_id": "5e7b8c2ad347fc2407c564a7",`}
  {`"code": "EDITOR"`}
  {`},`}
  {`},`}
  {`],`}
  {`},`} 
            <div class="zeroclipboard-container position-absolute right-0 top-0">
              <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="{
&quot;statusCode&quot;: &quot;10000&quot;,
&quot;message&quot;: &quot;success&quot;,
&quot;data&quot;: {
&quot;name&quot;: &quot;Janishar Ali Anwar&quot;,
&quot;profilePicUrl&quot;: &quot;https://avatars1.githubusercontent.com/u/11065002?s=460&amp;u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&amp;v=4&quot;,
&quot;roles&quot;: [
{
  &quot;_id&quot;: &quot;5e7b8acad7aded2407e078d7&quot;,
  &quot;code&quot;: &quot;LEARNER&quot;
},
{
  &quot;_id&quot;: &quot;5e7b8c22d347fc2407c564a6&quot;,
  &quot;code&quot;: &quot;WRITER&quot;
},
{
  &quot;_id&quot;: &quot;5e7b8c2ad347fc2407c564a7&quot;,
  &quot;code&quot;: &quot;EDITOR&quot;
}
]
}
}
" tabindex="0" role="button">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                  <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
                  <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
              </clipboard-copy>
            </div></div>
        </li>
      </ul>
      <h3><a id="user-content-find-this-project-useful--heart" class="anchor" aria-hidden="true" href="#find-this-project-useful--heart"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Find this project useful ? <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">❤️</g-emoji></h3>
      <ul>
        <li>Support it by clicking the <g-emoji class="g-emoji" alias="star" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2b50.png">⭐</g-emoji> button on the upper right of this page. <g-emoji class="g-emoji" alias="v" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/270c.png">✌️</g-emoji></li>
      </ul>
      <h3><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>License</h3>
      <div class="snippet-clipboard-content position-relative overflow-auto"><pre><code>   Copyright (C) 2020 MINDORKS NEXTGEN PRIVATE LIMITED

        Licensed under the Apache License, Version 2.0 (the "License");<br/>
        you may not use this file except in compliance with the License.<br/>
        You may obtain a copy of the License at<br/><br/>

        http://www.apache.org/licenses/LICENSE-2.0<br/><br/>

        Unless required by applicable law or agreed to in writing, software<br/>
        distributed under the License is distributed on an "AS IS" BASIS,<br/>
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br/>
        See the License for the specific language governing permissions and<br/>
        limitations under the License.
      </code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
          <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="   Copyright (C) 2020 MINDORKS NEXTGEN PRIVATE LIMITED

Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);

you may not use this file except in compliance with the License.
You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
" tabindex="0" role="button">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
              <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
            </svg>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
              <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
          </clipboard-copy>
        </div></div>
        

       
    </div>

  )
}
export default Example;
