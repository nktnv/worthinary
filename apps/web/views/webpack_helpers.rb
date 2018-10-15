module WebpackHelpers
  def javascript_pack_tag(file_name)
    path = [ENV['WEBPACK_DEV_SERVER_URL'], 'assets', file_name].join('/')
    raw %(<script src="#{path}"></script>)
  end
end