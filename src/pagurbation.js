export default function paginate (req, data, pageSize) {
  let total
  let pageCount
  let currentPage = 1
  let modelsArrays = []
  let modelsList = []
  let object = {}
  let pageData = {}

  total = data.length

  while (data.length > 0) {
    modelsArrays.push(data.splice(0, pageSize))
  }

  if (typeof req.query.page !== 'undefined') {
    currentPage = +req.query.page
  }

  modelsList = modelsArrays[+currentPage - 1]

  pageCount = total / pageSize

  pageData = {
    pageSize: pageSize,
    total: total,
    pageCount: Math.ceil(pageCount),
    currentPage: currentPage
  }

  object = {
    models: modelsList,
    pageData: pageData
  }

  return object
}
