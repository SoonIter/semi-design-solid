type clsType<
  T extends (string | Record<string, boolean>)[],
  R = {}
> = T extends [infer F, ...infer Rest]
  ? F extends string
    ? // @ts-ignore
      clsType<Rest, R & Record<F, true>>
    : clsType<
        // @ts-ignore
        Rest,
        // @ts-ignore
        R & { [p in keyof F as F[p] extends true ? true : never]: true }
      >
  : R;

function cls<T extends (string | Record<string, boolean>)[]>(...classNames: T) {
  return classNames.reduce((classList, className) => {
    if (typeof className === "string") {
      // @ts-ignore
      classList[className] = true;
    } else {
      if (className === null || className === undefined) {
        return classList;
      }
      Object.keys(className).forEach((key) => {
        // @ts-ignore
        classList[key] = className[key];
      });
    }
    return classList;
  }, {}) as clsType<T>;
}

export { cls };
