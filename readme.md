## Pagurbation

### Synopsis

Server side pagination

### Installation

    npm install --save pagurbation

### Usage

    import pagurbation from 'pagurbation'

    // pagurbation(req, data, pageSize)

    function getModels (req, res, next) {
      db.any('select * from models')
      .then(function (data) {
        res.status(200)
        .json(pagurbation(req, data, 10))
      }
      .catch(function (err) {
        return next(err)
      }
    }