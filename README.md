# HTMX IntelliSense

A comprehensive VS Code extension that provides intelligent code completion, hover information, syntax highlighting, and code snippets for HTMX development.

## Features

### 🚀 Intelligent Auto-completion
- **HTMX Attributes**: Smart completion for all HTMX attributes (`hx-get`, `hx-post`, `hx-target`, etc.)
- **Attribute Values**: Context-aware suggestions for attribute values (swap methods, trigger events, selectors)
- **Trigger Events**: Auto-complete common trigger events like `click`, `change`, `keyup`, etc.
- **Swap Methods**: Suggestions for `innerHTML`, `outerHTML`, `beforebegin`, etc.

### 📖 Rich Hover Information
- **Detailed Descriptions**: Hover over HTMX attributes to see comprehensive explanations
- **Usage Examples**: See possible values and usage patterns
- **Documentation Links**: Quick access to relevant HTMX documentation

### 🎨 Syntax Highlighting
- **HTMX Attributes**: Special highlighting for HTMX attributes in HTML files
- **Attribute Values**: Syntax highlighting for URLs, selectors, and special values
- **WebSocket Support**: Highlighting for WebSocket-related attributes

### 📝 Code Snippets
Ready-to-use code snippets for common HTMX patterns:

- `htmx-template` - Basic HTMX HTML template
- `htmx-form` - HTMX-enhanced form
- `htmx-search` - Search input with delayed trigger
- `htmx-load-more` - Load more content pattern
- `htmx-infinite-scroll` - Infinite scroll implementation
- `htmx-modal` - Modal trigger button
- `htmx-poll` - Auto-polling content
- `htmx-upload` - File upload with progress
- `htmx-ws` - WebSocket connection
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

### Core Attributes
- `hx-get`, `hx-post`, `hx-put`, `hx-patch`, `hx-delete`
- `hx-trigger`, `hx-target`, `hx-swap`
- `hx-vals`, `hx-headers`, `hx-params`
- `hx-confirm`, `hx-prompt`

### Advanced Attributes
- `hx-select`, `hx-select-oob`, `hx-swap-oob`
- `hx-include`, `hx-indicator`
- `hx-push-url`, `hx-replace-url`
- `hx-boost`, `hx-encoding`
- `hx-ext`, `hx-history`
- `hx-request`, `hx-sync`
- `hx-validate`, `hx-vars`
- `hx-disinherit`, `hx-preserve`
- `hx-disabled-elt`, `hx-loading-states`

### WebSocket & SSE
- `hx-sse`, `hx-ws`
- `ws-connect`, `ws-send`

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

- **HTMX** - This extension provides tooling for the HTMX library created by Carson Gross and contributors. HTMX is licensed under the BSD 2-Clause License. Visit [htmx.org](https://htmx.org) for more information.
- **VS Code Extension API** - Built using Microsoft's VS Code Extension API
- **Community** - Inspired by the need for better developer tooling in the HTMX ecosystem

## Disclaimer

This extension is an independent project and is not officially affiliated with or endorsed by the HTMX project or its maintainers. All trademarks belong to their respective owners.

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
