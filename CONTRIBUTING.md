# Contributing

To contribute to the Accessibility Patterns Library:

1. Clone the Jira ticket [ACCESS-14](https://alleyinteractive.atlassian.net/browse/ACCESS-14) for your new pattern (optional).
1. Create a new feature branch based off of `main` that follows our branch naming conventions.
1. Create a new component for your pattern in the `src/components` directory.
1. Create a story for the new component that documents this pattern, including but not limited to the following sections:
    - **Title**: Pattern title, along with other names that may be used.
    - **Summary**: An overview of what the pattern is and how it is commonly used.
    - **Best Practices**: Some *DOs* and *DON'Ts* when implementing this pattern.
    - **Accessibility Considerations**: Any specific accessibility considerations or edge cases to account for.
    - **Examples**: Examples of markup used to build the pattern.
1. Create a pull request to merge your feature branch into `main` and submit your PR for peer code review.
1. Once approved, merge your PR into `main`. Buddy will automatically publish the new Storybook to Chromatic (see [Deployment](README.md#deployment)).
