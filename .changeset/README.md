# Changesets

# Procedure

# First, create a changeset for your changes

npm run changeset

- Choose the version type (major/minor/patch) ignore with enter. Use Tab to select.

- Add a description of your changes

- This creates a new .md file in .changeset directory

# Commit your changes and changeset

git add .
git commit -m "feat: added new components with changeset"

# Version the packages

npm run changeset version

# Commit version changes

git add .
git commit -m "chore: version packages"

# Publish to npm

- Make sure you're logged in to npm

npm login

- Publish the packages

npm run changeset publish

# Push changes and tags to GitHub

- Push commits

git push origin dev

- Push tags created by changeset publish

git push --follow-tags

# Moving to Beta

- Exit current pre-release mode

npm run changeset pre exit

- Enter beta pre-release mode

npm run changeset pre enter beta

- Create and version your changes

npm run changeset
npm run changeset version

- Publish beta release

npm run changeset publish

# Stable Release

- Exit pre-release mode completely

npm run changeset pre exit

- Create changeset for stable release

npm run changeset

- Version and publish

npm run changeset version
npm run changeset publish
