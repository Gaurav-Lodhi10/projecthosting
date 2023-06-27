module.exports.users = function(req, res) {
    return res.end('<h1>Users</h1>')
}
module.exports.profile = function(req, res) {
    return res.render('users_profile', { title: 'Profile' });
}
module.exports.login = function(req, res) {
    return res.render('login', { title: 'Codeail | Login Page' });
}
module.exports.signup = function(req, res) {
    return res.render('signup', { title: 'Codeail | Signup Page' });
}
module.exports.create = function(req, res) {

}
module.exports.createSession = function(req, res) {

}