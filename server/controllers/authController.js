const bcrypt = require('bcrypt');
module.exports = {

  register: async (req, res) => {
    const db = req.app.get('db');
    const {email, username, password } = req.body;
    const foundUser = await db.check_user(email);

    if(foundUser[0]){
      return res.status(400).send('email already registered')
    }
    const salt = bcrypt.getSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.add_user([email, username, hash]);
    req.session.user = {
      userId: newUser.user_id,
      email: newUser.email,
      username: newUser.username
    }
    res.status(200).send(req.session.user);

  }


}