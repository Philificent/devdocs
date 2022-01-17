# Transparent 1x1 Base64-encoded Image

The classic 1x1 image pixel can be useful for lazy-loading images. In this scenario you place the 1x1 string as the source and then use a data-attribute and JavaScript to swap it out for another image.

There are other image techniques that may be better suited, but still not a bad tool to have in the arsenal.

:::note
The examples below contain only `src` and `alt` properties in the `img` elements. Any time you use an image element you really should make sure that you add dimentions to avoid page-reflow or as Google calls it Cumulative Layout Shift (CLS) in Web Vitals.
:::

## GIF Formatted 1x1 Base64

```text
data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
```

### CSS

```css
background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
```

### HTML

```html
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="text here" />
```

---

## PNG Formatted 1x1 Base64

```text
iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==
```

### CSS

```css
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==);
```

### HTML

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==">
```
