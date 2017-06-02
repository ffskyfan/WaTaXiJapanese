// quick_review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question:[
      {word:"x",tests:["hahah","tetete","youyouyou","geek"],answer:1},

    ],
    correct_count:0,
    score:0,
    test_word:"",
    test_1:"",
    test_2: "",
    test_3: "",
    test_4: "",
    round:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ "test_word": this.data.question[0].word})

    this.setData({ "test_1": this.data.question[0].tests[0] })
    this.setData({ "test_2": this.data.question[0].tests[1] })
    this.setData({ "test_3": this.data.question[0].tests[2] })
    this.setData({ "test_4": this.data.question[0].tests[3] })
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
  
  },

  tapTestItem: function (event){
     var id = event.target.id;

     var tapAnswer = null;
     if (id =="test_item_1"){
       tapAnswer=0;
     } else if (id == "test_item_2"){
         tapAnswer=1;
     } else if (id == "test_item_3"){
         tapAnswer=2;
     } else if (id == "test_item_4"){
         tapAnswer=3;
     }

     var round = this.data.round;
     if(tapAnswer== this.data.question[round].answer){
         this.setData({ "correct_count": this.data.correct_count+1})
         this.setData({ "score": this.data.score+150})
     }
  }
})




