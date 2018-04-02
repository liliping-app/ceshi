<template>
    <!-- 首页的tab切换 -->
    <div class="s-content">
        <div class="s-tabbox">
            <div class="s-tablist" v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</div>
        </div> 
        <!-- 年榜提示 -->
        <div class="year" v-show="showTime">
            <div class="yearIntr">{{Txts}}</div>
            <!-- <div class="yearlink">2017</div> -->
            <router-link to="/yearRank" class="yearlink">
              2017年榜
            </router-link>
        </div>
        <div class="weeks" v-show="noTime">
            <div class="weekshow">{{Txts}}</div>
        </div>

        <div class="s-tabcon">
            <v-tops :messages="allRank[num]" :ifshow="ifshow" class="s-tops" ref="childMethod"></v-tops>
        </div>
    </div>
  
</template>

<script>
    import tops from '@/components/tops/topsWeek.vue'

    export default {
        data () {
            return {
              tabs:[
                  "总 榜","商业力","吸睛力","专业力","粉丝力"
              ],
              weekTxt:[
                "总榜基于阿里巴巴文娱大数据，由明星的吸睛力、专业力、粉丝力、商业力四大维度的指数加权计算得出，全面衡量明星价值。","衡量明星的消费影响力。由明星的线上消费号召力、线下消费影响力、作品付费能力等 指标加权计算得出。","衡量明星的活跃情况，由明星的搜索指数、曝光指数等指标加权计算得出。","衡量明星的专业能力，由明星近期作品的表现，如视频、音乐的播放量、电影、演唱会 线下演出的用户购票次数等指标加权计算得出。","衡量明星的粉丝号召力，由粉丝对于明星的打榜行为指标加权计算得出。"
              ],
              Txts:'总榜基于阿里巴巴文娱大数据，由明星的吸睛力、专业力、粉丝力、商业力四大维度的指数加权计算得出，全面衡量明星价值。',
              num: '', 
              allRank:[],
              showTime:false,
              noTime: true,
              ifshow: []
            };
        },
        components:{
            "v-tops" : tops
        },
        methods:{
          tab(index){
            var self = this;
            window.HollywoodLog && window.HollywoodLog.expose('page.weektab_'+index, '周榜_' + this.weekTxt[index], '');
            this.num = index;
            this.Txts = this.weekTxt[index];
            for (var i = 0; i < 100; i++) {
              this.$set(this.ifshow, i, false);
            }
            //console.log(this.ifshow);
          }
            
        },
        created(){
          this.sharedesc = ruleDetails;
        },
        mounted(){

          // 数据在每天9点更新
          var todayInfo;
          var nowDate1 = new Date();
          var yy = nowDate1.getFullYear();
          var mm = nowDate1.getMonth() +1;
          var dd = nowDate1.getDate();
          var hh = nowDate1.getHours();
          var ss = nowDate1.getSeconds()
          var min = nowDate1.getMinutes();
          var time = checkTime(hh) +":" +checkTime(ss) + ":" +checkTime(min);
          var deadline = "09:00:00";


          var current = checkTime(yy) + checkTime(mm) + checkTime(dd);

          var beforeday = new Date(nowDate1.getTime() - 1*24*60*60*1000);
          var yy1 = beforeday.getFullYear();
          var mm1 = beforeday.getMonth() +1;
          var dd1 = beforeday.getDate();
          var before = checkTime(yy1) + checkTime(mm1) + checkTime(dd1);

          if(time > deadline){
              todayInfo = current;
          } else {
                todayInfo = before;
            }

          // console.log(current,'current');
          // console.log(todayInfo,'todayInfo')

          var compositeUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/composite_index_week_rank_';
          var businessUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/business_index_week_rank_';
          var fansUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/fans_index_week_rank_';
          var playUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/play_index_week_rank_';
          var suckeyeUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/suckeye_index_week_rank_';
          var a = 1, b = '.js';
          var finalUrl1 = `${compositeUrl}${todayInfo}${b}`;
          var finalUrl2 = `${businessUrl}${todayInfo}${b}`;
          var finalUrl3 = `${fansUrl}${todayInfo}${b}`;
          var finalUrl4 = `${playUrl}${todayInfo}${b}`;
          var finalUrl5 = `${suckeyeUrl}${todayInfo}${b}`;
          // console.log(finalUrl1);
          // console.log(finalUrl2);
          // console.log(finalUrl3);
          // console.log(finalUrl4);
          // console.log(finalUrl5);



          var self = this;
          self.allRank = [, , , , ];
          //周榜综合指数
          loadScript(finalUrl1, function() {
            var weekinfo = week;
            self.allRank[0] = weekinfo.compositeRank;
            weekCallback();
          });
          //console.log(self.weekinfo,'weekinfo')

          loadScript(finalUrl2, business1);
          function business1() {
            var bissinessinfo = business;
            self.allRank[1] = bissinessinfo.businessRank;
            weekCallback();
            //console.log(bissinessinfo,'bissinessinfo')
          };

          loadScript(finalUrl3, fans1);
          function fans1() {
            var fansinfo = fans;
            self.allRank[4] = fansinfo.fansRank;
            weekCallback();
            //console.log(fansinfo,'fansinfo')
          };

          loadScript(finalUrl4, play1);
          function play1() {
            var palyinfo = play;
            self.allRank[3] = palyinfo.playRank;
            weekCallback();
            //console.log(palyinfo,'palyinfo')
          };

          loadScript(finalUrl5, suckeye1);
          function suckeye1() {
            var suckeyeinfo = suckeye;
            self.allRank[2] = suckeyeinfo.suckeyeRank;
            weekCallback();
            //console.log(suckeyeinfo,'suckeyeinfo')
          };
          
          var weekNum = 0;
          function weekCallback() {
            weekNum++;
            if (weekNum == 5) {
              // 明星详情
              var baseUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/star_detail_total_';
              var a = 1, b = '.js';
              var finalUrl = `${baseUrl}${todayInfo}${b}`;
              loadScript(finalUrl, starDetail1);
              function starDetail1() {
                var starinfo = starDetails.starDetail;
                //console.log(self.allRank,'shuju');
                for (var i = 0; i < self.allRank.length; i++) {
                  switch(i) {
                    case 0:
                      for (var j = 0; j < self.allRank[i].length; j++) {
                        self.allRank[i][j].mark = [
                          {
                            marktitle: '商业力',
                            marknum: self.allRank[i][j].businessIndex
                          },
                          {
                            marktitle: '吸睛力',
                            marknum: self.allRank[i][j].suckeyeIndex
                          },
                          {
                            marktitle: '粉丝力',
                            marknum: self.allRank[i][j].fansIndex
                          },
                          {
                            marktitle: '专业力',
                            marknum: self.allRank[i][j].playIndex
                          }
                        ];
                        self.allRank[i][j].effectNum = self.allRank[i][j].compositeIndex;
                        if (starinfo[self.allRank[i][j].uid]) {
                          self.allRank[i][j].starImg = starinfo[self.allRank[i][j].uid].uimg;
                          self.allRank[i][j].play = starinfo[self.allRank[i][j].uid].production ? starinfo[self.allRank[i][j].uid].production[0] : '';
                          self.allRank[i][j].name = starinfo[self.allRank[i][j].uid].uname;
                        }
                      }
                      break;
                    case 1:
                      for (var j = 0; j < self.allRank[i].length; j++) {
                        self.allRank[i][j].mark = [
                          {
                            marktitle: '线上消费号召力',
                            marknum: self.allRank[i][j].onlinePayAmount
                          },
                          {
                            marktitle: '线下消费影响力',
                            marknum: self.allRank[i][j].offlinePayAmount
                          },
                          {
                            marktitle: '作品吸金力',
                            marknum: self.allRank[i][j].worksPayAmount
                          }
                        ];
                        self.allRank[i][j].effectNum = self.allRank[i][j].businessIndex;
                        if (starinfo[self.allRank[i][j].uid]) {
                          self.allRank[i][j].starImg = starinfo[self.allRank[i][j].uid].uimg;
                          self.allRank[i][j].play = starinfo[self.allRank[i][j].uid].production ? starinfo[self.allRank[i][j].uid].production[0] : '';
                          self.allRank[i][j].name = starinfo[self.allRank[i][j].uid].uname;
                        }
                      }
                      break;
                    case 2:
                      for (var j = 0; j < self.allRank[i].length; j++) {
                        self.allRank[i][j].mark = [
                          {
                            marktitle: '搜索',
                            marknum: self.allRank[i][j].searchIndex
                          },
                          {
                            marktitle: '曝光',
                            marknum: self.allRank[i][j].exposureIndex
                          }
                        ];
                        self.allRank[i][j].effectNum = self.allRank[i][j].suckeyeIndex;
                        if (starinfo[self.allRank[i][j].uid]) {
                          self.allRank[i][j].starImg = starinfo[self.allRank[i][j].uid].uimg;
                          self.allRank[i][j].play = starinfo[self.allRank[i][j].uid].production ? starinfo[self.allRank[i][j].uid].production[0] : '';
                          self.allRank[i][j].name = starinfo[self.allRank[i][j].uid].uname;
                        }
                      }
                      break;
                    case 3:
                      for (var j = 0; j < self.allRank[i].length; j++) {
                        self.allRank[i][j].effectNum = self.allRank[i][j].playIndex;
                        if (starinfo[self.allRank[i][j].uid]) {
                          self.allRank[i][j].starImg = starinfo[self.allRank[i][j].uid].uimg;
                          self.allRank[i][j].play = starinfo[self.allRank[i][j].uid].production ? starinfo[self.allRank[i][j].uid].production[0] : '';
                          self.allRank[i][j].name = starinfo[self.allRank[i][j].uid].uname;
                        }
                      }
                      break;
                    case 4:
                      for (var j = 0; j < self.allRank[i].length; j++) {
                        self.allRank[i][j].effectNum = self.allRank[i][j].fansIndex;
                        if (starinfo[self.allRank[i][j].uid]) {
                          self.allRank[i][j].starImg = starinfo[self.allRank[i][j].uid].uimg;
                          self.allRank[i][j].play = starinfo[self.allRank[i][j].uid].production ? starinfo[self.allRank[i][j].uid].production[0] : '';
                          self.allRank[i][j].name = starinfo[self.allRank[i][j].uid].uname;
                        }
                      }
                      break;
                  }
                }
                self.num = 0;
                for (var i = 0; i < 100; i++) {
                  self.ifshow.push(false);
                }
              }
            }
          }
          //console.log(self.allRank,'all');






            // 在3月30日之前不显示年榜信息
            let nowDate = new Date();
            let startDate = this.sharedesc.startTime;
            let startTime = startDate + " " + this.sharedesc.detailnim;  //格式2018/3/26 20:30:00
            // let startTime = startDate +" " + "20" + ":" +"30" + ":" +"00";
            let detailDates = `${nowDate.getFullYear()}/${nowDate.getMonth() + 1}/${nowDate.getDate()}`; 
            let hours = nowDate.getHours();
            let sec = nowDate.getSeconds();
            let minute = nowDate.getMinutes();
            let DetailTime = checkTime(hours) +":"+  checkTime(minute)+":" + checkTime(sec) ;
            // console.log(startDate,detailDate,detailDate);
            // console.log(this.sharedesc);
            let endTime = detailDates  + " " + DetailTime;
            // console.log(startTime)
            // alert(endTime);
            // alert(startTime);
            // alert(endTime >= startTime);
            // //console.log(endTime);
            // //console.log(endTime,startTime);
            if(endTime >= startTime){
                self.showTime = true;
                self.noTime = false;
            } else {
                self.showTime = false;
            } 
            // alert(self.showTime);
            function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
                if(i<10) 
                { 
                    i = "0" + i; 
                } 
                return i; 
            }
          
        }
    };
</script>


<style scoped lang="less">
    @bi:75rem;
    .s-content{
        .s-tabbox{
            width: 720/@bi;
            height: 76/@bi;
            /* display: flex;
            display: -webkit-flex;
            display: -webkit-box;   老版本语法: Safari, iOS, Android browser, older WebKit browsers.
            display: -moz-box;      老版本语法: Firefox (buggy)
            display: -ms-flexbox;
            justify-content: space-around;
            align-items: center; */
            font-size: 27/@bi;
            font-weight: bold;
            color: #fff;
            box-sizing: border-box;
            margin: 0 15/@bi;
            .s-tablist{
                /*flex-direction: row;*/
                float: left;
                margin-left: 5/@bi;
                width: 138/@bi;
                height: 60/@bi;
                background: url('//gw.alicdn.com/tfs/TB1c7omdMmTBuNjy1XbXXaMrVXa-138-60.png') no-repeat;
                background-size: 100% 100%;
                line-height: 60/@bi;
            }
            .active{
                background: url('//gw.alicdn.com/tfs/TB1fNMvdHGYBuNjy0FoXXciBFXa-138-60.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        .s-tabcon{
            width: 720/@bi;
            margin-top: 10/@bi;
            .s-tops{
                margin-bottom: 10/@bi;
            }
        }
        .year{
            width: 720/@bi;
            height: 80/@bi;
            /* display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            align-items: center; */
            color: #fff;
            height: auto;
            margin: 0 auto;
            /*margin-top: 10/@bi;*/
            .yearIntr{
                float: left;
                width: 585/@bi;
                height: 65/@bi;
                box-sizing: border-box;
                background: #29160a;
                border-radius: 15/@bi;
                text-align: justify;
                font-size: 18/@bi;
                overflow: hidden;
                text-align: left;
                padding-top: 2/@bi;
                vertical-align: center;
                line-height: 30/@bi;
            }
            .yearlink{
                display: inline-block;
                width: 130/@bi;
                height: 65/@bi;
                line-height: 65/@bi;
                border-radius: 15/@bi;
                text-align: center;
                font-size: 26/@bi;
                font-weight: bold;
                background: #ffae00;
                color:#723e00;
            }
        }
        .weeks{
            width: 720/@bi;
            display: flex;
            display: -webkit-flex;
            justify-content: space-around;
            align-items: center;
            color: #fff;
            height: auto;
            margin: 0 auto;
            margin-top: 10/@bi;
            .weekshow{
                width: 720/@bi;
                height: 65/@bi;
                background: #29160a;
                border-radius: 15/@bi;
                text-align: left;
                font-size: 20/@bi;
                text-align: left;
                padding: 10/@bi 0;
                line-height: 30/@bi;
            }
        }
    }
    

</style>