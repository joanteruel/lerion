# A plugin for embedding videos from Vimeo using a simple Liquid tag, ie: {% vimeo 12345678 %}.
# Based of the Youtube plugin from http://www.portwaypoint.co.uk/jekyll-youtube-liquid-template-tag-gist/

module Jekyll
  class Vimeo < Liquid::Tag
    @@width = 500
    @@height = 377

    def initialize(name, id, tokens)
      super
      @id = id
    end

    def render(context)
      %(<iframe src="http://player.vimeo.com/video/#{@id}?title=0&amp;byline=0&amp;color=679AF1&amp;portrait=0" width="#{@@width}" height="#{@@height}" frameborder="0"></iframe>)
    end
  end
end

Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)