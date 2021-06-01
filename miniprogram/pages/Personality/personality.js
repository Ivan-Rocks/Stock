// miniprogram/pages/Personality/personality.js
var app =getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions:[
      {name: '1', value: '我常常担心有什么不好的事情要发生'},
      {name: '2', value: '我常感到害怕'},
      {name: '3', value: '有时候我觉得自己一无是处'},
      {name: '4', value: '我很少感到忧郁或沮丧'},
      {name: '5', value: '别人一句漫不经心的话，我常会联系在自己身上'},
      {name: '6', value: '在面对压力时，我有种要崩溃的感觉'},
      {name: '7', value: '我常担忧一些无关紧要的事情'},
      {name: '8', value: '我常常感到内心不踏实'},
      {name: '9', value: '在工作上，我常只求能赢付过去便可'},
      {name: '10', value: '我常常是仔细考虑之后才做出的决定'},
      {name: '11', value: '别人认为我是个慎重的人'},
      {name: '12', value: '做事讲究逻辑和条例是我的一个特点'},
      {name: '13', value: '我喜欢一开头就把事情计划好'},
      {name: '14', value: '我工作或学习很勤奋'},
      {name: '15', value: '我是个倾尽全力做事的人'},
      {name: '16', value: '尽管人类社会存在着一些阴暗的东西（如战争、罪恶、欺诈），我仍然相信人性总的来说是善良的'},
      {name: '17', value: '我觉得大部分人基本上是心怀善意的'},
      {name: '18', value: '虽然社会上有些骗子，但是我觉得大部分还人还是可信的'},
      {name: '19', value: '我不太关心别人是否收到不公正的待遇'},
      {name: '20', value: '我时常感觉别人的痛苦与我无关'},
      {name: '21', value: '我常为那些遭遇不幸的人感到难过'},
      {name: '22', value: '我是那种只照顾好自己，不替别人担忧的人'},
      {name: '23', value: '当别人向我诉说不幸时，我常感到难过'},
      {name: '24', value: '我的想象力相当丰富'},
      {name: '25', value: '我头脑中经常充满生动的画面'},
      {name: '26', value: '我对许多事情有着很强的好奇心'},
      {name: '27', value: '我喜欢冒险'},
      {name: '28', value: '我是个勇于冒险，突破常规的人'},
      {name: '29', value: '我身上具有别人没有的冒险精神'},
      {name: '30', value: '我渴望学习一些新东西，即使他们与我的日常生活无关'},
      {name: '31', value: '我很愿意也很容易接受那些新事物、新观点、新想法'},
      {name: '32', value: '我喜欢参加社交与娱乐聚会'},
      {name: '33', value: '我对人多的聚会感到乏味'},
      {name: '34', value: '我尽量避免参加人多的聚会和嘈杂的环境'},
      {name: '35', value: '在热闹的聚会上，我常常表现主动并尽情玩耍'},
      {name: '36', value: '有我在的场合一般不会冷场'},
      {name: '37', value: '我希望成为领导者而不是被领导者'},
      {name: '38', value: '在一个团队中，我希望处于领导地位'},
      {name: '39', value: '别人多认为我是一个热情和友好的人'},
      {name: '40', value: '一旦确定了目标，我会坚持努力地实现它'},
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
    app.globalData.personality_answers[e.currentTarget.dataset.name]= e.detail.value
    console.log(app.globalData.personality_answers)
  },

  TurnPage: function(event) {
    wx.navigateTo({
      url: '/pages/PartTwoNotice/part2',
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