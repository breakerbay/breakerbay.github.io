# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


# Create an Empty Branch

Followed https://gist.github.com/blattmann/4bc90557c2bc2907e715f45ec35674a2 to create an empty branch

Replace empty-branch with your desired branch name.

git checkout --orphan empty-branch

Then you can remove all the files you'll have in the staging area (so that they don't get committed):

git rm -rf .

At this point you have an empty branch, on your machine.

Before you can push to GitHub (or any other Git repository), you will need at least one commit, even if it does not have any content on it (i.e. empty commit), as you cannot push an empty branch

git commit --allow-empty -m "root commit"

Finally, push it to the remote, and crack open a beer :)

git push origin empty-branch


find /path/to/search -name "package.json" -exec grep -l "@sveltejs/kit" {} +

find /Users/richardhancock -name "package.json" -exec grep -l "@sveltejs/kit" {} +