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
    price_list:[
      {
        name: "A",
        prices: [
          {name: '1', value: '1000'},
          {name: '2', value: '950'},
          {name: '3', value: '1000'},
          {name: '4', value: '970'},
          {name: '5', value: '1000'},
          {name: '6', value: '1030'},
          {name: '7', value: '1060'},
          {name: '8', value: '1050'},
          {name: '9', value: '1080'},
          {name: '10', value: '1050'},
          {name: '11', value: '1080'},
          {name: '12', value: '1110'},
          {name: '13', value: '1140'},
          {name: '14', value: '1110'},
        ]
      },
      {
        name: "B",
        prices: [
          {name: '1', value: '1100'},
          {name: '2', value: '1090'},
          {name: '3', value: '1040'},
          {name: '4', value: '1070'},
          {name: '5', value: '1020'},
          {name: '6', value: '990'},
          {name: '7', value: '1020'},
          {name: '8', value: '1070'},
          {name: '9', value: '1100'},
          {name: '10', value: '1130'},
          {name: '11', value: '1160'},
          {name: '12', value: '1170'},
          {name: '13', value: '1180'},
          {name: '14', value: '1130'},
        ]
      },
      {
        name: "C",
        prices: [
          {name: '1', value: '1200'},
          {name: '2', value: '1170'},
          {name: '3', value: '1220'},
          {name: '4', value: '1250'},
          {name: '5', value: '1280'},
          {name: '6', value: '1310'},
          {name: '7', value: '1280'},
          {name: '8', value: '1310'},
          {name: '9', value: '1300'},
          {name: '10', value: '1350'},
          {name: '11', value: '1340'},
          {name: '12', value: '1350'},
          {name: '13', value: '1340'},
          {name: '14', value: '1350'},
        ]
      },
      {
        name: "D",
        prices: [
          {name: '1', value: '1300'},
          {name: '2', value: '1290'},
          {name: '3', value: '1280'},
          {name: '4', value: '1250'},
          {name: '5', value: '1200'},
          {name: '6', value: '1190'},
          {name: '7', value: '1180'},
          {name: '8', value: '1230'},
          {name: '9', value: '1280'},
          {name: '10', value: '1230'},
          {name: '11', value: '1260'},
          {name: '12', value: '1270'},
          {name: '13', value: '1300'},
          {name: '14', value: '1310'},
        ]
      },
      {
        name: "E",
        prices: [
          {name: '1', value: '1400'},
          {name: '2', value: '1430'},
          {name: '3', value: '1440'},
          {name: '4', value: '1390'},
          {name: '5', value: '1400'},
          {name: '6', value: '1450'},
          {name: '7', value: '1400'},
          {name: '8', value: '1410'},
          {name: '9', value: '1380'},
          {name: '10', value: '1410'},
          {name: '11', value: '1400'},
          {name: '12', value: '1370'},
          {name: '13', value: '1380'},
          {name: '14', value: '1430'},
        ]
      },
    ],
    round : 1,
    url: "",
  },

  onSubmit: function(e) {
    this.setData({
      round: this.data.round+1,
    });
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