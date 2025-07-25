
export const signup = async(req, res) => {
  const { username, email, password } = req.body;
 try {
  
 } catch (error) {
  
 }
}

export const login = async(req, res) => {
  res.send("login Page");
}

export const logout = async(req, res) => {
  res.send("logout Page");
}