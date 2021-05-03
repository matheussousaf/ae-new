## Localization Guide

#### Screens

When creating the localization object for new screens, the name of the screen should be camel cased. For subscreens, the name should contain as a prefix the name of all the screens before it in the navigation context.

**Ex.:** settingsProfileScreen

##### Texts

All text/typography in general should follow the same standard **Text** prefix.

**Ex.:** headingText

##### Errors

The _errors_ section if for all the known errors/error messages that could be showed to the client, for convetion the correct usage is after each variable add the suffix **Error**.

**Ex.:** maxLengthError

##### Labels

The _labels_ section is used when creating label for inputs or buttons, for convention, we use the suffix **Label** after each variable.

**Ex.:** fullNameLabel

#### Localization Example

This is a Screen Example for a localization object.

```js
{
    exampleScreen: {
        headingText: "This is a standing out heading",
        subheadingText: "This is a subheading",
        // Labels section
        labels: {
            fooLabel: "Foo Label",
            barLabel: "Bar Label",
        },
        // Errors section
        errors: {
            fooError: "Foo Error",
            barError: "Bar Error",
        }
    }
}
```
