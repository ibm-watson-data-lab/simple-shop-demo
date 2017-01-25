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
    "_id": "68646",
    "_rev": "1-7b8a0bde69c9c1d7d7128a40c7c43471",
    "title": "The Godfather",
    "year": "1972",
    "rating": 9.2,
    "runtime": "175 min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "director": "Francis Ford Coppola",
    "cast": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Richard S. Castellano"
    ],
    "poster": "http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg",
    "price": 6.99
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
    description1: "Imagine you have an e-commerce website that sells movie posters. You want a web site that allows customers to find the posters they are looking for and have a great user experience. This demonstration will show you how easy it is to combine a number of microservices, running on the IBM Bluemix platoform, to power the functionality that your website needs.",
    description2: "Currently, our site has some featured posters from our inventory on the front page. Try clicking on poster image to reveal more detals.",
    description3: "Let's get started by adding a search bar to the top of the site - powered by the Simple Search Service, which turns your structured data into a search engine in a few easy steps.",
    description4: "Click NEXT to add a search facility to this site",
    searchVisible: false,
    advancedSearchVisible: false,
    facetsVisible: false,
    logsVisible: false,
    autoCompleteOn: false,
    notificationsOn: false,
    backOfSite: false,
    cta: {
      url: null,
      label: null
    }
  },

  {
    title: "Step 2 - Now with added search",
    description1: "Try performing a search by typing a directors name into the search box (e.g. 'Spielberg') and clicking the search button. You can also search by actor, or film title in this box.",
    description2: "To achieve this we simply uploaded our product inventory file to the Simple Search Service which stored the data in a Cloudant database and indexed the fields for search.",
    description3: "But there's more data in the search results than you can see here.",
    description4: "Click NEXT to add facets to our search results",
    searchVisible: true,
    advancedSearchVisible: false,
    facetsVisible: false,
    logsVisible: false,
    autoCompleteOn: false,
    notificationsOn: false,
    backOfSite: false,
    cta: {
      url: "https://github.com/ibm-cds-labs/simple-search-service",
      label: "Simple Search Service"
    }
  },

  {
    title: "Step 3 - Search results with facets",
    description1: "Facets are counts of repeating values in your data set. Search for 'Spielberg' and see the counts of posters by year and genre",
    description2: "The facets can also be used to allow users to filter the data set. Click on one of the facets to see the data set become more focussed.",
    description3: "What if we wanted users to be able to search by individual fields, rather than have a single search box?",
    description4: "Click NEXT to add an 'advanced search' box",
    searchVisible: true,
    advancedSearchVisible: false,
    facetsVisible: true,
    logsVisible: false,
    autoCompleteOn: false,
    notificationsOn: false,
    backOfSite: false,
    cta: {
      url: "https://github.com/ibm-cds-labs/simple-search-service",
      label: "Simple Search Service"
    }
  },

  {
    title: "Step 4 - Advanced search",
    description1: "We now have some additional search boxes that allow searches to be directed to individual fields in the database (actor, director, year, genre).",
    description2: "Try searching for films starring 'Brad Pitt' or films made in 2005.",
    description3: "Wouldn't it be nice if the data in those fields 'auto-completed'?",
    description4: "Click NEXT to add 'auto-complete'",
    searchVisible: true,
    advancedSearchVisible: true,
    facetsVisible: true,
    logsVisible: false,
    autoCompleteOn: false,
    notificationsOn: false,
    backOfSite: false,
    cta: {
      url: "https://github.com/ibm-cds-labs/simple-search-service",
      label: "Simple Search Service"
    }
  },

  {
    title: "Step 5 - Autocomplete",
    description1: "Now, as you type in any of the search boxes, the website makes suggestions that complete the question. ",
    description2: "This featured is powered by a second microservice: the Simple Autocomplete Service, which uses an in-memory Redis database to turn lists of text into a fast auto-complete API.",
    description3: "What if I wanted to alert customers in realtime that movie posters that they may be interested in are getting low on stock?",
    description4: "Click NEXT to add realtime notifications",
    searchVisible: true,
    advancedSearchVisible: true,
    autoCompleteOn: true,
    notificationsOn: false,
    facetsVisible: true,
    logsVisible: false,
    backOfSite: false,
    cta: {
      url: "https://github.com/ibm-cds-labs/simple-autocomplete-service",
      label: "Simple Autocomplete Service"
    }
  },

  {
    title: "Step 6 - Realtime notifications",
    description1: "With realtime notifications on, we can see data arriving in the web page as it changes: low stock notifications, out-of-stock warnings and real-time chat are just some of the use-cases.",
    description2: "This feature is powered by another microservice: the Simple Notification Service. Here we are using RethinkDB to power the orchestration of realtime notifications to visitors of your site.",
    description3: "These notifications can be tailored and targeted to each individual user, based on their previous behaviour on your site.",
    description4: "Wouldn't it be nice if we could analyse this behaviour at a later date?",
    searchVisible: true,
    advancedSearchVisible: true,
    autoCompleteOn: true,
    notificationsOn: true,
    facetsVisible: true,
    logsVisible: false,
    backOfSite: false,
    cta: {
      url: "https://github.com/ibm-cds-labs/simple-notification-service",
      label: "Simple Notification Service"
    }
  },

  {
    title: "Step 7 - The logs",
    description1: "We've been recording your activity ever since you arrived at the page.",
    description2: "It's important to log everything - what searches a user is doing, the autocompletes, which posters they asked for more details on. All this data can be analysed to draw insights into your site so that it can be made more useful.",
    description3: "Luckily we've being recording this data all along :)",
    description4: "All of this data is dispatched to the Simple Logging Service where it can be stored in a database for future analysis.",
    searchVisible: true,
    advancedSearchVisible: true,
    autoCompleteOn: true,
    notificationsOn: true,
    facetsVisible: true,
    logsVisible: true,
    backOfSite: false,
    cta: {
      url: "https://github.com/ibm-cds-labs/simple-logging-service",
      label: "Simple Logging Service"
    }
  },

  {
    title: "Step 8 - How does this work?",
    description1: "This site is powered by a number of microservices, running in IBM Bluemix.",
    description2: "All of these services are free and open-source so you can use them to enhance your existing websites or build something new.",
    description3: "Each of these services exposes an API that can be used by other applications to solve a specific problem.",
    description4: "Read more about the Simple Suite by clicking here.",
    searchVisible: false,
    advancedSearchVisible: false,
    autoCompleteOn: false,
    notificationsOn: false,
    facetsVisible: false,
    logsVisible: false,
    backOfSite: true,
    cta: {
      url: "http://www.ibm.com",
      label: "Simple Suite"
    }
  }

];
