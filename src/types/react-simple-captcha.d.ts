declare module "react-simple-captcha" {
  import { Component, ComponentProps } from "react";

  /**
   * Initializes the captcha engine with the given number of characters.
   * Call this in a useEffect hook when the component mounts.
   */
  export function loadCaptchaEnginge(
    numberOfCharacters: number,
    backgroundColor?: string,
    fontColor?: string,
    charMap?: "" | "upper" | "lower" | "numbers" | "special_char",
  ): void;

  /**
   * Validates the user's input against the generated captcha.
   * Returns true if the input matches, false otherwise.
   * By default (reload = true), automatically reloads the captcha on mismatch.
   */
  export function validateCaptcha(userValue: string, reload?: boolean): boolean;

  interface LoadCanvasTemplateProps {
    reloadText?: string;
    reloadColor?: string;
  }

  /**
   * Renders a captcha canvas with a "Reload Captcha" link below it.
   */
  export class LoadCanvasTemplate extends Component<LoadCanvasTemplateProps> {}

  /**
   * Renders a captcha canvas without a reload link.
   */
  export class LoadCanvasTemplateNoReload extends Component<
    ComponentProps<typeof Component>
  > {}
}
