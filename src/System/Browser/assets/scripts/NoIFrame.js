/** * @author  */using("System.Browser.Base");Browser.noIFrame = function () {	if (self != top) {		top.location = self.location;	}};