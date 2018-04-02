<template>
    <div class="starmain" data-pos-id="page.starpage" data-pos-text="明星详情页.曝光">
        <div class="mainTop">
            <!-- <img src="" alt="" class="bgImg"> -->
            <div class="starPhoto">
                <img :src="starMessage.uimg" alt="" class="photo">
                <div class="s-rule">
                    <router-link to="/introduce"></router-link> 
                </div>
            </div>
            <div class="starMes">
                <p class="mesName">{{starMessage.uname}}</p>
                <p class="describe">{{starMessage.job}}</p>
                <!-- <div class="movieList clearfix">
                    <p class="movies" v-for="movies in starMessage.production">《{{movies}}》</p>
                </div> -->
            </div>
            <div class="timgRange">
                {{timgRange}}
            </div>
        </div>
        <v-curves :uid="$route.params.id"></v-curves>
        
    </div>
</template>
<script>
    import Curve from '@/components/curve/curve.vue'
    // import bridge from '@ali/lib-bridge'  
    export default{
        data(){
            return{
                starMessage: {},
                timgRange:'' ,
                sharedesc:'' 
            }
        },
        components:{
            "v-curves" : Curve
        },
        created(){
            this.sharedesc = ruleDetails.shares;
        },
        methods:{

        },
        mounted(){
            // console.log(`${this.sharedesc.shateLink3}${this.$route.params.id}`,'share')
            // bridge.pageShare({
            //     show:'yes' || 'no',//webview三点控制  安卓没有这个控制、旧版schame支持--非windvane环境下可以支持这个参数
            //     sourceId:10,//分享来源页面编号
            //     outputType:0,//分享内容类型
            //     title:this.sharedesc.shareTitle3,
            //     link:window.location.href,
            //     img:this.sharedesc.shareImg,//带http、https协议
            //     desc:this.sharedesc.shareDecs3,//分享内容描述
            //     // img_only://是否只分享图片;true=只需要image字段,url无效
            //     // taskId://用于业务方标识该分享的一个任务id 没有可与不传
            //     // webImageDownloadUrl://当outputType类型为image时，通过该属性传递图像的地址 使用根据版本自行判断
            //     successCallback:function(){},//成功回调
            //     failureCallback:function(){},//失败回调
            // })
            // let share = `${this.sharedesc.shateLink3}${this.$route.params.id}`
            var self = this;
            

            var self = this;

            // 埋点
            window.HollywoodLog && window.HollywoodLog.doPositionExpose()
            
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

            // console.log(beforeday,'beforeday');
            // console.log(before,'before');

            
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



            // console.log(this.$route.params.id, 'uid');
            var starid = this.$route.params.id;
            loadScript(finalUrl, starDetail2);
            function starDetail2() {
                var starinfos = starDetails.starDetail;
                console.log(starDetails)
                console.log(starinfos,'starinfos')
                var starArray = [];
                for (var j in starinfos) {
                    starArray.push(starinfos[j]);
                }
                for(var i=0; i<starArray.length; i++){
                    if(starArray[i].uid == starid){
                        // console.log(1);
                        self.starMessage = starArray[i];
                        // Hub.$emit('load', self.starMessage.uid); //Hub触发事件
                        // console.log(self.starMessage);
                        // console.log(self.starMessage,'self.starMessage');
                    }
                }
            }


            // 时间
            var nowDate = new Date();
            var date = nowDate.getDate();
            // console.log(date,'date');
            var start, end;
            start = new Date(nowDate.getTime() - 32*24*60*60*1000);
            var start_year = start.getFullYear();
            var start_month = start.getMonth();
            var start_date = start.getDate();

            end = new Date(nowDate.getTime() - 2*24*60*60*1000);
            var end_year = end.getFullYear();
            var end_month = end.getMonth();
            var end_date = end.getDate();
            start = start_year + '.' + checkTime(start_month + 1) + '.' + checkTime(start_date) ;

            end = end_year + '.' + checkTime(end_month + 1) + '.' + checkTime(end_date) ;

            function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
                if(i<10) 
                { 
                    i = "0" + i; 
                } 
                return i; 
            }
            var detailDate = start  + "-" + end;
            this.timgRange = detailDate;
            
            // var param = {
            //   show: 'yes',//默认为yes，webview三点控制  安卓没有这个控制、旧版schame支持--非windvane环境下可以支持这个参数
            //   // type: 'img',//分享内容类型 img为分享图片，不传为链接
            //   title: this.sharedesc.shareTitle3,
            //   link: window.location.href,
            //   shareImage: 'https:' + this.sharedesc.shareImg,//带http、https协议
            //   desc: this.sharedesc.shareDecs3,
            //   img: 'https:' + this.sharedesc.shareImg,//type为img必传，带http、https协议
            //   // taskId: '业务标识，可以不传',
            //   bannerInfo: {} // 分享banner配置，透传
            // }
            // console.log(param)
            // window.HollywoodKit.setPageShare(param);
            var Browser = window.HollywoodBrowser
            var bridge = window.HollywoodBridge
            if (Browser.isYouku) {
                bridge.pageShare({
                show:'yes',//webview三点控制  安卓没有这个控制、旧版schame支持--非windvane环境下可以支持这个参数
                title: this.sharedesc.shareTitle3,
                link:  `${this.sharedesc.shareUrl3}${this.$route.params.id}`,
                img: 'https:' + this.sharedesc.shareImg,
                desc: this.sharedesc.shareDecs3,//分享内容描述
                sourceId:10,//分享来源页面编号
                outputType:1,//分享内容类型
                taskId: 'yc',
                successCallback:function(){},//成功回调
                failureCallback:function(){},//失败回调
                })
            }
            console.log(`${this.sharedesc.shareUrl3}${this.$route.params.id}`)
        }
    }
</script>
<style lang="less" scoped>
.clearfix{zoom:1;}
.clearfix:before,.clearfix:after{content:'';display:table;}
.clearfix:after{clear:both;}
    @bi:75rem;
    .starmain{
        width: 750/@bi;
        min-height: 1330/@bi;
        color: #fff;
        .mainTop{
            width: 750/@bi;
            height: 632/@bi;
            position: relative;
            background: url('//gw.alicdn.com/tfs/TB12UF4gL5TBuNjSspmXXaDRVXa-750-632.jpg') no-repeat;
            background-size: 100% 100%;
            .starPhoto{
                position: relative;
                top: 0;
                left: 0;
                .photo{
                    width: 272/@bi;
                    height: 272/@bi;
                    overflow:hidden;
                    border-radius: 50%;
                    position: absolute;
                    top: 131/@bi;
                    left: 50%;
                    margin-left: -134/@bi;
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
            .starMes{
                width: 750/@bi;
                height: 150/@bi;
                position: absolute;
                bottom: 55/@bi;
                left: 0;
                .mesName{
                    font-size: 53/@bi;
                    font-weight: bold;
                    line-height: 66/@bi;
                    text-align: center;
                }
                .describe{
                    color: #fead00;
                    font-size: 25/@bi;
                    text-align: center;
                    font-weight: bold;
                }
                .movieList{
                    color: #fead00;
                    width: auto;
                    margin: 0 auto;
                    font-size: 20/@bi;
                    text-align: center;
                    font-weight: bold;;
                    /* display: flex;
                    display: -webkit-flex;
                    justify-content:center;
                    flex-wrap:wrap;
                    display: -webkit-box;   老版本语法: Safari, iOS, Android browser, older WebKit browsers.
                    display: -moz-box;      老版本语法: Firefox (buggy)
                    display: -ms-flexbox; */
                    .movies{
                        margin: 0 auto;
                        display: initial;
                        /*float: left;*/
                        /*width: 750/@bi;*/
                        text-align: center;
                    }
                }
            }
            .timgRange{
                width: auto;
                height: 38/@bi;
                box-sizing: border-box;
                border-radius: 10/@bi;
                border: 1px solid #3f1f0e;
                padding: 0 5/@bi;
                position: absolute;
                bottom: 0/@bi;
                right: 30/@bi;
                font-size: 16/@bi;
                color: red;
                text-align: center;
                line-height: 38/@bi;

            }
            
        }
        .declaration{
            width: 714/@bi;
            height: auto;
            box-sizing: border-box;
            padding: 26/@bi 19/@bi;
            line-height: 30/@bi;
            font-size: 20/@bi;
            font-weight: bold;
            background: #29160a;
            border-radius: 15/@bi;
            text-align: left;
            margin: 0 auto;
        }
    }
</style>