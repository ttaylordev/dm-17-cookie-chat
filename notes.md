# jsbeautifier Options

Beautifier Options:
  -s, --indent-size                 Indentation size [4]
  -c, --indent-char                 Indentation character [" "]
  -e, --eol                         character(s) to use as line terminators. (default newline - "\\n")');
  -l, --indent-level                Initial indentation level [0]
  -t, --indent-with-tabs            Indent with tabs, overrides -s and -c
  -p, --preserve-newlines           Preserve line-breaks (--no-preserve-newlines disables)
  -m, --max-preserve-newlines       Number of line-breaks to be preserved in one chunk [10]
  -P, --space-in-paren              Add padding spaces within paren, ie. f( a, b )
  -j, --jslint-happy                Enable jslint-stricter mode
  -a, --space-after-anon-function   Add a space before an anonymous function's parens, ie. function ()
  -b, --brace-style                 [collapse|expand|end-expand|none][,preserve-inline] ["collapse"]
  -B, --break-chained-methods       Break chained method calls across subsequent lines
  -k, --keep-array-indentation      Preserve array indentation
  -x, --unescape-strings            Decode printable characters encoded in xNN notation
  -w, --wrap-line-length            Wrap lines at next opportunity after N characters [0]
  -X, --e4x                         Pass E4X xml literals through untouched
  -n, --end-with-newline            End output with newline
  -C, --comma-first                 Put commas at the beginning of new line instead of end
  --good-stuff                      Warm the cockles of Crockford's heart
  --editorconfig                    Use EditorConfig to set up the options
  
```js
"js": {
  "indent_size": 2,
  "indent_char": " ",
  "indent_level": 0,
  "indent_with_tabs": false,
  "preserve_newlines": true,
  "max_preserve_newlines": 2,
  "jslint_happy": true,
  "eol": "\n",
  "space_after_anon_function": false,
  "brace_style": "collapse",
  "keep_array_indentation": false,
  "keep_function_indentation": false,
  "space_before_conditional": true,
  "break_chained_methods": false,
  "eval_code": false,
  "unescape_strings": false,
  "wrap_line_length": 0,
  "wrap_attributes": "auto",
  "wrap_attributes_indent_size": 4,
  "end_with_newline": false
},
```





```js
"js": {
  "brace_style": "end-expand",
  "break_chained_methods": false,
  "end_with_newline": true,
  "preserve_newlines": true,
  "max_preserve_newlines": 2,
  "eol": "\n",
  
  "indent_size": 2,
  "indent_char": " ",
  "indent_level": 0,
  "indent_with_tabs": false,
  
  "jslint_happy": true,
  
  "space_in_paren": false,
  "space_in_empty_paren": false, 
  "space_after_anon_function": false,
  "space_before_conditional": false,
  
  "keep_array_indentation": true,
  "keep_function_indentation": true,
  
  "eval_code": true,
  
  "wrap_attributes": "auto",
  "wrap_attributes_indent_size": 4,
  "wrap_line_length": 0,
  "comma_first": true
}
```





```js
"js": {
  "brace_style": "end-expand",
  "indent_size": 2,
  "indent_char": " ",
  "eol": "\n",
  "preserve_newlines": true,
  "break_chained_methods": false,
  "max_preserve_newlines": 2,
  "space_in_paren": false,
  "space_in_empty_paren": false,
  "jslint_happy": true,
  "space_after_anon_function": false,
  "keep_array_indentation": true,
  "space_before_conditional": false,
  "wrap_line_length": 0,
  "end_with_newline":
  "comma_first": true
}
```