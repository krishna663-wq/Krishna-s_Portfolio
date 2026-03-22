declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: string | Element | (string | Element)[] | NodeList, vars: object);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: object): ScrollSmoother;
    static refresh(soft?: boolean): void;
    paused(value: boolean): ScrollSmoother | boolean;
    scrollTo(target: string | Element | number, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): number | void;
  }
}

declare module "gsap/all" {
  export * from "gsap/SplitText";
  export * from "gsap/ScrollSmoother";
}
