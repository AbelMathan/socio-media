import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let token = req.header("Authorization");
  try {
    if (!token) return res.status(401).json({ message: "Access denied" });

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ message: "Invalid token" });
  }
};

export default verifyToken;
