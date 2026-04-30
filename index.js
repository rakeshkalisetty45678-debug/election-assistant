const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Election Assistant Running 🚀");
});

// Chat endpoint (POST - main logic)
app.post("/chat", (req, res) => {
  const userMessage = req.body.message?.toLowerCase();

  if (!userMessage) {
    return res.json({
      reply: "Please ask something about voting, registration, or elections."
    });
  }

  let reply = "Sorry, I didn't understand. Try asking about voting, registration, ID proof, or election process.";

  // Voting steps
  if (userMessage.includes("vote")) {
    reply = `Steps to vote:
1. Register as a voter
2. Check your polling booth
3. Carry valid ID proof
4. Cast your vote on election day`;
  }

  // Registration
  else if (userMessage.includes("register")) {
    reply = `How to register:
1. Visit official election website
2. Fill voter registration form
3. Upload required documents
4. Submit and wait for approval`;
  }

  // ID proof
  else if (userMessage.includes("id") || userMessage.includes("document")) {
    reply = `Valid ID proofs include:
- Aadhaar Card
- Voter ID
- Passport
- Driving License`;
  }

  // Polling booth
  else if (userMessage.includes("booth") || userMessage.includes("where")) {
    reply = `You can check your polling booth location on the official election website using your voter details.`;
  }

  // Election process
  else if (userMessage.includes("process") || userMessage.includes("election")) {
    reply = `Election process:
1. Election announcement
2. Candidate nominations
3. Campaigning
4. Voting
5. Counting and results`;
  }

  res.json({ reply });
});

// GET endpoint (for browser testing)
app.get("/chat", (req, res) => {
  const message = req.query.q?.toLowerCase();

  if (!message) {
    return res.send("Use /chat?q=your_question");
  }

  let reply = "Ask something about elections.";

  if (message.includes("vote")) {
    reply = "Steps to vote: Register → Check booth → Carry ID → Vote";
  }
  else if (message.includes("register")) {
    reply = "Register online via official election website.";
  }
  else if (message.includes("id")) {
    reply = "Use Aadhaar, Voter ID, Passport, or Driving License.";
  }
  else if (message.includes("booth")) {
    reply = "Check polling booth on official election portal.";
  }

  res.send(reply);
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});