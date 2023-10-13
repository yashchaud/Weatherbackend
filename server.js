const app = require("./app");
 
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
