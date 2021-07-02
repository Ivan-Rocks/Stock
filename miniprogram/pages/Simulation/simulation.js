// miniprogram/pages/Simulation/simulation.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    submit_status : false,
    input_val : '',
    stock_name:[
      {name: '1', value: 'A'},
      {name: '2', value: 'B'},
      {name: '3', value: 'C'},
      {name: '4', value: 'D'},
      {name: '5', value: 'E'},
    ],
    round : 1,
    url: "",
  },

  onSubmit: function(e) {
    this.data.round++;
    if(this.data.round<=11) {
      this.setData({
        url: "pics/img" + this.data.round + ".jpg",
      })
      console.log(this.data.round);
    } else {
      wx.navigateTo({
        url: '/pages/Results/result',
      })
    }
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
    this.setData({
      url: "pics/img1.jpg"
    })
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