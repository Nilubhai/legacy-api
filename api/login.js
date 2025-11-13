module.exports = (req, res) => {
  const users = [
    { email: "john@example.com", password: "Password123!" },
    { email: "jane@example.com", password: "Test@123" }
  ];

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST supported" });
  }

  const { email, password } = req.body || {};
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ email: user.email });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
