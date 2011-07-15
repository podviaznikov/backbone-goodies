/**(c) 2011 Enginimation Studio (http://enginimation.com). May be freely distributed under the MIT license.*/
/*global Backbone: true,$:true */
Backbone.View.prototype.hide=function(){
    this.$(this.el).hide();
    return this;
};
Backbone.View.prototype.show=function(){
    this.$(this.el).show();
    return this;
};
Backbone.View.prototype.html=function(html){
    this.$(this.el).html(html);
    return this;
};
Backbone.View.prototype.initialize=function(){
    _.bindAll(this,'render','renderTpl');
    if(this.tplId){
        this.tpl=$('#'+this.tplId).html();
    }
};
Backbone.View.prototype.tplId='';
Backbone.View.prototype.render=function(){
    this.renderTpl();
    return this;
};
Backbone.View.prototype.renderTpl=function(model){
    var modelToRender=model || this.model.toJSON();
    if(this.tpl && modelToRender){
        var html=_.template(this.tpl,modelToRender);
        this.html(html);
    }
    return this;
};
Backbone.ModelView=Backbone.View.extend({
    initialize:function(){
        Backbone.View.prototype.initialize.apply(this,arguments);
        this.model.view=this;
    }
});