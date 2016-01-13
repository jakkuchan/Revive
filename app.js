(function(){
    var app=angular.module('store',[]);
    
    app.controller('StoreController',function() {
        this.product = gem;
    });
    
    var gem = {
        name: 'Dode',
        price: 2.95,
        description: '10 sides',
    }
})();