class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  require 'dotenv-rails'
end
