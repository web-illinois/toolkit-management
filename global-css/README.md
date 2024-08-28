# Information about Global Styles

Along with individual components, the toolkit has a few helper CSS classes and shared class information in a global CSS. This gets built with the individual components. 

This contains:
* root: Root variables.
* buttons: A helper class to handle a button, button link, group of buttons, and group of button links.  (along with themed buttons, using `ilw-theme-orange`, `ilw-theme-white`, and `ilw-theme-white-orange`). Individual buttons are `a` or `button` and marked with `ilw-button`. Groups are to be in an `ul` list and marked with `ilw-buttons`.
* image-cover: A helper class to create an area that contains an image that covers the entire area. The container around the `img` should use the `ilw-image-cover` class if you want the focus of the image in the center. You can also use `ilw-image-cover-top`, `ilw-image-cover-bottom`, `ilw-image-cover-left`, or `ilw-image-cover-right` to change the focus of the image to top, bottom, left, or right.
* screen-reader: A helper class to handle text that should be invisible to a sighted user but still be read by a screen reader. This can be any item and has the class `ilw-sr-only`. 
* width-full: A helper class that will allow an item to break margins. You can put the `ilw-width-full` class on any item and it will break margins. 