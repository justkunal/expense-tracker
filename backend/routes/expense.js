const router = require('express').Router();
let Expense = require('../models/expense');

// GET /expenses
router.route('/').get(async (req, res) => {
  try {
    let query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }
    if (req.query.date) {
      query.date = new Date(req.query.date);
    }
    const expenses = await Expense.find(query);
    res.json(expenses);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// POST /expenses
router.route('/').post(async (req, res) => {
  const { amount, category, date, description } = req.body;
  const newExpense = new Expense({
    amount,
    category,
    date: new Date(date),
    description,
  });
  try {
    await newExpense.save();
    res.json('Expense added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// GET /expenses/total
router.route('/total').get(async (req, res) => {
  try {
    const { start, end } = req.query;
    const startDate = new Date(start);
    const endDate = new Date(end);

    const expenses = await Expense.find({
      date: { $gte: startDate, $lte: endDate },
    });

    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    res.json({ total });
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;