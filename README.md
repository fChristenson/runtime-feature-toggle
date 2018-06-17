# runtime-feature-toggle

## What we will cover

* What is a feature toggle?
* Why would we want to have runtime feature toggles?
* How can we express contextual features without messy code?

Notes

At times we will have a application that will need to be able to run different
code depending on where it is being runned.

This is called feature toggling, i.e we want to use different features in the same
codebase depending on who is using the code.

The two most common ways to do this is to either build different versions of the
same application or have all the code in the same codebase and toggle the
features at runtime.
