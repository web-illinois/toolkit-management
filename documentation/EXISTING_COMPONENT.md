# Updating an Existing Component

## If you need to update an existing document, follow the steps below. 

### Make the changes to the code

0. In [the toolkit project list](https://github.com/orgs/web-illinois/projects/7), assign the issue associated with the component to yourself. Move the project to *In Progress*. If you run into an error assigning an issue, contact jonker@illinois.edu to get access. 
1. Fix the issue or make the upgrades in your branch. If you need to have a non-developer look at the component, you can add it as an alpha or beta to the Toolkit Builder (see notes below)
 
### Prepare your branch for the update
 
2. In the */builder/versions/* section, add a new file signifying the new version of the component (copy ilw-xxxx.1.0.json to ilw-xxxx.1.1.json). Make sure you change the following:
    * builder-version
    * version
    * date
    * css
    * js
    * any changes in the samples, attributes, classes, CSS, etc.
3. In the */builder/* section, change the existing ilw-xxx.json file. Make sure you change the following:
    * toolkit-version
    * production-version
4. In the *package.json* file at the root, update the version to the current version. 

### Update your branch

5. Merge your branch into the *main* branch.
6. At the GitHub repository main page, click **Releases** and then **Draft a new release**. 
7. Under *Choose a tag*, type in your version number and then click on "Create new tag: .... on publish". 
8. Type in the version number under Release title and choose "Generate release notes". You may edit the release notes as needed. 
9. Click **Publish release**. This will run two actions -- the first one will push the changes to NPM to allow the toolkit-management component build the component to the toolkit.js and toolkit.css, and the second one will push the code to the CDN so it can be accessed manually. 
 
## Adding a beta version

You can add an alpha or beta version of the component to the toolkit builder or NPM. To add an alpha or beta version to the toolkit builder, do the following:

1. In the */builder/versions/* section, add a new file signifying the new version of the component (copy ilw-xxxx.1.0.json to ilw-xxxx.1.1-beta.json). Make sure you change the following:
    * builder-version
    * version
    * date
    * css
    * js
    * any changes in the samples, attributes, classes, CSS, etc.
2. In the */builder/* section, change the existing ilw-xxx.json file. Make sure you change the following:
    * development-version
3. Merge your branch into the *main* branch.
4. In the [deploy_release action for the Toolkit Builder 3](https://github.com/web-illinois/toolkit-builder-3/actions/workflows/deploy_release.yml), click the *Run Workflow* button to deploy the Toolkit Builder 3 with the changes you made. If you forget this step, it will run overnight. 

To add an alpha or beta version to NPM, do the following:

1. In the *package.json* file at the root, update the version to the current version. 
2. Merge your branch into the *main* branch.
3. At the GitHub repository main page, click **Releases** and then **Draft a new release**. 
4. Under *Choose a tag*, type in your version number and then click on "Create new tag: .... on publish". 
5. Type in the version number under Release title and choose "Generate release notes". You may edit the release notes as needed. 
6. Choose *Set as a pre-release* to label the release as non-production ready.
7. Click **Publish release**. This will run two actions -- the first one will push the changes to NPM as a beta version, and the second one will push the code to the development CDN so it can be accessed manually. 
 
[Back to the README.md document](README.md)