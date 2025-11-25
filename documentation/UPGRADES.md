# WIGG Component Upgrades

## Vite 7

- Upgrade all related dev dependencies to latest
  - vite
  - vite-plugin-dts
- Change the assetFileNames function in both `vite.build.config.ts` and `vite.transpile.config.ts` to the following:

```typescript
assetFileNames: () => {
    return "[name][extname]";
}
```

## TypeScript

Copy `tsconfig.json`, `vite.build.config.ts` and `vite.transpile.config.ts` from an up-to-date component (e.g. ilw-filter) and replace all mentions of the other component to match the component being updated. For example:

```bash
sed -i 's/ilw-filter/ilw-card/g' *.ts
```

Modify package.json:

```json
### devDependencies

"typescript": "^5.9.2",
"vite": "^7.1.3",
"vite-plugin-dts": "^4.5.4"

### Change exports to point to /dist/ rather than /src/ and add stylesheet export, and main and module

"exports": {
    ".": {
        "import": "./dist/ilw-card.js",
        "require": "./dist/ilw-card.cjs",
        "default": "./dist/ilw-card.js"
    },
    "./ilw-card.css": {
        "import": "./dist/ilw-card.css"
    }
},
"main": "./dist/ilw-card.js",
"module": "./dist/ilw-card.js",

### Change build script to:

"build": "tsc --noEmit && vite build --config vite.transpile.config.ts --emptyOutDir && vite build --config vite.build.config.ts --emptyOutDir",
```

Rename all .js files to .ts

Run `fastmod.sh` (see WIGG Web Component Developers team).

Fix remaining issues:

- Remove the closing of the static get properties() function, which doesn't get removed by fastmod.
- Move the default values from the constructor to the properties. 
- Declare any state properties that hadn't been declared yet.
- Add missing types.

## axe-core tests

1. Copy the `test-axe` folder, as well as `playwright.config.ts` and `playwright.ci.config.ts` from [ilw-filter](https://github.com/web-illinois/ilw-filter) to the project root.
2. Create a `samples/variations.html` with a few sample components with unique IDs, but none of the configurable attributes. [See ilw-card/samples/variations.html](https://github.com/web-illinois/ilw-card/blob/main/samples/variations.html).
3. Use `createVariations` at the bottom of the HTML file to create combinations of the configurable attributes automatically.
```html
<script type="module">
    import { createVariations } from "@illinois-toolkit/ilw-core"; //a utility function provided by the illinois toolkit
    import Card from "../src/ilw-card.js"; //import the component from your local src

    createVariations(
      document.getElementById("grid"), //container element
      Card,                            //component to test
      { 
        // options to vary
        theme: ["white", "gray", "orange", "blue", "orange-gradient", "blue-gradient"],
        clickable: [true, undefined],
        align: ["left", "center"],
        aspectRatio: [undefined, "16/9", "4/3", "1/1"],
        tag: ["article", "div"],
      }, 
        ["plain-card","image-card","footer-card","icon-card"] //unique IDs
    );
</script>
```
4. Add the necessary dependencies by running:
``` 
        npm install @illinois-toolkit/ilw-core@^1.0.2 \
                    @axe-core/playwright@^4.10.2 \
                    @playwright/test@^1.54.1 \
                    playwright@^1.54.1
```
5. Add the test scripts to your package.json:
```
    "scripts": {
        "test:axe": "playwright test",
        "test:axe:github": "playwright test --config playwright.ci.config.ts"
    }
```
6. Run `npm install` and `npx playwright install`
7. Add the following to `.gitignore`:
```
test-results/
playwright-report/
```



## Vitest

**Note** that the Test workflow will fail if there are no tests. If you're not planning on writing tests, you can add a `test` script into `package.json` that doesn't do anything. Another option is to add `passWithNoTests: true` to `vitest.config.ts`.

1. Copy vitest.config.ts from [ilw-filter](https://github.com/web-illinois/ilw-filter) to the repository.
2. Add the necessary devDependencies:
   1. `"@vitest/browser": "^3.2.4",`
   2. `"vitest-browser-lit": "^0.1.0"`
3. Add the test scripts to package.json:
   1. `"test": "vitest run --browser.headless",`
   2. `"test: browser": "vitest browser --browser chromium"`
4. Create a test folder and add tests to it. You can refer to ilw-filter [tests/ilw-filter.test.ts](https://github.com/web-illinois/ilw-filter/blob/main/test/ilw-filter.test.ts) for a basic example.

## GitHub Actions with tests

1. Copy `deploy.yml` and `test.yml` from [ilw-filter](https://github.com/web-illinois/ilw-filter) to `.github/workflows`
2. Remove `publish_npm.yml`

## Semantic Colors

1. Remove all[^1] references to `il-*` colors like `il-blue`, `il-orange`, etc. Replace them with
   semantic colors like `ilw-colors--background`, `ilw-colors--text` and so on. See below for details.
2. Remove all[^1] theme-specific CSS, such as `[theme="blue"]`. That will be handled automatically by the
   semantic colors.

[^1]: There are cases where the semantic colors don't fit with design requirements. In those cases, you can keep the `il-*` colors and theme-specific CSS, but try to minimize their use. See [Overriding specific colors](#overriding-specific-colors) below for an example.

### Semantic color names

- Refer to [Illinois Web Components Toolkit Colors](https://marvel-uiuc.github.io/wigg-colors)
  to check the semantic color names and how they behave in different themes.
- You can use semantic colors for purposes other than the specific name it has. For example,
  if a component has a part that's inverted, you can use `ilw-colors--text` for the background and
  `ilw-colors--background` for the text, since they are guaranteed to have enough contrast between them.

Here are a few examples from ilw-card:

```diff
-    border-bottom: 4px solid var(--ilw-card--clickable--border);
+    border-bottom: 4px solid var(--ilw-color--control-accent);

-    color: var(--ilw-card--heading-color);
+    color: var(--ilw-color--heading);


-    border: 1px solid var(--ilw-card--border-color);
-    background: var(--ilw-card--background);
-    color: var(--ilw-card--text-color);
+    border: 1px solid var(--ilw-color--border);
+    background: var(--ilw-color--background);
+    color: var(--ilw-color--text);
```

### Using themes within themes

Sometimes you may need to use a theme inside a different theme. For example, cards have hover states where
the hover is essentially the same as a different theme. Here's how that's handled in ilw-card:

```css
ilw-card[clickable]:hover {
    &[theme="blue"], &[theme="blue-gradient"], &[theme="orange"], &[theme="orange-gradient"] {
        --ilw-color--background: var(--ilw-color--white--background);
        --ilw-color--text: var(--ilw-color--white--text);
        --ilw-color--link: var(--ilw-color--white--link);
        --ilw-color--link-hover: var(--ilw-color--white--link-hover);
        --ilw-color--heading: var(--ilw-color--white--heading);
        --ilw-color--control: var(--ilw-color--white--control);
        --ilw-color--control-text: var(--ilw-color--white--control-text);
        --ilw-color--control-accent: var(--ilw-color--white--control-accent);
        --ilw-color--control-accent-text: var(--ilw-color--white--control-accent-text);
    }
}
```

In other words, when a blue or orange card is hovered, it uses the white theme colors.

### Overriding specific colors

When a design uses a color that doesn't fit with the semantic colors, you can override it. For example,
with ilw-card the white theme has an orange heading even though the normal heading color is blue. Because
it's the default theme it's not enough to set the color on `[theme="white"]`. Instead, ilw-card adds a class
to the component for the theme, which by default is white, and then the following CSS:

```css
.theme-white {
    --ilw-color--heading: var(--il-orange);
}
```

This overrides the heading color for the white theme. Note that you can't just override the `--ilw-color--white--heading`
on the card because the `--ilw-color--heading` is calculated in the root with the original value of `--ilw-color--white--heading`.
