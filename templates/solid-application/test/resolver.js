// eslint-disable-next-line functional/immutable-data, import/no-commonjs, import/no-unused-modules, unicorn/no-anonymous-default-export, unicorn/prefer-module -- jest expects a cjs default export
module.exports = (path, options) => {
  // msw restricts exports based on environment.
  // it's node exports are not available in a jsdom environment.
  // allow jest to access msw's node exports
  // without disabling export condition protections globally.
  // https://github.com/mswjs/msw/issues/1786
  if (/^(?:@mswjs\/interceptors\/|msw\/node$)/v.test(path)) {
    return options.defaultResolver(path, {
      ...options,
      conditions: options.conditions.filter(
        (condition) => condition !== "browser",
      ),
    });
  }

  return options.defaultResolver(path, options);
};
