<template>
    <!-- 明星排名  -->
    <div class="bigbox">
        <div class="mune" v-for="(message, index) in messages">
            <!-- 排名  -->
            <div class="mune-li">
               <div class="num">{{message.rank}}</div>
               <div class="detail">
                   <!-- <router-link to="/star" class="headImg" target="_blank">
                        <img :src="message.starImg" alt="" class="starImg">
                   </router-link> -->
                   <router-link :to="{name:'Starpage',params:{id:message.uid}}" class="headImg" data-pos-id="starcell.avatar" data-pos-text="明星cell.头像" :data-pos-info="'id:' + message.uid">
                       
                        <img :src="message.starImg" alt="" class="starImg">

                   </router-link>
                <router-link :to="{name:'Starpage',params:{id:message.uid}}" data-pos-id="starcell.avatar" data-pos-text="明星cell.头像" :data-pos-info="'id:' + message.uid">
                   <div class="headDes1">
                        <p class="headname">{{message.name}}</p>
                        <!-- <p class="headmain">{{message.play}}</p> -->
                        <p :class="'single single' + message.rankState"></p>
                   </div>
               </router-link>  
                   
                   <div class="effectNum">{{message.effectNum}}</div>
                   <div class="button" v-show="message.mark" @click="toggleShow(index)" :class="{active:ifshow[index]}" data-pos-id="starcell.branchscore" data-pos-text="明星cell.细分项查看" :data-pos-info="'id:' + message.uid"></div>
               </div>
            </div>
            <!-- 下拉框 -->
            <transition name="mybox" id="mybox">
                <div :class="'shownum shownum' + (message.mark ? message.mark.length : '0')" v-show="ifshow[index]">
                  <div class="padbox"></div>
                  <div class="markbox" v-for="markslist in message.mark">
                      <div class="marktitle">{{markslist.marktitle}}</div>
                      <div class="markline">
                          <div class="another" :style="{width:markslist.marknum/100*330/75 + 'rem'}"></div>
                      </div>
                      <div class="marknum">{{markslist.marknum}}</div>
                  </div>
                </div>
            </transition>  
        </div>
    </div>
  
</template>

<script>

    export default {
        props:{
            messages: Array,
            ifshow: Array
        },
        data () {
            return {
                shownum: '',
                single: ''
                // isActive: false,
            };
        },
        mounted(){
           // console.log(this.messages[0].uid)
        },
        methods:{

            toggleShow(index){
              //console.log(this.ifshow[index]);
              this.$set(this.ifshow, index, !this.ifshow[index]);
            },
            ifshownone(){
                // this.ifshow = false
                document.getElementById('mybox').style.display = "none";
            }
        }

    };
</script>

<style scoped lang="less">
    @bi:75rem;
    .shownum4 {
        &.mybox-enter-active{
            animation-name: fold-in4;
        }
        &.mybox-leave-active{
            animation-name: fold-out4;
        }
    }
    .shownum3 {
        &.mybox-enter-active{
            animation-name: fold-in3;
        }
        &.mybox-leave-active{
            animation-name: fold-out3;
        }
    }
    .shownum2 {
        &.mybox-enter-active{
            animation-name: fold-in2;
        }
        &.mybox-leave-active{
            animation-name: fold-out2;
        }
    }
    .shownum0 {
        &.mybox-enter-active{
            animation-name: fold-in0;
        }
        &.mybox-leave-active{
            animation-name: fold-out0;
        }
    }
    .shownum {
        &.mybox-enter-active{
            animation-duration: .3s;
        }
        &.mybox-leave-active{
            animation-duration: .3s;
        }
    }
    .keyframes(@name, @desc) {
      @-webkit-keyframes @name {
        @desc();
      }
      @keyframes @name {
        @desc();
      }
    }

    .wy(@name, @x, @y) {
      .keyframes(@name, {
        0% {
          height: @x;
        }
        100% {
          height: @y;
        }
      });
    }

    .wy(fold-in4, 0, 401/@bi);
    .wy(fold-out4, 401/@bi, 0);
    .wy(fold-in3, 0, 311/@bi);
    .wy(fold-out3, 311/@bi, 0);
    .wy(fold-in2, 0, 221/@bi);
    .wy(fold-out2, 221/@bi, 0);
    .wy(fold-in0, 0, 0);
    .wy(fold-out0, 0, 0);

    .mune{
        width: 750/@bi;
        height: auto;
        margin-bottom: 10/@bi;
        .mune-li{
            width: 722/@bi;
            height: 180/@bi;
            /* display: flex;
            display: -weblit-flex;
            justify-content: space-around;
            align-items:center; */
            margin: 0 14/@bi;
            z-index: 1;
            .num{
                float: left;
                width: 87/@bi;
                height: 180/@bi;
                margin-right: 10/@bi;
                /*flex-direction: row;*/
                background: #ab6a00;
                border-radius: 10/@bi;
                font-size: 50/@bi;
                line-height: 180/@bi;
                color: #fff;
                font-weight: bold;
            }
            .detail{
                width: 619/@bi;
                height: 180/@bi;
                padding: 0 20/@bi;
                box-sizing: border-box;
                float: left;
                /* flex-direction: row;
                display: flex;
                display: -webkit-flex;
                display: -webkit-box;   老版本语法: Safari, iOS, Android browser, older WebKit browsers.
                display: -moz-box;      老版本语法: Firefox (buggy)
                display: -ms-flexbox;
                align-items:center;
                justify-content: space-between; */
                background: url('//gw.alicdn.com/tfs/TB1yGvdd3mTBuNjy1XbXXaMrVXa-619-180.jpg');
                border-radius: 10/@bi;
                background-size: 100% 100%;
                .headImg{
                    width: 138/@bi;
                    height: 148/@bi;
                    margin-top: 15/@bi;
                    float: left;
                    background: url('//gw.alicdn.com/tfs/TB1HUdad29TBuNjy1zbXXXpepXa-138-148.png') no-repeat;
                    background-size: 100% 100%;
                    .starImg{
                        width: 119/@bi;
                        height: 119/@bi;
                        border-radius: 50%;
                        margin:20/@bi 10/@bi 10/@bi 10/@bi;
                    }
                }
                .headDes1{  
                    float: left; 
                    width: 300/@bi;
                    max-width: 300@bi;
                    height: auto;
                    text-align: left;
                    margin-top: 66/@bi;
                    margin-left: 10/@bi;
                    box-sizing: boder-box;
                    .headname{
                        font-weight: bold;
                        color: #fff;
                        font-size: 33/@bi;
                        line-height: 45/@bi;

                    }
                    .headmain{
                        font-size: 22/@bi;
                        color: #ffae00;
                        line-height: 34/@bi;
                        height: 34/@bi;
                        overflow: hidden;
                        margin-top: 5/@bi;
                    }
                    .single{
                      width: 27/@bi;
                      height: 22/@bi;
                      margin-top: 5/@bi;
                      &.single1 {
                        background: url('//gw.alicdn.com/tfs/TB1UkvReKuSBuNjy1XcXXcYjFXa-27-16.png') no-repeat;
                        background-size: 100% 100%;
                      }
                      &.single0 {
                        background: url('//gw.alicdn.com/tfs/TB1QCdOe_tYBeNjy1XdXXXXyVXa-27-22.png') no-repeat;
                        background-size: 100% 100%;
                      }
                      &.single-1 {
                        background: url('//gw.alicdn.com/tfs/TB1W9dOe_tYBeNjy1XdXXXXyVXa-27-16.png') no-repeat;
                        background-size: 100% 100%;
                      }
                    }
                }
                
                .effectNum{
                    float: left;
                    font-size: 40/@bi;
                    font-weight: bold;
                    color: #fff;
                    width: 100/@bi;
                    height: 40/@bi;
                    box-sizing: border-box;
                    margin-top:65/@bi;
                    /*float: left;*/
                    line-height: 40/@bi;
                    text-align: center;
                    /*margin-top: 70/@bi;*/
                    /*margin-right: 10/@bi;*/
                }
                .button{
                    float: left;
                    margin-top:68/@bi;
                    width: 30/@bi;
                    height: 30/@bi;
                    background: url('//gw.alicdn.com/tfs/TB1hNZVdMmTBuNjy1XbXXaMrVXa-30-30.png') no-repeat;
                    background-size: 100% 100%;
                    /*margin-top: 75/@bi;*/
                }
                .active{
                    background: url('//gw.alicdn.com/tfs/TB1rBBod21TBuNjy0FjXXajyXXa-30-30.png');
                    background-size: 100% 100%;
                }
            }
        }
        .shownum4{
            height: 401/@bi;
            background-size: 100% 401/@bi;
        }
        .shownum3{
            height: 311/@bi;
            background-size: 100% 311/@bi;
        }
        .shownum2{
            height: 221/@bi;
            background-size: 100% 221/@bi;
        }
        .shownum0{
            height: 0;
        }
        .shownum{
            width: 708/@bi;
            border-radius: 10/@bi;
            background: url('//gw.alicdn.com/tfs/TB1L1M7dL1TBuNjy0FjXXajyXXa-715-401.png') no-repeat;
            background-size: 100% 401/@bi;
            overflow: hidden;
            margin: -15/@bi 18/@bi 0 18/@bi;
            position: relative;
            /*padding-top: 50/@bi;*/
            z-index: 6;
            box-sizing:border-box;
            /*transition: all 1s cubic-bezier(.33, 0, .1, 1);
            &.mybox-enter-active {
                height: 356/@bi; 
            }
            &.mybox-enter, &.mybox-leave-active {
                height: 0;
            }*/
            .padbox {
              height: 50/@bi;
            }
            .markbox{
                width: 714/@bi;
                height: 82/@bi;
                /*display: flex;
                display: -webkit-flex;
                display: -webkit-box;   老版本语法: Safari, iOS, Android browser, older WebKit browsers.
                display: -moz-box;      老版本语法: Firefox (buggy)
                display: -ms-flexbox;
                justify-content: space-around;
                align-items: center; */
            }
            .marktitle{
                float: left;
                width: 204/@bi;
                height: 54/@bi;
                box-sizing: border-box;
                margin-top: 15/@bi;
                margin-right: 20/@bi;
                margin-left: 30/@bi;
                background: #2c160a;
                color: #fff;
                border-radius: 10/@bi;
                line-height: 54/@bi;
                font-size: 28/@bi;
                text-align: center;

            }
            .markline{
                float: left;
                width: 330/@bi;
                height: 27/@bi;
                margin-top: 30/@bi;
                box-sizing: border-box;
                background: #2c160a;
                border-radius: 30/@bi;
                .another{
                    background: #ffae00;
                    height: 23/@bi;
                    margin-top: 2/@bi;
                    margin-left: 2/@bi;
                    border-radius: 30/@bi;
                }
            }
            .marknum{
                float: left;
                width: 94/@bi;
                height: 30/@bi;
                margin-top: 30/@bi;
                box-sizing: border-box;
                font-size: 28/@bi;
                font-weight: bold;
                color: #fff;
                text-align: center;
            }
        }

    }
    

</style>