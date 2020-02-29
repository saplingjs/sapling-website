# Sapling Website

This repo contains the website and documentation for [Sapling](https://www.github.com/groenroos/sapling).


## Documentation

The documentation is located under `docs/`, and uses Docsify to turn Markdown files into a formatted and interactive documentation site.  No build process is necessary for this.


## Public website

The public website is a one-pager with a short tour of the project, and links to GitHub and the documentation.  No build process is required here, either.

The site is largely based off Bulma with some minor modifications in `css/main.css`.

Additionally, the `css/bonsai.css`, `images/bonsai.svg` and `js/bonsai.js` are used to create the semi-randomised bonsai growing animation for the hero image.  All the graphics are located in the SVG file in ID'd elements that have their bottom centre point near `0,0`, and are re-positioned by CSS so that the scaling animation can support directionality.  The trunk segments and branches are always the same.  The positions of the leaves are set, but each position will gain a random leaf from 32 possibilities on each reload.


## Issues

Report them on [GitHub](https://www.github.com/groenroos/sapling-website/issues).