webpackJsonp([4,11],{bmjW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("mvHQ"),a=n.n(i),s=n("7+uW"),o=n("lITE"),r=n("gyMJ"),c=n("mtWM"),l=n.n(c),u={name:"DisplayData",components:{DataItem:o.default},data:function(){return{data:[],query:"",tables:[],loading:!1,current_query:"*",indices:[],current_indices:[],page:1,page_size:0,last_source:null,search_input_icon:"el-icon-edit",page_num:0,current_page:1,total_num:0,all_history:{},username:"",history:[],is_focus:!0}},mounted:function(){var e=this,t=this;document.onkeydown=function(e){window.event?e.keyCode:e.which;if(73==e.keyCode&&e.ctrlKey)t.$refs.search_input.focus();else if(78==e.keyCode&&e.ctrlKey){if(t.current_page*t.page_size>=t.total_num)return void t.$message.warning("已在末页");t.current_page+=1,t.on_page_change(t.current_page)}else if(80==e.keyCode&&e.ctrlKey){if(1==t.current_page)return void t.$message.warning("已在首页");t.current_page-=1,t.on_page_change(t.current_page)}};var n=Math.floor((window.innerHeight-170)/44);this.page_size=n>8?n:8,this.get_history(),r.b.get("mgmt/table",{params:{page_size:100}}).then(function(t){e.tables=t.data.results}).catch(function(e){}),this.search_data([],"*",1,this.page_size)},destroyed:function(){this.save_history()},methods:{on_focus:function(e){console.log("on_focus"),e.currentTarget.select()},history_filter:function(e,t){console.log("query_string:",e);var n=[];(e?this.history.filter(this.filter_function(e)):this.history).map(function(e){n.push({value:e})}),console.log("results:",n),t(n)},filter_function:function(e){return function(t){return-1!=t.toLowerCase().indexOf(e.toLowerCase())}},get_history:function(){var e=JSON.parse(localStorage.getItem("deleted-history"));if(e){var t=this.$store.state.username;if(!t)return;this.username=t,this.all_history=e,this.history=e[t]?e[t]:[]}},save_history:function(){this.all_history[this.username]=this.history.splice(0,100),localStorage.setItem("deleted-history",a()(this.all_history))},add_data:function(e){console.log("table:",e)},search_data:function(e,t,n,i){var s=this,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.last_source;var c=l.a.CancelToken.source();this.last_source=c;var u=this;this.search_input_icon="el-icon-loading",this.loading=!0,r.b.post("search/deleted-data",{indices:e,query:t,page:n,page_size:i},{cancelToken:c.token}).then(function(e){s.loading=!1,u.data=e.data.hits,s.total_num=e.data.total,s.search_input_icon="el-icon-edit",s.page_num=Math.ceil(e.data.total/s.page_size),o&&(s.current_page=1)}).catch(function(e){s.loading=!1,console.log("error:",e),s.search_input_icon="el-icon-edit",e.response&&e.response.data&&u.$message.error(a()(e.response.data)),console.log("error message: ",e.message)})},on_search:function(){this.current_query!=this.query||this.current_indices!=this.indices?(""==this.query&&(this.query="*"),this.is_focus=!1,this.history.includes(this.query)||this.history.unshift(this.query),this.current_query=this.query,this.current_indices=this.indices,this.page=1,this.search_data(this.current_indices,this.current_query,1,this.page_size,!0),document.getElementById("submit").focus()):this.$message.warning("重复搜索")},on_page_change:function(e){this.current_page=e,this.search_data(this.current_indices,this.current_query,e,this.page_size)},delete_data:function(e){this.data.splice(this.data.indexOf(e),1),this.total_num-=1},on_add_data:function(e){var t=new(s.default.component("AddData"))({propsData:{table_name:e.name}});t.$mount(),this.$el.appendChild(t.$el)},on_show_info:function(e){var t=new(s.default.component("ShowTable"))({propsData:{table:e}});t.$mount(),this.$el.appendChild(t.$el)}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("el-autocomplete",{ref:"search_input",staticClass:"demo-autocomplete",staticStyle:{width:"100%"},attrs:{id:"search_input",autofocus:e.is_focus,"trigger-on-focus":!1,"suffix-icon":e.search_input_icon,"fetch-suggestions":e.history_filter,"select-when-unmatched":"",placeholder:"示例：(hostname:huawei* AND price:[20000 TO 40000]) 更多请参阅Lucene语法"},on:{focus:e.on_focus},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.on_search()}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{slot:"prepend",multiple:"",filterable:"","default-first-option":"",placeholder:"选择表 默认：all"},slot:"prepend",model:{value:e.indices,callback:function(t){e.indices=t},expression:"indices"}},e._l(e.tables,function(t){return n("el-option",{key:t.id,staticStyle:{padding:"10px",display:"flex","align-items":"center","justify-content":"space-between"},attrs:{label:t.name,value:t.name}},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("div",[n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-circle-plus"},on:{click:function(n){n.stopPropagation(),e.on_add_data(t)}}}),e._v(" "),n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-info"},on:{click:function(n){n.stopPropagation(),e.on_show_info(t)}}})],1)])})),e._v(" "),n("el-button",{attrs:{slot:"append",id:"submit",loading:e.loading,icon:"el-icon-search"},on:{click:function(t){e.on_search()}},slot:"append"})],1)],1),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{border:"1px #DCDFE6 solid",margin:"10px 0px"}},e._l(e.data,function(t){return n("data-item",{key:t._id,attrs:{data:t},on:{delete_data:e.delete_data}})})),e._v(" "),n("el-pagination",{staticStyle:{float:"right","margin-right":"100px"},attrs:{background:"",layout:"total, prev, pager, next","page-size":e.page_size,total:e.total_num,"current-page":e.current_page},on:{"update:currentPage":function(t){e.current_page=t},"current-change":e.on_page_change}})],1)},staticRenderFns:[]},h=n("VU/8")(u,d,!1,null,null,null);t.default=h.exports},h2F4:function(e,t){},lITE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a=(n("gyMJ"),{name:"data-item",props:["data"],methods:{on_show_detail:function(e){console.log("on_show_detail.data:",e);var t=new(i.default.component("DeletedDataDetail"))({propsData:{data:e,source:e._source}});t.$mount(),this.$el.appendChild(t.$el)}}}),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticStyle:{"white-space":"nowrap",margin:"0px",padding:"0px"}},[n("li",{staticStyle:{display:"inline-block",border:"1px solid #E4E7ED",padding:"9px"}},[n("el-button",{staticStyle:{padding:"0px"},attrs:{icon:"el-icon-view"},on:{click:function(t){e.on_show_detail(e.data)}}})],1),e._v(" "),e._l(e.data._source,function(t,i,a){return"S"!=i[0]?n("li",{key:a,staticStyle:{display:"inline-block",border:"1px solid #E4E7ED",padding:"0 12px","font-size":"14px",height:"40px","line-height":"40px"},style:{color:null==t?"#C0C4CC":"#606266"}},[e._v("\n    "+e._s(null==t?"null":t)+"\n  ")]):e._e()})],2)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(e){n("h2F4")},"data-v-4bda5626",null);t.default=o.exports}});
//# sourceMappingURL=4.6886ccb1b132b6dd71e4.js.map