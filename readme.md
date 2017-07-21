# GA WDI London: Project 4

## Guideblog

Guideblog is a mobile-first app with a Ruby on Rails API Back End and an Angular Front End. It was built by [Mark Davis](https://github.com/markjdvs) & [Omar Harvey-Phillips](https://github.com/omaotzu).

### User Journey



### Build & Technologies Used

- This app is built with a [Ruby on Rails](http://api.rubyonrails.org/) back-end, that serves an API that's consumed by our client-side [Angular](https://angularjs.org) app.

- [PostgreSQL](https://www.postgresql.org/) is used as our database.

- Images are base64 encoded and stored using the [AWS S3 service](https://aws.amazon.com/s3).

- [JWT](https://jwt.io) is used with [Satellizer](https://github.com/sahat/satellizer) for authentication, and [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing.

- [UI Router](https://github.com/angular-ui/ui-router) is our chosen single page application routing framework.

- [UI Bootstrap](https://github.com/angular-ui/bootstrap) is used to provide grid layouts and additional functionality including Modals.

- Styles are written in [SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/API.md) is used as a taskrunner.

- We used [Babel](https://babeljs.io) to compile to ES5.

- The [Skyscanner API](https://partners.skyscanner.net/travel-apis/) was used to provide live flight details between different stops during a trip, however this API has now been deprecated so I've removed this option.

- [Google Places](https://developers.google.com/places/) autocompletes users' inputs and provides locational data on stops whilst [Google Map Clusters](https://developers.google.com/maps/documentation/javascript/marker-clustering) group blog posts in close proximity to one another on the worldblog page.

* The app is deployed via Heroku. [Try it here.](https://guideblog.herokuapp.com/)
