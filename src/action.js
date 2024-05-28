const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");

  const octokit = github.getOctokit(GITHUB_TOKEN);

  console.log("Hello World");
  console.log(core.getInput("MESSAGE"));
  console.log(github.context.repo.owner);
  console.log(github.context.issue.number);
}

run();
