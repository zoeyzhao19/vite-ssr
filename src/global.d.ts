declare module 'example-external-component'

declare module '@foo' {
  export default foo
}

declare module '@virtual-file' {
  export const msg: string;
}

declare module 'dep-import-type/deep' {
  interface Foo {}
}