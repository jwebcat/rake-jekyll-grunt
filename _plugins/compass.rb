#
# Jekyll Generator for SCSS / Compass
#
# (File paths in this description relative to jekyll project root directory)
# Config file placed in ./_compass.rb
#
# Several things to note:
#  - css_dir should be in _site
#  - sass_dir should be something like _sass
#
# But everything else should Just Work (tm)
#

require 'sass/plugin'
require 'compass'

module Jekyll
  class CompassGenerator < Generator
    safe true

    class SassFile < StaticFile
      def initialize(site, base, dir, name, compiler)
        @site = site
        @base = base
        @dir = dir
        @name = name
        @compiler = compiler
      end

      def write(path)
        from = File.join(@base, @dir, @name)
        to = @compiler.corresponding_css_file from

        # we don't need to do any more work if we don't need to render
        return false if not @compiler.should_compile?(from, to)
        @@mtimes[path] = mtime

        FileUtils.mkdir_p(File.dirname(to))
        @compiler.compile from, to

        true
      end
    end

    def generate(site)
      Compass.add_project_configuration(*Compass.configuration_for('_compass.rb'))
      Compass.compiler.sass_files.each do |fname|
        path, name = File.split fname
        path = path.sub site.source + '/', ''
        site.static_files << SassFile.new(site, site.source, path, name, Compass.compiler)
      end
    end
  end
end
