export interface Theme {
  /**
   * Fonts according to design spec, can be accessed using `fontFamily="key"` in component props
   */
  fonts: {
    [key: string]: string;
  }

  /**
   * Font-sizes according to design spec, can be accessed using `fontSize={index}` in component props
   */
  fontSizes: string[]

  /**
   * Colours according to design spec, can be accessed using `color={index}`/`color={index[]}` and `bg={index[]}`/`bg={index[]}` in component props
   */
  colors: {
    [key: string]: string[];
  }

  /**
   * Border-radii according to design spec, can be accessed using `borderRadius={index}` in component props
   */
  radii: string[]

  /**
   * spacing according to design spec, can be accessed using the `m(t|r|b|l)` and `p(t|r|b|l)` props with the corresponding index
   */
  space: string[]

  textStyles?: {
    [key: string]: {};
  }

  colorStyles?: {
    [key: string]: {};
  }

  buttons: {
    [key: string]: {};
  }
}
