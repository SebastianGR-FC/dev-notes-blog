---
title: Jekyll Front Matter Reference
date: 2024-01-20
excerpt: Reference guide for Jekyll front matter format used in dev notes
categories: [documentation]
tags: [jekyll, frontmatter, reference]
published: true
---

# Jekyll Front Matter Reference

This blog uses the [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/) format for all notes. Front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines.

## Basic Format

```yaml
---
title: Your Note Title
date: 2024-01-20
excerpt: Short description of the note
categories: [category1, category2]
tags: [tag1, tag2, tag3]
published: true
---

# Your content here
```

## Available Fields

### Required Fields

- **title**: The title of the note
- **date**: Publication date in format `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS +/-TTTT`

### Optional Fields

- **excerpt**: Short description or summary of the note
- **categories**: Array of categories (can be YAML list or space-separated string)
- **tags**: Array of tags (can be YAML list or space-separated string)
- **published**: Boolean (defaults to `true`). Set to `false` to hide the note from listings

## Examples

### Minimal Example

```yaml
---
title: My Note
date: 2024-01-20
---
```

### Full Example

```yaml
---
title: Building a REST API
date: 2024-01-20 14:30:00 -0500
excerpt: Notes on building a RESTful API with Node.js
categories: [backend, api]
tags: [nodejs, express, rest, api]
published: true
---
```

### Unpublished Draft

```yaml
---
title: Work in Progress
date: 2024-01-20
published: false
---
```

## Notes

- Front matter must be valid YAML
- Use triple dashes (`---`) to delimit front matter
- Tags and categories can be arrays or space-separated strings
- If `published` is not specified, it defaults to `true`
- Dates can be in format `YYYY-MM-DD` or include time: `YYYY-MM-DD HH:MM:SS +/-TTTT`

