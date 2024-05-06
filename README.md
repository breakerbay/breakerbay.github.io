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

# [npm loglevel](https://docs.npmjs.com/cli/v10/using-npm/logging)

e.g. ```npm install --loglevel verbose```

## Options

 * silent
   * No output will be displayed, except for fatal errors.
  * error
    * Only error messages are shown.
 * warn
   * In addition to error messages, warning messages are displayed.
 * notice (default)
   * A standard log level providing important informational messages. It is less detailed than “verbose” but more than “info.”
 * http
   * Logs HTTP requests and responses. It is particularly valuable when troubleshooting issues related to package fetching, downloading, or any other HTTP-related aspects of npm operations.
 * info
   * Informational messages, such as installed packages and installation progress, are displayed.
 * verbose
   * Alongside informational messages, more detailed logs are shown. This level is particularly helpful for debugging purposes or when you need deeper insights into the installation process.
 * silly
   * Displays all messages, including extremely detailed and debugging-specific information.

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


richard:breakerbay.github.io richardhancock$ find /Users/richardhancock -name "package.json" -exec grep -l "@sveltejs/kit" {} +
/Users/richardhancock/cas/cas-svelte-admin/package.json
/Users/richardhancock/cas/cas-admin/package.json
/Users/richardhancock/cas/brealerbay.github.io/sveltekit-checker/package.json

/Users/richardhancock/cas/brealerbay.github.io/breakerbay.github.io/package.json

/Users/richardhancock/svelte/sveltekit/sveltekit-typescript-demo/package.json

/Users/richardhancock/svelte/sveltekit-starter/package.json

/Users/richardhancock/svelte/smui/smui-example-sveltekit/package.json

/Users/richardhancock/sveltekit/lets-build-something-awesome-with-svelte-and-sveltekit/Deploy/package.json
/Users/richardhancock/sveltekit/lets-build-something-awesome-with-svelte-and-sveltekit/Setup.zip/package.json
/Users/richardhancock/sveltekit/lets-build-something-awesome-with-svelte-and-sveltekit/Starter/package.json
/Users/richardhancock/sveltekit/lets-build-something-awesome-with-svelte-and-sveltekit/seo/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter05/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter05/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter02/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter02/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter03/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter03/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter04/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter04/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter10/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter10/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter11/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter11/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter16/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter08/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter08/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter01/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter06/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter06/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter07/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter07/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter09/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter09/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter13/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter13/Start/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter14/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter15/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter12/Complete/package.json
/Users/richardhancock/sveltekit/Svelte-with-Test-Driven-Development-main/Chapter12/Start/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 4/booklovers-1-project-setup/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 4/booklovers-master/booklovers-master/node_modules/@sveltejs/kit/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 4/booklovers-master/booklovers-master/node_modules/@sveltejs/adapter-auto/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 4/booklovers-master/booklovers-master/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 4/booklovers-2-firebase-setup/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-6-layouts/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-7-prefetch-link/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-10-forms/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-4-route-parameters/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-main/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-14-server-routes/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-5-server-load-functions-with-env-variables/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-13-error-pages/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-12-page-rendering/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-3-pages-and-routes/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/Challenge-personal-site/node_modules/@sveltejs/kit/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/Challenge-personal-site/node_modules/@sveltejs/adapter-auto/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/Challenge-personal-site/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-2-sveltekit-tour/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-1-getting-started/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/Challenge-Form/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course/Section 3/intro-site-15-hooks/package.json

/Users/richardhancock/sveltekit/sveltekit-skeleton/package.json

/Users/richardhancock/sveltekit/sveltekit-personal-site/package.json

/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 4/booklovers-1-project-setup/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 4/booklovers-master/booklovers-master/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 4/booklovers-2-firebase-setup/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-6-layouts/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-7-prefetch-link/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-10-forms/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-4-route-parameters/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-main/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-14-server-routes/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-5-server-load-functions-with-env-variables/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-13-error-pages/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-12-page-rendering/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-3-pages-and-routes/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/Challenge-personal-site/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-2-sveltekit-tour/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-1-getting-started/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/Challenge-Form/package.json
/Users/richardhancock/sveltekit/Master-Svelte-Framework---The-Complete-Course-main/Section 3/intro-site-15-hooks/package.json
/Users/richardhancock/sveltekit/SvelteKit-Up-and-Running-main/full_project/package.json

richard:breakerbay.github.io richardhancock$ 
