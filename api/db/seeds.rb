# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Message.create([{ author: 'Yoda', recipient: 'Obi-Wan', private: false, content: 'Strong is the Force'}])
Message.create([{ author: 'Yoda', recipient: 'Luke', private: true, content: 'That place... is strong with the dark side of the Force.'}])
Message.create([{ author: 'Luke', recipient: 'Yoda', private: true, content: "What's in there?"}])
Message.create([{ author: 'Yoda', recipient: 'Luke', private: true, content: "Only what you take with you."}])