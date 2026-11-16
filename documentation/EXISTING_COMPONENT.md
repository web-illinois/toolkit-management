# Updating an Existing Component

## If you need to update an existing document, follow the steps below. 

### Make the changes to the code

0. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), assign the issue associated with the component to yourself. Move the project to *In Progress*. If you run into an error assigning an issue, contact jonker@illinois.edu to get access. 
1. Fix the issue or make the [upgrades](https://github.com/web-illinois/toolkit-management/blob/main/documentation/UPGRADES.md) in your branch. If you need to have a non-developer look at the component, you can add it as an alpha or beta to the Toolkit Builder (see notes below).
2. If you have multiple issues merge these into a version branch labeled with your planned release number. Don't use the same naming convention as the tag (vX.X.XX) or it will throw an error.
 
### Prepare your branch for the update
 
2. In the */builder/* section ilw-component.json, add a new node in `versions` signifying the new version of the component. See [ilw-card example](https://github.com/web-illinois/ilw-card/blob/main/builder/ilw-card.json). If the change doesn't require a change to the builder template, then you can reference the old template. If the change requires a change to the builder template, then reference the new template you are going to create. 
3. If the change requires a change to the builder template, then create a new builder template file in the */builder/versions/*.  
4. In the *package.json* file at the root, update the version to the current version. 

### Update your branch

5. Merge your branch into the *main* branch.
6. At the GitHub repository main page, click **Releases** and then **Draft a new release**. 
7. Under *Choose a tag*, type in your version number and then click on "Create new tag: .... on publish". 
8. Type in the version number under Release title and choose "Generate release notes". You may edit the release notes as needed. 
9. Click **Publish release**. This will run two actions -- the first one will push the changes to NPM to allow the toolkit-management component build the component to the toolkit.js and toolkit.css, and the second one will push the code to the CDN so it can be accessed manually. You can verify this action at [https://www.npmjs.com/org/illinois-toolkit](https://www.npmjs.com/org/illinois-toolkit).
10. Create a comment in the issue ([see the toolkit project view](https://github.com/orgs/web-illinois/projects/7/views/1)) with a testing link for the testers. This will most likely be the [Toolkit Builder](https://builder3.toolkit.illinois.edu/index.html) application. 
 
## Adding an alpha / beta version

To add an alpha or beta version to NPM, do the following:

1. In the *package.json* file at the root, update the version to the current version. 
2. Merge your branch into the *main* branch.
3. At the GitHub repository main page, click **Releases** and then **Draft a new release**. 
4. Under *Choose a tag*, type in your version number and then click on "Create new tag: .... on publish". 
5. Type in the version number under Release title and choose "Generate release notes". You may edit the release notes as needed. 
6. Choose *Set as a pre-release* to label the release as non-production ready.
7. Click **Publish release**. This will run two actions -- the first one will push the changes to NPM as a beta version, and the second one will push the code to the development CDN so it can be accessed manually.
8. Create a comment in the issue ([see the toolkit project view](https://github.com/orgs/web-illinois/projects/7/views/1)) with a testing link for the testers. This will most likely be the [Toolkit Builder](https://builder3.toolkit.illinois.edu/index.html) application. 

The "latest" development in the toolkit builder will automatically pick up the latest development version. You do not need to do anything special. If you need to update the builder template (to add a new attribute, class, or CSS style), you can create a new template file and instruct your testers to test with the new template file. 
 
[Back to the README.md document](README.md)
