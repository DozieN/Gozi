// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);

//tab group open event
window.addEventListener('open', function(e)
{
	// TODO: write your module tests here
	var androidziphelper = require('org.gozi.androidziphelper');
	Ti.API.info("module is => " + androidziphelper);

	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function()
	{
        var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'test.zip');
        f.write(this.responseData);
        Ti.API.log('INFO', Ti.Filesystem.applicationDataDirectory);
        androidziphelper.extract(Ti.Filesystem.applicationDataDirectory + '/test.zip', Ti.Filesystem.applicationDataDirectory);
    };
    xhr.open('GET', 'http://dl.dropbox.com/u/1400234/test.zip');
	xhr.send();
});
window.open();

