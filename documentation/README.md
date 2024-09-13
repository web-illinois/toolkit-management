# Web Toolkit for Developers

This is a guideline for developers to create new components for the Toolkit. 

## Checklist for new components

0. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), assign the issue associated with the component to yourself. Move the project to *Documenting*. If you run into an error assigning an issue, contact jonker@illinois.edu to get access. 
1. [Create a new repository from the toolkit template.](https://github.com/web-illinois/toolkit-template)
2. Add the "illinois-toolkit" tag to the repository.
3. Fill out the README.md in your repository. This documentation-first method will allow you to envision the best way that this component will work.
4. *Post this information* into the [Toolkit Developer Team Channel](https://go.illinois.edu/toolkit-developers) for comments. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), move the project to *In Progress*. You probably want to wait a few days to get feedback, although you may use your judgement in how long you wait. 
5. Copy the sample HTML in your README.md *Code Examples* into your /samples directory.
6. Copy the sample HTML and attribute / classes into the /builder json files.
7. Build the component. Test it in your localhost. If you want, you can pull the toolkit builder code and [use that to test with other components](https://github.com/web-illinois/toolkit-builder-3?tab=readme-ov-file#running-the-builder-on-your-local-machine).
8. Review the *package.json*, *README.md*, */samples* directory, and */builder* json files. Ensure that these match. 
9. In Github, create a release with the tag `v1.0.0-alpha` (or some other tag that signifies an alpha release). This will publish your code to the development server and create an NPM package. 
10. Either ask for the component to be added to the toolkit builder, or [add the component to the builder yourself](https://github.com/web-illinois/toolkit-builder-3?tab=readme-ov-file#adding-to-this-project). 
11. *Post this information* into the [Toolkit Developer Team Channel](https://go.illinois.edu/toolkit-developers) for comments. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), move the project to *For Review*.

## Creating a new repository
[Create a new repository from the toolkit template.](https://github.com/web-illinois/toolkit-template) This template will generate the Github Actions, recommended toolset, and sample pages to start testing your component. This template does not contain the automated testing, but there are plans to do so. 

Each repository should only have one component, with the exception if there are secondary components that are only used in the main component. 

This repository should have five Github Actions. 
* **deploy.yml**: this will deploy the major, minor and patch version to the toolkit CDN (this will be triggered when adding a release and is based on the tag name associated with the release).
* **deploy_production_manual.yml**: this will deploy the major, minor and patch version to the toolkit CDN (this can be manually triggered).
* **deploy_development_manual.yml**: this will deploy a development branch to the dev.toolkit.illinois.edu site (this can be manually triggered).
* **delete_development.yml**: this will delete all development areas from the dev.toolkit.illinois.edu site (this can be manually triggered).
* **publish_npm.yml**: this installs the component (this can be manually triggered or is automatically run when adding a release)

Patch releases should not be overwritten -- the only time that the *deploy_production_manual.yml* action should be triggered is if there is a problem with the *deploy_production.yml* deploy, and even then, the preference is to re-run the failed action. 

To deploy your application, merge to main, then mark it as a release. The deploy_production action should deploy your code automatically and the publish_npm action should deploy it to NPM. Then merge it to the release branch. 

If you are updating an old release (for example, main is on 3.3.1 and you need to make a patch release to 3.1.0), merge to the proper release branch, and then mark it as an old patch release. 

### Suggested Toolset
* **Lit** (https://lit.dev/) for web components.
* **Vite** (https://vitejs.dev/) used to create a dev server and create build artifacts.
* **Playwright** (https://playwright.dev/) for testing. 
* **aXe testing tools** (https://playwright.dev/docs/accessibility-testing) for accessibility testing.

#### HTML Header Must Contain
* Brand CSS (https://cdn.brand.illinois.edu/illinois.css) 
* Global WIGG CSS (in this repository)

### JSON documentation for builder
The template has JSON documentation that the builder can pull into its build process. [See the toolkit builder repository for more information](https://github.com/web-illinois/toolkit-builder-3). 

You may create more than one json file if the component has multiple uses (for example, a "Section" component may have a quote version, an introduction version, and a generic version). Because they look very different, you may have more than one json file for a component.

Because each json file is associated with a release, you will have mutiple json files. 

## Naming Conventions
* **ilw-**: the WIGG web component, and CSS constants used by WIGG
* **ilw-alt-**: an alternate version of the web component and CSS constants, used for release conflicts

For CSS variables, use the "--" technique to divide major components. Example: *--ilw-header--font-weight*. Place the state before the name (so *--ilw-header--focused-button-color* is better than *--ilw-header--button-color-focus*).

## Version Information
Following the process at https://semver.org/. Quoting from them: 
* MAJOR version when you make incompatible API changes
* MINOR version when you add functionality in a backward compatible manner
* PATCH version when you make backward compatible bug fixes

## NPM process
You may publish your package to the NPM team illinois-toolkit (https://www.npmjs.com/settings/illinois-toolkit/members). 
### To set up:
``` npm init --scope=@illinois-toolkit ```
### To publish: 
``` npm publish --access public ```

Contact jonker@illinois.edu to be added to the NPM group.  More information about the integration plans is at the [Integration Documentation](https://github.com/web-illinois/toolkit-management/blob/main/documentation/INTEGRATION.md).

## Toolkit Rollup
Part of this process is to take components in individual repositories and build a global “toolkit.js” and “toolkit.css” file to allow users to easily get a complete list of components and global helper files. This github repository is responsible for that rollup. 

This is currently limited to WIGG repositories, but we are open to adding additional components provided they have an NPM package or some other automated process to get files. 

Because the toolkit already has a version 1 and 2, we are starting with version 3.0.0.

The toolkit rollup process will generate two packages: a major version and minor version. The major version will contain the latest minor version of each package listed (in NPM parlance, version 3 will have 1.x.x of every component). The minor version will have the latest patch version of each package listed (in NPM parlance, version 3 will have 1.0.x of each component). These will be stored in https://cdn.toolkit.illinois.edu/major/file and https://cdn.toolkit.illinois.edu/major.minor/file 

The WIGG web components team will meet monthly to:
* Add new components.
* Upgrade existing components to minor versions.
* Plan for existing components to be upgraded to major versions (see note below).
* Review the Global WIGG CSS.

Note that if a component upgrades to a major version and this upgrade is added to the web toolkit, this requires a major version change from the toolkit. This will be done sparingly and be grouped. To allow this component to be used in conjunction with the toolkit, you may temporarily switch your component to the *ilw-alt-* namespace. 

New components will **not** trigger a major release. Because of this, if you have a component that is not officially in the toolkit, you should avoid using the *ilw-* namespace to avoid conflicts. You may use the *ilw-alt-* namespace for this case if you want. 

## Standards and Best Practices
Note that these best practices are descriptive, not prescriptive. 
* Discuss any new components with the WIGG web components team before designing to see if another component can fill its role with minor changes. 
* Before coding, review WCAG to ensure you are aware of accessibility issues and create a few “how would I use this” examples using HTML. Both are in the README.md file. 
* Ensure your components are semantically correct. This means adding semantic roles or HTML5 tags within the component and not requiring the user to add semantic tags, and not splitting out semantic terms between components.

Good:
```` 
<ilw-section> … </ilw-section>
````

Bad:
```` 
<section> <ilw-section> … </ilw-section> </section>
````

Good:
````
<ilw-accordion>
<ul>
<li> <ilw-accordion-panel> … </ilw-accordion-panel></li>
<li> <ilw-accordion-panel> … </ilw-accordion-panel></li>
<li> <ilw-accordion-panel> … </ilw-accordion-panel></li>
</ul>
</ilw-accordion>
````

Bad:
````
<ilw-accordion>
<ul>
<ilw-accordion-panel> … </ilw-accordion-panel>
<ilw-accordion-panel> … </ilw-accordion-panel>
<ilw-accordion-panel> … </ilw-accordion-panel>
</ul>
</ilw-accordion>
````

* Components should not make web calls to services. Instead, create a helper class that connects the web service to the component. 
* Use existing attribute names and standard CSS patterns when possible. 
* Use container queries when possible (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) 
* Be aware of the distinction between em, rem, vw/vh, cqw/cqh, cqi, and cqb. Ensure that the use of absolute or fixed size doesn’t interfere with accessibility requirements. 
* Be aware that different heading types may be used in a component, so ensure that your style is set no matter which heading is used (from h2 – h6). You may assume that the h1 header is only used for page titles. 
* Consider building the theme and width attribute in the component. For the width component, this is only meant to allow the user to choose to “break” the margins and go full width. Under normal circumstances (including the default behavior of all components), a component should grow to fill the container. 
* The default behavior should be "white background", even if the component would normally be used as a blue background. 
* Consider how the end user may use or expand this component. Because of this, you may want favor slots over attributes if the attributes are writing HTML in the component, and favor CSS styles over attributes if the attributes are changing styles of the HTML inside the component. 
* When handling state of the component, consider triggering this via a watched reactive property (https://lit.dev/docs/components/properties/). 
* When handling state between multiple components, consider using an event and event listener (https://lit.dev/docs/components/events/).
* Watch out for overcomplicating a component. If you are changing HTML render based on component size or other pieces, you may need to break down the component into multiple components.
* Consider having many small files that are called by the main file. Having a *component*.styles.js and *component*.component.js allows future editors to quickly find what they are looking for. 
* Be aware of if a developer may need to change a CSS value. When this is the case, use CSS variables to allow advanced users to update web component information. When possible, reference the CSS global variables in the brand CSS or WIGG CSS.

Good:
````
:root { ilw-hero-background: var(--il-blue); }
ilw-hero div.background { background: var(--ilw-hero-background); }
````

Bad:
````
:root { ilw-hero-background: #13294B; }
ilw-hero div.background { background: var(--il-blue); }
````

### Recommended Attribute Names
* **Theme:** blue, orange, gray, blue-gradient, orange-gradient
* **Size:** xx-small, x-small, small, medium, large, x-large, xx-large
* **Width** (how wide a component will be): full, auto, page
* **Align** (where an item goes in a space): left, center, right, top, bottom, top-left, top-right, bottom-left, bottom-right
* **Padding** (padding around the item): should use the standard length / percentage CSS. 
