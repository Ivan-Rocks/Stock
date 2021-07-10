// miniprogram/pages/Simulation/simulation.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //Updated per round
    balance: 10000,
    profit: 0,
    
    //Updated per operation
    current_balance: 10000,
    current_profit: 0,

    stock_name:[
      {name: '1', value: 'A'},
      {name: '2', value: 'B'},
      {name: '3', value: 'C'},
      {name: '4', value: 'D'},
      {name: '5', value: 'E'},
    ],

    stock_list:[
      {
        number: "0",
        name: "A",
        buy: "买",
        hold: 0,
        //For this Round:
        current_hold: 0,
        input_value: 0,
        prices: [
          {name: 1, value: 1000},
          {name: 2, value: 950},
          {name: 3, value: 1000},
          {name: '4', value: 970},
          {name: '5', value: 1000},
          {name: '6', value: 1030},
          {name: '7', value: 1060},
          {name: '8', value: 1050},
          {name: '9', value: 1080},
          {name: '10', value: 1050},
          {name: '11', value: 1080},
          {name: '12', value: 1110},
          {name: '13', value: 1140},
          {name: '14', value: 1110},
        ]
      },
      {
        number: "1",
        name: "B",
        buy: "买",
        hold: 0,
        //For this Round:
        current_hold: 0,
        input_value: 0,
        prices: [
          {name: '1', value: 1100},
          {name: '2', value: 1090},
          {name: '3', value: 1040},
          {name: '4', value: 1070},
          {name: '5', value: 1020},
          {name: '6', value: 990},
          {name: '7', value: 1020},
          {name: '8', value: 1070},
          {name: '9', value: 1100},
          {name: '10', value: 1130},
          {name: '11', value: 1160},
          {name: '12', value: 1170},
          {name: '13', value: 1180},
          {name: '14', value: 1130},
        ]
      },
      {
        number: "2",
        name: "C",
        buy: "买",
        hold: 0,
        //For this Round:
        current_hold: 0,
        input_value: 0,
        prices: [
          {name: '1', value: 1200},
          {name: '2', value: 1170},
          {name: '3', value: 1220},
          {name: '4', value: 1250},
          {name: '5', value: 1280},
          {name: '6', value: 1310},
          {name: '7', value: 1280},
          {name: '8', value: 1310},
          {name: '9', value: 1300},
          {name: '10', value: 1350},
          {name: '11', value: 1340},
          {name: '12', value: 1350},
          {name: '13', value: 1340},
          {name: '14', value: 1350},
        ]
      },
      {
        number: "3",
        name: "D",
        buy: "买",
        hold: 0,
        //For this Round:
        current_hold: 0,
        input_value: 0,
        prices: [
          {name: '1', value: 1300},
          {name: '2', value: 1290},
          {name: '3', value: 1280},
          {name: '4', value: 1250},
          {name: '5', value: 1200},
          {name: '6', value: 1190},
          {name: '7', value: 1180},
          {name: '8', value: 1230},
          {name: '9', value: 1280},
          {name: '10', value: 1230},
          {name: '11', value: 1260},
          {name: '12', value: 1270},
          {name: '13', value: 1300},
          {name: '14', value: 1310},
        ]
      },
      {
        number: "4",
        name: "E",
        buy: "买",
        hold: 0,
        //For this Round:
        current_hold: 0,
        input_value: 0,
        prices: [
          {name: '1', value: 1400},
          {name: '2', value: 1430},
          {name: '3', value: 1440},
          {name: '4', value: 1390},
          {name: '5', value: 1400},
          {name: '6', value: 1450},
          {name: '7', value: 1400},
          {name: '8', value: 1410},
          {name: '9', value: 1380},
          {name: '10', value: 1410},
          {name: '11', value: 1400},
          {name: '12', value: 1370},
          {name: '13', value: 1380},
          {name: '14', value: 1430},
        ]
      },
    ],
    round : 1,
    url: "",
  },

  onBuy: function(e) {
    if(e.currentTarget.dataset.buy=="买") {
      this.data.stock_list[e.currentTarget.dataset.stock].buy = "卖";
    } else {
      this.data.stock_list[e.currentTarget.dataset.stock].buy = "买";
    }
    this.setData({
      stock_list: this.data.stock_list,
    })
    this.Update();
  },

  onInput: function(e) {
    
    if(e.detail.value.length==0) {
      this.data.stock_list[e.currentTarget.dataset.stock].input_value = 0;
    } else {
      this.data.stock_list[e.currentTarget.dataset.stock].input_value = parseInt(e.detail.value);
    }
    this.setData({
      stock_list: this.data.stock_list,
    })
    this.Update();
  },

  onReset: function(e) {
    this.data.current_balance = balance;
    this.data.current_profit = profit;
    for(var i=0;i<5;i++) {
      this.data.stock_list[i].buy="买";
      this.data.stock_list[i].current_hold = this.data.stock_list[i].hold;
      this.data.stock_list[i].input_value=0;
    }
    this.setData({
      stock_list: this.data.stock_list,
    })
  },

  onSubmit: function(e) {
    this.setData({
      round: this.data.round+1,
    });
    if(this.data.round<11) {
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

  Update: function() {
    var sales_index = 0;
    console.log(sales_index);
    for(var i=0;i<5;i++) {
      if(this.data.stock_list[i].buy=="买") {
        this.data.stock_list[i].current_hold = this.data.stock_list[i].hold + this.data.stock_list[i].input_value;
      } else {
        this.data.stock_list[i].current_hold = this.data.stock_list[i].hold - this.data.stock_list[i].input_value;
      }
    }
    this.setData({
      stock_list: this.data.stock_list,
      current_balance: this.data.current_balance,
      current_profit: this.data.current_profit,
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