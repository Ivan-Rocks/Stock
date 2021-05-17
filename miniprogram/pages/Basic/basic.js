// miniprogram/pages/Basic/basic.js
var app =getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderChoices:[
      {name: '男', value: '男'},
      {name: '女', value: '女'},
      {name: '其他', value: '其他'},
      {name: '不方便透露', value: '不方便透露'},
    ],
    ageChoices:[
      {name: '15岁以下', value: '15岁以下'},
      {name: '15-20岁（含20岁）', value: '15-20岁（含20岁）'},
      {name: '20-25岁（含25岁）', value: '20-25岁（含25岁）'},
      {name: '25-30岁（含30岁）', value: '25-30岁（含30岁）'},
      {name: '30-40岁（含40岁）', value: '30-40岁（含40岁）'},
      {name: '40-50岁（含50岁）', value: '40-50岁（含50岁）'},
      {name: '50-60岁（含60岁）', value: '50-60岁（含60岁）'},
      {name: '60岁以上', value: '60岁以上'},
    ],
    diplomaChoices:[
      {name: '小学及以下', value: '小学及以下'},
      {name: '初中', value: '初中'},
      {name: '高中/职业高中', value: '高中/职业高中'},
      {name: '专科', value: '专科'},
      {name: '本科', value: '本科'},
      {name: '硕士', value: '硕士'},
      {name: '博士', value: '博士'},
    ],
    incomeChoices:[
      {name: '学生', value: '我是学生，目前没有收入'},
      {name: '0-10万', value: '0-10万'},
      {name: '10-30万', value: '10-30万'},
      {name: '30-50万', value: '30-50万'},
      {name: '50万以上', value: '50万以上'},
    ],
    stock_experienceChoices:[
      {name: '是', value: '是'},
      {name: '否', value: '否'},
    ],
    investment_experienceChoices:[
      {name:'有限', value:'有限：除银行活期和定期存款外，没有其他投资经验'},
      {name:'一般', value:'一般：除银行活期账户和定期存款外，有一年以上的股票、基金、期货、外汇等投资经理，但还需要进一步的指导'},
      {name:'丰富', value:'丰富：我是一位有经验的投资者，有2年以上的股票、基金、期货、外汇等投资经历，但需要进一步的指导'},
      {name:'非常丰富', value:'非常丰富：我是一位非常有经验的投资者，有5年以上的股票、基金、期货、外汇等投资经历'},
    ],
    frequencyChoices:[
      {name:'1-5', value:'1-5'},
      {name:'5-10', value:'5-10'},
      {name:'10-15', value:'10-15'},
      {name:'15-30', value:'15-30'},
      {name:'30次以上', value:'30次以上'},
    ],
    choose1Choices:[
      {name:'1', value:'1'},
      {name:'2', value:'2'},
      {name:'3', value:'3'},
      {name:'4', value:'4'},
    ],
  },

  genderChange: function (e) {
    //console.log('radio发生change事件，携带value值为：', e.detail.value)
    app.globalData.gender = e.detail.value 
    console.log( app.globalData.gender)
  },

 ageChange: function(e) {
  app.globalData.age = e.detail.value
  console.log(app.globalData.age)
 },

diplomaChange: function(e) {
  app.globalData.diploma = e.detail.value
  console.log(app.globalData.diploma)
},

incomeChange: function(e) {
  app.globalData.income = e.detail.value
  console.log(app.globalData.income)
},

stock_experienceChange: function(e) {
  app.globalData.stock_experience = e.detail.value
  console.log(app.globalData.stock_experience)
},

investment_experienceChange: function(e) {
  app.globalData.investment_experience = e.detail.value
  console.log(app.globalData.investment_experience)
},

frequencyChange: function(e) {
  app.globalData.frequency = e.detail.value
  console.log(app.globalData.frequency)
},

choose1Change: function(e) {
  app.globalData.choose1 = e.detail.value
  console.log(app.globalData.choose1)
},

setName: function (e) {
  app.globalData.name = e.detail.value
  console.log(app.globalData.name)
},

setOccupation: function (e) {
  app.globalData.p = e.detail.value
  console.log(app.globalData.occupation)
},

TurnPage: function(event) {
  wx.navigateTo({
    url: '/pages/Personality/personality',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})