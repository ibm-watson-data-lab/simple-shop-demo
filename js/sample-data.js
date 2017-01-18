var sampleData = [
	
	{
	  "_id": "110357",
	  "_rev": "1-fdb5d4b867e7562b0952ee3ab86de1cd",
	  "title": "The Lion King",
	  "year": "1994",
	  "rating": 8.5,
	  "runtime": "89 min",
	  "genre": [
	    "Animation",
	    "Adventure",
	    "Drama"
	  ],
	  "director": "Roger Allers, Rob Minkoff",
	  "cast": [
	    "Jonathan Taylor Thomas",
	    "Matthew Broderick",
	    "James Earl Jones",
	    "Jeremy Irons"
	  ],
	  "poster": "http://ia.media-imdb.com/images/M/MV5BMjEyMzgwNTUzMl5BMl5BanBnXkFtZTcwNTMxMzM3Ng@@._V1_SX300.jpg",
	  "price": 13.99
	},

	{
	  "_id": "87469",
	  "_rev": "1-21ec837f1ff85d1d688e44c0419e3141",
	  "title": "Indiana Jones and the Temple of Doom",
	  "year": "1984",
	  "rating": 7.6,
	  "runtime": "118 min",
	  "genre": [
	    "Action",
	    "Adventure"
	  ],
	  "director": "Steven Spielberg",
	  "cast": [
	    "Harrison Ford",
	    "Kate Capshaw",
	    "Jonathan Ke Quan",
	    "Amrish Puri"
	  ],
	  "poster": "http://ia.media-imdb.com/images/M/MV5BMTMyNzI4OTA5OV5BMl5BanBnXkFtZTcwMDQ2MjAxNA@@._V1_SX300.jpg",
	  "price": 5.99
	},

	{
	  "_id": "407887",
	  "_rev": "1-fd6fec416b29d0f0621b00fefdc430f6",
	  "title": "The Departed",
	  "year": "2006",
	  "rating": 8.5,
	  "runtime": "151 min",
	  "genre": [
	    "Crime",
	    "Drama",
	    "Thriller"
	  ],
	  "director": "Martin Scorsese",
	  "cast": [
	    "Leonardo DiCaprio",
	    "Matt Damon",
	    "Jack Nicholson",
	    "Mark Wahlberg"
	  ],
	  "poster": "http://ia.media-imdb.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
	  "price": 5.99
	},

	{
	  "_id": "118715",
	  "_rev": "1-4ac9cc87886fe3137b49d41fb2cd89c2",
	  "title": "The Big Lebowski",
	  "year": "1998",
	  "rating": 8.2,
	  "runtime": "117 min",
	  "genre": [
	    "Comedy",
	    "Crime"
	  ],
	  "director": "Joel Coen, Ethan Coen",
	  "cast": [
	    "Jeff Bridges",
	    "John Goodman",
	    "Julianne Moore",
	    "Steve Buscemi"
	  ],
	  "poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg",
	  "price": 6.99
	}

]

var cardData = [

	{
		title: "Step 1 - Simple Suite Demo",
		description: "Imagine you have an e-commerce website that sells movie posters. You want a web site that allows customers to find the posters they are looking for and have a great user experience. This demonstration will show you how easy it is to combine a number of microservices, running on the IBM Bluemix platoform, to power the functionality that your website needs.",
		description2: "Currently, our site has some featured posters from our inventory on the front page. Try clicking on poster image to reveal more detals.",
		description3: "Let's get started by adding a search bar to the top of the site - powered by the Simple Search Service, which turns your structured data into a search engine in a few easy steps.",
		description3: "Click NEXT to add a search facility to this site",
		searchVisible: false,
		advancedSearchVisible: false,
		facetsVisible: false,
		logsVisible: false,
    autoCompleteOn: false,
    notificationsOn: false,
		cta: { 
			url: "http://www.google.com",
			label: "Google"
		}
	},

	{
    title: "Step 2 - Now with added search",
    description: "Try performing a search by typing an film's name (e.g. Unforgiven) and clicking the search button. You can also search by actor, director or year in this box.",
    description2: "To achieve this we simply uploaded our product inventory file to the Simple Search Service which stored the data in a Cloudant database and indexed the fields for search.",
    description3: "But there's more data in the search results than you can see here.",
    description3: "Click NEXT to add facets to our search results",
    searchVisible: true,
    advancedSearchVisible: false,
    facetsVisible: false,
    logsVisible: false,
     autoCompleteOn: false,
    notificationsOn: false,
    cta: { 
      url: "http://www.microsoft.com",
      label: "Microsoft"
    }
	},
  
  {
    title: "Step 3 - Search results with facets",
    description: "Facets are counts of repeating values in your data set. Search for 'Brad Pitt' and see the counts of posters by year and genre",
    description2: "The facets can also be used to allow users to filter the data set. Click on one of the facets to see the data set become more focussed.",
    description3: "What if we wanted to users to search by individual field, rather than have a single search box?",
    description3: "Click NEXT to add an 'advanced search' box",
    searchVisible: true,
    advancedSearchVisible: false,
    facetsVisible: true,
    logsVisible: false,
     autoCompleteOn: false,
    notificationsOn: false,
    cta: { 
      url: "http://www.microsoft.com",
      label: "Microsoft"
    }
	},
  
  {
    title: "Step 4 - Advanced search",
    description: "We now have some additional search boxes that allow searches to be directed to individual fields in the database (actor, director, year, genre).",
    description2: "Try searching for films directed by 'Spielberg' or films made in 2005.",
    description3: "Wouldn't it be nice if the data in those fields 'auto-completed'?",
    description3: "Click NEXT to add 'auto-complete'",
    searchVisible: true,
    advancedSearchVisible: true,
    facetsVisible: true,
    logsVisible: false,
    autoCompleteOn: false,
    notificationsOn: false,
    cta: { 
      url: "http://www.microsoft.com",
      label: "Microsoft"
    }
	},
   
  {
    title: "Step 5 - Autocomplete",
    description: "Now, as you type in any of the search boxes, the website makes suggestions that complete the question. ",
    description2: "This featured is powered by a second microservice: the Simple Autocomplete Service, which uses an in-memory Redis database to turn lists of text into a fast auto-complete API.",
    description3: "What if I wanted to allow customers to chat with a customer service employee from within the site?",
    description3: "Click NEXT to add real-time notifications",
    searchVisible: true,
    advancedSearchVisible: true,
    autoCompleteOn: true,
    notificationsOn: false,
    facetsVisible: true,
    logsVisible: false,
    cta: { 
      url: "http://www.microsoft.com",
      label: "Microsoft"
    }
	},
  
  {
    title: "Step 6 - Realtime data feeds",
    description: "With real-time notifications on, we can see data arriving in the web page as it changes: low stock notifications, out-of-stock warnings and real-time chat are just some of the use-cases.",
    description2: "It's important to log everything - what searches a user is doing, the autocompletes, which posters they got more details on. All this data can be analysed to draw insights into your site so that it can be made more useful.",
    description3: "Luckily we've being recording this data all along :)",
    description3: "Click NEXT to view the logs",
    searchVisible: true,
    advancedSearchVisible: true,
    autoCompleteOn: true,
    notificationsOn: true,
    facetsVisible: true,
    logsVisible: false,
    cta: { 
      url: "http://www.microsoft.com",
      label: "Microsoft"
    }
	},
     
  {
    title: "Step 7 - The logs",
    description: "We've flipped the site round to look at the data we've been recording since you arrived at the page. All of the searches, autocompletes and viewed poseters.",
    description2: "All of this data is dispatched to the Simple Logging Service where it can be stored in a database for future analysis.",
    description3: "Thanks for watching the demo - etc etc",
    description3: "",
    searchVisible: true,
    advancedSearchVisible: true,
    autoCompleteOn: true,
    notificationsOn: true,
    facetsVisible: true,
    logsVisible: true,
    cta: { 
      url: "http://www.microsoft.com",
      label: "Microsoft"
    }
	}

]
