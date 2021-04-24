// TO GET FIREBASE YOU HAVE TO FILL IN firebase config data from you firebase console
// More info: https://firebase.google.com/docs/database/web/start

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
	apiKey: "apiKey",
	authDomain: "projectId.firebaseapp.com",
	// For databases not in the us-central1 location, databaseURL will be of the
	// form https://[databaseName].[region].firebasedatabase.app.
	// For example, https://your-database-123.europe-west1.firebasedatabase.app
	databaseURL: "https://databaseName.firebaseio.com",
	storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
//var database = firebase.database();