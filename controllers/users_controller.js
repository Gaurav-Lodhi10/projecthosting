module.exports.users = function(req, res) {
    return res.end('<h1>Users</h1>')
}
module.exports.profile = function(req, res) {
    return res.render('users_profile', { title: 'Profile' });
}
module.exports.login = function(req, res) {
    return res.end('<h1>Login by me</h1>');
}