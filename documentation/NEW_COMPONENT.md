# New Components

This is a list of notes for developers working on a new component. 

## Checklist for new components

0. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), assign the issue associated with the component to yourself. Move the project to *Documenting*. If you run into an error assigning an issue, contact jonker@illinois.edu to get access. 
1. [Create a new repository from the toolkit template.](https://github.com/web-illinois/template-ilw-typescript). **Note: this is the new typescript template, which we should be moving to.**
2. Add the "illinois-toolkit" tag to the repository.
3. Fill out the README.md in your repository. This documentation-first method will allow you to envision the best way that this component will work.
4. *Post this information* into the [Toolkit Developer Team Channel](https://go.illinois.edu/toolkit-developers) for comments. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), move the project to *In Progress*. You probably want to wait a few days to get feedback, although you may use your judgement in how long you wait. 
5. Copy the sample HTML in your README.md *Code Examples* into your /samples directory.
6. Copy the sample HTML and attribute / classes into the /builder json files.
7. Build the component. Test it in your localhost. If you want, you can pull the toolkit builder code and [use that to test with other components](https://github.com/web-illinois/toolkit-builder-3?tab=readme-ov-file#running-the-builder-on-your-local-machine).
8. Create unit tests. Most standard accessibility tests should be handled via the ilw-core. 
9. Review the *package.json*, *README.md*, */samples* directory, and */builder* json files. Ensure that these match. 
10. On your local machine, download the latest copy, confirm the package.json is pushing the 0.0.1 version, and run the commands `npm install`, `npm login`, and `npm publish --access public` to publish the package to https://www.npmjs.com/.
11. Confirm that in https://www.npmjs.com/settings/illinois-toolkit/packages, the package has been generated. Update the package settings to include "web-illinois/..." as a Trusted Publisher. 
12. In Github, create a release with the tag `v1.0.0-alpha` (or some other tag that signifies an alpha release). This will publish your code to the development server and create an NPM package. 
13. Either ask for the component to be added to the toolkit builder, or [add the component to the builder yourself](https://github.com/web-illinois/toolkit-builder-3?tab=readme-ov-file#adding-to-this-project). 
14. *Post this information* into the [Toolkit Developer Team Channel](https://go.illinois.edu/toolkit-developers) for comments. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), move the project to *For Review*.

## Creating a new repository
[Create a new repository from the toolkit template.](https://github.com/web-illinois/template-ilw-typescript) This template will generate the Github Actions, recommended toolset, automated accessibility testing, and sample pages to start testing your component. 

Each repository should only have one component, with the exception if there are secondary components that are only used in the main component. 

This repository should have five Github Actions. 
* **deploy.yml**: this will deploy the major, minor and patch version to the toolkit CDN and publishes to NPM (this will be triggered when adding a release and is based on the tag name associated with the release).
* **deploy_production_manual.yml**: this will deploy the major, minor and patch version to the toolkit CDN (this can be manually triggered).
* **deploy_development_manual.yml**: this will deploy a development branch to the dev.toolkit.illinois.edu site (this can be manually triggered).
* **delete_development.yml**: this will delete all development areas from the dev.toolkit.illinois.edu site (this can be manually triggered).
* **test.yml**: this runs automated tests.

Patch releases should not be overwritten -- the only time that the *deploy_production_manual.yml* action should be triggered is if there is a problem with the *deploy.yml* deploy, and even then, the preference is to re-run the failed action. 

To deploy your application, merge to main, then mark it as a release. The *deploy* action should deploy your code automatically and the publish_npm action should deploy it to NPM. Then merge it to the release branch. 

If you are updating an old release (for example, main is on 3.3.1 and you need to make a patch release to 3.1.0), merge to the proper release branch, and then mark it as an old patch release. 

### Suggested Toolset
* **Lit** (https://lit.dev/) for web components.
* **Vite** (https://vitejs.dev/) used to create a dev server and create build artifacts.
* **Playwright** (https://playwright.dev/) for testing. 
* **aXe testing tools** (https://playwright.dev/docs/accessibility-testing) for accessibility testing.
* **vitest** (https://vitest.dev/) for unit testing.

#### HTML Header Must Contain
* Brand CSS (https://cdn.brand.illinois.edu/illinois.css) 
* Global WIGG CSS (in this repository)

### JSON documentation for builder
The template has JSON documentation that the builder can pull into its build process. [See the toolkit builder repository for more information](https://github.com/web-illinois/toolkit-builder-3). 

You may create more than one json file if the component has multiple uses (for example, a "Section" component may have a quote version, an introduction version, and a generic version). Because they look very different, you may have more than one json file for a component.

Because each json file is associated with a release, you will have mutiple json files. 

## Testing

To test your project, run the `dev` script in NPM. This will launch a localhost server on your machine. All of our sample pages are under /samples/, so you will need to go http://localhost:5173/samples/index.html (or whichever HTML page you want to access)

[Back to the README.md document](README.md)
