var express = require('express');
var router = express.Router();
var User = require('../models/user');
//same
router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});
router.get('/index', function (req, res, next) {
	return res.render('index.ejs');
});

router.get('/login', function (req, res, next) {
	return res.render('login.ejs');
});

router.get('/newlogin', function (req, res, next) {
	return res.render('newlogin.ejs');
});
router.get('/register', function (req, res, next) {
	return res.render('register.ejs');
});

router.get('/home', function (req, res, next) {
	return res.render('index.ejs');
});

router.get('/forgetpass', function (req, res, next) {
	res.render("forget.ejs");
});
router.get('/weather', function (req, res, next) {
	res.render("weather.ejs");
});
router.get('/news', function (req, res, next) {
	res.render("news.ejs");
});
router.get('/about', function (req, res, next) {
	res.render("about.ejs");
});

router.get('/album', function (req, res, next) {
	res.render("album.ejs");
});
router.get('/reservations', function (req, res, next) {
	res.render("reservations.ejs");
});
router.get('/contact', function (req, res, next) {
	res.render("contact.ejs");
});

router.get('/gallery-food', function (req, res, next) {
	res.render("gallery-food.ejs");
});

router.get('/gallery-drinks', function (req, res, next) {
	res.render("gallery-drinks.ejs");
});

router.get('/gallery-location', function (req, res, next) {
	res.render("gallery-location.ejs");
});

router.get('/gallery-staff', function (req, res, next) {
	res.render("gallery-staff.ejs");
});
router.post('/register', function(req, res, next) {
	console.log(req.body);
	var personInfo = req.body;
	console.log("Start");

	if(!personInfo.userFirstName || !personInfo.userLastName || !personInfo.email || !personInfo.mobile){
		res.send();
		console.log("Failed");
	} else {
		if (personInfo.password == personInfo.passwordconf) {
			console.log(personInfo.password);
			User.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newPerson = new User({
							unique_id:c,
							email:personInfo.email,
							userFirstName: personInfo.userFirstName,
							userLastName: personInfo.userLastName,
							password: personInfo.password,
							userContact: personInfo.mobile,
							address : personInfo.address,
							country : personInfo.country
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are registered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});



router.post('/login', function (req, res, next) {
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not registered!"});
		}
	});
});

router.get('/profile', function (req, res, next) {
	console.log("profile");
	User.findOne({unique_id:req.session.userId},function(err,data){
		console.log("data");
		console.log(data);
		if(!data){
			res.redirect('/');
		}else{
			console.log("found");
			console.log(data);
			return res.render('data.ejs', {"name":data.userFirstName,"email":data.email});
		}
	});
});

router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
});


router.post('/forgetpass', function (req, res, next) {
	//console.log('req.body');
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not registered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password==req.body.passwordConf) {
			data.password=req.body.password;
			data.passwordConf=req.body.passwordConf;

			data.save(function(err, Person){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not matched! Both Password should be same."});
		}
		}
	});
	
});

module.exports = router;