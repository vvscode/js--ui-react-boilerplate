declare module 'react-jss' {
  import { ComponentType } from 'react';

  interface Styles {
    [key: string]: string;
  }

  type Decorator = (component: ComponentType) => ComponentType;

  export default function injectSheet(styles: Styles): Decorator;
}
