import { type Hooks, type Plugin, structUtils } from "@yarnpkg/core";

// Keep in sync with https://github.com/SukkaW/nolyfill/blob/master/packages/tools/cli/src/all-packages.ts
const PACKAGES = [
  "abab",
  "array-buffer-byte-length",
  "array-flatten",
  "array-includes",
  "array.from",
  "array.of",
  "array.prototype.at",
  "array.prototype.every",
  "array.prototype.find",
  "array.prototype.findlast",
  "array.prototype.findlastindex",
  "array.prototype.flat",
  "array.prototype.flatmap",
  "array.prototype.flatmap",
  "array.prototype.foreach",
  "array.prototype.reduce",
  "array.prototype.toreversed",
  "array.prototype.tosorted",
  "arraybuffer.prototype.slice",
  "assert",
  "asynciterator.prototype",
  "available-typed-arrays",
  "deep-equal",
  "deep-equal-json",
  "define-properties",
  "es-aggregate-error",
  "es-iterator-helpers",
  "es-set-tostringtag",
  "es6-object-assign",
  "function-bind",
  "function.prototype.name",
  "get-symbol-description",
  "globalthis",
  "gopd",
  "harmony-reflect",
  "has",
  "has-property-descriptors",
  "has-proto",
  "has-symbols",
  "has-tostringtag",
  "hasown",
  "internal-slot",
  "is-arguments",
  "is-array-buffer",
  "is-core-module",
  "is-date-object",
  "is-generator-function",
  "is-nan",
  "is-regex",
  "is-shared-array-buffer",
  "is-string",
  "is-symbol",
  "is-typed-array",
  "is-weakref",
  "isarray",
  "iterator.prototype",
  "json-stable-stringify",
  "jsonify",
  "number-is-nan",
  "object-is",
  "object-keys",
  "object.assign",
  "object.entries",
  "object.fromentries",
  "object.getownpropertydescriptors",
  "object.groupby",
  "object.hasown",
  "object.values",
  "promise.allsettled",
  "promise.any",
  "reflect.getprototypeof",
  "reflect.ownkeys",
  "regexp.prototype.flags",
  "safe-array-concat",
  "safe-buffer",
  "safe-regex-test",
  "safer-buffer",
  "set-function-length",
  "side-channel",
  "string.prototype.at",
  "string.prototype.codepointat",
  "string.prototype.includes",
  "string.prototype.matchall",
  "string.prototype.padend",
  "string.prototype.padstart",
  "string.prototype.repeat",
  "string.prototype.replaceall",
  "string.prototype.split",
  "string.prototype.startswith",
  "string.prototype.trim",
  "string.prototype.trimend",
  "string.prototype.trimleft",
  "string.prototype.trimright",
  "string.prototype.trimstart",
  "typed-array-buffer",
  "typed-array-byte-length",
  "typed-array-byte-offset",
  "typed-array-length",
  "typedarray",
  "typedarray.prototype.slice",
  "unbox-primitive",
  "util.promisify",
  "which-boxed-primitive",
  "which-typed-array",
];

const PATCHES = new Map(
  PACKAGES.map((name) => [
    structUtils.makeIdent(null, name).identHash,
    structUtils.makeIdent("nolyfill", name),
  ]),
);

const plugin: Plugin<Hooks> = {
  hooks: {
    // eslint-disable-next-line @typescript-eslint/require-await -- Hook expects a promise
    reduceDependency: async (dependency) => {
      const patchIdent = PATCHES.get(dependency.identHash);

      if (patchIdent) {
        const patchDescriptor = structUtils.makeDescriptor(
          patchIdent,
          "latest",
        );

        const range = structUtils.makeRange({
          params: null,
          protocol: "npm:",
          selector: structUtils.stringifyDescriptor(patchDescriptor),
          source: null,
        });

        const patchedDescriptor = structUtils.makeDescriptor(dependency, range);

        return patchedDescriptor;
      }

      return dependency;
    },
  },
};

// eslint-disable-next-line no-restricted-exports, import/no-default-export -- `@yarnpkg/builder` expects a default export
export default plugin;
