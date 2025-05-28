import * as vscode from 'vscode';

// HTMX attributes with their descriptions and allowed values
const HTMX_ATTRIBUTES: Record<string, { description: string; values: string[] }> = {
    'hx-get': {
        description: 'Issues a GET request to the specified URL and replaces the element with the response',
        values: ['URL path or endpoint']
    },
    'hx-post': {
        description: 'Issues a POST request to the specified URL and replaces the element with the response',
        values: ['URL path or endpoint']
    },
    'hx-put': {
        description: 'Issues a PUT request to the specified URL and replaces the element with the response',
        values: ['URL path or endpoint']
    },
    'hx-patch': {
        description: 'Issues a PATCH request to the specified URL and replaces the element with the response',
        values: ['URL path or endpoint']
    },
    'hx-delete': {
        description: 'Issues a DELETE request to the specified URL and replaces the element with the response',
        values: ['URL path or endpoint']
    },
    'hx-trigger': {
        description: 'Specifies the event that triggers the request',
        values: ['click', 'change', 'keyup', 'submit', 'load', 'revealed', 'intersect', 'every 2s', 'mouseenter', 'mouseleave', 'focus', 'blur']
    },
    'hx-target': {
        description: 'Specifies the target element to be swapped out by the response',
        values: ['CSS selector', 'this', 'closest <selector>', 'find <selector>', 'next', 'previous']
    },
    'hx-swap': {
        description: 'Controls how the response content replaces the target element',
        values: ['innerHTML', 'outerHTML', 'beforebegin', 'afterbegin', 'beforeend', 'afterend', 'delete', 'none']
    },
    'hx-vals': {
        description: 'Adds to the parameters that will be submitted with the request',
        values: ['JSON object', 'javascript:expression']
    },
    'hx-confirm': {
        description: 'Shows a confirm() dialog before issuing a request',
        values: ['Confirmation message text']
    },
    'hx-push-url': {
        description: 'Pushes the request URL into the browser location bar',
        values: ['true', 'false', 'URL']
    },
    'hx-select': {
        description: 'Select content to swap in from a response',
        values: ['CSS selector']
    },
    'hx-select-oob': {
        description: 'Select content to swap in from a response, out of band (outside of the target)',
        values: ['CSS selector']
    },
    'hx-swap-oob': {
        description: 'Marks content in a response to be swapped in via a CSS selector',
        values: ['true', 'CSS selector']
    },
    'hx-include': {
        description: 'Include additional element values in the request',
        values: ['CSS selector']
    },
    'hx-indicator': {
        description: 'The element to put the htmx-request class on during the request',
        values: ['CSS selector']
    },
    'hx-params': {
        description: 'Filters the parameters that will be submitted with a request',
        values: ['*', 'none', 'not <param-list>', '<param-list>']
    },
    'hx-boost': {
        description: 'Progressively enhances anchors and forms to use AJAX instead',
        values: ['true', 'false']
    },
    'hx-encoding': {
        description: 'Changes the request encoding type',
        values: ['multipart/form-data']
    },
    'hx-ext': {
        description: 'Extensions to use for this element',
        values: [
            // Official Extensions (bigskysoftware/htmx-extensions)
            'debug', 'ws', 'sse', 'head-support', 'response-targets', 'preload', 'idiomorph',
            
            // Third-party Extensions (Community)
            'json-enc', 'client-side-templates', 'class-tools', 'loading-states', 'alpine-morph',
            'ajax-header', 'event-header', 'path-deps', 'path-params', 'remove-me', 'restored',
            'method-override', 'include-vals', 'disable-element',
            
            // Additional Community Extensions
            'multi-swap', 'morphdom-swap', 'no-cache'
        ]
    },
    'hx-headers': {
        description: 'Adds to the headers that will be submitted with the request',
        values: ['JSON object', 'javascript:expression']
    },
    'hx-history': {
        description: 'Prevent sensitive data being saved to the history cache',
        values: ['false']
    },
    'hx-history-elt': {
        description: 'The element to snapshot and restore during history navigation',
        values: ['CSS selector']
    },
    'hx-request': {
        description: 'Configures various aspects of the request',
        values: ['JSON object with timeout, credentials, noHeaders properties']
    },
    'hx-sync': {
        description: 'Control how requests made by different elements are synchronized',
        values: ['this:drop', 'this:abort', 'this:replace', 'this:queue']
    },
    'hx-validate': {
        description: 'Force elements to validate themselves before a request',
        values: ['true']
    },
    'hx-vars': {
        description: 'Adds to the variables that will be submitted with the request',
        values: ['name1:value1,name2:value2']
    },
    'hx-disinherit': {
        description: 'Control and disable automatic attribute inheritance',
        values: ['*', 'hx-target', 'hx-swap', 'hx-select']
    },
    'hx-preserve': {
        description: 'Preserves an element between requests',
        values: ['true']
    },
    'hx-prompt': {
        description: 'Shows a prompt() before submitting a request',
        values: ['Prompt message text']
    },
    'hx-replace-url': {
        description: 'Replace the URL in the browser location bar',
        values: ['true', 'false', 'URL']
    },
    'hx-disabled-elt': {
        description: 'Adds the disabled attribute to the specified elements during a request',
        values: ['CSS selector', 'this']
    },
    'hx-loading-states': {
        description: 'Allows you to disable the element during a request',
        values: ['true']
    },
    // HTMX v2 Event Handling - hx-on: syntax
    'hx-on:htmx:after-request': {
        description: 'HTMX v2: Triggered after an AJAX request has finished',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:before-request': {
        description: 'HTMX v2: Triggered before an AJAX request is made',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:config-request': {
        description: 'HTMX v2: Triggered before the request is configured',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:confirm': {
        description: 'HTMX v2: Triggered after a trigger occurs, allows you to cancel the request',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:history-cache-miss': {
        description: 'HTMX v2: Triggered on a cache miss in the history subsystem',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:history-cache-miss-error': {
        description: 'HTMX v2: Triggered on a unsuccessful remote retrieval',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:history-cache-miss-load': {
        description: 'HTMX v2: Triggered on a successful remote retrieval',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:history-restore': {
        description: 'HTMX v2: Triggered when htmx handles a history restoration action',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:before-cleanup': {
        description: 'HTMX v2: Triggered before htmx disables an element or removes it from the DOM',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:after-settle': {
        description: 'HTMX v2: Triggered after the DOM has settled',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:before-swap': {
        description: 'HTMX v2: Triggered before any response swap occurs',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:after-swap': {
        description: 'HTMX v2: Triggered after new content has been swapped in',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:before-send': {
        description: 'HTMX v2: Triggered just before an ajax request is sent',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:validate': {
        description: 'HTMX v2: Triggered before an element is validated',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:xhr-abort': {
        description: 'HTMX v2: Triggered when an ajax request aborts',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:xhr-load-end': {
        description: 'HTMX v2: Triggered when an ajax request ends',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:xhr-load-start': {
        description: 'HTMX v2: Triggered when an ajax request starts',
        values: ['JavaScript expression']
    },
    'hx-on:htmx:xhr-progress': {
        description: 'HTMX v2: Triggered periodically during an ajax request that supports progress events',
        values: ['JavaScript expression']
    },
    // Common DOM events with hx-on: prefix
    'hx-on:click': {
        description: 'HTMX v2: Handle click events with JavaScript',
        values: ['JavaScript expression']
    },
    'hx-on:change': {
        description: 'HTMX v2: Handle change events with JavaScript',
        values: ['JavaScript expression']
    },
    'hx-on:keyup': {
        description: 'HTMX v2: Handle keyup events with JavaScript',
        values: ['JavaScript expression']
    },
    'hx-on:submit': {
        description: 'HTMX v2: Handle form submit events with JavaScript',
        values: ['JavaScript expression']
    },
    'hx-on:load': {
        description: 'HTMX v2: Handle load events with JavaScript',
        values: ['JavaScript expression']
    },
    'hx-on:focus': {
        description: 'HTMX v2: Handle focus events with JavaScript',
        values: ['JavaScript expression']
    },
    'hx-on:blur': {
        description: 'HTMX v2: Handle blur events with JavaScript',
        values: ['JavaScript expression']
    }
};

// CSS classes used by HTMX
const HTMX_CLASSES = [
    'htmx-added',
    'htmx-indicator', 
    'htmx-request',
    'htmx-settling',
    'htmx-swapping'
];

class HTMXCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const linePrefix = document.lineAt(position).text.substring(0, position.character);
        
        // Check if we're inside an HTML tag
        const tagMatch = linePrefix.match(/<\w+[^>]*$/);
        if (!tagMatch) {
            return [];
        }

        const completionItems: vscode.CompletionItem[] = [];

        // Add HTMX attributes
        for (const [attr, info] of Object.entries(HTMX_ATTRIBUTES)) {
            const item = new vscode.CompletionItem(attr, vscode.CompletionItemKind.Property);
            item.detail = 'HTMX Attribute';
            item.documentation = new vscode.MarkdownString(info.description);
            
            // Add snippet with quotes and cursor position
            item.insertText = new vscode.SnippetString(`${attr}="$1"`);
            item.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            
            completionItems.push(item);
        }

        return completionItems;
    }
}

class HTMXHoverProvider implements vscode.HoverProvider {
    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        // Updated regex to handle both hx-* and hx-on:* patterns
        const range = document.getWordRangeAtPosition(position, /hx-[\w-]+(?::[\w-]+)?/);
        if (!range) {
            return undefined;
        }

        const word = document.getText(range);
        const attrInfo = HTMX_ATTRIBUTES[word];
        
        if (attrInfo) {
            const contents = new vscode.MarkdownString();
            contents.appendCodeblock(word, 'html');
            contents.appendMarkdown(attrInfo.description);
            
            if (attrInfo.values.length > 0) {
                contents.appendMarkdown('\n\n**Possible values:**\n');
                for (const value of attrInfo.values) {
                    contents.appendMarkdown(`- \`${value}\`\n`);
                }
            }
            
            return new vscode.Hover(contents, range);
        }
        
        return undefined;
    }
}

class HTMXAttributeValueCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const linePrefix = document.lineAt(position).text.substring(0, position.character);
        
        // Check if we're inside an HTMX attribute value
        const attrMatch = linePrefix.match(/(hx-[\w-]+)="([^"]*)$/);
        if (!attrMatch) {
            return [];
        }

        const attrName = attrMatch[1];
        if (!attrName) {
            return [];
        }
        
        const attrInfo = HTMX_ATTRIBUTES[attrName];
        
        if (!attrInfo) {
            return [];
        }

        const completionItems: vscode.CompletionItem[] = [];
        
        for (const value of attrInfo.values) {
            const item = new vscode.CompletionItem(value, vscode.CompletionItemKind.Value);
            item.detail = `HTMX ${attrName} value`;
            completionItems.push(item);
        }

        return completionItems;
    }
}

export function activate(context: vscode.ExtensionContext) {
    console.log('HTMX IntelliSense extension is now active!');

    const config = vscode.workspace.getConfiguration('htmx-intellisense');
    
    // Register completion providers
    if (config.get('enableAutoCompletion', true)) {
        const completionProvider = vscode.languages.registerCompletionItemProvider(
            ['html', 'htm', 'htmx'],
            new HTMXCompletionProvider(),
            ' ', '='
        );
        
        const valueCompletionProvider = vscode.languages.registerCompletionItemProvider(
            ['html', 'htm', 'htmx'],
            new HTMXAttributeValueCompletionProvider(),
            '"', "'"
        );
        
        context.subscriptions.push(completionProvider, valueCompletionProvider);
    }

    // Register hover provider
    if (config.get('enableHoverInfo', true)) {
        const hoverProvider = vscode.languages.registerHoverProvider(
            ['html', 'htm', 'htmx'],
            new HTMXHoverProvider()
        );
        
        context.subscriptions.push(hoverProvider);
    }

    // Register command to insert HTMX template
    const insertTemplateCommand = vscode.commands.registerCommand('htmx-intellisense.insertTemplate', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTMX App</title>
    <script src="https://unpkg.com/htmx.org@2.0.0"></script>
</head>
<body>
    <div id="content">
        <!-- Your HTMX content here -->
    </div>
</body>
</html>`;

        editor.edit(editBuilder => {
            editBuilder.insert(editor.selection.active, template);
        });
    });

    context.subscriptions.push(insertTemplateCommand);
}

export function deactivate() {} 