import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid admin credentials",
      });
    }

    const token = jwt.sign(
      { email, role: "admin" },          // ✅ OBJECT payload
      process.env.JWT_SECRET,        // ✅ same secret
      { expiresIn: "1d" }                // ✅ expiry
    );

    return res.json({
      success: true,
      token,
      message: "Admin logged in successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while admin login",
    });
  }
};

export { adminLogin };
