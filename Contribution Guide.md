The contribution process is...

Make an issue (or multiple issues)
Make a PR that references that issue
Get it code reviewed by someone on the team (gitmaster), address any comments
Merge into master (with merge commit)

Code style guide
Pay attention to the linter!
Try to use semicolons
Tabs. Use them.
Trailing commas where possible
Use const or let when applicable
Use require and module.exports in nodejs/express .js files
Use import and export in react component .js files, unless require makes for cleaner code
Put import statements at top
Put the default export at bottom
Consider splitting up any file based on seperation of concern
Define container components and presentational components in separate files
Use the "ducks" pattern for redux
Name files using lowercase-and-dashes instead of camelCase or PascalCase, except for when the default export is a class, then use PascalCase
Define react components as pure functions (instead of classes) whenever possible
Single quotes for strings – except to avoid escaping
No unused variables
Space after keywords if (condition) { ... }
Space after function name function name (arg) { ... }
Always use === instead of ==

git commit messages- descriptive commit messages mentioning feature and changes made
