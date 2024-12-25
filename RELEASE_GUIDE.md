# Release Guide for @thirdbracket/bracketui

## Post-Setup Steps

1. Make sure you have the following secrets set in your GitHub repository:

   - `GITHUB_TOKEN`: Automatically provided by GitHub
   - `NPM_TOKEN`: Your NPM access token for publishing

2. Development Workflow:

   - All development work should be done on feature branches
   - Create pull requests targeting the `dev` branch
   - When making changes that require a new release:
     ```bash
     # From the packages/bracketui directory
     npm run changeset  # Create a new changeset
     ```

3. Release Process:

   - Merge your changes to the `dev` branch
   - The GitHub Action will automatically:
     - Build the package
     - Create a new version based on changesets
     - Create a GitHub release
     - Publish to NPM

4. Important Commands:

   ```bash
   # From the packages/bracketui directory
   npm run build          # Build the package
   npm run changeset      # Create a new changeset
   npm run version        # Bump version based on changesets
   npm run release        # Publish to NPM
   ```

5. Monitoring:
   - Check GitHub Actions tab for workflow runs
   - Monitor releases on GitHub repository
   - Verify package updates on NPM
