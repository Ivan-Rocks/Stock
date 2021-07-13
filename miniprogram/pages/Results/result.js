// miniprogram/pages/Results/result.js
var app =getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    basic_anwers: new Array(),
    name: "",
    gender: "",
    age: "",
    diploma: "",
    occupation: "",
    income: "",
    stock_experience: "",
    investment_experience: "",
    frequency: "",
    choose1: "",
    personality_answers: new Array(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.basic_anwers.push(app.globalData.name);
    this.data.basic_anwers.push(app.globalData.gender);
    this.setData({
      name: app.globalData.name,
      gender: app.globalData.gender,
      age: app.globalData.age,
      diploma: app.globalData.diploma,
      occupation: app.globalData.occupation,
      income: app.globalData.income,
      stock_experience: app.globalData.stock_experience,
      investment_experience: app.globalData.investment_experience,
      frequency: app.globalData.frequency,
      choose1: app.globalData.choose1,

      profit: app.globalData.profit,

      basic_anwers: this.data.basic_anwers,
      personality_answers: app.globalData.personality_answers,
    })
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
    console.log(app.globalData.occupation);
    console.log(this.data.occupation)
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