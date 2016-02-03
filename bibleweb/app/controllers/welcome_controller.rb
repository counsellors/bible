require 'net/http'
require 'json'
class WelcomeController < ApplicationController
  def index
  end
  def read
  end
  def chapter
    ver = params[:ver]
    short = params[:short]
    chapter = params[:chapter]
    url = URI.parse('https://www.bible.com/zh-CN/bible/'+ ver +'/' + short + '.' + chapter + '.json')
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port, :use_ssl => url.scheme == 'https') {|http|
      http.request(req)
    }
    body = JSON.parse(res.body)
    reader_html = body['reader_html']
    render inline: reader_html
  end
end
