# Icons

## Context

## Design

```bash
yarn add --dev @material-icons/svg @svgr/webpack
```

`custom.d.ts`

```typescript
declare module "*.svg" {
  const svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // eslint-disable-next-line no-restricted-exports, import/no-default-export -- prefer default export to allow easier aliasing
  export default svg;
}
```

`webpack/config/common.ts`

```typescript
export default {
  module: {
    rules: [
      {
        test: /\.svg$/u,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
```

## Rationale

- prefer SVG over web fonts.
  - `svg` supports `title` and `desc` tags and is compatible with WAI-ARIA specifications, making it more accessible.
  - icon fonts may render `□` tofu if users override the font family (i.e. for accessibility reasons like dyslexia).
  - browsers use different algorithms (e.g. anti-aliasing) when rendering fonts compared to images, resulting in blur and alignment issues for icon fonts.
  - icon fonts contain all icons in the library, rather than just the icons in use.
- prefer `svg` over `img`.
  - inline `svg` provides more styling control, allowing styling of individual components with support for additional CSS properties. `img` can only be coloured using filters and masks.
  - inline `svg` loads more quickly as it does not require network requests for additional assets.

## Consequences

- prefer `svg` over `img`.
  - inline `svg` cannot be cached, in contrast to `img`.

## References

- [@material-icons/svg](https://github.com/material-icons/material-icons)
- [@svgr/webpack](https://github.com/gregberge/svgr/tree/main/packages/webpack)
- [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)
