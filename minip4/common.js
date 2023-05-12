const news=[{
    id:"32676",
  title:"厦门大学嘉庚学院：重点突出“五个学” 推动党的二十大精神入脑入心见行见效",
  poster:"https://www.xujc.com/uploads2/img/2022/10/16/2022101619565261.jpg",
  content:"抓住时机——全校师生趁热学。在党的二十大开幕前，校党委认真制定收听收看党的二十大开幕会工作方案，明确任务要求。开幕会当天设置分会场，组织广大干部、师生党员、党校学员、马研班学员和团学组织学生干部代表以饱满的热情和昂扬的精神面貌集中收听收看党的二十大开幕会盛况，认真聆听学习习近平总书记代表第十九届中央委员会向党的二十大所作的报告。开幕会结束后，校党委及时组织召开学习贯彻党的二十大精神师生党员代表座谈会，师生党员代表纷纷热议开幕会盛况，围绕报告内容，畅谈心得感悟，让党的二十大精神“热气腾腾”地滋润师生心田。",
  add_data:"2022-10-01"
  },{
    id:"32441",
    title:"同心贺国庆 喜迎二十大！国企下我们祝愿祖国更加繁荣昌盛",
  poster:"https://www.xujc.com/uploads2/img/2022/12/28/20221228145843.jpg",
  content:"今天是中华人民共和国成立73周年华诞。上午九点，漳州校区庆祝中华人民共和国成立73周年升旗仪式在嘉庚广场举行。国旗下，厦门大学漳州校区管委会、嘉庚学院、漳州校区其他单位领导和师生代表，共同祝愿伟大的祖国更加繁荣昌盛。",
  add_data:"2022-10-01"
  },
  {
    id:"32645",
    title:"盘点2022：官宣！我校2022年十大新闻来了",
    poster:"https://www.xujc.com/uploads2/img/2022/12/28/20221228175118.jpg",
    content:"我校组织师生集体收听收看党的二十大开幕会，第一时间召开学习党的二十大精神师生座谈会。校党委理论学习中心组发挥“领头雁”作用，召开集体研讨学习会带头学深入学。校党委制定发布学习宣传贯彻党的二十大精神通知和方案，召开党委（扩大）会议，对学习宣传贯彻党的二十大精神工作进行全面动员和部署；依托习近平新时代中国特色社会主义思想大讲坛和习近平新时代中国特色社会主义思想读书社，邀请校内外专家作辅导报告，成立“厦门大学嘉庚学院学习宣传党的二十大精神宣讲团”和“‘嘉园’新时代青年学生宣讲团”，推动全校15个党总支理论学习中心组二十大精神学习宣讲全覆盖；组织开展庆祝党的二十大青春歌会、“学习二十大 奋进新征程”学习强国挑战赛等形式多样的主题活动，在学校各官方宣传平台推出系列报道，营造学习宣传贯彻二十大的浓厚氛围，不断掀起学习热潮，持续推动党的二十大精神在“嘉园”落地生根。",
    add_data:"2022-12-30"
}
    ]
//自定义函数：获取新闻列表
function getNewsList(){
  let list=[];
  for(var i=0;i<news.length;i++){
    let obj={};
    obj.id=news[i].id;
    obj.title=news[i].title;
    obj.poster=news[i].poster;
    list.push(obj)
  }
  return list
}
//自定义函数：获取新闻内容
function getNewsDetail(newsID){
  let msg={
    code:"404",
    news:{}
  };
  for(var i=0;i<news.length;i++){
    if(newsID==news[i].id){
      msg.code="200";
      msg.news=news[i];
      break
    }
  }
  return msg
}

module.exports={
  getNewsList:getNewsList,
  getNewsDetail:getNewsDetail
}