5.times do |gig|
	@gig = Gig.create!(title: "SEO Expert", category: "Tech", description: "SEO expert to help you rank first", price: 20, main_image: "http://via.placeholder.com/600x400", thumb_image: "http://via.placeholder.com/350x200", status: 0 )
end

puts '5 gigs have been created!'