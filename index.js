const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Election Assistant Running 🚀");
});

// Chat endpoint (main logic)
app.post("/chat", (req, res) => {
  const userMessage = req.body.message?.toLowerCase();

  let reply = "Sorry, I didn't understand. Try asking about voting, registration, or election process.";

  if (userMessage.includes("vote")) {
    reply = `Steps to vote:
1. Register as a voter
2. Check your polling booth
3. Carry valid ID proof
4. Cast your vote on election day`;
  } 
  else if (userMessage.includes("register")) {
    reply = `How to register:
1. Visit official election website
2. Fill voter registration form
3. Upload required documents
4. Submit and wait for approval`;
  } 
  else if (userMessage.includes("process")) {
    reply = `Election process:
1. Election announcement
2. Candidate nominations
3. Campaigning
4. Voting
5. Counting and results`;
  }

  res.json({ reply });
});

// Test route (easy browser testing)
app.get("/test", (req, res) => {
  const message = req.query.message?.toLowerCase();

  let reply = "Ask something about elections.";

  if (message.includes("vote")) {
    reply = "Steps to vote: Register → Check booth → Carry ID → Vote";
  }

  res.send(reply);
});

// Start server
app.listen(8080, () => {
  console.log("Server running on port 8080");
});