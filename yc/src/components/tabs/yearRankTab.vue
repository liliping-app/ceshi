<template>
    <!-- 首页的tab切换 -->
    <div class="s-content">
        <div class="s-tabbox">
            <div class="s-tablist" v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</div>
        </div> 
        <!-- 年榜显示 -->
        <div class="year">
            <div class="yearIntr">{{Txts}}</div>
        </div>

        <div class="s-tabcon">
            <v-tops :messages="allRank[num]" :ifshow="ifshow" class="s-tops" ref="childMethod"></v-tops>
        </div>
    </div>
  
</template>

<script>
    import tops from '@/components/tops/tops.vue'
    import axios from 'axios'

    export default {
        data () {
            return {
              tabs:[
                  "总 榜","商业力","吸睛力","专业力","粉丝力"
              ],
              yearTxt:[
                "总榜基于阿里巴巴文娱大数据，由明星的吸睛力、专业力、粉丝力、商业力四大维度的指数加权计算得出，全面衡量明星价值。","衡量明星的消费影响力。由明星的线上消费号召力、线下消费影响力、作品付费能力等 指标加权计算得出。","衡量明星的活跃情况，由明星的搜索指数、曝光指数等指标加权计算得出。","衡量明星的专业能力，由明星近期作品的表现，如视频、音乐的播放量、电影、演唱会 线下演出的用户购票次数等指标加权计算得出。","衡量明星的粉丝号召力，由粉丝对于明星的打榜行为指标加权计算得出。"
              ],
              Txts:'总榜基于阿里巴巴文娱大数据，由明星的吸睛力、专业力、粉丝力、商业力四大维度的指数加权计算得出，全面衡量明星价值。',
              num: 0, 
              allRank:[],
              ifshow: []
            };
        },
        components:{
            "v-tops" : tops
        },
        methods:{
          tab(index){
            var self = this;
            window.HollywoodLog && window.HollywoodLog.expose('page.yeartab_'+index, '年榜_' + this.yearTxt[index], '');
            this.num = index;
            this.Txts = this.yearTxt[index];
            for (var i = 0; i < 100; i++) {
              this.$set(this.ifshow, i, false);
            }
          }
        },
        created(){
        },
        mounted(){
          // 年榜
          var self = this;
          var todayInfo;
          
          var nowDate = new Date();
          var yy = nowDate.getFullYear();
          var mm = nowDate.getMonth() +1;
          var dd = nowDate.getDate();
          var hh = nowDate.getHours();
          var ss = nowDate.getSeconds()
          var min = nowDate.getMinutes();
          var time = checkTime(hh) +":" +checkTime(ss) + ":" +checkTime(min);
          var deadline = "09:00:00";
          // console.log(time,'time');
          var current = checkTime(yy) + checkTime(mm) + checkTime(dd);
          var beforeday = new Date(nowDate.getTime() - 1*24*60*60*1000);
          var yy1 = beforeday.getFullYear();
          var mm1 = beforeday.getMonth() +1;
          var dd1 = beforeday.getDate();
          var before = checkTime(yy1) + checkTime(mm1) + checkTime(dd1);

          function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
            if(i<10) 
            { 
                i = "0" + i; 
            } 
            return i; 
          }

          if(time > deadline){
            todayInfo = current
          } else {
            todayInfo = before
          }
          // console.log(current,'current');
          // console.log(todayInfo,'todayInfo')

          var baseUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/star_detail_total_';
          var a = 1, b = '.js';
          var finalUrl = `${baseUrl}${todayInfo}${b}`;
          // console.log(finalUrl);


          loadScript('//hudong.alicdn.com/api/data/v2/96fa2f26add54db9ac5175a4d38b555b.js', callback);
          function callback() {
            var obj = config1;
            
            // 明星详情
            loadScript(finalUrl, starDetail1);
            function starDetail1() {
              var starinfo = starDetails.starDetail;
              //console.log(starinfo, 'info');
              self.allRank = [
                obj.compositeRank,
                obj.businessRank,
                obj.suckeyeRank,
                obj.playRank,
                obj.fansRank,

              ];
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
                      }
                    }
                    break;
                  case 3:
                    for (var j = 0; j < self.allRank[i].length; j++) {
                      self.allRank[i][j].effectNum = self.allRank[i][j].playIndex;
                      if (starinfo[self.allRank[i][j].uid]) {
                        self.allRank[i][j].starImg = starinfo[self.allRank[i][j].uid].uimg;
                        self.allRank[i][j].play = starinfo[self.allRank[i][j].uid].production ? starinfo[self.allRank[i][j].uid].production[0] : '';
                      }
                    }
                    break;
                  case 4:
                    for (var j = 0; j < self.allRank[i].length; j++) {
                      self.allRank[i][j].effectNum = self.allRank[i][j].fansIndex;
                      if (starinfo[self.allRank[i][j].uid]) {
                        self.allRank[i][j].starImg = starinfo[self.allRank[i][j].uid].uimg;
                        self.allRank[i][j].play = starinfo[self.allRank[i][j].uid].production ? starinfo[self.allRank[i][j].uid].production[0] : '';
                      }
                    }
                    break;
                }
              }

              for (var i = 0; i < 100; i++) {
                self.ifshow.push(false);
              }
              //console.log(self.allRank,'allRank');
            }
          }
        }
        
    }
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
                float: left;
                /*flex-direction: row;*/
                margin-left: 5/@bi;
                box-sizing: border-box;
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
            width: 750/@bi;
            margin-top: 10/@bi;
            .s-tops{
                margin-bottom: 10/@bi;
            }
        }
        .year{
            width: 720/@bi;
            /* display: flex;
            display: -webkit-flex;
            display: -webkit-box;   老版本语法: Safari, iOS, Android browser, older WebKit browsers.
            display: -moz-box;      老版本语法: Firefox (buggy)
            display: -ms-flexbox;
            justify-content: space- around;
            align-items: center;*/
            color: #fff;
            height: auto;
            margin: 0 auto;
            margin-top: 10/@bi;
            .yearIntr{
                width: 720/@bi;
                height: 65/@bi;
                background: #29160a;
                border-radius: 15/@bi;
                text-align: left;
                font-size: 18/@bi;
                text-align: left;
                line-height: 30/@bi;
                box-sizing: border-box;
                padding-top: 2/@bi;
            }
        }
    }
    

</style>