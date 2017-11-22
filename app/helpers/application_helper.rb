module ApplicationHelper

	def login_helper
		if current_user.is_a?(User)
			 (link_to "Log out", destroy_user_session_path, method: :delete, class: "btn btn-danger")
		else
			(link_to "Sign Up", new_user_registration_path, class: "btn btn-success") +

			 " | ".html_safe + (link_to "Log In", new_user_session_path, class: 'btn btn-primary'
				)
		end
	end

	def avatar_url(user)
   		 gravatar = Digest::MD5::hexdigest(user.email).downcase
	  if user.profile_image
	     user.profile_image
	  else
		"https://www.gravatar.com/avatar/#{gravatar}.jpg?d=identicon&s=150"
  end
  end

end
