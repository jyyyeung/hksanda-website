# Block Structure

- Sections

  > sections: section[]

  - Section

    - [Header](#header)
    - [Body](#body)
    - [Footer](#footer)

---

> **Base Props**
> cols?: number (24/ depends on which section)
> gutters?: number (tbd)
> classes: string|null (null)

## Header

- StartLine
- [Text](#text)

> StartLine: boolean
> Text: Text

## Body

- [Image](#image)
- [Text](#text)
- [Image](#image)

## Footer

- [Text](#text)
- EndLine

### Headings

- Heading 1 (h1)
- Heading 2 (h2)
- Heading 3 (h3)

> h1?: [{h1: string, text: {} }]
> h2?: [{h2: string, text: {} }]
> h3?: [{h3: string, text: {} }]

### Text

Note: **Can be in markdown**

- Paragraphs (p)
- [List](#list)
- [Buttons](#button)

> paragraphs?: string[]

### List

- List items (ol>li)

### Button

- Buttons (btn)

### Image

- Images (String[])
  <!-- FIXME: maybe can change  -->
  > onLeft: Boolean
  > preview: boolean
