class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :gigs
  validates_presence_of :name

  def set_defaults
		self.profile_image ||= "http://via.placeholder.com/350x200"
	end

         
         def first_name
          self.name.split.first
         end
         
         def last_name
          self.name.split.last
         end
end
