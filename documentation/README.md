# Web Toolkit for Developers

This is a guideline for developers to create new components for the Toolkit. 

## Creating a new repository
Create a new repository. It should have a topic of "illinois-toolkit" and be a self-contained repository. 

It should have the following branches: 
* **main**: the main branch, production. This should be the default branch.
* **release/x.x**: this is the minor branch release for this component.

This repository will have two Github Actions. 
* **deploy_minor.yml**: this will deploy the minor and patch version to the toolkit CDN under their component information (this will be triggered when adding a release).
* **deploy_major.yml**: this will deploy the major version to the toolkit CDN (this will be triggered when pushing to main or a workflow_dispatch).

### Suggested Toolset
* **Lit** (https://lit.dev/) for web components.
* **Vite** (https://vitejs.dev/) used to create a dev server and create build artifacts.
* **Playwright** (https://playwright.dev/) for testing. 
* **aXe testing tools** (https://playwright.dev/docs/accessibility-testing) for accessibility testing.

#### HTML Header Must Contain
* Brand CSS (https://cdn.brand.illinois.edu/illinois.css) 
* Global WIGG CSS (in this repository)

### README.md file
Use the sample README.md file in the samples folder (TODO: still under construction)

### JSON documentation for builder
Create a JSON document that allows automated documentation through the toolkit builder. Use the sample builder.json file in the samples folder (TODO: still under construction)

## Naming Conventions
* **ilw-**: the WIGG web component, and CSS constants used by WIGG
* **ilw-alt-**: an alternate version of the web component and CSS constants, used for release conflicts

## Version Information
Following the process at https://semver.org/. 
* MAJOR version when you make incompatible API changes
* MINOR version when you add functionality in a backward compatible manner
* PATCH version when you make backward compatible bug fixes

## NPM process
You may publish your package to the NPM team illinois-toolkit (https://www.npmjs.com/settings/illinois-toolkit/members). 
### To set up:
``` npm init --scope=@illinois-toolkit ```
### To publish: 
``` npm publish --access public ```

Contact jonker@illinois.edu to be added to the NPM group. 

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

Note that if a component upgrades to a major version and this upgrade is added to the web toolkit, this requires a major version change from the toolkit. This will be done sparingly and be grouped. To allow this component to be used in conjunction with the toolkit, you may temporarily switch your component to ilw-alt. 
New components will trigger a minor release. 

## Standards and Best Practices
Note that these best practices are descriptive, not prescriptive. 
* Discuss any new components with the WIGG web components team before designing to see if another component can fill its role with minor changes. 
* Before coding, review WCAG to ensure you are aware of accessibility issues and create a few “how would I use this” examples using HTML. Both are in the README.md file. 
* Ensure your components are semantically correct. This means adding semantic roles or HTML5 tags around them, and not splitting out semantic terms between components.

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
* Use container queries when possible (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) 
* Be aware of the distinction between em, rem, vw/vh, cqw/cqh, cqi, and cqb. Ensure that the use of absolute or fixed size doesn’t interfere with accessibility requirements. 
* Be aware that different heading types may be used in a component, so ensure that your style is set no matter which heading is used (from h2 – h6). 
* Consider building the theme, width, and spacing attribute in the component. For the width component, this is only meant to allow the user to choose to “break” the margins and go full width. Under normal circumstances, a component should grow to fill the container.
* Consider how the end user may use or expand this component. Because of this, you may want favor slots over attributes if the attributes are writing HTML in the component, and favor CSS styles over attributes if the attributes are changing styles of the HTML inside the component. 
* When handling state of the component, consider triggering this via a watched reactive property (https://lit.dev/docs/components/properties/). 
* When handling state between multiple components, consider using an event and event listener (https://lit.dev/docs/components/events/). 
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
* **Theme:** blue, orange, white, gray, blue-gradient, orange-gradient
* **Size:** xx-small, x-small, small, medium, large, x-large, xx-large
* **Width** (how wide a component will be): full, auto
* **Spacing** (what top/bottom padding the component will have): auto, none
* **Align** (where an item goes in a space): left, center, right, top, bottom, top-left, top-right, center-left, center-right, bottom-left, bottom-right
