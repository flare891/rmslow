function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return $}));var i=n("2kYt"),o=n("sEIs"),r=n("yDe4"),a=n("D57K"),c=n("EM62"),s=n("OZ4H"),l=n("KZIX"),u=n("qFEQ"),d=n("PBFl"),m=n("bFHC"),b=["createRule"],f=["testRule"];function h(e,t){1&e&&c.Rb(0,"div",null,7)}function p(e,t){1&e&&c.Rb(0,"div",null,8)}var g,C=((g=function(){function e(t,n,i){_classCallCheck(this,e),this.dialogRef=t,this.dialog=n,this.cfr=i}return _createClass(e,[{key:"ngOnInit",value:function(){this.lazyLoadCreateRule()}},{key:"ngAfterViewInit",value:function(){}},{key:"lazyLoadCreateRule",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.bind(null,"RqEb"));case 2:t=e.sent,i=t.CreateRuleComponent,o=this.cfr.resolveComponentFactory(i),this.createRuleRef=this.createRule.createComponent(o),this.createRuleRef.hostView.detectChanges();case 6:case"end":return e.stop()}}),e,this)})))}},{key:"lazyLoadTestRule",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6).then(n.bind(null,"RBqR"));case 2:t=e.sent,i=t.TestRuleComponent,o=this.cfr.resolveComponentFactory(i),this.testRuleRef=this.testRule.createComponent(o),this.testRuleRef.hostView.detectChanges();case 6:case"end":return e.stop()}}),e,this)})))}},{key:"tabSelectionChanged",value:function(e){switch(e.tab.textLabel){case"Create Rule":this.lazyLoadCreateRule();break;case"Test Rule":this.lazyLoadTestRule()}}}]),e}()).\u0275fac=function(e){return new(e||g)(c.Qb(s.f),c.Qb(s.a),c.Qb(c.k))},g.\u0275cmp=c.Kb({type:g,selectors:[["rms-frontend-create-rule-modal"]],viewQuery:function(e,t){var n;1&e&&(c.Ic(b,!0,c.Q),c.Ic(f,!0,c.Q)),2&e&&(c.sc(n=c.fc())&&(t.createRule=n.first),c.sc(n=c.fc())&&(t.testRule=n.first))},decls:10,vars:0,consts:[[1,"modalContainer"],[1,"header-bar"],["backgroundColor","primary","fxFlex","1 1 auto",3,"selectedTabChange"],["label","Create Rule","id","createRule"],["matTabContent",""],["label","Test Rule","id","testRule"],["mat-icon-button","","mat-dialog-close",""],["createRule",""],["testRule",""]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"mat-tab-group",2),c.ec("selectedTabChange",(function(e){return t.tabSelectionChanged(e)})),c.Wb(3,"mat-tab",3),c.Cc(4,h,2,0,"ng-template",4),c.Vb(),c.Wb(5,"mat-tab",5),c.Cc(6,p,2,0,"ng-template",4),c.Vb(),c.Vb(),c.Wb(7,"button",6),c.Wb(8,"mat-icon"),c.Ec(9,"close"),c.Vb(),c.Vb(),c.Vb(),c.Vb())},directives:[l.c,u.a,l.a,l.b,d.a,s.c,m.a],styles:[".modalContainer[_ngcontent-%COMP%]{height:100%}.header-bar[_ngcontent-%COMP%]{margin-bottom:15px;height:100%}  .mat-tab-labels{justify-content:center}  .mat-tab-body-wrapper{height:100%}  .mat-tab-group{overflow:hidden}"]}),g),y=n("nIj0"),v=n("oqI+"),R=n("Meci"),w=n("Jb3d"),x=n("zmEM"),k=n("29Wa"),D=n("Cd2c"),W=n("Y2X+");function E(e,t){1&e&&c.Rb(0,"div",26)}function I(e,t){1&e&&c.Rb(0,"mat-icon",22)}function V(e,t){1&e&&(c.Wb(0,"mat-icon",27),c.Ec(1,"priority_high"),c.Vb())}function O(e,t){1&e&&(c.Wb(0,"mat-icon",28),c.Ec(1,"info"),c.Vb())}function _(e,t){if(1&e){var n=c.Xb();c.Wb(0,"div",9),c.Wb(1,"mat-card",10),c.Cc(2,E,1,0,"div",11),c.Wb(3,"div",12),c.Wb(4,"button",13),c.Wb(5,"mat-icon",14),c.Ec(6,"swap_vert"),c.Vb(),c.Vb(),c.Wb(7,"mat-menu",null,15),c.Wb(9,"button",16),c.ec("click",(function(){c.vc(n);var e=t.index;return c.ic().moveUp(e)})),c.Ec(10,"Move Up"),c.Vb(),c.Wb(11,"button",16),c.ec("click",(function(){c.vc(n);var e=t.index;return c.ic().moveDown(e)})),c.Ec(12,"Move Down"),c.Vb(),c.Vb(),c.Vb(),c.Rb(13,"mat-divider",17),c.Wb(14,"div",18),c.Cc(15,I,1,0,"mat-icon",19),c.Cc(16,V,2,0,"mat-icon",20),c.Cc(17,O,2,0,"mat-icon",21),c.Wb(18,"mat-form-field",22),c.Wb(19,"mat-label"),c.Ec(20," Rule ID"),c.Vb(),c.Rb(21,"input",23),c.Vb(),c.Wb(22,"mat-form-field",24),c.Wb(23,"mat-label"),c.Ec(24,"Rule Description"),c.Vb(),c.Rb(25,"input",25),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var i=t.index,o=t.first,r=t.last,a=c.tc(8);c.Eb(4),c.nc("matMenuTriggerFor",a),c.Eb(10),c.nc("formGroupName",i),c.Eb(1),c.nc("ngIf",!o&&!r),c.Eb(1),c.nc("ngIf",o),c.Eb(1),c.nc("ngIf",r)}}var P,M=((P=function(){function e(t,n,i){_classCallCheck(this,e),this.formBuilder=t,this.dialog=n,this.dialogRef=i,this.contents=[],this.contentChange=new c.p,this.form=this.formBuilder.group({items:this.formBuilder.array([])})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.items=this.form.get("items"),this.items.push(this.formBuilder.group({ruleId:"53",ruleDescription:"When text contains ELEMENT",order:1})),this.items.push(this.formBuilder.group({ruleId:"43",ruleDescription:"When producer is amazon. This rule is applied",order:2})),this.items.push(this.formBuilder.group({ruleId:"101",ruleDescription:"When producer is google.",order:3})),this.items.push(this.formBuilder.group({ruleId:"99",ruleDescription:"When conditions are met. Do things",order:4})),this.items.push(this.formBuilder.group({ruleId:"1",ruleDescription:"These files fo not matter",order:5})),this.items.push(this.formBuilder.group({ruleId:"11",ruleDescription:"Default Rule for System X",order:5})),this.form.valueChanges.subscribe((function(t){e.contents=e.reorder(t.items),e.contentChange.emit(e.contents)}))}},{key:"ngAfterViewInit",value:function(){}},{key:"drop",value:function(e){var t=this.items.at(e.previousIndex);this.items.removeAt(e.previousIndex),this.items.insert(e.currentIndex,t)}},{key:"moveUp",value:function(e){if(this.items=this.form.get("items"),e>0){var t=this.items.at(e);this.items.removeAt(e),this.items.insert(e-1,t)}}},{key:"moveDown",value:function(e){if(this.items=this.form.get("items"),this.items.controls.length!=length){var t=this.items.at(e);this.items.removeAt(e),this.items.insert(e+1,t)}}},{key:"reorder",value:function(e){return e.map((function(e,t){return e.order=t+1,e}))}},{key:"saveOrder",value:function(){console.log("Actual save the information one day"),this.dialogRef.close()}}]),e}()).\u0275fac=function(e){return new(e||P)(c.Qb(y.d),c.Qb(s.a),c.Qb(s.f))},P.\u0275cmp=c.Kb({type:P,selectors:[["rms-frontend-order-rules-modal"]],inputs:{contents:"contents"},outputs:{contentChange:"contentChange"},decls:16,vars:2,consts:[["fxLayout","column","fxLayoutAlign","space-between start",1,"modalContainer"],["fxLayout","row","fxLayoutAlign","space-between start",1,"header-bar"],["mat-icon-button","","mat-dialog-close",""],["fxLayout","row","fxLayoutAlign","space-between start",2,"height","80%","width","100%"],["fxLayout","column","fxLayoutAlign","space-between start",1,"main"],[1,"example-form",3,"formGroup"],["cdkDropList","",1,"example-list",3,"cdkDropListDropped"],["formArrayName","items","cdkDrag","","class","example-box",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"click"],["formArrayName","items","cdkDrag","",1,"example-box"],["fxLayout","row",1,"full-width"],["class","drag-placeholder",4,"cdkDragPlaceholder"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","","type","button",3,"matMenuTriggerFor"],["cdkDragHandle","",1,"dragable"],["moveMenu","matMenu"],["mat-menu-item","",3,"click"],["vertical","true",2,"margin-right","10px"],["fxLayout","row","fxLayoutAlign","space-around center",1,"full-width",3,"formGroupName"],["style","width: 5%",4,"ngIf"],["matTooltip","Highest priority rule","style","width: 5%",4,"ngIf"],["matTooltip","Default rule - If no other rules match, the default actions will be applied.","style","width: 5%",4,"ngIf"],[2,"width","5%"],["matInput","","formControlName","ruleId","readonly",""],[2,"width","80%"],["matInput","","formControlName","ruleDescription","readonly",""],[1,"drag-placeholder"],["matTooltip","Highest priority rule",2,"width","5%"],["matTooltip","Default rule - If no other rules match, the default actions will be applied.",2,"width","5%"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"h1"),c.Ec(3,"Set System Rule Priority"),c.Vb(),c.Wb(4,"button",2),c.Wb(5,"mat-icon"),c.Ec(6,"close"),c.Vb(),c.Vb(),c.Vb(),c.Wb(7,"div",3),c.Wb(8,"div",4),c.Wb(9,"form",5),c.Wb(10,"div",6),c.ec("cdkDropListDropped",(function(e){return t.drop(e)})),c.Cc(11,_,26,5,"div",7),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(12,"button",8),c.ec("click",(function(){return t.saveOrder()})),c.Wb(13,"mat-icon"),c.Ec(14,"save"),c.Vb(),c.Ec(15," Save Order "),c.Vb(),c.Vb()),2&e&&(c.Eb(9),c.nc("formGroup",t.form),c.Eb(2),c.nc("ngForOf",t.form.get("items").controls))},directives:[u.c,u.b,d.a,s.c,m.a,y.s,y.n,y.g,v.d,i.k,y.c,v.a,R.a,v.c,w.c,v.b,w.d,w.a,x.a,y.h,i.l,k.b,k.e,D.b,y.b,y.m,y.f,W.a],styles:[".modalContainer[_ngcontent-%COMP%]{height:100%;overflow-y:hidden}.example-form[_ngcontent-%COMP%]{width:100%;overflow-y:auto}.full-width[_ngcontent-%COMP%]{width:100%}.header-bar[_ngcontent-%COMP%]{margin-bottom:15px;width:100%}.main[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:auto}.example-list[_ngcontent-%COMP%]{border:1px solid #ccc;min-height:60px;display:block;background:#fff;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;width:100%}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.drag-placeholder[_ngcontent-%COMP%], .example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.drag-placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:60px}.dragable[_ngcontent-%COMP%]{cursor:move}  .mat-card{padding:0!important;width:100%}"]}),P),T=n("H0K4"),A=n("FlRo");function S(e,t){if(1&e&&(c.Wb(0,"th",7),c.Ec(1),c.Vb()),2&e){var n=c.ic().$implicit;c.Eb(1),c.Gc(" ",n," ")}}function L(e,t){if(1&e&&c.Rb(0,"td",8),2&e){var n=t.$implicit,i=c.ic().$implicit;c.oc("innerHtml",n[i],c.wc)}}function z(e,t){1&e&&(c.Ub(0,4),c.Cc(1,S,2,1,"th",5),c.Cc(2,L,1,1,"td",6),c.Tb()),2&e&&c.nc("matColumnDef",t.$implicit)}function F(e,t){1&e&&c.Rb(0,"tr",9)}function N(e,t){1&e&&c.Rb(0,"tr",10)}var H,B,G,Q,U,j=((H=function(){function e(){_classCallCheck(this,e),this.columns=[],this.data=[]}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||H)},H.\u0275cmp=c.Kb({type:H,selectors:[["rms-grid"]],inputs:{columns:"columns",data:"data"},decls:4,vars:4,consts:[["mat-table","",1,"mat-elevation-z8",2,"width","100%",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"innerHtml",4,"matCellDef"],["mat-header-cell",""],["mat-cell","",3,"innerHtml"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(c.Wb(0,"table",0),c.Cc(1,z,3,1,"ng-container",1),c.Cc(2,F,1,0,"tr",2),c.Cc(3,N,1,0,"tr",3),c.Vb()),2&e&&(c.nc("dataSource",t.data),c.Eb(1),c.nc("ngForOf",t.columns),c.Eb(1),c.nc("matHeaderRowDef",t.columns),c.Eb(1),c.nc("matRowDefColumns",t.columns))},directives:[A.j,i.k,A.g,A.i,A.c,A.e,A.b,A.d,A.a,A.f,A.h],styles:[""]}),H),K=[{path:"",component:(B=function(){function e(t,n){_classCallCheck(this,e),this.store=t,this.dialog=n,this.gridColumns=["Priority","ID","RecordSystemGUIDE","Description","Rule"],this.gridData=[{Priority:"5",ID:"53",RecordSystemGUIDE:"guide://1234-1234",Description:"When text contains ELEMENT",Rule:"Conditions:<br><li>Content CONTAINS element</li>Actions:<br><li>Apply RCS-1"},{Priority:"4",ID:"43",RecordSystemGUIDE:"guide://1234-1234",Description:"When producer is amazon. This rule is applied",Rule:"Conditions:<br><li>Producer = amazon</li>Actions:<br><li>Apply RCS-13<li>Send To Email help@aws.com<li>Send To System Y"},{Priority:"3",ID:"101",RecordSystemGUIDE:"guide://1234-1234",Description:"When producer is google. This rule is applied",Rule:"Conditions:<br><li>Producer = google</li><li>CrateDate < 2020-01-01</li>Actions:<br><li>Apply RCS-74"},{Priority:"2",ID:"99",RecordSystemGUIDE:"guide://1234-1234",Description:"When conditions are met. Do things",Rule:"Conditions:<br><li>CreateDate > 2020-01-02</li>Actions:<br><li>Send To System Z"},{Priority:"1",ID:"1",RecordSystemGUIDE:"guide://1234-1234",Description:"These files fo not matter",Rule:'Conditions:<br><li>Title CONTAINS "Junk Mail"</li>Actions:<br><li>Drop'},{Priority:"DEFAULT",ID:"11",RecordSystemGUIDE:"guide://1234-1234",Description:"Default Rule for System X",Rule:"Actions:<li>Apply RCS 8"}]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}},{key:"createRule",value:function(){console.log("Creating new rule"),this.dialog.open(C,{id:"create-rule-modal",hasBackdrop:!1,minWidth:"90%",width:"90%",minHeight:"90%",height:"90%"}).afterClosed().subscribe((function(e){console.log("New Rule Closed")}))}},{key:"orderRules",value:function(){console.log("Ordering rules"),this.dialog.open(M,{id:"order-rules-modal",hasBackdrop:!1,minWidth:"50%",width:"50%",minHeight:"90%",height:"90%"}).afterClosed().subscribe((function(e){console.log("New Rule Closed")}))}},{key:"testRules",value:function(){console.log("Testing rules")}}]),e}(),B.\u0275fac=function(e){return new(e||B)(c.Qb(r.i),c.Qb(s.a))},B.\u0275cmp=c.Kb({type:B,selectors:[["rules-engine-home"]],decls:16,vars:2,consts:[[1,"main"],["fxFlex","1 1 auto"],[1,"search"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","1"],[3,"columns","data"],["mat-raised-button","","color","accent",1,"button",3,"click"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div"),c.Rb(2,"span",1),c.Wb(3,"mat-form-field",2),c.Wb(4,"mat-label"),c.Ec(5,"Search"),c.Vb(),c.Rb(6,"textarea",3),c.Vb(),c.Rb(7,"span",1),c.Vb(),c.Rb(8,"rms-grid",4),c.Rb(9,"br"),c.Wb(10,"button",5),c.ec("click",(function(){return t.createRule()})),c.Ec(11,"Create Rule"),c.Vb(),c.Wb(12,"button",5),c.ec("click",(function(){return t.orderRules()})),c.Ec(13,"Set Priority"),c.Vb(),c.Wb(14,"button",5),c.ec("click",(function(){return t.testRules()})),c.Ec(15,"Test Rules"),c.Vb(),c.Vb()),2&e&&(c.Eb(8),c.nc("columns",t.gridColumns)("data",t.gridData))},directives:[u.a,k.b,k.e,D.b,T.b,j,d.a],styles:[".main[_ngcontent-%COMP%]{margin:25px}.button[_ngcontent-%COMP%]{margin-right:25px}.search[_ngcontent-%COMP%]{width:40%;margin-bottom:10px}"]}),B)}],X=((G=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:G}),G.\u0275inj=c.Nb({factory:function(e){return new(e||G)},imports:[[o.b.forChild(K)],o.b]}),G),q=n("LTOS"),J=((U=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:U}),U.\u0275inj=c.Nb({factory:function(e){return new(e||U)},imports:[[i.c,q.c]]}),U),$=((Q=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:Q}),Q.\u0275inj=c.Nb({factory:function(e){return new(e||Q)},imports:[[i.c,q.c,X,J]]}),Q)}}]);