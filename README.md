# Repo Helper
Node module to help with the handling of github repo information

## _IMPORTANT! Requires Node.js 4.2.1 or higher_

# Usage
```js
const repoHelper = require('repoHelper');
return repoHelper.createGithubAuthentication('Demands', 'token', ['repo'])
  .then((credentials) => {
    const limit = 0;
    const debug = false;
    return repoHelper.getRepos(credentials, limit, debug)
      .then((repos) => {
        return Promise.all(repos.map((repo) => {
          return repoHelper.getOpenPRs(credentials, repo, debug);
        }))
      });
  });
```
