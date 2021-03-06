# `@rareyes/commitizen-config`

Share the same Commitizen configuration between projects.

## Usage

```
npm i -D @rareyes/commitizen-config
```

This configuration is being used by this same monorepo.

Check [package.json](https://github.com/rareyesdev/toolbox/blob/master/package.json) scripts (`cm` and `cmr`) and [Husky configuration](https://github.com/rareyesdev/toolbox/blob/master/.huskyrc.js).

Using (`cm` and `cmr`) to create new commits is the easiest way because it won't bring the commit message editor at the end. Nonetheless Husky's `prepare-commit-msg` hook ensures that `git commit` will trigger the commitizen CLI.

There is a small hack `hooks.prepare-commit-msg.disabled` that is required to avoid `cm` triggering the hook.
