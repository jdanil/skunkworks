# Configuration Files

## Decision

Prefer config files over `package.json`.

Use JSON or YAML file extensions where supported.
Prefer JSON over YAML.

## Rationale

Individual config files improve discoverability and avoids cluttering `package.json`.

Providing a file extension allows config files to be formatted without having to whitelist and map files to a parser.

JSON should be preferred over YAML unless comments are required.
JSON is more prescriptive and provides less room for error.
