# Integration into the web toolkit and the builder

## Toolkit Rollup

Part of the process is to take components in individual repositories and build a global “toolkit.js” and “toolkit.css” file to allow users to easily get a complete list of components and global helper files. This github repository is responsible for that rollup. 

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

## Before you begin

  1. Make sure the project has the topic *illinois-toolkit*
  2. Make sure the project has github actions set up correctly
  3. Make sure the /builder folder has both a component json (ilw-xxxxxx.json) and a component version json (ilw-xxxxxx.1.0)
  4. Make sure the project has a license associated with it (as of this writing, we recommend using the [MIT license](https://choosealicense.com/licenses/mit/))
  5. Make sure the package.json has the proper name and is referencing the @illinois-toolkit organization
  6. Make sure the package.json has ``"type": "module",`` in the package
  7. Make sure the package.json has a proper exports command. 
  8. Make sure the package.json is referencing ``"lit": "3.1.3"``
  9. Make sure the package.json contains the MIT license (default is ISC). 

### Example package.json file

``` "name": "@illinois-toolkit/ilw-back-to-top",
  "description": "Illinois Toolkit: Back-to-top arrow to move a user to the top of the page.",
  "repository": "github:web-illinois/ilw-back-to-top",
  "author": "WIGG Web Components",
  "license": "MIT",
  "private": false,
  "version": "1.0.0-alpha",
  "type": "module",
  "files": [
    "src/**",
    "dist/**",
    "builder/**"
  ],
  "exports": {
    ".": {
      "import": "./src/ilw-back-to-top.js"
      "require": "./src/ilw-back-to-top.cjs"
      "default": "./src/ilw-back-to-top.js"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build --config vite.build.config.js --emptyOutDir",
    "preview": "vite preview",
    "prepack": "npm run build"
  },
  {
    "license": "MIT",
  },
  "dependencies": {
    "lit": "3.1.3"
  },
  "devDependencies": {
    "vite": "^5.2.0"
  }
```

## Integrating into the toolkit

  1. Make sure the package is in https://www.npmjs.com/settings/illinois-toolkit/packages. If not, then go to "NPM process"
  2. Copy the install command into the console and run the command. You may need to alter the package.json to point to the correct version. 
  3. Remove the "^" and "~" to ensure we don't accidentially add changes into the build process. 
  4. Add the import command to /src/index.js, following the pattern of existing components. 
  5. Run the NPM build script to ensure that everything is working. If not, then investigate and update the patch version. 
     * Make sure you push the changes back to the proper repository
     * Make sure you change the toolkit management package.json file to reference the new version

### NPM process

#### To set up:
``` npm init --scope=@illinois-toolkit ```
#### To publish: 
``` npm publish --access public ```

Contact jonker@illinois.edu to be added to the NPM group.  More information about the integration plans is at the [Integration Documentation](https://github.com/web-illinois/toolkit-management/blob/main/documentation/INTEGRATION.md).


## Integrating into the builder

See [the Toolkit Builder 3 documentation](https://github.com/web-illinois/toolkit-builder-3/blob/main/README.md#adding-to-this-project)

[Back to the README.md document](README.md)