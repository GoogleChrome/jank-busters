# jankfree.org

## Adding a resource

All files are in markdown inside the _posts folder. They are grouped by where they appear on the site, though _that is purely for convenience_, the actual placing is done through the `categories` array in the YAML front matter in each file.

A resource markdown file should be named:

`YYYY-MM-DD-title-of-resource.md` where the date is today's date.

It's probably easiest to start with another file from the same section and customize it to your needs.

Once you're done commit the file and push to gh-pages. GitHub will do the rest.

## Building the CSS

The styles are written in LESS. The CSS file in `css/site.css` is generated from `less/site.less`.

1. Install node.js
2. Install npm
3. Install less
4. Ensure npm's global path is in your path
5. Run `lessc -x less/site.less > css/site.css`

## Building the site

If you want to build locally simply install Jekyll (`sudo gem install jekyll`) and then:

`jekyll build`

Or if you want to run the server go with:

`jekyll serve --watch` and then hit [localhost:4000](http://localhost:4000).

## Notes

* Don't edit existing files in /examples, make copies instead! The existing ones are linked to from old presentations.
* If adding talk slides, make a new directory for the slides, add any new examples to /examples and other assets under the talk directory.
