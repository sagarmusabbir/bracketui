#!/usr/bin/env node

const yargs = require("yargs");
const readline = require("readline");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const REPO_URL = "https://github.com/thirdbracket-solutions/bracketui.git";
const BRANCH = "dev"; // change if needed
const TEMPLATE_PATH = "apps/web";

const execCommand = (command, options = {}) => {
  try {
    execSync(command, { stdio: "inherit", ...options });
  } catch (error) {
    console.error(`\n❌ Command failed: ${command}\n`);
    process.exit(1);
  }
};

const createInterface = () =>
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const askQuestion = (rl, question) =>
  new Promise((resolve) => rl.question(question, resolve));

const getProjectName = async () => {
  const argv = yargs.argv;
  let projectName = argv._[0] || argv.name;

  if (!projectName) {
    const rl = createInterface();
    projectName = await askQuestion(rl, "Enter project name: ");
    rl.close();
  }

  return projectName.trim();
};

const setupRepository = async (projectName) => {
  const tempDir = `.tmp-${Date.now()}`;
  const fullPath = path.join(process.cwd(), projectName);

  console.log(`\n🚀 Cloning template into "${projectName}"...\n`);

  // 1. Clone repo with sparse-checkout enabled
  execCommand(
    `git clone --depth=1 --filter=blob:none --sparse --branch=${BRANCH} ${REPO_URL} ${tempDir}`
  );

  // 2. Set sparse checkout folder
  execCommand(`git sparse-checkout set ${TEMPLATE_PATH}`, {
    cwd: tempDir,
  });

  // 3. Move template folder to project directory
  fs.renameSync(path.join(tempDir, TEMPLATE_PATH), fullPath);

  // 4. Clean up temp repo
  fs.rmSync(tempDir, { recursive: true, force: true });

  // 5. Remove .git and reinitialize
  fs.rmSync(path.join(fullPath, ".git"), { recursive: true, force: true });
  execCommand("git init", { cwd: fullPath });
  execCommand("git add .", { cwd: fullPath });
  execCommand('git commit -m "Initial commit"', { cwd: fullPath });

  // 6. Install dependencies
  console.log("\n📦 Installing dependencies...\n");
  execCommand("npm install", { cwd: fullPath });

  console.log(`\n✅ Project created successfully in ./${projectName}\n`);
  console.log(`👉 Run the following to get started:\n`);
  console.log(`   cd ${projectName}`);
  console.log(`   npm run dev\n`);
};

const main = async () => {
  const projectName = await getProjectName();
  await setupRepository(projectName);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
