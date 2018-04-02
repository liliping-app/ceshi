<template>
  <div class="common-component">
    <!-- <self.canvas id="myChart" width="750" height="400"></self.canvas> -->
    <canvas id="cv" width="750" height="534"></canvas>
    <div class="s-tabbox">
      <div class="s-tablist" v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</div>
    </div>
    <div class="year">
      <div class="yearIntr">{{Txts}}</div>
    </div>
  </div>

</template>

<script>
import Chart from 'chart.js';
export default {
    name: 'common-component',
    props: {
      'uid': String
    },
    data () { 
        return {
          tabs: [
            "总 榜","商业力","吸睛力","专业力","粉丝力"
          ],
          yearTxt:[
                "总榜基于阿里巴巴文娱大数据，由明星的吸睛力、专业力、粉丝力、商业力四大维度的指数加权计算得出，全面衡量明星价值。","衡量明星的消费影响力。由明星的线上消费号召力、线下消费影响力、作品付费能力等 指标加权计算得出。","衡量明星的活跃情况，由明星的搜索指数、曝光指数等指标加权计算得出。","衡量明星的专业能力，由明星近期作品的表现，如视频、音乐的播放量、电影、演唱会 线下演出的用户购票次数等指标加权计算得出。","衡量明星的粉丝号召力，由粉丝对于明星的打榜行为指标加权计算得出。"
              ],
              Txts:'总榜基于阿里巴巴文娱大数据，由明星的吸睛力、专业力、粉丝力、商业力四大维度的指数加权计算得出，全面衡量明星价值。',
          num:0,
          ranks:['compositeIndex','businessIndex','suckeyeIndex','playIndex','fansIndex'],
          fuzhi: 'compositeIndex'
        };
    },
    methods:{
      tab(index){
        var self = this;
        this.num = index;
        this.Txts = this.yearTxt[index];
        this.fuzhi = this.ranks[index];
        // console.log(this.ranks[index],'数据');
        self.dict = [];
        for (var i = 0; i < self.configData.trendList.length; i++) {
          self.dict.push({
            x: self.configData.trendList[i].rankDate.substr(4),
            y: self.configData.trendList[i][self.fuzhi]
          });
        }
        //数据源提取  
        var len = self.len = self.dict.length;  
        self.xArr = [];
        self.yArr = [];
        for(var i=0; i < len; i++){
            self.xArr.push(i * 636 / (len - 1));
            self.yArr.push(self.dict[i].y * 465 / 140);  
        }  
        self.draw();
      },
      draw: function() {
        var self = this;
        var ctx = this.ctx;
        var len = this.len;
        ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
        ctx.beginPath();
        //画框
        ctx.strokeStyle = '#99531f';
        ctx.moveTo(83, 13);
        ctx.lineTo(716, 13);
        ctx.lineTo(716, 478);
        ctx.lineTo(83, 478);
        ctx.lineTo(83, 13);
        for (let i = 1; i < 7; i++) {
          ctx.moveTo(83, 13 + (478 - 13) / 7 * i);
          ctx.lineTo(716, 13 + (478 - 13) / 7 * i);
        }
        ctx.stroke();

        //y轴
        ctx.beginPath();
        ctx.font="20px Arial";
        ctx.fillStyle = "#fff";
        ctx.textAlign = 'center';
        for (var i = 0; i <= 7; i++) {
          ctx.fillText(i * 20, 50, 478 + 10 - (i * 20 / 140 * 465), 50);
        }

        //画折线  
        ctx.beginPath();
        ctx.strokeStyle = "rgba(254, 173, 0, 0.7)";
        ctx.fillStyle = "rgba(254, 173, 0, 0.7)";  
        for(var i=0 ;i < len; i++){  
            var x = self.xArr[i] + 83;  
            if (x > 716) {
              x = 716;
            }
            var y = 478 - self.yArr[i];  
            if(i === 0){  
                ctx .moveTo(x, y);  
            }  
            else{  
                ctx .lineTo(x, y);  
            }  
        }
        ctx.lineTo(716, 478); 
        ctx.lineTo(83, 478); 
        ctx.fill();
        ctx.stroke();

        //画点  
        for(var i=0; i<len; i++){  
            var x = self.xArr[i] + 83;  
            var y = 478 - self.yArr[i];  
            var xMemo = self.dict[i].x;  
            var yMemo = self.dict[i].y;  
            ctx.beginPath();
            ctx.strokeStyle = "#fead00"; 
            // ctx.arc(x, y, 1, 0, 2*Math.PI);//画点  
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = "#fff";  
            ctx.strokeStyle = '#fff';
            ctx.moveTo(x, 485);
            ctx.lineTo(x, 492);
            ctx.font="18px Arial";
            if (i % 5 == 0) {
              ctx.fillText(xMemo, x, 515);
            }
            // ctx.fillText(yMemo, x - 5, y - 10);
            ctx.stroke();
        }
      }
    },
    mounted: function() {
      var self = this;
      // Hub.$on('load', function(uid) {
        // console.log(456);
        // console.log(self);
        // console.log(self.uid,'uid');

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
        }else {
          todayInfo = before
        }
        // console.log(current,'current');
        // console.log(todayInfo,'todayInfo')

        var baseUrl = '//cn-vmc-images.alicdn.com/ycsuperstar/star_trend_';
        var a = 1, b = '.js';
        var finalUrl = `${baseUrl}${self.uid}_${todayInfo}${b}`;
        // console.log(finalUrl);

        loadScript(finalUrl, function() {
          self.configData = starchange;
          self.dict = [];
          for (var i = 0; i < self.configData.trendList.length; i++) {
            self.dict.push({
              x: self.configData.trendList[i].rankDate.substr(4),
              y: self.configData.trendList[i][self.fuzhi]
            });
          }
          //数据源提取  
          var len = self.len = self.dict.length;  
          self.xArr = [];
          self.yArr = [];
          for(var i=0; i < len; i++){
              self.xArr.push(i * 636 / (len - 1));  
              self.yArr.push(self.dict[i].y * 465 / 140);  
          }  

          //self.canvas 准备  
          self.canvas = document.getElementById("cv");//获取self.canvas画布  
          var ctx = self.ctx = self.canvas.getContext("2d");  
          self.draw();

          self.canvas.addEventListener('click', function(e){
            self.draw();
            var p = getEventPosition(e);
            var posX = Math.round((p.x - 83) / (636 / (len - 1)));
            if (posX < 30 && posX >= 0) {
              var postX = 83 + self.xArr[posX];
              var posY = 478 - self.yArr[posX];
              if (posY - p.y < 20) {
                ctx.beginPath();
                ctx.moveTo(postX, posY);
                ctx.lineTo(postX, 478);
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = '#44210f';
                ctx.arc(postX, posY, 8, 0, 2*Math.PI);//画点  
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = '#fead00';
                ctx.moveTo(postX, posY - 6);
                ctx.lineTo(postX, posY - 68);
                ctx.font="20px Arial";
                ctx.fillText(self.dict[posX].y, postX, posY - 80);
                ctx.stroke();
              }
            }
          }, false);  

          function getEventPosition(ev){  
            var x, y;  
            if (ev.layerX || ev.layerX == 0) {
              x = ev.layerX / self.canvas.offsetWidth * 750;  
              y = ev.layerY / self.canvas.offsetWidth * 750;  
            } else if (ev.offsetX || ev.offsetX == 0) { // Opera  
              x = ev.offsetX / self.canvas.offsetWidth * 750;  
              y = ev.offsetY / self.canvas.offsetWidth * 750;  
            }  
            return {x: x, y: y};  
          }  
        }); 
      // }); //Hub触发事件
  }
};
</script>

<style scoped lang="less">
@bi: 75rem;
h1 {
    font-weight: normal;
    font-size: 20px;
}
#cv {
  width: 750/@bi;
  background-color: #110903;
}
.s-tabbox{
  width: 720/@bi;
  height: 76/@bi;
  /* display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  display: -webkit-box;   老版本语法: Safari, iOS, Android browser, older WebKit browsers.
  display: -moz-box;      老版本语法: Firefox (buggy)
  display: -ms-flexbox; */
  font-size: 27/@bi;
  font-weight: bold;
  color: #fff;
  box-sizing: border-box;
  margin: 0 15/@bi;
  .s-tablist{
      /*flex-direction: row;*/
      float: left;
      margin-right: 5/@bi;
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
.year{
    width: 720/@bi;
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
      padding: 10/@bi 0;
      line-height: 30/@bi;
      }
    }
</style>
