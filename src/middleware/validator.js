module.exports = (req, res, next) => {
    let name = req.query.name;
    // console.log('__QUERY__', name);
    if (typeof name !== 'string') {
    next('There is no name');
  } else {
    res.json({
    name: name,
    });
  }
  };