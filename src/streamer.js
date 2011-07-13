/*global Backbone: true, io: true, JSON:true */
"use strict";
//streaming backbone collection. Preconditions: socket.io should be included.
Backbone.StreamingCollection=Backbone.Collection.extend({

    //initialize all channels for collection
    initialize:function(){
        var self=this,
            channel=io.connect(this.url);
        //new model should be added
        channel.on('added',function(data){
            var modelInstance=new self.model(JSON.parse(data));
            self.add(modelInstance);
        });
        //model should be removed
        channel.on('removed',function(id){
            var modelToRemove=self.get(id);
            if(modelToRemove){
                self.remove([modelToRemove]);
            }
        });
        //model should be updated
        channel.on('updated',function(data){
            var attributes=JSON.parse(data),
                modelToUpdate=self.get(id);
            if(modelToUpdate){
                modelToUpdate.set(data);
            }
        });
        channel.on('reset',function(data){
            var models=JSON.parse(data);
            self.reset(models);
        });
    }
});