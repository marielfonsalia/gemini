# gxg-drop-down

<h2>Notes</h2>
<ul>
  <li>The button content is passed as slotted content, with slot attribute value equal to "button". Example: <code>&lt;span&gt; slot="button">The button custom content&lt;/span&gt;</code>. If no "button" sloted content is passed "Select item" text will apear on the drop-down button</li>
</ul>

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute      | Description                                                                                                         | Type      | Default   |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| `above`       | `above`        | Displays the dropdown .content-container above (usefull when there is no available space bellow/under the dropdown) | `boolean` | `false`   |
| `icon`        | `icon`         | the dropdown icon (optional)                                                                                        | `string`  | `""`      |
| `label`       | `label`        | the dropdown label (optional)                                                                                       | `string`  | `""`      |
| `maxHeight`   | `max-height`   | the dropdown max. height                                                                                            | `string`  | `"120px"` |
| `maxWidth`    | `max-width`    | The codropdownmbo max-width                                                                                         | `string`  | `"none"`  |
| `minWidth`    | `min-width`    | The dropdown min-width                                                                                              | `string`  | `"0"`     |
| `showContent` | `show-content` | Displays the dropdown content                                                                                       | `boolean` | `false`   |
| `width`       | `width`        | The dropdown width                                                                                                  | `string`  | `"240px"` |

## Events

| Event    | Description                                        | Type               |
| -------- | -------------------------------------------------- | ------------------ |
| `closed` | This events gets fired when the dropdown is closed | `CustomEvent<any>` |
| `opened` | This events gets fired when the dropdown is opened | `CustomEvent<any>` |

## Dependencies

### Depends on

- [gxg-icon](../icon)
- [gxg-button](../button)

### Graph

```mermaid
graph TD;
  gxg-drop-down --> gxg-icon
  gxg-drop-down --> gxg-button
  gxg-icon --> ch-icon
  gxg-button --> gxg-icon
  style gxg-drop-down fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
