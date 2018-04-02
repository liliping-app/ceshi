<template>
  <div class="common-component">
    <!-- <canvas id="myChart" width="750" height="400"></canvas> -->
    <canvas id="cv" width="750" height="534"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
export default {
    name: 'common-component',
    data () {
        return {
        };
    },
    mounted: function() {


      loadScript('//cn-vmc-images.alicdn.com/ycsuperstar/star_trend_yk11366_20180218.js', function() {
          var configData = starchange;
          // console.log(configData)
          var dict = [];
          for (var i = 0; i < configData.trendList.length; i++) {
            dict.push({
              x: configData.trendList[i].rankDate.substr(4),
              y: configData.trendList[i].compositeIndex
            });
          }
          //数据源提取  
          var len = dict.length;  
          var xArr = [], yArr = [], tmp_yArr = [];
          for(var i=0; i < len; i++){
              xArr.push(i * 636 / (len - 1));  
              yArr.push(dict[i].y * 465 / 140);  
          }  
          var minY = Math.min.apply(Math, yArr);  
          var maxY = Math.max.apply(Math, yArr);

          //canvas 准备  
          var canvas = document.getElementById("cv");//获取canvas画布  
          var ctx  = canvas.getContext("2d");  

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
              var x = xArr[i] + 83;  
              var y = 478 - yArr[i];  
              if(i === 0){  
                  ctx .moveTo(x, y);  
              }  
              else{  
                  ctx .lineTo(x, y);  
              }  
          }
          ctx .lineTo(716, 478); 
          ctx .lineTo(83, 478); 
          ctx.fill();
          ctx.stroke();

          //画点  
          for(var i=0; i<len; i++){  
              var x = xArr[i] + 83;  
              var y = 478 - yArr[i];  
              var xMemo = dict[i].x;  
              var yMemo = dict[i].y;  
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

          canvas .addEventListener('click', function(e){  
            console.log(1);
            //当click时运行  
          }, false); 
      }); 
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
</style>
