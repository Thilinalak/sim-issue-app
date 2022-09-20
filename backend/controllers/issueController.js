const { userIssues } = require("../model");
const db = require("../model");

const IssueTypes = db.issueTypes;
const UserIssues = db.userIssues;
const User = db.users;

// @Desc     Load issues
// @Method   GET
// @Route    api/issues/
exports.getIssues = async (req, res) => {
  const allIssuesCategories = await IssueTypes.findAll();
  if (allIssuesCategories !== 0) {
    res.status(200).send(allIssuesCategories);
  } else {
    res.status(200).json({ Error: "Issues Types Not Found !" });
  }
};

// @Desc    Add an issue
// @Method  POST
// @Route   api/issues/add-issues
exports.addIssue = async (req, res) => {
  const { userId, issueTypeId, issue } = req.body;

  const lastIssue = await userIssues.findAll({
    limit: 1,
    order: [["createdAt", "DESC"]],
  });

  if (lastIssue.length == 0) {
    const addIssue = await userIssues.create({
      issue,
      ongoing_queue_no: 1,
      isIssueComplete: false,
      userId,
      issueTypeId,
    });

    addIssue
      ? res.status(201).json({ message: "Your Issue Sumbit Completed", queueNo:1 })
      : res.status(200).json({ error: "Issue submit failed !" });
  } else {
    const lastone = JSON.parse(JSON.stringify(lastIssue));

    const addIssue = await userIssues.create({
      issue,
      ongoing_queue_no: lastone[0].ongoing_queue_no + 1,
      isIssueComplete: false,
      userId,
      issueTypeId,
    });
    addIssue
      ? res.status(201).json({ message: "Your Issue Sumbit Completed", queueNo:lastone[0].ongoing_queue_no + 1 })
      : res.status(200).json({ error: "Issue submit failed !" });
  }
};
