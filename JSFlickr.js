function JSFlickr(api, searchText, callback){
	this.api = api;
	this.callback = callback;
	this.searchText = searchText;
}

JSFlickr.prototype.setSelect = function(selectQuery){
	this.select = selectQuery;
}

JSFlickr.prototype.setLimit = function(limit){
	this.limit = limit;
}

//this function basically sets all of the values to the default value
//if the user does not use the functions to initialise the function
//note: if a callback is not provided, we SHOULD provide a callback that 
//seralise the json and return it
JSFlickr.prototype.formatOutput = function()
{
	this.select = typeof this.select !== 'undefined' ? this.select : "*";
	this.limit  = typeof this.limit  !== 'undefined' ? this.select : "50";	
}

JSFlickr.prototype.getPhoto = function()
{
	this.formatOutput;
	this.yql_rest =  "http://query.yahooapis.com/v1/public/yql?q=select%20";
	this.yql_rest += this.searchText+"%20from%20flickr.photos.search%20";
	this.yql_rest += "where%20text%3D%22"+this.searchText+"%22%20and%20";
	this.yql_rest += "api_key%3D%22"+this.api+"%22%20limit%2050&"
	this.yql_rest += "format=json&diagnostics=true&callback=?";
	$.getJSON(this.yql_rest, this.callback);
}


