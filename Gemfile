source 'https://rubygems.org'

gem 'rake'
gem 'hanami', '~> 1.3.0.beta1'

gem 'pg', '~> 1.1.3'

group :development do
  # Code reloading
  # See: http://hanamirb.org/guides/projects/code-reloading
  gem 'shotgun', platforms: :ruby

  gem 'hanami-webconsole'
end

group :test, :development do
  gem 'dotenv', '~> 2.5'
  gem 'pry'
end

group :test do
  gem 'minitest'
  gem 'capybara'
end

group :production do
  # gem 'puma'
end
