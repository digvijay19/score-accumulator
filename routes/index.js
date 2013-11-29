var data = {
	"1":{
		"name":"Suraj",
		"score":90
	},
	"2":{
		"name":"Digvijay",
		"score":90
	}
};
exports.home = function(req, res){
	res.render('home', { title: 'score-accumulator',data:data });
};
exports.add = function(req, res){
	res.render('add', { title: 'Add new record'});
};
exports.addNewRecord = function(req, res){
	var recordNumber = data.length+1;
	data[recordNumber] = req.body;
	res.redirect('/home');
};