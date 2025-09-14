const jwt = require("jsonwebtoken");

function generateToken(user, secret, expiresIn) {
  // minimal payload - you can add role or other claims
  const payload = { id: user._id, role: user.role };
  return jwt.sign(payload, secret, { expiresIn });
}

module.exports = generateToken;
