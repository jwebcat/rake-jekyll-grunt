# Require any additional compass plugins here.
# -----------------------------------------------------------------------------


# Set this to the root of your project when deployed:
# -----------------------------------------------------------------------------

http_path = "/"
sass_dir = "_sass"
css_dir = "_site/assets/stylesheets"
javascripts_dir = "assets/javascripts"
images_dir = "assets/images"
fonts_dir = "assets/fonts"
# svg_dir = "assets/svg"
# docs_dir = "assets/docs"
# plugins_dir = "assets/plugins"

# Output style and comments
# -----------------------------------------------------------------------------

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# SASS core
# -----------------------------------------------------------------------------

# Chrome needs a precision of 7 to round properly
Sass::Script::Number.precision = 7

# Stuff we don't really need below
# -----------------------------------------------------------------------------

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass _sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
