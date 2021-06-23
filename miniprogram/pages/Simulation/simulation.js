// miniprogram/pages/Simulation/simulation.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    submit_status : false,
    input_val : '',
  },

  setStatus: function(e) {
    //this.data.input_val = e.detail.value 
    this.setData({
      input_val: e.detail.value
    })
    if(this.data.input_val == '12345') {
      ///this.data.submit_status = true
      this.setData({
        submit_status: true
      })
    }
    console.log(this.data.input_val + " " + this.data.submit_status)
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
    this.onLoad()
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