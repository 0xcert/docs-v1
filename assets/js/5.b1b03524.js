(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{163:function(e,t,a){},288:function(e,t,a){"use strict";var r=a(163);a.n(r).a},294:function(e,t,a){"use strict";a.r(t);a(253);var r=a(254),s=a(0),i=a(268),n=a.n(i),c=a(286),o=a.n(c),l=a(287);s.a.use(l.a),s.a.use(o.a,n.a);var v,u={name:"Subscription",data:function(){return{privacy:!1,state:0,data:{email:"",templateId:"f579c417-2f6c-48be-ab9d-ca0937dc56bb",segment:"0xcert-docs-newsletter",listId:"3983919"}}},methods:{submit:(v=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$validator.validate();case 3:if(!e.sent){e.next=7;break}return e.next=6,this.axios.post("https://api.0xcert.org/newsletters/request",this.data);case 6:this.state=1;case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error:"+e.t0),this.state=2;case 13:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return v.apply(this,arguments)})}},p=(a(288),a(12)),m=Object(p.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"subscription"},[a("transition",{attrs:{mode:"out-in"}},[1===e.state?a("div",{key:"confirm",staticClass:"confirm"},[a("h2",{staticClass:"text-center"},[e._v("Thank you!")]),e._v(" "),a("p",{staticClass:"text-center"},[e._v("Please check your inbox and "),a("strong",[e._v("click the confirmation link,")])])]):e._e(),e._v(" "),2===e.state?a("div",{key:"error",staticClass:"confirm"},[a("h2",{staticClass:"text-center"},[e._v("Ooops!")]),e._v(" "),a("p",{staticClass:"text-center"},[e._v("Something went wrong. Try again later.")]),e._v(" "),a("p",[a("a",{on:{click:function(t){e.state=0}}},[e._v(" ← Go back")])])]):e._e(),e._v(" "),0===e.state?a("div",{key:"form"},[a("h2",{staticClass:"text-center"},[e._v("Sign up for updates")]),e._v(" "),a("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"field-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.email,expression:"data.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{input:!0,"is-invalid-input":e.errors.has("email")},attrs:{name:"email",autocomplete:"email",placeholder:"Your email","data-vv-as":"E-mail",type:"text"},domProps:{value:e.data.email},on:{input:function(t){t.target.composing||e.$set(e.data,"email",t.target.value)}}}),e._v(" "),a("button",{staticClass:"button",attrs:{type:"submit"}},[e._v("Subscribe")])]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"alert"},[e._v(e._s(e.errors.first("email")))]),e._v(" "),a("div",{staticClass:"agreements"},[a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.privacy,expression:"privacy"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"privacy",name:"privacy",type:"checkbox"},domProps:{checked:Array.isArray(e.privacy)?e._i(e.privacy,null)>-1:e.privacy},on:{change:function(t){var a=e.privacy,r=t.target,s=!!r.checked;if(Array.isArray(a)){var i=e._i(a,null);r.checked?i<0&&(e.privacy=a.concat([null])):i>-1&&(e.privacy=a.slice(0,i).concat(a.slice(i+1)))}else e.privacy=s}}}),e._v(" "),a("label",{attrs:{for:"privacy"}},[e._v("\n             I give my consent to receive 0xcert Newsletter.\n            ")])]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("privacy"),expression:"errors.has('privacy')"}],staticClass:"alert"},[e._v("You have to accept our Privacy Policy")])])])]):e._e()])],1)}),[],!1,null,null,null);t.default=m.exports}}]);