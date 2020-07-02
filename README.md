markdown-heading-loader
==

Webpack loader which return first markdown heading with depth 1.

For example, in the next document:

```
Webpack
==

Loaders
--

### Api

Loaders are awesome
```

String `Webpack` is heading with depth 1.

Usage
--

Add rule to your webpack configuration:
```
{
  test: /\.md$/,
  loader: `markdown-heading-loader`
}
```

Or use direct within import:

```js
import heading from '!markdown-heading-loader!./article.md'
```

Options
--

- **commonmark** Use common markdown features (default: *false*)
- **remove** Remove heading and return modified markdown text

Author and license
--

Morulus <vladimirmorulus@gmail.com>

Under [MIT](./LICENSE) license, 2018
