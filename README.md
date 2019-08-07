Running Locally
1. Go into "RESTful API DEV test" directory and run `npm install` and `npm start`.
2. Open a new window and go to the "hackathon" directory to run `npm install` and `npm start` again.
3. Visit http://localhost:3000 to see the site.

To get the google maps to work you need to generate your own Google Cloud api key and register it for maps. Then add it to hackathon/src/Map.js like so
```
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4XNIzf-qiwUJAed_j51Ssw8jlqaYhDwc'
})(MapContainer);
