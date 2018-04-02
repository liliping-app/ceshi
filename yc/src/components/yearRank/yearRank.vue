<template>
  <div class="common-component" data-pos-id="page.yearpage" data-pos-text="年榜_总榜.曝光">
    <!-- 首页头部区 -->
    <div class="s-banner">
        <!--  版头图 -->
        <img src="//gw.alicdn.com/tfs/TB13jKhgNGYBuNjy0FnXXX5lpXa-750-565.jpg" alt="" class="s-bannerBg">
        <!-- 规则入口 -->
        <div class="s-rule">
            <router-link to="/introduce"></router-link> 
        </div>
    </div>
    <!-- 年榜标题 -->
    <div class="allYear">
        2017年度榜单
    </div>
    <!-- 榜单时间 -->
    <div class="time">{{time}}</div>
        <!-- 首页目录区 -->
    <v-list></v-list>
    

  </div>
</template>

<script>
import list from '@/components/tabs/yearRankTab.vue'
import mtop from '@ali/lib-mtop';
// import bridge from '@ali/lib-bridge';

export default {
    name: 'common-component',
    data () {
        return {
            time:'2017.01.01-2017.12.31',
            sharedesc:'',
            maidianD: [
                'avatar',
            ]
            // allmessages:{
            //     shareTitle2:'',
            //     shareImg:'',
            //     shareDecs2:'',
            //     shateLink2:''
            // }
        };
    },
    components:{
        'v-list' : list
    },
    created(){
            //console.log(ruleDetails.bigTitle,'ruleDetails');
        this.sharedesc = ruleDetails.shares;
    },
    mounted: function() {
        // console.log(this.sharedesc,'this.sharedesc')
        // 分享
        // bridge.pageShare({
        //     show:'yes' || 'no',//webview三点控制  安卓没有这个控制、旧版schame支持--非windvane环境下可以支持这个参数
        //     sourceId:10,//分享来源页面编号
        //     outputType:0,//分享内容类型
        //     title:this.sharedesc.shareTitle2,
        //     link:window.location.href,
        //     img:this.sharedesc.shareImg,//带http、https协议
        //     desc:this.sharedesc.shareDecs2,//分享内容描述
        //     // img_only://是否只分享图片;true=只需要image字段,url无效
        //     // taskId://用于业务方标识该分享的一个任务id 没有可与不传
        //     // webImageDownloadUrl://当outputType类型为image时，通过该属性传递图像的地址 使用根据版本自行判断
        //     successCallback:function(){},//成功回调
        //     failureCallback:function(){},//失败回调
        // });
        window.HollywoodLog && window.HollywoodLog.doPositionExpose()
        // window.HollywoodLog && window.HollywoodLog.expose('page.yearpage', '年榜_总榜', '');
    //   var param = {
    //       show: 'yes',//默认为yes，webview三点控制  安卓没有这个控制、旧版schame支持--非windvane环境下可以支持这个参数
    //       // type: 'img',//分享内容类型 img为分享图片，不传为链接
    //       title: this.sharedesc.shareTitle2,
    //       link: window.location.href,
    //       shareImage: 'https:' + this.sharedesc.shareImg,//带http、https协议
    //       desc: this.sharedesc.shareDecs2,
    //       img: 'https:' + this.sharedesc.shareImg,//type为img必传，带http、https协议
    //       // taskId: '业务标识，可以不传',
    //       bannerInfo: {} // 分享banner配置，透传
    //   }
    //   console.log(param)
    //   window.HollywoodKit.setPageShare(param);
            var Browser = window.HollywoodBrowser
            var bridge = window.HollywoodBridge
            if (Browser.isYouku) {
                bridge.pageShare({
                    show:'yes',//webview三点控制  安卓没有这个控制、旧版schame支持--非windvane环境下可以支持这个参数
                    title: this.sharedesc.shareTitle2,
                    link: this.sharedesc.shareUrl2,
                    img: 'https:' + this.sharedesc.shareImg,
                    desc: this.sharedesc.shareDecs2,//分享内容描述
                    sourceId:10,//分享来源页面编号
                    outputType:1,//分享内容类型
                    taskId: 'yc',
                    successCallback:function(){},//成功回调
                    failureCallback:function(){},//失败回调
                })
            }
            console.log(this.sharedesc.shareUrl2,'sharedesc.shareUrl2')
    }
};


</script>

<style scoped lang="less">
    @bi:75rem;
    .common-component{
        width: 750/@bi;
        height: auto;
        min-height: 1330/@bi;
        background: #110903;
        padding-bottom: 90/@bi;
        .s-banner{
            width: 750/@bi;
            height: 565/@bi;
            position: relative;
            .s-bannerBg{
                width: 750/@bi;
                height: 565/@bi;
                position: absolute;
                top: 0;
                left: 0;
            }
            .s-rule{
                width: 138/@bi;
                height:53/@bi;
                position: absolute;
                top: 23/@bi;
                left: 0;
                /*background: red;*/
                a{
                    display: block;
                    width: 138/@bi;
                    height: 53/@bi;
                    
                }
            }
        }
        .time{
            color: #ff0000;
            font-size: 15/@bi;
            text-align: right;
            width: auto;
            height: 30/@bi;
            line-height: 30/@bi;
            margin-right: 20/@bi;
        }
        .allYear{
            font-size: 47/@bi;
            color: #ffae00;
            width: 710/@bi;
            height: 65/@bi;
            line-height: 65/@bi;
            font-weight: bold;
            text-align: center;
        }
        
    }
    


</style>
