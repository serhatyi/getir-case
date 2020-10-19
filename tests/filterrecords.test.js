const app = require('../app')
const request = require('supertest')

describe('Post Endpoints', () => {

  it('Check invalid format startDate', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "26-20016-01",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })

  it('Check invalid format endDate', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2019-05-02",
        "endDate": "02-02-2018",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })

  it('Check string startDate', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "string",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })

  it('Check string endDate', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-25",
        "endDate": "string",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })


  it('Check string minCount', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": "string",
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })

  it('Check string maxCount', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": "string"
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })

  it('Check negative maxCount', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": -1
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })

  
  it('Check negative minCount', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": -1,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 101, msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'})
  })

  it('Check missing startDate', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 102, msg: 'Parameter missing.'})
  })
 
  it('Check missing endDate', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-26",
        "minCount": 2700,
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 102, msg: 'Parameter missing.'})
  })

  it('Check missing minCount', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "maxCount": 3000
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 102, msg: 'Parameter missing.'})
  })

  it('Check missing maxCount', async () => {
    const res = await request(app)
      .post('/filterRecord')
      .send({
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
       })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({ code: 102, msg: 'Parameter missing.'})
  })
})