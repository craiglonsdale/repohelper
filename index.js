const githubAuthentication = require('./lib/githubAuthentication');
const pullRequests = require('./lib/pullRequests');

module.exports = {
  createGithubAuthentication: githubAuthentication,
  setDebug: pullRequests.setDebugMode,
  setLimit: pullRequests.setRepoLimit,
  getOpenPRs: pullRequests.getOpenPRs,
  getRepos: pullRequests.getRepos
};
