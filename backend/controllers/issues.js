const express = require("express")

const issuesRouter = express.Router()

const issues = [
  {
    id: 0,
    title: "Issue 0",
    description: "Issue 0 description",
  },
  {
    id: 1,
    title: "Issue 1",
    description: "Issue 1 description",
  },
  {
    id: 2,
    title: "Issue 2",
    description: "Issue 2 description",
  },
]

issuesRouter.get("/", (req, res) => {
  res.json(issues)
})

issuesRouter.get("/:id", (req, res) => {
  const id = req.params.id
  const issueToBeReturned = issues.filter((issue) => issue.id == id)
  if (issueToBeReturned.length > 0)
    res.json(issueToBeReturned[0])
  else
    res.json({"error": `No issue with id ${id} found`})
})

issuesRouter.post("/", (req, res) => {
  const newIssue = {
    title: req.body.title,
    description: req.body.description
  }
  console.log(newIssue)
  res.json(newIssue)
})

issuesRouter.put("/:id", (req, res) => {
  const updatedIssue = {
    id: req.params.id,
    title: req.body.title,
    description: req.body.description
  }
  console.log(updatedIssue)
  res.json(updatedIssue)
})

module.exports = issuesRouter
