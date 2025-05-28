# HTMX IntelliSense

> **⚠️ Community Extension**: This is a **third-party, community-developed** VS Code extension for HTMX. It is **not officially affiliated with or endorsed** by the HTMX project or its maintainers.

A comprehensive VS Code extension that provides intelligent code completion, hover information, syntax highlighting, and code snippets for **HTMX v2** development with full backward compatibility for v1.

## ✨ What's New in HTMX v2

This community extension fully supports **HTMX v2.0+** features including:
- **🎯 Enhanced Event Handling**: Complete `hx-on:*` syntax support for all HTMX and DOM events
- **🚀 HTMX Extension Support**: Support for extensions from the official `bigskysoftware/htmx-extensions` repository
- **⚡ Performance Improvements**: Better syntax highlighting and completion performance
- **🔧 Backward Compatibility**: Seamless support for both HTMX v1 and v2 projects

## Features

### 🚀 Intelligent Auto-completion
- **HTMX v2 Attributes**: Smart completion for all HTMX v2 attributes including new `hx-on:*` event handlers
- **HTMX Official Extensions**: Auto-complete for official HTMX extensions from `bigskysoftware/htmx-extensions`
- **Community Extensions**: Support for popular community-maintained HTMX extensions
- **Attribute Values**: Context-aware suggestions for attribute values (swap methods, trigger events, selectors)
- **Event Handlers**: Complete `hx-on:htmx:*` and `hx-on:dom-event` patterns for HTMX v2
- **Trigger Events**: Auto-complete common trigger events like `click`, `change`, `keyup`, etc.
- **Swap Methods**: Suggestions for `innerHTML`, `outerHTML`, `beforebegin`, etc.

### 🎯 HTMX v2 Event System
Full support for the new `hx-on:*` syntax:
- **HTMX Lifecycle Events**: `hx-on:htmx:before-request`, `hx-on:htmx:after-swap`, etc.
- **DOM Events**: `hx-on:click`, `hx-on:change`, `hx-on:submit`, etc.
- **Custom Events**: Auto-completion and validation for custom event handlers

### 🔌 Extension Support
Comprehensive auto-completion for HTMX extensions:
- **HTMX Official Extensions**: `debug`, `ws`, `sse`, `head-support`, `response-targets`, `preload`, `idiomorph`
- **Community HTMX Extensions**: `json-enc`, `client-side-templates`, `class-tools`, `loading-states`, `alpine-morph`
- **Utility Extensions**: `ajax-header`, `event-header`, `path-deps`, `remove-me`, `restored`
- **Legacy Support**: `method-override`, `include-vals`, `disable-element`

### 📖 Rich Hover Information
- **Detailed Descriptions**: Hover over HTMX attributes to see comprehensive explanations with v2-specific notes
- **Usage Examples**: See possible values and usage patterns for both v1 and v2
- **Documentation Links**: Quick access to relevant HTMX documentation

### 🎨 Syntax Highlighting
- **HTMX v2 Attributes**: Special highlighting for HTMX v2 attributes including `hx-on:*` patterns
- **Attribute Values**: Syntax highlighting for URLs, selectors, and special values
- **Extension Support**: Highlighting for extension-related attributes

### 📝 Code Snippets
Ready-to-use code snippets optimized for HTMX v2:

- `htmx-template` - Basic HTMX v2 HTML template with CDN 2.0
- `htmx-form` - HTMX-enhanced form with v2 event handling
- `htmx-search` - Search input with delayed trigger and v2 events
- `htmx-load-more` - Load more content pattern with v2 syntax
- `htmx-infinite-scroll` - Infinite scroll implementation
- `htmx-modal` - Modal trigger button with v2 event handlers
- `htmx-poll` - Auto-polling content with modern syntax
- `htmx-upload` - File upload with progress and v2 events
- `htmx-sse` - Server-Sent Events with v2 extension syntax
- `htmx-ws` - WebSocket connection with v2 extension syntax
- And many more!

### 🔧 Language Support
- **HTML**: Full support in `.html` files
- **HTM**: Support for `.htm` files
- **HTMX**: Dedicated support for `.htmx` files

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "HTMX IntelliSense"
4. Click Install

Or install via command line:
```bash
code --install-extension your-publisher-name.htmx-intellisense
```

## Usage

### Auto-completion
Start typing `hx-` in any HTML tag to see available HTMX attributes:

```html
<button hx-get="/api/data" hx-target="#result" hx-swap="innerHTML">
    Load Data
</button>
```

### Snippets
Type a snippet prefix and press Tab:

```html
<!-- Type 'htmx-form' and press Tab -->
<form hx-post="/submit" hx-target="#result" hx-swap="innerHTML">
    <!-- form content -->
    <button type="submit">Submit</button>
</form>
```

### Commands
Access commands via Command Palette (Ctrl+Shift+P):

- **HTMX: Insert Template** - Insert a basic HTMX HTML template

### Extension Usage Examples

#### Using Core Extensions
```html
<!-- Use multiple extensions -->
<div hx-ext="idiomorph,head-support" hx-get="/update" hx-target="#content">
    Content will morph smoothly and merge head tags
</div>

<!-- JSON encoding for form data -->
<form hx-ext="json-enc" hx-post="/api/users" hx-target="#result">
    <input name="email" type="email" required>
    <button type="submit">Submit as JSON</button>
</form>

<!-- Server-Sent Events -->
<div hx-ext="sse" sse-connect="/events" sse-swap="message" hx-target="#notifications">
    Real-time notifications
</div>
```

#### HTMX v2 Event Handling
```html
<!-- Modern event handling with hx-on: -->
<button hx-get="/data" 
        hx-target="#result"
        hx-on:htmx:before-request="this.disabled = true"
        hx-on:htmx:after-request="this.disabled = false"
        hx-on:click="console.log('Button clicked')">
    Load Data
</button>
```

## Configuration

The extension can be configured via VS Code settings:

```json
{
    "htmx-intellisense.enableAutoCompletion": true,
    "htmx-intellisense.enableHoverInfo": true
}
```

### Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `htmx-intellisense.enableAutoCompletion` | boolean | `true` | Enable HTMX attribute auto-completion |
| `htmx-intellisense.enableHoverInfo` | boolean | `true` | Show hover information for HTMX attributes |

## Supported HTMX Attributes

### Core Request Attributes
- `hx-get`, `hx-post`, `hx-put`, `hx-patch`, `hx-delete`
- `hx-trigger`, `hx-target`, `hx-swap`
- `hx-vals`, `hx-headers`, `hx-params`
- `hx-confirm`, `hx-prompt`

### HTMX v2 Event Handling ✨
- **Lifecycle Events**: `hx-on:htmx:before-request`, `hx-on:htmx:after-swap`, `hx-on:htmx:config-request`
- **DOM Events**: `hx-on:click`, `hx-on:change`, `hx-on:submit`, `hx-on:keyup`, etc.
- **Custom Events**: Full support for any `hx-on:*` pattern

### Advanced Attributes
- `hx-select`, `hx-select-oob`, `hx-swap-oob`
- `hx-include`, `hx-indicator`
- `hx-push-url`, `hx-replace-url`
- `hx-boost`, `hx-encoding`
- `hx-request`, `hx-sync`
- `hx-validate`, `hx-vars`
- `hx-disinherit`, `hx-preserve`
- `hx-disabled-elt`, `hx-loading-states`

### Extension Support (`hx-ext`) 🔌
- **Core Extensions**: `head-support`, `idiomorph`, `preload`, `response-targets`, `sse`, `ws`
- **Data Extensions**: `json-enc`, `client-side-templates`, `form-json`
- **UI Extensions**: `alpine-morph`, `class-tools`, `loading-states`, `multi-swap`
- **Utility Extensions**: `debug`, `ajax-header`, `event-header`, `path-deps`, `remove-me`
- **Integration Extensions**: `signalr`, `no-cache`, `safe-nonce`
- **Community Extensions**: `hx-new`, `tomselect`, `htmx-ai`, and many more!

### Legacy Attributes (v1 Compatibility)
- `hx-sse`, `hx-ws` (deprecated in v2, use extensions instead)
- `ws-connect`, `ws-send` (now part of `ws` extension)

## Development

### Prerequisites
- [Bun](https://bun.sh) - Fast JavaScript runtime
- [Node.js](https://nodejs.org) - For VS Code extension development

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd htmx-intellisense

# Install dependencies
bun install

# Build the extension
bun run compile

# Watch for changes during development
bun run watch
```

### Testing
```bash
# Run linting
bun run lint

# Run tests
bun run test
```

### Building VSIX Package
```bash
# Install vsce globally
npm install -g vsce

# Build package
vsce package
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Areas for Contribution
- Additional HTMX snippets
- Improved syntax highlighting
- Better error detection
- Performance optimizations
- Documentation improvements

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Attribution & Acknowledgments

**⚠️ IMPORTANT**: This VS Code extension is an **independent, third-party project** developed by the community. It is **NOT officially affiliated with, endorsed by, or supported by** the HTMX project or its maintainers (Big Sky Software). 

- This extension **is NOT** an official HTMX product
- It is developed and maintained independently by community contributors  
- For official HTMX support and documentation, please visit [htmx.org](https://htmx.org)
- All HTMX trademarks and copyrights belong to their respective owners

**HTMX** - This extension provides developer tooling for the HTMX library created by Carson Gross and contributors. HTMX itself is licensed under the BSD 2-Clause License. Visit [htmx.org](https://htmx.org) for the official HTMX project.

## Resources

- [HTMX Official Documentation](https://htmx.org/docs/)
- [HTMX Examples](https://htmx.org/examples/)
- [VS Code Extension API](https://code.visualstudio.com/api)

## Changelog

### 0.0.1
- Initial release
- HTMX attribute auto-completion
- Hover information for HTMX attributes
- Comprehensive code snippets
- Syntax highlighting for HTMX files
- Support for HTML, HTM, and HTMX files

---

**Enjoy building amazing web applications with HTMX!** 🚀
