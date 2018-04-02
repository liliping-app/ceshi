<template>
    <div class="s-rule" data-pos-id="page.rulepage" data-pos-text="榜单规则页.曝光">
        <div class="r-banner">
            <img src="https://gw.alicdn.com/tfs/TB1eIXygFGWBuNjy0FbXXb4sXXa-750-576.jpg" alt="">
            <!-- <div class="rulebutton">
                <router-link to="/"></router-link> 
            </div> -->
        </div>
        <div class="ruleDetail">
            <p class="bigTitle">{{allmessages.bigTitle}}</p>
            <p class="paragraph bigbig">YC超星价值榜是阿里巴巴对于文娱行业和明星商业价值的平台性贡献，使用全面且丰富的数据，以榜单公平，数据公正为核心原则建立的明星商业价值榜单。在衡量明星文娱影响力的同时，服务于全行业，量化明星真正的商业价值。</p>
            <div class="titleName">{{allmessages.titleNameone}}</div>
            <div class="detailBoxone">
                <div class="explain">
                    <p class="paragraph">{{allmessages.detailBoxone.first}}</p>
                    <p class="paragraph">{{allmessages.detailBoxone.second}}</p>
                </div>
                <div class="ge"></div>
                <div class="wayone">
                    <h1 class="smallTitle">{{allmessages.detailBoxone.smallTitle1}}</h1>
                    <div class="marks" v-for="marklist in allmessages.detailBoxone.marks">
                        <div class="littleTile">
                            <i class="yellow">{{marklist.icon}}</i>
                            <p class="markName">{{marklist.markName}}</p>
                        </div>
                        <div class="txt">{{marklist.txt}}</div>
                    </div>
                </div>
                <div class="ge"></div>
                <div class="waytwo">
                    <h1 class="smallTitle">{{allmessages.detailBoxone.smallTitle2}}</h1>
                    <p class="waytxt">{{allmessages.detailBoxone.waytxt}}</p>
                </div>
            </div>

            <div class="titleName">{{allmessages.titleNametwo}}</div>
            <div class="detailBoxtwo">
                <div class="explain">
                    <p class="paragraph">{{allmessages.first}}</p>
                    <p class="paragraph">{{allmessages.second}}</p>
                    <p class="paragraph">明星商业价值总分=0. 2*吸睛力+0.2*专业力+0.2*粉丝力+0.4*商业力</p>
                </div>
                <div class="ge"></div>

                <div class="forBox" v-for="forDetail in allmessages.detailBoxtwo">
                <div class="ge"></div>
                    <h1 class="smallTitle">{{forDetail.smallTitle}}</h1>
                    <div class="paragraphBox" v-for="paLists in forDetail.paragraph">
                        <p class="paragraph">{{paLists.paList}}</p>
                    </div>
                    <div class="fenpei clearfix" v-for="exFloat in forDetail.mess">
                        <i class="before">{{exFloat.fenpeiName}}</i> {{exFloat.fenpeitxt}}
                    </div>
                    <img class="detailImg" :src="forDetail.detailImg" alt="">
                    
                </div>
            </div>

            <div class="titleName">{{allmessages.titleNamethree}}</div>
            <div class="detailBoxthree">
                <p class="paragraph">{{allmessages.detailBoxthree.paragraph}}</p>
                <div class="valuebox" v-for="valueli in allmessages.detailBoxthree.valueList">
                    <p class="titletxt">{{valueli.titletxt}}</p>
                    <p class="detailtxt">{{valueli.detailtxt}}</p>
                </div>
                <div class="rulersRound" v-for="roundlist in allmessages.detailBoxthree.rulersRound">
                    <div class="ge"></div>
                    <h1 class="smallTitle">{{roundlist.title}}</h1>
                    <div class="paragraphBox" v-for="paLists in roundlist.paragraph">
                        <p class="paragraph">{{paLists.txt}}</p>
                    </div>
                    <div class="fenpei" v-for="exFloat in roundlist.explain">
                        <i class="before">{{exFloat.text}}</i> {{exFloat.detail}}
                    </div>
                </div>
                <div class="titlessss">4  YC超星价值榜的单项指标计算方式</div>
                <div class="titlessbox">
                    <p class="paragraph">单项分数满分为100分，排在第一位的明星得满分，其他明星的得分按照与第一位明星的比例关系赋予分值。与自然规律相仿，数据显示播放量等多个指标存在着长尾效应，为了消除这种偏态现象，在计算比例关系时使用的并不是最原始的数据，而是对原始数据进行ln转换后的数据。使用公式表示为：单项分数=单项满分*ln(单项指标数据)/ln（单项指标上的最高数据）。</p>
                    <p class="paragraph">示例：明星X网络视频播放量为50000次，在播放量指标上排名第一，其分值为100分；明星Y视频播放量为10000次，其分值为100*ln10000/ln50000=85分。</p>
                </div>

                <div class="titlessss">5  YC超星价值榜的总分计算方式</div>
                <div class="titlessbox">
                    <p class="paragraph">明星商业价值总分由吸睛力、专业力、粉丝力、商业力四项组成，所占比例分别为20%、20%、20%、40%。总分保留1位小数，以四舍五入的原则计入。</p>
                </div>
                
                
            </div>
             <div class="titleName four">YC超星价值榜用户协议</div>
            <div class="fourBox">            
                <p class="paragraph">感谢您关注YC超星价值榜（以下亦称“产品”、“本榜”或“我方”），以下是YC超星价值榜与您的法律协议条款。为维护您自身权益，请您仔细阅读本协议各条款。您访问、浏览或使用YC超星价值榜相关内容即表明您已经仔细阅读并准确理解了本协议，并同意接受本协议的全部条款的约束。如您不同意本协议或本协议的任何条款，请您不要使用本产品及服务。</p>
                <p class="paragraph">我方有权随时更新或修改产品中包含的任何信息、服务和程序，也有权随时对本协议文本中的任何条款进行变更，且无需另行通知，所有修改的协议均构成本协议的一部分。修改后的协议将在本页面进行更新，继续访问、浏览或使用YC超星价值榜即表明您同意并承诺遵守本协议做出的修改，并将受到变更后的协议的约束。</p>
                <p class="paragraph">1、YC超星价值榜是由阿里大文娱制作、发布的衡量明星文娱影响力和商业价值的榜单。未经我方事先的书面同意和授权，您不得再次公布、上载、张贴、传播、分发或以其他方式将本榜中的任何信息（包括但不限于文字、图标、图片、数据等）用于商业目的。</p>
                <p class="paragraph">我方允许您转载或引用本榜内容，但必须为以新闻性或资料性公共免费信息为使用目的的合理、善意引用，不得对本榜数据内容进行曲解、修改，同时必须注明“转自（或引自）YC 超星价值榜”并标明访问时间及来源网址。同时，转载或引用本榜内容不得进行如下活动:</p>
                <p class="paragraph">1)损害我方或他人合法利益；</p>
                <p class="paragraph">2)从事任何违法行为；</p>
                <p class="paragraph">3)从事任何可能破坏公序良俗的行为；</p>
                <p class="paragraph">4)未事先获得我方同意，擅自授权他人公布、转载、引用本榜的任何内容。</p>
                <p class="paragraph">2、本榜基于阿里大数据平台，对优酷、土豆、UC、天猫、淘宝、大麦网、淘票票、虾米音乐等文娱平台现有的明星相关的基础数据进行合作收集，并建立评估与分析模型，据此得出相关结论并制作、发布。您同意并理解，受数据来源和评估模型的影响，YC超星价值榜仅能作为您的参考资料，我们不对数据及结论的准确性、正确性、及时性及完整性做任何承诺和保证。因此，您在基于本榜中的任何内容作出任何决策之前，您应该自行确认所有相关信息的准确性和完整性。</p>
                <p class="paragraph">3、我方承诺本榜原始数据收集、获取均是在数据来源方平台《隐私政策》所允许的范围内，系对原始数据进行脱敏后所进行的分析、制作、发布，本榜不涉及任何用户个人信息数据与敏感数据的披露、使用，相关原始数据仍属于数据原始提供方。同时，我方承诺保护您在访问、浏览或使用本榜过程中产生的个人数据与隐私。</p>
                <p class="paragraph">4、本榜中包含的标识、页面风格、版面设计、网页设计、排版方式、文本、图片、图形、程序等均受版权、商标及其它法律保护，未经我方授权，上述内容均不得在任何网站被直接或间接复制、发布、使用、出于发布或使用目的的改写、转载、或再发行，或被用于其他任何商业目的。已经我方授权使用的媒体、网站，应在授权范围内使用，并注明“来源：YC超星价值榜，时间：**  ，网址：** ”。若有违反者，我方将追究其相关法律责任。</p>
                <p class="paragraph">5、本协议构成用户与YC超星价值榜之间的正式协议，并用于规范用户的使用行为。本协议的订立、效力、解释、履行及争议的解决均适用中华人民共和国法律。用户与YC超星价值榜就服务本身、本协议或其它有关事项发生的争议，应通过友好协商解决。协商不成的，应向北京市海淀区人民法院提起诉讼。</p>
                <p class="paragraph">YC超星价值榜未行使或执行本协议设定、赋予的任何权利，不构成对该等权利的放弃。本协议中的任何条款因与中华人民共和国法律相抵触而无效，并不影响其它条款的效力。</p>
                <div class="contact">
                    <p class="contxt">联系方式</p>
                    <p class="contxt">官方邮箱：yccelebrity@alibaba-inc.com</p>
                    <p class="contxt">官方微博：@YC超星价值榜官微</p>
                </div>
                
                </div>

        </div>



        <div class="icon">
            <img src="//gw.alicdn.com/tfs/TB19fM_eSCWBuNjy0FhXXb6EVXa-750-51.jpg" alt="">
        </div>
        <div class="govlinkbox">
            <a href="http://www.miitbeian.gov.cn/" class="govlink"></a>
        </div>
        
      
    </div>
</template>
<script>
    export default{
        data(){
            return{
                allmessages:{},
                

            }
        },
        mounted(){
            window.HollywoodLog && window.HollywoodLog.doPositionExpose()
            // console.log(this.allmessages);
            // window.HollywoodLog && window.HollywoodLog.expose('page.rulepage', '榜单规则页', '');
        },
        created(){
            //console.log(ruleDetails.bigTitle,'ruleDetails');
            this.allmessages = ruleDetails;

        }
    }
</script>
<style lang="less" scoped>
    @bi:75rem;
    i{font-style: normal;}
    .s-rule{
        width: 750/@bi;
        min-height: 1330/@bi;
        padding-bottom: 90/@bi;
        position: relative;
        overflow: hidden;
        .titlessss{
            text-align: justify;
            color: #ffae00;
            line-height: 40/@bi;
        }
        .fourBox{
             box-sizing: border-box;
                width: 714/@bi;
                height: auto;
                margin: 0 auto;
                border-radius: 10/@bi;
                background: #29160a;
                padding: 25/@bi 20/@bi;
                margin-bottom: 46/@bi;
                font-size: 20/@bi;
            }
        .r-banner{
            width: 750/@bi;
            img{
                width: 750/@bi;
                height: 576/@bi;
            }
            .rulebutton{
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
        .ruleDetail{
            width: 750/@bi;
            .bigTitle{
                width: 750/@bi;
                height: 100/@bi;
                font-size: 40/@bi;
                color: #ffae00;
                text-align: center;
                font-weight: bold;
                line-height: 100/@bi; 
            }
            .titleName{
                width: 714/@bi;
                height: 59/@bi;
                margin: 0 auto;
                border-radius: 10/@bi;
                background: #ab6a00;
                text-align: center;
                color: #fff;
                font-size: 30/@bi;
                font-weight: bold;
                line-height: 59/@bi;
                margin-bottom: 10/@bi;
            }
            .explain{
                .paragraph{
                    font-size: 20/@bi;
                    color: #fff;
                    line-height: 30/@bi;
                    text-align: justify;
                    margin-bottom: 18/@bi;
                }  
            }
            .paragraph{
                    font-size: 20/@bi;
                    color: #fff;
                    line-height: 30/@bi;
                    text-align: justify;
                    margin-bottom: 30/@bi;
                    text-align: justify;
                }
            .contact{
                font-size: 20/@bi;
                color: #fff;
                line-height: 30/@bi;
                text-align: justify;
                margin-bottom: 30/@bi;
                text-align: justify;
                margin-top: 60/@bi;
                .contxt{
                    line-height: 30/@bi;
                    margin-top: 15/@bi;
                }
            }
            .bigbig{
                box-sizing: border-box;
                width: 714/@bi;
                height: auto;
                margin: 0 auto;
                border-radius: 10/@bi;
                background: #29160a;
                padding: 25/@bi 20/@bi;
                margin-bottom: 46/@bi;
            }
            .ge{
                width: 680/@bi;
                margin: 0 auto;
                border-top: 1/@bi solid #000;
                border-bottom: 1/@bi solid #130a05;
            }
            .smallTitle{
                font-size: 25/@bi;
                color: #ffae00;
                font-weight: bold;
            }
            .detailBoxone{
                box-sizing: border-box;
                width: 714/@bi;
                height: auto;
                margin: 0 auto;
                border-radius: 10/@bi;
                background: #29160a;
                padding: 25/@bi 20/@bi;
                margin-bottom: 46/@bi;
                .marks{
                    font-size: 20/@bi;
                    line-height: 25/@bi;
                    margin-bottom: 35/@bi;
                    .littleTile{
                        width: 680/@bi;
                        height: 25/@bi;
                        font-size: 20/@bi;
                        line-height: 25/@bi;
                        margin-bottom: 10/@bi;
                        .yellow{
                            float: left;
                            width: 25/@bi;
                            height: 25/@bi;
                            color: #29160a;
                            background: #ffae00;
                            border-radius: 5/@bi;
                            margin-right: 10/@bi;
                            text-align: center;
                            line-height: 25/@bi;
                        }
                        .markName{
                            float: left;
                            color: #fff;
                        }
                    }
                    .txt{
                        /*width: 680/@bi;*/
                        color: #fff;
                        text-align: justify;
                        margin-left: 35/@bi;
                    }
                }
                .waytwo{
                    width: 680/@bi;
                    color: #fff;
                    .waytxt{
                        text-align: justify;
                        line-height: 30/@bi;
                        font-size: 20/@bi;

                    }
                }
            }
            .fenpei{
                    width: 680/@bi;
                    font-size: 20/@bi;
                    margin-bottom: 20/@bi;
                    line-height: 35/@bi;
                    text-align: justify;
                    color:#fff;
                    .before{
                        width: auto;
                        color: #ffae00;
                    }
                }
            .detailBoxtwo{
                box-sizing: border-box;
                width: 714/@bi;
                height: auto;
                margin: 0 auto;
                border-radius: 10/@bi;
                background: #29160a;
                padding: 25/@bi 20/@bi;
                margin-bottom: 46/@bi;
                
                
                .detailImg{
                    width: 650/@bi;
                    height: auto;
                }
            }
            .detailBoxthree{
                box-sizing: border-box;
                width: 714/@bi;
                height: auto;
                margin: 0 auto;
                border-radius: 10/@bi;
                background: #29160a;
                padding: 25/@bi 20/@bi;
                margin-bottom: 46/@bi;
                font-size: 20/@bi;
                .valuebox{
                    text-align: justify;
                    color: #fff;
                    line-height: 30/@bi;
                    margin-bottom: 30/@bi;
                    .titletxt{
                        color: #ffae00;
                    }
                }
            }
        }
        .icon{
            width: 750/@bi;
            height: 51/@bi;
            img{
                width: 750/@bi;
                height: 51/@bi;
            }
        }
        .govlinkbox{
            width: 750/@bi;
            height: 41/@bi;
            background: url('//gw.alicdn.com/tfs/TB15vnte_tYBeNjy1XdXXXXyVXa-750-41.jpg') no-repeat;
                background-size: 100% 100%;
           .govlink{
                display: block;
                width: 240/@bi;
                height: 41/@bi;
                margin: 0 auto;          

            } 
        }
        

        
    }
</style>
