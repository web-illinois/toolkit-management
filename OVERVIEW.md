# Illinois Toolkit Global CSS Helpers

## Overview

These styles are part of the Illinois Toolkit global CSS. They enhance standard HTML elements with Illinois styling and responsive behavior; they are not web components and do not require JavaScript. Make sure the Illinois Toolkit global stylesheet is loaded before using the classes below.

### Button

Use a native `<button>` for an action that occurs on the current page, such as submitting a form, opening a dialog, or changing displayed content. Add `ilw-button` for the standard appearance.

Optional classes include:

- Size: `ilw-button-small` or `ilw-button-large`
- Width: `ilw-width-full`
- Theme: `ilw-theme-blue`, `ilw-theme-orange`, `ilw-theme-blue-solid`, `ilw-theme-orange-solid`, `ilw-theme-blue-outline`, `ilw-theme-orange-outline`, `ilw-theme-blue-inverse`, or `ilw-theme-orange-inverse`

Use only one size and one theme class on a button. The inverse themes are intended for backgrounds where the standard button treatment does not provide the desired contrast.

### Button (anchor)

Use an anchor styled as a button when activating it takes the visitor to another page, file, or location. The `<a>` element must have a meaningful `href`; add `ilw-button` and any appropriate size or theme class.

Do not use a link as a substitute for a button that performs an in-page action. Styling does not change the element's native behavior or accessibility role.

### Buttons (in a list)

Use a list when several related actions or destinations should appear as a button group. Apply `ilw-buttons` to a `<ul>` for a centered group or `ilw-buttons-left` for a left-aligned group. Each button or link belongs inside its own `<li>`.

Theme and size classes may be applied to individual links or buttons. Keep the group short and order choices by importance.

### Image Cover

Image Cover makes an image fill the available area of its container while preserving its proportions. The container must have a meaningful width and height.

Apply one focal-position class to the container:

- `ilw-image-cover`: center
- `ilw-image-cover-top`: top
- `ilw-image-cover-bottom`: bottom
- `ilw-image-cover-left`: left
- `ilw-image-cover-right`: right

Choose the position that keeps the important part of the image visible when cropping occurs.

### Screen Reader Only text

Apply `ilw-sr-only` to short text that should be available to assistive technology but visually hidden. Use it only to add context that is evident visually but would otherwise be ambiguous to a screen-reader user.

A common use is making repeated link names unique, such as adding an article title after several visible “Read more” labels. Do not use `ilw-sr-only` to hide headings or essential instructions; visible and spoken page structure should remain aligned.

### Tables

Use a table only for data that has meaningful relationships across rows and columns. Standard table markup receives the toolkit's base styling.

Optional classes include:

- `ilw-table-stripe` on the table for alternating row backgrounds
- `ilw-table-responsive` on a containing `<div>` to allow wide tables to scroll horizontally on smaller screens
- Table themes: `ilw-theme-table-gray`, `ilw-theme-table-blue`, `ilw-theme-table-orange`, `ilw-theme-table-blue-light`, or `ilw-theme-table-orange-white-background`

The responsive wrapper changes presentation only. The table still needs correct semantic markup.

## Code Examples

### Button

```html
<button type="button" class="ilw-button ilw-theme-blue">
  Open filters
</button>
```

Use `type="button"` for a general-purpose button inside a form. Use `type="submit"` only when the control should submit the form.

### Button (anchor)

```html
<a href="/admissions/apply" class="ilw-button ilw-theme-orange-solid">
  Apply now
</a>
```

### Buttons (in a list)

```html
<ul class="ilw-buttons-left">
  <li>
    <a href="/academics/programs" class="ilw-theme-blue">Explore programs</a>
  </li>
  <li>
    <a href="/visit" class="ilw-theme-orange">Plan a visit</a>
  </li>
  <li>
    <button type="button">Request information</button>
  </li>
</ul>
```

### Image Cover

```html
<div class="ilw-image-cover-top" style="width: 100%; height: 24rem;">
  <img
    src="/images/campus.jpg"
    alt="Students walking across the Main Quad in autumn"
  >
</div>
```

Use an empty `alt` attribute only when the image is decorative and conveys no information:

```html
<div class="ilw-image-cover">
  <img src="/images/texture.jpg" alt="">
</div>
```

### Screen Reader Only text

```html
<article>
  <h3>New undergraduate research opportunities</h3>
  <p>Applications are open for the fall semester.</p>
  <a href="/news/research-opportunities">
    Read more
    <span class="ilw-sr-only">
      about new undergraduate research opportunities
    </span>
  </a>
</article>
```

### Tables

```html
<div class="ilw-table-responsive" tabindex="0" role="region"
     aria-label="Fall course schedule">
  <table class="ilw-table-stripe ilw-theme-table-blue">
    <caption>Fall course schedule</caption>
    <thead>
      <tr>
        <th scope="col">Course</th>
        <th scope="col">Instructor</th>
        <th scope="col">Credits</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Introduction to Biology</th>
        <td>Dr. Smith</td>
        <td>3</td>
      </tr>
      <tr>
        <th scope="row">World History</th>
        <td>Dr. Lee</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>
</div>
```

The focusable, labeled wrapper makes the scrollable region reachable and identifiable to keyboard and screen-reader users. Test this behavior with the assistive technologies supported by your site.

## Accessibility Notes and Use

- Choose elements by behavior: use `<button>` for actions and `<a href="…">` for navigation. Do not rely on CSS to change semantics.
- Give every interactive control a concise, descriptive accessible name. Avoid vague labels such as “Click here.”
- Preserve a visible keyboard focus indicator. Test buttons, links, and horizontally scrollable tables using only the keyboard.
- Do not communicate meaning through color alone. Confirm that the selected theme has sufficient contrast against its background.
- Use `disabled` for a native button that is temporarily unavailable. Anchors do not support the `disabled` attribute; remove the link or provide an appropriate alternative state instead.
- If a link opens a new window or downloads a file, tell the visitor in the link text or with carefully written screen-reader-only text.
- Write useful image alternatives based on the image's purpose. Use `alt=""` for decorative images, and avoid repeating adjacent text.
- Use `ilw-sr-only` sparingly. Hidden text should clarify an existing control or relationship, not introduce essential information unavailable to sighted users.
- For data tables, provide a concise `<caption>`, identify headers with `<th>`, and use `scope="col"` or `scope="row"` for straightforward tables. Complex tables may need additional header associations.
- Do not use tables for visual page layout. Consider a simpler data presentation on small screens when horizontal scrolling would make comparison difficult.

## External references

- [Illinois Toolkit Management repository](https://github.com/web-illinois/toolkit-management)
- [Illinois Toolkit global CSS guidance](https://github.com/web-illinois/toolkit-management/tree/main/global-css)
- [Illinois Toolkit Builder](https://builder3.toolkit.illinois.edu/)
- [W3C WAI: Using HTML form controls and links](https://www.w3.org/WAI/WCAG22/Techniques/html/H91)
- [W3C WAI: Tables tutorial](https://www.w3.org/WAI/tutorials/tables/)
- [W3C WAI: Hiding a portion of link text with CSS](https://www.w3.org/WAI/WCAG21/Techniques/css/C7.html)
