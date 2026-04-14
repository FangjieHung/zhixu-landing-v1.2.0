declare module 'aos' {
  export interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
  }

  const AOS: {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
