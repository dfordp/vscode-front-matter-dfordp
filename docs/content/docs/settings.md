---
title: Settings
slug: settings
description: 
date: '2021-08-30T16:13:00.546Z'
lastmod: '2021-08-30T16:13:01.763Z'
weight: 7
---

# Settings

Most of the actions are configurable to your needs. In this part of the documentation all settings are explained.

## Where is the data stored?

The extension stores all settings in the VS Code user settings file located in your project under `.vscode/settings.json`.

## Available settings

### frontMatter.content.autoUpdateDate

Specify if you want to automatically update the modified date of your article/page.

- Type: `boolean`
- Default: `false`

### frontMatter.content.fmHighlight

Specify if you want to highlight the Front Matter in the Markdown file.

- Type: `boolean`
- Default: `true`

### frontMatter.content.folders

This array of folders defines where the extension can easily create new content by running the create article command.

- Type: `object[]`
- Default: `[]`

Sample:

```json
{
  "frontMatter.content.folders": [{
    "title": "Articles",
    "fsPath": "<the path to the folder>",
    "paths": ["<wsl-folder-path>"]
  }]
}
```

### frontMatter.content.publicFolder

Specify the folder name where all your assets are located. For instance in Hugo this is the `static` folder.

- Type: `string`
- Default: `""`


### frontMatter.custom.scripts

Specify the path to a Node.js script to execute. The current file path will be provided as an argument."

- Type: `object[]`
- Default: `[]`

Sample:

```json
{
  "frontMatter.custom.scripts": [{
    "title": "Generate social image",
    "script": "./scripts/social-img.js",
    "nodeBin": "~/.nvm/versions/node/v14.15.5/bin/node"
  }]
}
```

### frontMatter.dashboard.openOnStart

Specify if you want to open the dashboard when you start VS Code.

- Type: `boolean | null`
- Default: `null`

### frontMatter.panel.freeform

Specifies if you want to allow yourself from entering unknown tags/categories in the tag picker (when enabled, you will have the option to store them afterwards).

- Type: `boolean`
- Default: `true`

### frontMatter.preview.host

Specify the host URL (example: http://localhost:1313) to be used when opening the preview.

- Type: `string`
- Default: `""`

### frontMatter.preview.pathName

Specify the path you want to add after the host and before your slug. This can be used for instance to include the year/month like: `yyyy/MM`. The date will be generated based on the article its date field value.

- Type: `string`
- Default: `""`

> **Important**: As the value will be formatted with the article's date, it will try to convert all characters you enter. In case you wan to skip some characters or all of them, you need to wrap that part between two single quotes. Example: `"'blog/'yyyy/MM"` will result in: `blog/2021/08`.

### frontMatter.taxonomy.dateField

Specifies the date field name to use in your Front Matter.

- Type: `string`
- Default: `date`

### frontMatter.taxonomy.modifiedField

Specifies the modified date field name to use in your Front Matter.

- Type: `string`
- Default: `lastmod`

### frontMatter.taxonomy.dateFormat

Specify the date format for your articles. Check [date-fns formating](https://date-fns.org/v2.0.1/docs/format) for more information.

- Type: `string`
- Default: `iso`

### frontMatter.taxonomy.tags

Specifies the tags which can be used in the Front Matter.

- Type: `string[]`
- Default: `[]`
### frontMatter.taxonomy.categories

Specifies the categories which can be used in the Front Matter.

- Type: `string[]`
- Default: `[]`

### frontMatter.taxonomy.slugPrefix

Specify a prefix for the slug.

- Type: `string`
- Default: `""`

### frontMatter.taxonomy.slugSuffix

Specify a suffix for the slug.

- Type: `string`
- Default: `""`

### frontMatter.taxonomy.alignFilename

Align the filename with the new slug when it gets generated.

- Type: `boolean`
- Default: `false`


### frontMatter.taxonomy.indentArrays

Specify if arrays in front matter of the markdown files are indented.

- Type: `boolean`
- Default: `true`

### frontMatter.taxonomy.noPropertyValueQuotes

Specify the property names of which you want to remove the quotes in the output value. Warning: only use this when you know what you are doing. If you're going to, for instance, remove the quotes from the date property, you can add the following:

```json
{
  "frontMatter.taxonomy.noPropertyValueQuotes": ["date"]
}
```

- Type: `string[]`
- Default: `[]`

### frontMatter.taxonomy.frontMatterType

Specify which Front Matter language you want to use. The extension supports `YAML` (default) and `TOML`.

- Type: `enum: YAML | TOML`
- Default: `YAML`

### frontMatter.taxonomy.seoTitleLength

Specifies the optimal title length for SEO (set to `-1` to turn it off).

- Type: `number`
- Default: `60`

### frontMatter.taxonomy.seoDescriptionLength

Specifies the optimal description length for SEO (set to `-1` to turn it off).

- Type: `number`
- Default: `160`

### frontMatter.taxonomy.seoContentLengh

Specifies the optimal minimum length for your articles. Between 1,760 words – 2,400 is the absolute ideal article length for SEO in 2021. (set to `-1` to turn it off).

- Type: `number`
- Default: `1760`

### frontMatter.taxonomy.seoDescriptionField

Specifies the name of the SEO description field for your page.

- Type: `string`
- Default: `description`

### frontMatter.templates.folder

Specify the folder to use for your article templates.

- Type: `string`
- Default: `.templates`

### frontMatter.templates.prefix

Specify the prefix you want to add for your new article filenames.

- Type: `string`
- Default: `yyyy-MM-dd`