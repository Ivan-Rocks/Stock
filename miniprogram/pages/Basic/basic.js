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
      url: '/pages/Results/result',
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