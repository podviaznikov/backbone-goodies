/**(c) 2011 Enginimation Studio (http://enginimation.com). May be freely distributed under the MIT license.*/
/*global Backbone: true,$:true */
Backbone.BasicView=Backbone.View.extend({
    hide:function(){
        this.$(this.el).hide();
        return this;
    },
    show:function(){
        this.$(this.el).show();
        return this;
    },
    html:function(html){
        this.$(this.el).html(html);
        return this;
    }
});
Backbone.ModelView=Backbone.View.extend({
    tplId:'',
    initialize:function(){
        _.bindAll(this,'render','renderTpl');
        if(this.tplId){
            this.tpl=$('#'+this.tplId).html();
        }
    },
    render=function(){
        this.renderTpl();
        return this;
    },
    renderTpl:function(model){
        var modelToRender=model || this.model.toJSON();
        if(this.tpl && modelToRender){
            var html=_.template(this.tpl,modelToRender);
            this.html(html);
        }
        return this;
    }
});