webpackJsonp([9],{"34Pj":function(t,e){},TZaG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mvHQ"),n=i.n(a),s=i("Cz8s"),o=i("mzkE"),r={name:"handbook",data:function(){return{user:{uesrname:"",phone:"",content:""}}},methods:{submit:function(){if(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.phone))alert("电话号码格式错误");else if(""!=this.phone&&this.phone){var t=n()(this.user);this.$get.post("/path/to",t).then(function(t){},function(t){})}else alert("请输入电话号码")}},components:{DLheader:s.a,DLfooter:o.a}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all"},[i("DLheader"),t._v(" "),t._m(0),t._v(" "),i("section",{staticClass:"container aboutUS_content"},[i("div",{staticStyle:{overflow:"hidden",position:"relative"}},[i("div",{staticClass:"about_nav"},[i("div",{staticClass:"onAbout"},[i("router-link",{attrs:{to:"/message"}},[t._v("代理经销商留言"),i("span")])],1),t._v(" "),i("div",[i("router-link",{staticStyle:{color:"#333"},attrs:{to:"/consult"}},[t._v("招商咨询"),i("span")])],1),t._v(" "),i("div",[i("router-link",{staticStyle:{color:"#333"},attrs:{to:"/handbook"}},[t._v("招商手册"),i("span")])],1)]),t._v(" "),i("hr",{staticStyle:{position:"absolute",width:"100%","background-color":"#000",bottom:"-4px","z-index":"1"}})]),t._v(" "),i("h3",{staticStyle:{"text-align":"center",margin:"80px 0 10px","letter-spacing":"1.5px"}},[t._v("代理经销留言")]),t._v(" "),i("h4",{staticStyle:{color:"#f08300","text-align":"center"}},[t._v("AGENT DISTRIBUTION MESSAGE")]),t._v(" "),i("form",{staticStyle:{width:"45%",margin:"10px auto"},attrs:{action:"/toMessage.html",method:"post",id:"msgForm"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("div",{staticClass:"form-group"},[i("label",[t._v("用户姓名：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.usename,expression:"user.usename"}],staticClass:"form-control",attrs:{type:"text",id:"usename",placeholder:"用户姓名",name:"name"},domProps:{value:t.user.usename},on:{input:function(e){e.target.composing||t.$set(t.user,"usename",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"联系电话",name:"phone"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("留言内容：")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.content,expression:"user.content"}],staticClass:"form-control",staticStyle:{resize:"none"},attrs:{rows:"5",maxlength:"220",id:"content",name:"content",onpaste:"return false"},domProps:{value:t.user.content},on:{input:function(e){e.target.composing||t.$set(t.user,"content",e.target.value)}}})]),t._v(" "),i("input",{staticClass:"btn btn-default",attrs:{type:"submit",value:"提交留言",id:"mesJoin"}})]),t._v(" "),t._m(2)]),t._v(" "),i("DLfooter")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:i("ziHV")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("联系电话："),e("span",{staticStyle:{color:"red"}},[this._v("（必填，将为您隐藏）*")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"comment-list col-md-12 col-xs-12",attrs:{id:"message"}},[i("div",[i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2019-02-16 20:13:32")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("徐佳佳：当乐厨卫的新品厨房电器什么时候可以订货啊？看你们发的视频，油烟机真的太精致了，吸力也大，把手机都吸住了")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2019-02-10 09:13:55")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("王乐：当乐厨卫将以一如既往的质量和服务，做更好的厨电卫浴产品。")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2019-02-06 10:14:12")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("李国强：这次去厨房电器招商会了一定要到展厅好好看看")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2019-01-11 14:04:32")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("贵州麻江：当乐厨卫品质精良，团队作风优良，值得信赖!")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2018-11-16 16:11:51")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("周冬：真是好久没有这样认真学习过了，不过这次培训让我更进一步认识了当乐厨卫，产品的理论知识加现场拆卸安装，真是通俗易懂，营销课件高总讲的也是很精彩，让我们大家欢声笑语不断！")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2018-09-16 10:45:10")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("李奇荣：因为刚开始没有听说这个品牌，一直在关注你们，这次我也是来了解了你们的公司的人员和经验模式才敢去做，认识高总很荣幸，希望我们合作共赢！")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2018-06-19 19:25:29")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("可馨：关注当乐厨卫这么久，感觉你们都很努力，有机会一起合作")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2018-05-05 10:55:46")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("李勇：了解了当乐厨卫，确实不错，务实，做实事，有创新精神！")])]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px",border:"1px dashed #ccc",padding:"5px 0"}},[i("p",{staticStyle:{"font-size":"12px","text-align":"right","padding-right":"50px",color:"#ccc"}},[t._v("时间：2018-03-16 17:22:05")]),t._v(" "),i("p",{staticStyle:{"font-size":"16px","letter-spacing":"2px","padding-left":"3px"}},[t._v("杨洋：当乐厨卫每堂课都是干货，学到了很多技术！")])])])])}]};var p=i("VU/8")(r,c,!1,function(t){i("34Pj")},null,null);e.default=p.exports}});
//# sourceMappingURL=9.e8e4355d47ccb7c4fe02.js.map