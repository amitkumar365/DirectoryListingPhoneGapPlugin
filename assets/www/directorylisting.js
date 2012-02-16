
/**
 *  
 * @return Instance of DirectoryListing
 */
var DirectoryListing = function() { 

}

/**
 * @param directory The directory for which we want the listing
 * @param successCallback The callback which will be called when directory listing is successful
 * @param failureCallback The callback which will be called when directory listing encouters an error
 */
DirectoryListing.prototype.list = function(directory,successCallback, failureCallback) {

	
    return PhoneGap.exec(successCallback,    //Callback which will be called when directory listing is successful
    					failureCallback,     //Callback which will be called when directory listing encounters an error
    					'DirectoryListPlugin',  //Telling PhoneGap that we want to run "DirectoryListing" Plugin
    					'list',              //Telling the plugin, which action we want to perform
    					[directory]);        //Passing a list of arguments to the plugin, in this case this is the directory path
};

/**
 * <ul>
 * <li>Register the Directory Listing Javascript plugin.</li>
 * <li>Also register native call which will be called when this plugin runs</li>
 * </ul>
 */
PhoneGap.addConstructor(function() {
	//Register the javascript plugin with PhoneGap
	PhoneGap.addPlugin('directorylisting', new DirectoryListing());
	
	//Register the native class of plugin with PhoneGap
	PluginManager.addService("DirectoryListPlugin","com.phonegap.directorylisting.DirectoryListPlugin");
});