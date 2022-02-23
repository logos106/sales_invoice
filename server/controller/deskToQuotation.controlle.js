module.exports = {
  update,
};

async function update(req, res, next) {
  try {
    const { ids, ...restBody } = req.body;
    await db.DeskToQuotation.update(restBody, { where: { id: ids } });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}
