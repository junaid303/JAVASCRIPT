
var users = [
    { username: "amy", admins: false },
    { username: "bob", admins: true },
    { username: "helen", admins: true },
    { username: "amir", admins: false },
    { username: "carmen", admins: false },
  ];
  function isAdmin(user) {
    return user.admins;
  }
  var admins = users.filter(isAdmin);
  var result = admins[0].username;
  
  console.log(admins);