(window["webpackJsonpfcc-javascript-calculator"]=window["webpackJsonpfcc-javascript-calculator"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var u=n(1),r=n(2),a=n(5),l=n(4),s=n(6),i=n(0),c=n.n(i),o=n(8),m=n.n(o),p=(n(14),n(3));function f(e,t){return"0"===e&&"0"===t?"0":"0"===e&&"."!==t?t:""===e&&"."===t?"0.":"-"===e&&"."===t?"-0.":"."===t&&-1!==e.toString().indexOf(".")?e:"-"===t&&-1!==e.toString().indexOf("-")?e:"\u221a"===t&&-1!==e.toString().indexOf("\u221a")?e:e+t}function b(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{id:"display",className:"text-right",type:"input",value:e.amount,readOnly:!0}),[["seven","7"],["eight","8"],["nine","9"],["percent","%"],["clear","clear","C"],["four","4"],["five","5"],["six","6"],["multiply","X"],["divide","/"],["one","1"],["two","2"],["three","3"],["add","+"],["subtract","-"],["zero","0"],["decimal","."],["square-root","\u221a","\u221a"],["equals","="]].map(function(t){return c.a.createElement("button",{id:t[0],key:t[0],onClick:e.onClick(),value:t[1]},"clear"===t[1]|"square-root"===t[1]?t[2]:t[1])}))}var h=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(a.a)(this,Object(l.a)(t).call(this))).handleChange=function(t){var n=t.target.value;if(!(e.state.amount.length>=10&/[0-9|.]+/.test(n)&""!==e.number))if("%"===n)e.percent(n);else if("/"===n|"X"===n|"+"===n|"-"===n){if(""===e.number&0===e.state.amount&"-"!==n)return 0;""===e.number|"-"===e.number|"\u221a"===e.number?e.consecutiveOpe(n):e.normalOpe(n),e.equals=!1}else"="===n?e.result(n):"clear"===n?e.clear(n):e.storeNumber(e.number,n)},e.storeNumber=function(t,n){e.number=f(t,n),e.numberCp=e.number,e.setState({amount:e.number})},e.clear=function(t){e.number="",e.numberCp="",e.lastExpression=[],e.fullInput=[],e.equals=!1,e.setState({amount:0})},e.percent=function(t){var n=e.fullInput[e.fullInput.length-2];if(""===e.number)return 0;void 0===n&&(n=1);var u=n*e.number*.01;e.setState({amount:u}),e.number=u},e.result=function(t){var n="",u=e.fullInput[e.fullInput.length-1],r=e.fullInput[e.fullInput.length-2];if(e.equals=!0,0===e.state.amount)return 0;"number"===typeof u?(e.fullInput.splice(-1,1,e.lastExpression[0]),e.number=e.lastExpression[1]):""===e.number?e.number=r:-1!==e.number.toString().indexOf("\u221a")&&("-"===e.number[0]?e.number=-Math.sqrt(e.number.slice(2)):e.number=Math.sqrt(e.number.slice(1))),""!==e.number&&(e.fullInput.push(e.number),e.lastExpression.push(e.number)),""!==e.number&&(n=e.getResult(e.fullInput),e.fullInput.push(n),e.setState({amount:n}),e.numberCp=n,"",e.number="")},e.consecutiveOpe=function(t){"-"===t&!e.equals?(e.number=f(e.number,t),e.setState({amount:e.number})):(e.fullInput.splice(-1,1,t),e.number="",e.setState({amount:e.numberCp}))},e.normalOpe=function(t){-1!==e.number.toString().indexOf("\u221a")&&("-"===e.number[0]?e.number=-Math.sqrt(e.number.slice(2)):e.number=Math.sqrt(e.number.slice(1))),""!==e.number&&e.fullInput.push(e.number);var n=e.fullInput[e.fullInput.length-2];if(("+"===t|"-"===t)&e.fullInput.length>2|"X"===n|"/"===n){var u=e.getResult(e.fullInput);e.setState({amount:u}),e.numberCp=u}e.lastExpression.push(t),e.fullInput.push(t),e.number=""},e.getResult=function(e){for(var t=[["/","X"],["+","-"]],n=e.slice(0),u=function(u){n.forEach(function(n){if(t[u][0]===n|t[u][1]===n){var r=e.indexOf(n),a=function(e,t,n){switch(e=parseFloat(e),n=parseFloat(n),t){case"/":return e/n;case"X":return e*n;case"+":return e+n;case"-":return e-n;case"\u221a":return Math.sqrt(e);default:return""}}(e[r-1],n,e[r+1]);e.splice(r-1,3,a)}})},r=0;r<t.length;r++)u(r);var a=e[0];return isNaN(a)?"Error":a.toString().length>10?a.toString().slice(0,11):a},e.fullInput=[],e.number="",e.numberCp="",e.equals=!1,e.lastExpression=[],e.state={amount:0},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container grid"},c.a.createElement(b,{amount:this.state.amount,onClick:function(){return e.handleChange}}))}}]),t}(c.a.Component);n.d(t,"default",function(){return d});var d=function(e){function t(){return Object(u.a)(this,t),Object(a.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null))}}]),t}(c.a.Component);m.a.render(c.a.createElement(d,null),document.getElementById("app"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.75edbbc1.chunk.js.map