# Repo Helper
Node module to help with the handling of github repo information

## _IMPORTANT! Requires Node.js 4.2.1 or higher_

# Usage
```js
const repoHelper = require('repoHelper');
return helper.createGithubAuthentication(options.tokenName, options.tokenFile, options.scope)
  .then((credentials) => {
    return helper.getRepos(credentials, options.limit, options.debug)
      .then((repos) => {
        return Promise.all(repos.map((repo) => {
          return helper.getOpenPRs(credentials, repo, options.debug);
        }))
      });
  });
```
