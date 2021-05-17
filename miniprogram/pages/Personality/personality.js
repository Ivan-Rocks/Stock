// miniprogram/pages/Personality/personality.js
var app =getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions:[
      {name: '1', value: '第一题'},
      {name: '2', value: '第二题'},
      {name: '3', value: '第三题'},
      {name: '4', value: '第四题'},
    ],
    choices:[
      {name: '1', value: '1'},
      {name: '2', value: '2'},
      {name: '3', value: '3'},
      {name: '4', value: '4'},
      {name: '5', value: '5'},
    ],
  },

  answerChange: function(e) {
    console.log(e.currentTarget.dataset.name)
    console.log(e.detail.value)
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