(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a687d4c"],{"16fc":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"components-container"},[t._m(0),t._v(" "),e("div",{staticClass:"editor-container"},[e("dnd-list",{attrs:{list1:t.list1,list2:t.list2,"list1-title":"List","list2-title":"Article pool"}})],1)])},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("aside",[t._v("drag-list base on\n    "),e("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[t._v("Vue.Draggable")])])}],a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dndList"},[e("div",{staticClass:"dndList-list",style:{width:t.width1}},[e("h3",[t._v(t._s(t.list1Title))]),t._v(" "),e("draggable",{staticClass:"dragArea",attrs:{"set-data":t.setData,list:t.list1,group:"article"}},t._l(t.list1,function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle"},[t._v("\n          "+t._s(i.id)+"["+t._s(i.author)+"] "+t._s(i.title)+"\n        ")]),t._v(" "),e("div",{staticStyle:{position:"absolute",right:"0px"}},[e("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(e){return t.deleteEle(i)}}},[e("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}),0)],1),t._v(" "),e("div",{staticClass:"dndList-list",style:{width:t.width2}},[e("h3",[t._v(t._s(t.list2Title))]),t._v(" "),e("draggable",{staticClass:"dragArea",attrs:{list:t.list2,group:"article"}},t._l(t.list2,function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle2",on:{click:function(e){return t.pushEle(i)}}},[t._v("\n          "+t._s(i.id)+" ["+t._s(i.author)+"] "+t._s(i.title)+"\n        ")])])}),0)],1)])},l=[],r=(e("0eb5"),e("a4c5"),e("f763"),e("8ecb")),c=e.n(r),u={name:"DndList",components:{draggable:c.a},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every(function(i){return t.id!==i.id})},isNotInList2:function(t){return this.list2.every(function(i){return t.id!==i.id})},deleteEle:function(t){var i=!0,e=!1,s=void 0;try{for(var n,a=this.list1[Symbol.iterator]();!(i=(n=a.next()).done);i=!0){var l=n.value;if(l.id===t.id){var r=this.list1.indexOf(l);this.list1.splice(r,1);break}}}catch(c){e=!0,s=c}finally{try{i||null==a.return||a.return()}finally{if(e)throw s}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){var i=!0,e=!1,s=void 0;try{for(var n,a=this.list2[Symbol.iterator]();!(i=(n=a.next()).done);i=!0){var l=n.value;if(l.id===t.id){var r=this.list2.indexOf(l);this.list2.splice(r,1);break}}}catch(c){e=!0,s=c}finally{try{i||null==a.return||a.return()}finally{if(e)throw s}}this.isNotInList1(t)&&this.list1.push(t)},setData:function(t){t.setData("Text","")}}},o=u,d=(e("7f49"),e("17cc")),f=Object(d["a"])(o,a,l,!1,null,"005c1ad2",null),h=f.exports,p=e("2423"),v={name:"DndListDemo",components:{DndList:h},data:function(){return{list1:[],list2:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.listLoading=!0,Object(p["c"])().then(function(i){t.list1=i.data.items.splice(0,5),t.list2=i.data.items})}}},m=v,g=Object(d["a"])(m,s,n,!1,null,null,null);i["default"]=g.exports},2423:function(t,i,e){"use strict";e.d(i,"c",function(){return n}),e.d(i,"b",function(){return a}),e.d(i,"d",function(){return l}),e.d(i,"a",function(){return r}),e.d(i,"e",function(){return c});var s=e("b775");function n(t){return Object(s["a"])({url:"/article/list",method:"get",params:t})}function a(t){return Object(s["a"])({url:"/article/detail",method:"get",params:{id:t}})}function l(t){return Object(s["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(s["a"])({url:"/article/create",method:"post",data:t})}function c(t){return Object(s["a"])({url:"/article/update",method:"post",data:t})}},"4d9b":function(t,i,e){},"7f49":function(t,i,e){"use strict";var s=e("4d9b"),n=e.n(s);n.a}}]);