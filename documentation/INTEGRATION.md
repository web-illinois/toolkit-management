# Integration into the web toolkit and the builder

## Before you begin

  1. Make sure the project has the topic *illinois-toolkit*
  2. Make sure the project has github actions set up correctly
  3. Make sure the package.json has the proper name and is referencing the @illinois-toolkit organization
  4. Make sure the package.json has ``"type": "module",`` in the package
  5. Make sure the package.json has a proper exports command. 
  6. Make sure the package.json is referencing ``"lit": "3.1.3"``
  7. Make sure the /builder folder has both a component json (ilw-xxxxxx.json) and a component version json (ilw-xxxxxx.1.0.0)

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
  } ```

## Integrating into the toolkit

  1. Make sure the package is in https://www.npmjs.com/settings/illinois-toolkit/packages. If not, then go to "NPM process"
  2. Copy the install command into the console and run the command. You may need to alter the package.json to point to the correct version. 
  3. Remove the "^" and "~" to ensure we don't accidentially add changes into the build process. 
  4. Add the import command to /src/index.js, following the pattern of existing components. 
  5. Run the NPM build script to ensure that everything is working. If not, then investigate and update the patch version. 
     * Make sure you push the changes back to the proper repository
     * Make sure you change the toolkit management package.json file to reference the new version
  6. Copy the builder .json files to the builder repository. 

### NPM process

#### To set up:
``` npm init --scope=@illinois-toolkit ```
#### To publish: 
``` npm publish --access public ```

## Integrating into the builder

  1. Get the latest version of the toolkit-builder3 from the Git repository. 
  2. Copy the component json file to \site\imported_json\components
  3. Copy the version information to \site\imported_json\component_versions
  4. Run the NPM build script to ensure that everything is working.
  5. Run the local copy to confirm everything looks OK. 
  6. Push the changes.