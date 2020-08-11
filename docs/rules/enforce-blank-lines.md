# Enforce blank lines in block-level JSX (enforce-blank-lines)

If you found this rule, you already know why you are here.

While MDX is being refactored (see this [issue](https://github.com/mdx-js/mdx/issues/628)), this rule will enforce blank lines at the start and at the end of block-level JSX in MD(X) files to prevent strong headaches and endless nights of debugging.


## Rule Details

Examples of **incorrect** code for this rule:

```md
<Note>
# This won't be parsed
</Note>
```

Examples of **correct** code for this rule:

```md
<Note>
# This won't be parsed
</Note>
```

## When Not To Use It

Do not use this rule if you like to live dangerously, or if you have a good reason to do it (if so please tell us!).

## Further Reading

See this [RFC](https://github.com/mdx-js/mdx/issues/628) if you want to know more about the context of this rule.
