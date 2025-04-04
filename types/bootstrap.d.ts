declare module "bootstrap/dist/js/bootstrap.bundle.min.js" {
    export const Carousel: new (
      element: HTMLElement,
      options?: {
        interval?: number;
        ride?: string;
        touch?: boolean;
      }
    ) => {
      dispose: () => void;
    };
  }
  