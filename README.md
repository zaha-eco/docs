# Print Tracker Documentation
This is the [Print Tracker documentation](www.docs.printtrackerpro.com) project.

## Translations
Translations for this project can be found in the `i18n/` directory. This directory contains an exact mirror of all of our documentation for each language code (pt-br, es-mx, etc).

Documentation files are written in [markdown](https://www.markdownguide.org/). Here's the basic anatomy of a markdown file.

```markdown
# Heading {#heading}
## Subheading {#subheading}
### Subsubheading {#subsubheading}
Paragraph
![image of something](image.png)
**Bold**
_Italic_
:::caution Caution
This is a warning
:::
```

When adding translations, it's critical that you only translate the following:
* The `Heading` but not `{#heading}` (this is an anchor for linking)
* The `Subheading` but not `{#subheading}` (this is an anchor for linking)
* The `Subsubheading` but not `{#subsubheading}` (this is an anchor for linking)
* The `Paragraph`
* The `[image of something]` but not `(image.png)` (this is a link to a filename)
* The `Bold`
* The `Italic`
* The `Caution` and `This is a warning` but not `:::caution` (this is a warning block)
