YUI.add("aui-layout-builder-add-row",function(e,t){function c(){}var n=e.getClassName("layout","builder","add","row"),r=e.getClassName("layout","builder","add","row","area"),i=e.getClassName("layout","builder","add","row","small","screen"),s=e.getClassName("layout","builder","add","row","small","screen","area"),o=e.getClassName("layout","builder","add","row","area","fixed"),u=e.getClassName("layout","builder","add","row","choose","row"),a='<div class="'+[r,o].join(" ")+'"></div>',f='<div class="'+u+" "+n+'">{addRow}</div>',l='<div class="'+[n,s].join(" ")+'"><div class="'+i+'"></div><div>{addRow}</div></div>';c.prototype={addRowArea:null,_bodyNode:null,initializer:function(){this.addRowArea=this._createAddRowArea(),this._addRowAreaForSmallScreens=this._createAddRowAreaForSmallScreens(),this._bodyNode=e.one("body"),this._eventHandles.push(this.after("enableAddRowsChange",this._afterEnableAddRowsChange)),this._uiSetEnableAddRows(this.get("enableAddRows"))},destructor:function(){this._unbindAddRowEvents()},_addAppropriateAddRowArea:function(){var e=this.get("container");this.get("layout").get("isColumnMode")?(this._addRowAreaForSmallScreens.remove(),e.append(this.addRowArea)):(this.addRowArea.remove(),e.append(this._addRowAreaForSmallScreens))},_addRow:function(t){var n=t.getData("numberOfCols");this.get("layout").addRowWithSpecifiedColNumber(n),window.scrollTo(0,e.DOM.region(this._layoutContainer._node).bottom)},_afterAddRowRowsChange:function(){this._setAddRowAreaPosition()},_afterAddRowWindowResize:function(){this._setAddRowAreaPosition()},_afterAddRowIsColumnModeChange:function(){this._addAppropriateAddRowArea(),this._setAddRowAreaPosition()},_afterEnableAddRowsChange:function(){this._uiSetEnableAddRows(this.get("enableAddRows"))},_bindAddRowEvents:function(){var t=this,r=this.get("container");this._bodyNode.plug(e.Plugin.ScrollInfo),this._bodyNode.scrollInfo.on("scroll",function(){t._setAddRowAreaPosition()}),this._addRowsEventHandles=[r.delegate("click",e.bind(this._onMouseClickAddRowEvent,this),"."+n),r.delegate("key",e.bind(this._onKeyPressAddRowEvent,this),"press:13","."+n),this.after("layout:rowsChange",e.bind(this._afterAddRowRowsChange,this)),this.after("layout:isColumnModeChange",e.bind(this._afterAddRowIsColumnModeChange,this)),e.on("windowresize",e.bind(this._afterAddRowWindowResize,this))]},_createAddRowArea:function(){var t=e.Node.create(a),n;return n=e.Node.create(e.Lang.sub(f,{addRow:this.get("strings").addRow})),n.setData("numberOfCols",1),t.append(n),t},_createAddRowAreaForSmallScreens:function(){var t=e.Node.create(e.Lang.sub(l,{addRow:this.get("strings").addRow}));return t.setData("numberOfCols",1),t},_onKeyPressAddRowEvent:function(e){this._addRow(e.target)},_onMouseClickAddRowEvent:function(e){this._addRow(e.target),this._setAddRowAreaPosition()},_removeAddRowTemplate:function(){this.addRowArea.remove(),this._addRowAreaForSmallScreens.remove()},_setAddRowAreaPosition:function(){var e,t=this._bodyNode.scrollInfo.getScrollInfo().scrollBottom,n=this._layoutContainer.get("region").bottom;this.addRowArea.get("parentNode")?e=this.addRowArea:e=this._addRowAreaForSmallScreens,t<n?e.addClass(o):t>=n&&e.hasClass(o)&&(e.removeClass(o),window.scrollBy(0,e.get("region").height))},_uiSetEnableAddRows:function(e){e?(this._addAppropriateAddRowArea(),this._bindAddRowEvents(),this._setAddRowAreaPosition()):(this._removeAddRowTemplate(),this._unbindAddRowEvents())},_unbindAddRowEvents:function(){this._bodyNode.unplug(e.Plugin.ScrollInfo),this._addRowsEventHandles&&(new e.EventHandle(this._addRowsEventHandles)).detach()}},c.ATTRS={enableAddRows:{validator:e.Lang.isBoolean,value:!0}},e.LayoutBuilderAddRow=c},"3.0.3-deprecated.34",{requires:["aui-node-base","base-build","node-scroll-info"],skinnable:!0});