# Integration into the web toolkit and the builder

## Before you begin

  1. Make sure the project has the topic *illinois-toolkit*
  2. Make sure the project has github actions set up correctly
  3. Make sure the /builder folder has both a component json (ilw-xxxxxx.json) and a component version json (ilw-xxxxxx.1.0.0)
  4. Make sure the project has a license associated with it (as of this writing, we recommend using the [MIT license](https://choosealicense.com/licenses/mit/))
  5. Make sure the package.json has the proper name and is referencing the @illinois-toolkit organization
  6. Make sure the package.json has ``"type": "module",`` in the package
  7. Make sure the package.json has a proper exports command. 
  8. Make sure the package.json is referencing ``"lit": "3.1.3"``
  9. Make sure the package.json contains the MIT license (default is ISC). 

### Example package.json file

``` "name": "@illinois-toolkit/ilw-back-to-top",
  "private": false,
  "version": "1.0.0-alpha",
  "type": "module",
  "exports": {
    ".": {
      "import": "./src/ilw-back-to-top.js"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build --config vite.build.config.js --emptyOutDir",
    "preview": "vite preview"
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
  6. Update the main builder .json files to reflect the new updates to the toolkit. You should not need to touch the files in `/versions`.  

### NPM process

#### To set up:
``` npm init --scope=@illinois-toolkit ```
#### To publish: 
``` npm publish --access public ```
