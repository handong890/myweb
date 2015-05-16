module.exports = function(app) {

    app.get('/go',function(req,res){
        res.render('index');
    });
}
