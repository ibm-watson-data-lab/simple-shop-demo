# simple-shop-demo

This is a static web site that demonstrates a movie poster e-commerce store. The web page 
connects to four microservices to add features to the page:

- [Simple Search Service](https://github.com/ibm-cds-labs/simple-search-service) - to allow 
the product inventory to be searchable for free-text or fielded searches. Data is loaded into 
the Simple Search Service by presenting a text file containing all of the product inventory. 
The data is uploaded into a Cloudant database and automatically indexed. A powerful search 
API is the published which is used by the web page to power the site's search facility.
The search results include the products details themselves and "facets" - counts of repeating values within
the data set that can be used for further search refinement.
- [Simple Autocomplete Service](https://github.com/ibm-cds-labs/simple-autocomplete-service) - to
allow search forms to auto complete as a user types movie titles or actor/director names. The
Simple Autocomplete Service can contain many auto-complete indexes, each one created by uploading
a text file containing the words to be used (e.g. a list of actor's names). The data is uploaded
into an in-memory Redis database and a simple API is published which is by used by this site
as a user types into the search fields.
- [Simple Notification Service](https://github.com/ibm-cds-labs/simple-notification-service) - to
allow events to be broadcast to web pages as they are being used. This can be used to "push"
events from the server side to the client side during a site visit, or to power real-time interactions,
such as web chat with a customer service representative.
- [Simple Logging Service](https://github.com/ibm-cds-labs/simple-logging-service) - to record 
usage statistics in the page and store them in the cloud. Understanding how your site is being used - 
what searches are being performed, which products are viewed, how long a user stays on the page - is
vital for optimising your site's user experience. The Simple Logging Service allows the site to
record events at any point in the page's visit. The data can then be stored in a NoSQL database
for future analysis.

The demo starts with dumb, static web page and allows you to switch on each microservice to add
functionality to the website. 

[TO THE DEMO](https://ibm-cds-labs.github.io/simple-shop-demo/)

If you want to try any of the microservices yourself then click on the links below and install
them yourself in a few clicks. They're free and open-source!

- [Simple Search Service](https://github.com/ibm-cds-labs/simple-search-service) 
- [Simple Autocomplete Service](https://github.com/ibm-cds-labs/simple-autocomplete-service)
- [Simple Notification Service](https://github.com/ibm-cds-labs/simple-notification-service) 
- [Simple Logging Service](https://github.com/ibm-cds-labs/simple-logging-service)

