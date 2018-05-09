module.exports = function (app){
	var multer = require('multer');
	var upload = multer({ dest: __dirname + '/files/' });
	
	app.post("/api/file/upload", upload.single('stacktraceFile'), uploadFile);
	
	//callback function
	function uploadFile(req, res) {
		var stacktraceFile = req.file;
		var originalname = stacktraceFile.originalname; //file name on users computer
		var filename = stacktraceFile.filename; //new random file name 
		var path = stacktraceFile.path; //full path of upload file
		var size = stacktraceFile.size; //
		var mimetype = stacktraceFile.mimetype;
	}
	
}