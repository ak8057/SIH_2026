// function permit(...allowed) {
//   return (req, res, next) => {
//     const { user } = req;
//     if (!user || !allowed.includes(user.role)) {
//       return res
//         .status(403)
//         .json({ message: "Forbidden: insufficient permissions" });
//     }
//     next();
//   };
// }

// module.exports = permit;


function permit(...allowed) {
  return (req, res, next) => {
    console.log("👉 Checking role:", req.user?.role, "Allowed:", allowed);

    if (!req.user || !allowed.includes(req.user.role)) {
      console.log("❌ Role check failed");
      return res
        .status(403)
        .json({ message: "Forbidden: insufficient permissions" });
    }
    next();
  };
};

module.exports = permit;