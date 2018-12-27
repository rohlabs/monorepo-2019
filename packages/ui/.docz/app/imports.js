export const imports = {
  'src/components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'),
}
