// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const LongText = ["1\n2\n3\n4\n5\n\n\n\n\n\n6\n7\n","none"]
var Wishes = ["祝软一的小姐姐们debug一遍过！",
"你若安好，备胎到老。",
"少女心和骑士精神，可以同属一个女孩儿！",
"生活幸福 平安喜乐",
"人生两喜，代码和你",
"祝女生们天天和女生节一样快乐！好耶！",
"祝软件学院的沉鱼落雁，闭月羞花们节日快乐！愿你们在大学的每天都能开开心心，心想事成！希望我们一起度过愉快的大学生活！",
"Do waht you want to do, be what you want to be.",
"祝女生们岁月安康，绩点向上，万般熙攘化清风明月，四方梦想皆如愿以偿",
"愿你如春风，历尽千帆，仍有清新依旧，花香盈袖",
"怎么吃也不胖、不长火泡、不会鼻塞 选课不掉，给分超好，收获满满的友谊",
"你要抵达山川湖海，把沿途每一帧星芒收进载满痴梦的行囊。",
"祝度过一天开心的女生节~希望这一天也能为接下来的日子增添美好的色彩！",
"雛祭りに際して、素敵な未来を迎える",
"Good morning,  good afternoon, good evening, and good night！",
"def funcOfNvshengjie:     while (True):         for everyone in fairiesOfSSTHU:             everyone.charm + +；             everyone.happiness + +;             everyone.gpa + +;             everyone.wishes = True;",
"腾蛟起凤，是你们的才华；无言成蹊，是你们的魅力。",
"祝各位女生都能找到属于自己的美好！",
"祝女生们天天开心鸭",
"祝你买大乐透拿到一百万",
"愿三月的暖风能吹走眼泪与辛酸，带来满心欢喜，即使前方的路途依然布满荆棘，也能一路有鲜花与繁星相伴，抵达理想的彼岸。",
"祝女生节快乐，做一个幸福的女生",
"天上有多少星光，世间有多少女孩。但天上只有一个月亮，世间只有一个你。软院的小仙女们女生节快乐！",
"且看那浅斟低唱，弄水袖染了墨香，正芬芳。娇波斜入鬓云长，拢发髻招来目光，愿伊康。",
"祝女生们青春永驻，幸福快乐！",
"今天你们负责开心，我们负责承包所有代码",
"所到之处阳光漫，无灾无难到公卿",
"祝你对所有的烦恼说byebye，对所有的快乐说hihi~",
"春风拂绿柳，清心共明月",
"“可惜一溪风月，莫教踏碎琼瑶。”愿你在前进的路途中，能找到属于自己的风景～",
"Python Java C++ lLine Line So Easy, Years Months Weeks Day Day No Bug",
"自知自信，自如自然，自得自在",
"for (day=1;day＜=365;day++){ anxiety--; annoyance--; homework--; if（BMI>=21.2）weight--; luck++； money++; happiness++; loveliness++； ｝",
"生活幸福 平安喜乐",
"祝软院一字班的女生们心想事成",
"鲁迅曾经说过，时间就像海绵里的水，只要你愿挤，它便从你的指尖悄然流走，亦不留下游丝一样的痕迹（bushi）愿你做一位反卷斗士，在这喧嚣的人间开开心心过好每一天(●°u°●)​ 」",
"祝软院的xjj们女生节快乐",
"while(1){善良;快乐;美丽｝",
"芝兰玉树，云胡不喜？",
"祝愿软件学院的女生们女生节快乐！学习进步，生活顺心！",
"知足且上进，温柔且坚定",]

var org_Wishes = ["祝软一的小姐姐们debug一遍过！",
"你若安好，备胎到老。",
"少女心和骑士精神，可以同属一个女孩儿！",
"生活幸福 平安喜乐",
"人生两喜，代码和你",
"祝女生们天天和女生节一样快乐！好耶！",
"祝软件学院的沉鱼落雁，闭月羞花们节日快乐！愿你们在大学的每天都能开开心心，心想事成！希望我们一起度过愉快的大学生活！",
"Do waht you want to do, be what you want to be.",
"祝女生们岁月安康，绩点向上，万般熙攘化清风明月，四方梦想皆如愿以偿",
"愿你如春风，历尽千帆，仍有清新依旧，花香盈袖",
"怎么吃也不胖、不长火泡、不会鼻塞 选课不掉，给分超好，收获满满的友谊",
"你要抵达山川湖海，把沿途每一帧星芒收进载满痴梦的行囊。",
"祝度过一天开心的女生节~希望这一天也能为接下来的日子增添美好的色彩！",
"雛祭りに際して、素敵な未来を迎える",
"Good morning,  good afternoon, good evening, and good night！",
"def funcOfNvshengjie:     while (True):         for everyone in fairiesOfSSTHU:             everyone.charm + +；             everyone.happiness + +;             everyone.gpa + +;             everyone.wishes = True;",
"腾蛟起凤，是你们的才华；无言成蹊，是你们的魅力。",
"祝各位女生都能找到属于自己的美好！",
"祝女生们天天开心鸭",
"祝你买大乐透拿到一百万",
"愿三月的暖风能吹走眼泪与辛酸，带来满心欢喜，即使前方的路途依然布满荆棘，也能一路有鲜花与繁星相伴，抵达理想的彼岸。",
"祝女生节快乐，做一个幸福的女生",
"天上有多少星光，世间有多少女孩。但天上只有一个月亮，世间只有一个你。软院的小仙女们女生节快乐！",
"且看那浅斟低唱，弄水袖染了墨香，正芬芳。娇波斜入鬓云长，拢发髻招来目光，愿伊康。",
"祝女生们青春永驻，幸福快乐！",
"今天你们负责开心，我们负责承包所有代码",
"所到之处阳光漫，无灾无难到公卿",
"祝你对所有的烦恼说byebye，对所有的快乐说hihi~",
"春风拂绿柳，清心共明月",
"“可惜一溪风月，莫教踏碎琼瑶。”愿你在前进的路途中，能找到属于自己的风景～",
"Python Java C++ lLine Line So Easy, Years Months Weeks Day Day No Bug",
"自知自信，自如自然，自得自在",
"for (day=1;day＜=365;day++){ anxiety--; annoyance--; homework--; if（BMI>=21.2）weight--; luck++； money++; happiness++; loveliness++； ｝",
"生活幸福 平安喜乐",
"祝软院一字班的女生们心想事成",
"鲁迅曾经说过，时间就像海绵里的水，只要你愿挤，它便从你的指尖悄然流走，亦不留下游丝一样的痕迹（bushi）愿你做一位反卷斗士，在这喧嚣的人间开开心心过好每一天(●°u°●)​ 」",
"祝软院的xjj们女生节快乐",
"while(1){善良;快乐;美丽｝",
"芝兰玉树，云胡不喜？",
"祝愿软件学院的女生们女生节快乐！学习进步，生活顺心！",
"知足且上进，温柔且坚定",
]


Page({
  data: {
    motto: 'Hello World!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    text_shown : "init",
    text_shown_id : 0,
    wish_shown : "一大波祝福\n正在赶来...",
    wish_history : [] as Array<string>,
    button_enable: true,
    button_shown: "换一换~"
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  change(){
    this.setData({
      text_shown : LongText[this.data.text_shown_id],
      text_shown_id : 1-this.data.text_shown_id
    })
  },

  get_wish(){
    if(this.data.button_enable == false){
      return
    }
    if(Wishes.length == 0){
      Wishes = org_Wishes
      this.setData({
        button_shown : "换一换~",
        wish_shown : "一大波祝福\n正在赶来..."
      })
      return
    }
    this.fade()
    setTimeout(() => this.show(), 100)
    var id = Math.floor(Math.random()*Wishes.length)
    this.setData({
      wish_shown : Wishes[id], //+ '\n\n' + this.data.wish_shown
      button_enable : false
    })
    setTimeout(() => this.setData({button_enable:true}), 2720)
    this.data.wish_history.push(this.data.wish_shown)
    Wishes.splice(id,1)
    if(Wishes.length == 0)
    {
      this.setData({
        button_shown : "再看一遍"
      })
    }
    //this.show()
  },

  show(){
    var animation = wx.createAnimation({
      duration: 2700,
      timingFunction: 'linear',
      delay: 10
    });
    animation.opacity(1).step()
    this.setData({
      ani:  animation.export()
    })
  },

  fade(){
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'ease',
      delay: 0
    });
    animation.opacity(0).step()
    this.setData({
      ani:  animation.export()
    })
  }
  

})
