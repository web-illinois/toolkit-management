# Best Practices and Naming Conventions

## Naming Conventions
* **ilw-**: the WIGG web component, and CSS constants used by WIGG
* **ilw-alt-**: an alternate version of the web component and CSS constants, used for release conflicts

For CSS variables, use the "--" technique to divide major components. Example: *--ilw-header--font-weight*. Place the state before the name (so *--ilw-header--focused-button-color* is better than *--ilw-header--button-color-focus*).

## Version Information
Following the process at https://semver.org/. Quoting from them: 
* MAJOR version when you make incompatible API changes
* MINOR version when you add functionality in a backward compatible manner
* PATCH version when you make backward compatible bug fixes

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
* Consider how the end user may use or expand this component. Because of this, you may want favor slots over attributes if the attributes are writing HTML in the component, and favor CSS styles over attributes if the attributes are changing styles of the HTML inside the component. 
* When handling state of the component, consider triggering this via a watched reactive property (https://lit.dev/docs/components/properties/). 
* When handling state between multiple components, consider using an event and event listener (https://lit.dev/docs/components/events/).
* Watch out for overcomplicating a component. If you are changing HTML render based on component size or other pieces, you may need to break down the component into multiple components.
* Consider having many small files that are called by the main file. Having a *component*.styles.js and *component*.component.js allows future editors to quickly find what they are looking for.
* The default behavior should be "white background", even if the component would normally be used as a blue background. 
* For colors, use the naming convention outlined in https://marvel-uiuc.github.io/wigg-colors/. When possible, don't reference the colors directly in the component -- rely on the themes in the color palette to manage the colors. 
* Be aware of if a developer may need to change a CSS value. When this is the case, use CSS variables to allow advanced users to update web component information. When possible, reference the CSS global variables in the brand CSS or WIGG CSS.

Good:
````
:root { ilw-hero--margin: 10px auto; }
ilw-hero div.background { margin: var(--ilw-hero--margin); }
````

Bad:
````
ilw-hero div.background { background: var(--il-blue); }
````

### Recommended Attribute Names
* **Theme:** white, blue, orange, gray, blue-gradient, orange-gradient, industrial, arches (industrial and arches will default to blue, but use the appropriate accent color).
* **Size:** xx-small, x-small, small, medium, large, x-large, xx-large
* **Width** (how wide a component will be): full, auto, page
* **Align** (where an item goes in a space): left, center, right, top, bottom, top-left, top-right, bottom-left, bottom-right
* **Padding** (padding around the item): should use the standard length / percentage CSS. 

#### The Width attribute

If there is no width attribute, the component will respect all margins and not alter itself in any way. 

`width="full"` means the entire component will break any parent margins and go the full width of the screen. The first image (the orange title where it is flush with the left margin) represents this width. 

`width="page"` means that some parts of the component will break any parent margins and go the full width of the screen, but not all of it. This is going to be based on the component (so the background image would go the full width, but the title wouldn't). 

`width="auto"` means that it will respect the parent margins, but it will constrain some parts of the component so it will create margins that look nice. 

These two html representations should theoretically look the same:

```
<div style="max-width: 1200px; margin: 0 auto; padding: 0;">
    <ilw-component width="page"></ilw-component>
</div>
```

and

```
<div style="margin: 0; padding: 0;">
    <ilw-component width="auto"></ilw-component>
</div>
```

And these two html representations should theoretically look the same:

```
<div style="max-width: 1200px; margin: 0 auto; padding: 0;">
    <ilw-component width="full"></ilw-component>
</div>
```

and

```
<div style="margin: 0; padding: 0;">
    <ilw-component></ilw-component>
</div>
```

[Back to the README.md document](README.md)
