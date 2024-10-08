# Accessibility Patterns
A library of accessible web components and patterns.

[:point_right: View Library](https://alleyinteractive.github.io/accessibility-patterns/)
## Table of Contents

- [Background](#background)
- [Environments](#environments)
- [Installation](#installation)
- [Development Process](#development-process)
    - [Contributing](#contributing)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Third-Party Dependencies](#third-party-dependencies)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [License](#license)


## Background

The Accessible Pattern Library is a component-based collection of patterns and documentation that is meant to serve as a guide to developers when building interactive components. The library uses [Storybook](https://storybook.js.org/), and is hosted on [GitHub Pages](https://alleyinteractive.github.io/accessibility-patterns/). 


## Environments

[Main](https://alleyinteractive.github.io/accessibility-patterns/)


## Installation

First clone this repository and install dependencies.

```sh
$ nvm use
$ npm ci
```

To view Storybook locally, run `npm run storybook`.

## Development Process

All changes are based off `main` and committed to feature branches according to our branch naming conventions. Pull requests require a peer code review before being merged into `main`.

### Contributing

To contribute to this project, see [CONTRIBUTING.md](CONTRIBUTING.md).


## Deployment

Once a PR is merged into `main`, GitHub Actions will kick off a deployment to GitHub Pages. Changes will be visible after deployment completes successfully.

## Project Structure

- All patterns are based on components in the `src/components` directory. Each component should contain:
    - The main `Component.jsx` file
    - A `component.scss` stylesheet to style the component (if necessary)
    - A `component.stories.mdx` file that creates and documents the pattern in Storybook
- Storybook configuration files are in the `.storybook` directory.


## Third-Party Dependencies

Here, provide and link third-party dependencies outside those covered in the [Environments](#environments) or [Deployment](#deployment) sections above. These might include links to a third-party SSO provider, an external API, a payment vendor, or a hosted Elasticsearch instance, for example. For every integration dependency, include an overview of the purpose and instructions to manage or learn more about the integration. This is fine to summarize or link internally (eg. to a GitHub [wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis)).


## Related Efforts

If your project requires, depends, extends, or competes with alternate projects worth noting (eg. a child theme or shared plugin from another repo), link them here or exclude this section.


## Maintainers

- [Alley Interactive](https://github.com/alleyinteractive) #accessibility

![Alley logo](https://avatars.githubusercontent.com/u/1733454?s=200&v=4)


## License

GNU General Public License v2.0
