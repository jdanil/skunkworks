# Configuration Files

## Decision

Prefer config files over `package.json`.

Use JSON or YAML file extensions where supported.
Prefer JSON over YAML.
Prefer `.yaml` over `.yml`.

## Rationale

IDEs often support schema validation of config files.
Individual config files improve discoverability and avoids cluttering `package.json`.

Providing a file extension allows config files to be formatted without having to whitelist and map files to a parser.

JSON should be preferred over YAML unless comments are required.
JSON is more prescriptive and provides less room for error.

`.yaml` is the official extension recommended by [YAML](https://yaml.org/faq.html).
`.yml` is an [8.3 filename](https://en.wikipedia.org/wiki/8.3_filename).
