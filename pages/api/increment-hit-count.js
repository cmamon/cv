import faunadb from 'faunadb';

module.exports = async (req, res) => {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  });

  // Check and see if the doc exists.
  const doesDocExist = await client.query(
    q.Exists(q.Match(q.Index('cv_hits')))
  );

  if (!doesDocExist) {
    await client.query(
      q.Create(q.Collection('hits'), {
        data: { hits: 0 },
      })
    );
  }

  // Fetch the document for-real
  const document = await client.query(
    q.Get(q.Match(q.Index('cv_hits')))
  );

  await client.query(
    q.Update(document.ref, {
      data: {
        hits: document.data.hits + 1,
      },
    })
  );

  return res.status(200).json({
    hits: document.data.hits,
  });
};
