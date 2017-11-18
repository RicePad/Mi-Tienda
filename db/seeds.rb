1.times do | user |
	user = User.create(name: 'Krystal', email: 'admin@example.com', password: '123456', password_confirmation: '123456')
	user.save
end
puts '1 user has beeen created'


 5.times do |gig|
	@gig = Gig.create!(title: "SEO Expert", description: "SEO expert to help you rank first", price: 20, main_image: "http://via.placeholder.com/600x400", thumb_image: "http://via.placeholder.com/200x200", status: 0, user_id: "1")
end

puts '5 gigs have been created!'


3.times do |category|
	category = Category.create(name: 'Technologia')
end

puts '3 categories have been created'