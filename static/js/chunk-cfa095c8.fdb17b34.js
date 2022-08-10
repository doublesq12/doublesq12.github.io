(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfa095c8"],{"22a1":function(e,t,n){},"4b78":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("StateTop",{attrs:{label:"型号搜索 : "},on:{click:e.query}}),n("Button",{attrs:{color:"addBtn",title:"新建",icon:"el-icon-circle-plus-outline"},on:{click:e.addMachine}}),n("div",{staticClass:"main"},[n("el-table",{attrs:{data:e.tableData,fit:""}},[n("el-table-column",{attrs:{type:"index",label:"序号"}}),n("el-table-column",{attrs:{prop:"name",label:"型号名称"}}),n("el-table-column",{attrs:{prop:"model",label:"型号编码"}}),n("el-table-column",{attrs:{prop:"image",label:"设备图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("el-image",{staticStyle:{width:"24px",height:"24px","border-radius":"12px"},attrs:{src:e.row.image,fit:"cover "}})]}}])}),n("el-table-column",{attrs:{prop:"vmRow",label:"货道行"}}),n("el-table-column",{attrs:{prop:"vmCol",label:"货道列"}}),n("el-table-column",{attrs:{prop:"channelMaxCapacity",label:"设备容量"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.handleClick(t.row)}}},[e._v("修改")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.delMachine(t.row)}}},[e._v("删除")])]}}])})],1)],1),n("Dialog",{ref:"machineDialog",attrs:{visible:e.visible,currentMachine:e.currentMachine},on:{"on-change":e.changeFn,addcheckYes:e.addcheckYesFn,fixcheckYes:e.fixcheckYesFn}}),n("Bottom",{attrs:{pageInfo:e.pageInfo},on:{lastPage:e.lastPageFn,nextPage:e.nextPageFn}})],1)},c=[],i=n("c7eb"),r=n("1da1"),o=n("74e4"),s=n("ab94"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dialog",{attrs:{title:"新增设备类型",visible:e.visible2},on:{"update:visible":function(t){e.visible2=t}}},[n("el-form",{ref:"form",attrs:{model:e.machineInfo,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"型号名称",required:""}},[n("el-input",{attrs:{placeholder:"请输入",maxlength:"10","show-word-limit":""},model:{value:e.machineInfo.name,callback:function(t){e.$set(e.machineInfo,"name",t)},expression:"machineInfo.name"}})],1),n("el-form-item",{attrs:{label:"型号编码",required:""}},[n("el-input",{attrs:{placeholder:"请输入（限制数字、字母、中划线、下划线）",maxlength:"15","show-word-limit":""},model:{value:e.machineInfo.model,callback:function(t){e.$set(e.machineInfo,"model",t)},expression:"machineInfo.model"}})],1),n("el-form-item",{attrs:{label:"货道行数",required:""}},[n("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},model:{value:e.machineInfo.vmRow,callback:function(t){e.$set(e.machineInfo,"vmRow",t)},expression:"machineInfo.vmRow"}})],1),n("el-form-item",{attrs:{label:"货道列数",required:""}},[n("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},model:{value:e.machineInfo.vmCol,callback:function(t){e.$set(e.machineInfo,"vmCol",t)},expression:"machineInfo.vmCol"}})],1),n("el-form-item",{attrs:{label:"货道容量",required:""}},[n("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},model:{value:e.machineInfo.channelMaxCapacity,callback:function(t){e.$set(e.machineInfo,"channelMaxCapacity",t)},expression:"machineInfo.channelMaxCapacity"}})],1),n("el-form-item",{attrs:{label:"设备图像",required:""}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":e.beforeAvatarUpload,"http-request":e.handleAvatarSuccess}},[e.machineInfo.image?n("img",{staticClass:"avatar",attrs:{src:e.machineInfo.image}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" 支持扩展名：jpg、png，文件不得大于100kb ")],1)],1),n("div",{staticClass:"bottom-but"},[n("Button",{attrs:{color:"config",title:"取消"},on:{click:e.cancelCheckNo}}),n("Button",{attrs:{color:"addBtn",title:"确认"},on:{click:e.addcheckYes}})],1)],1)},u=[],d=n("57eb"),f=n("e876"),m={props:{visible:{type:Boolean},currentMachine:{type:Object,required:!0}},components:{Button:s["a"],Dialog:d["a"]},data:function(){return{machineInfo:{name:"",model:"",vmRow:1,vmCol:1,channelMaxCapacity:1,image:""}}},created:function(){},watch:{currentMachine:{handler:function(){this.machineInfo=this.currentMachine},deep:!0}},methods:{handleAvatarSuccess:function(e){var t=this;return Object(r["a"])(Object(i["a"])().mark((function n(){var a,c,r;return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e.file),a=new FormData,console.log(a),a.append("fileName",e.file),n.next=6,Object(f["a"])(a);case 6:c=n.sent,r=c.data,console.log(r),t.machineInfo.image=r;case 10:case"end":return n.stop()}}),n)})))()},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,n=e.size/1024/1024<.1;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),n||this.$message.error("上传头像图片大小不能超过 100KB!"),t&&n},addcheckYes:function(){var e=this;return Object(r["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.machineInfo.typeId?e.$emit("fixcheckYes",e.machineInfo):e.$emit("addcheckYes",e.machineInfo);case 1:case"end":return t.stop()}}),t)})))()},cancelCheckNo:function(){this.visible2=!1}},computed:{visible2:{get:function(){return this.visible},set:function(e){this.$emit("on-change",e)}}}},p=m,h=(n("6762"),n("2877")),b=Object(h["a"])(p,l,u,!1,null,"3d200c0a",null),v=b.exports,g=n("c4d8"),x=n("77d2"),w={components:{Button:s["a"],Dialog:v,StateTop:o["a"],Bottom:g["a"]},data:function(){return{tableData:[{name:"",model:"",image:"",vmRow:"",vmCol:"",channelMaxCapacity:""}],visible:!1,currentMachine:{},page:1,pageInfo:{}}},created:function(){this.getMachineTypeList()},methods:{query:function(e){var t=this;return Object(r["a"])(Object(i["a"])().mark((function n(){var a;return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,Object(x["i"])({name:e});case 3:a=n.sent,t.tableData=a.data.currentPageRecords;case 5:case"end":return n.stop()}}),n)})))()},getMachineTypeList:function(){var e=this;return Object(r["a"])(Object(i["a"])().mark((function t(){var n;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(x["i"])({pageIndex:e.page});case 2:n=t.sent,e.tableData=n.data.currentPageRecords,e.pageInfo=n.data;case 5:case"end":return t.stop()}}),t)})))()},addMachine:function(){var e=this;return Object(r["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.currentMachine={name:"",model:"",vmRow:1,vmCol:1,channelMaxCapacity:1,image:""},e.visible=!0;case 2:case"end":return t.stop()}}),t)})))()},addcheckYesFn:function(e){var t=this;return Object(r["a"])(Object(i["a"])().mark((function n(){return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(x["b"])(e);case 2:return t.visible=!1,n.next=5,t.getMachineTypeList();case 5:t.$message.success("添加设备类型成功"),t.currentMachine={};case 7:case"end":return n.stop()}}),n)})))()},handleClick:function(e){this.visible=!0,this.currentMachine=e},fixcheckYesFn:function(e){var t=this;return Object(r["a"])(Object(i["a"])().mark((function n(){return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e.typeId),n.next=3,Object(x["e"])(e.typeId,e);case 3:return t.visible=!1,n.next=6,t.getMachineTypeList();case 6:t.$message.success("修改设备类型成功"),t.currentMachine={};case 8:case"end":return n.stop()}}),n)})))()},delMachine:function(e){var t=this;return Object(r["a"])(Object(i["a"])().mark((function n(){return Object(i["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(x["c"])(e.typeId);case 3:return n.next=5,t.getMachineTypeList();case 5:t.$message.success("删除设备类型成功"),n.next=10;break;case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},changeFn:function(e){this.visible=e},lastPageFn:function(){this.page--,this.getMachineTypeList()},nextPageFn:function(){this.page++,this.getMachineTypeList()}}},O=w,j=Object(h["a"])(O,a,c,!1,null,"72e08438",null);t["default"]=j.exports},"57eb":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:e.title,visible:e.visible,width:"40%","before-close":e.handleClose},on:{"update:visible":function(t){e.visible=t}}},[e._t("default")],2)],1)},c=[],i={components:{},props:{title:{type:String,required:!0},visible:{type:Boolean,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleClose:function(){this.$emit("update:visible",!1)}}},r=i,o=n("2877"),s=Object(o["a"])(r,a,c,!1,null,"3051db4d",null);t["a"]=s.exports},"5fbd3":function(e,t,n){},6762:function(e,t,n){"use strict";n("c428")},7217:function(e,t,n){"use strict";n("22a1")},"74e4":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[n("el-card",{staticClass:"box-card"},[n("el-form",{ref:"form",attrs:{"label-width":"80px",inline:!0}},[n("el-form-item",{attrs:{label:e.label}},[n("el-input",{staticStyle:{width:"206px"},attrs:{placeholder:"请输入"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),n("Button",{staticClass:"query-btn",attrs:{icon:"el-icon-search",title:"查询",color:"#5f84ff"},on:{click:e.query}})],1)],1)],1)},c=[],i=n("ab94"),r={components:{Button:i["a"]},props:{label:{type:String}},data:function(){return{code:""}},created:function(){},methods:{query:function(){this.$emit("click",this.code)}}},o=r,s=(n("d4bf"),n("2877")),l=Object(s["a"])(o,a,c,!1,null,"399fbe76",null);t["a"]=l.exports},"77d2":function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"i",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"m",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return b}));n("99af");var a=n("b775"),c=function(e){return Object(a["a"])({url:"/api/vm-service/vm/search",params:e})},i=function(e,t,n,c){return Object(a["a"])({url:"/api/order-service/report/skuCollect/".concat(e,"/").concat(t,"/").concat(n),params:c})},r=function(e,t,n,c){return Object(a["a"])({url:"/api/task-service/task/repairCount/".concat(e,"/").concat(t,"/").concat(n),params:c})},o=function(e,t,n,c){return Object(a["a"])({url:"/api/task-service/task/supplyCount/".concat(e,"/").concat(t,"/").concat(n),params:c})},s=function(e){return Object(a["a"])({url:"/api/vm-service/vmType/search",params:e})},l=function(e){return Object(a["a"])({method:"POST",url:"/api/vm-service/vmType",data:e})},u=function(e){return Object(a["a"])({method:"DELETE",url:"/api/vm-service/vmType/"+e})},d=function(e,t){return Object(a["a"])({method:"PUT",url:"/api/vm-service/vmType/"+e,data:t})},f=function(e){return Object(a["a"])({url:"/api/vm-service/channel/channelList/"+e})},m=function(e){return Object(a["a"])({url:"/api/vm-service/policy",params:e})},p=function(e,t){return Object(a["a"])({method:"PUT",url:"/api/vm-service/vm/applyPolicy",data:{innerCodeList:e,policyId:t}})},h=function(e,t){return Object(a["a"])({method:"PUT",url:"/api/vm-service/vm/".concat(e,"/").concat(t)})},b=function(e){return Object(a["a"])({method:"POST",url:"/api/vm-service/vm",data:e})}},"858a":function(e,t,n){"use strict";n("8ea6")},"8ea6":function(e,t,n){},"99af":function(e,t,n){"use strict";var a=n("23e7"),c=n("d039"),i=n("e8b5"),r=n("861d"),o=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),m=n("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",v=m>=51||!c((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),g=d("concat"),x=function(e){if(!r(e))return!1;var t=e[p];return void 0!==t?!!t:i(e)},w=!v||!g;a({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,a,c,i,r=o(this),d=u(r,0),f=0;for(t=-1,a=arguments.length;t<a;t++)if(i=-1===t?r:arguments[t],x(i)){if(c=s(i.length),f+c>h)throw TypeError(b);for(n=0;n<c;n++,f++)n in i&&l(d,f,i[n])}else{if(f>=h)throw TypeError(b);l(d,f++,i)}return d.length=f,d}})},ab94:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-button",{staticClass:"search",class:e.color,attrs:{disabled:e.disable,type:"primary",icon:e.icon},nativeOn:{click:function(t){return e.btn(t)}}},[e._v(e._s(e.title))])},c=[],i={components:{},props:{color:{type:String,default:"search"},title:{type:String,default:"搜索"},icon:{type:String,default:"icon"},disable:{type:Boolean,default:!1}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{btn:function(){this.$emit("click")}}},r=i,o=(n("7217"),n("2877")),s=Object(o["a"])(r,a,c,!1,null,"53ec6d56",null);t["a"]=s.exports},c428:function(e,t,n){},c4d8:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom"},[n("div",{staticClass:"left"},[e._v(" 共"+e._s(e.pageInfo.totalCount)+"条数据 第"+e._s(e.pageInfo.pageIndex)+"/"+e._s(e.pageInfo.totalPage)+"页 ")]),n("div",{staticClass:"right"},[n("Button",{attrs:{color:"#d5ddf8",title:"上一页",disabled:e.disabled},on:{click:e.lastPage}}),n("Button",{attrs:{color:"#d5ddf8",title:"下一页",disabled:e.disabled2},on:{click:e.nextPage}})],1)])},c=[],i=n("ab94"),r={components:{Button:i["a"]},props:{pageInfo:{type:Object,required:!0}},data:function(){return{disabled:!1,disabled2:!1}},created:function(){},methods:{lastPage:function(){this.$emit("lastPage")},nextPage:function(){this.$emit("nextPage")}}},o=r,s=(n("858a"),n("2877")),l=Object(s["a"])(o,a,c,!1,null,"3b780c16",null);t["a"]=l.exports},d4bf:function(e,t,n){"use strict";n("5fbd3")},e876:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("b775"),c=function(e){return Object(a["a"])({method:"POST",url:"/api/vm-service/sku/fileUpload",data:e})}}}]);