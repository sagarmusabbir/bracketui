# Development Workflow for @thirdbracket/bracketui

## Daily Development

1. Make changes in packages/bracketui
2. Test changes in apps/docs
3. Create changeset:

```bash
npm run changeset
# Select bracketui
# Choose version bump (major/minor/patch)
# Write change description
```

4. Commit changes:

```bash
git add .
git commit -m "feat: your change description"
git push origin dev
```

# Manual Version & Release Process

If you need to version and release manually (not using GitHub Actions):

1. Create version and changelog:

```bash
npm run version
# This updates package versions and CHANGELOG.md
```

2. Review changes:

```bash
git status
# Check package.json versions
# Check CHANGELOG.md updates
```

3. Commit version changes:

```bash
git add .
git commit -m "chore(release): version @thirdbracket/bracketui"
```

4. Create git tag:

```bash
# Get version from package.json
VERSION=$(node -p "require('./packages/bracketui/package.json').version")
# Create annotated tag
git tag -a v$VERSION -m "Release v$VERSION" [[1]](https://medium.com/@iamarasekera/streamlining-your-development-workflow-managing-releases-versions-and-tags-be7018e68726)
```

5. Push changes and tag:

```bash
git push origin dev
git push origin v$VERSION
```

6. Release (if not using GitHub Actions):

```bash
npm run release
```

# Common Scenarios

- Multiple Changes Before Release

- Make first change

```bash
npm run changeset
git add .
git commit -m "feat: first change"
```

- Make second change

```bash
npm run changeset
git add .
git commit -m "feat: second change"
```

- Push all changes

```bash
git push origin dev
```

- Checking Status

```bash
# View pending changesets
npm run changeset status

# Preview version changes
npm run version --dry-run
```

- Emergency Fixes

```bash
git checkout dev
git pull origin dev
# Make fix
npm run changeset
# Select patch version
git add .
git commit -m "fix: emergency fix"
git push origin dev
```

# Notes

1. Always create changesets for changes that affect consumers

2. Push to dev branch to trigger automatic release

3. GitHub Actions will handle versioning and release automatically

4. Manual process only needed if GitHub Actions fails
