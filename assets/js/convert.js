
function DataBinder(object_id) {

    var pubSub = $({});
  

    var data_attr = "bind-" + object_id,
                      message = object_id + ":change";
  

    $(document).on("keyup", "[data-" + data_attr + "]", function(e) {
      var $input = $(this);
      pubSub.trigger(message, [$input.data(data_attr), $input.val()]);
    });
  

    pubSub.on(message, function(e, prop_name, new_val) {
      $("[data-" + data_attr + "=" + prop_name + "1" +"]").each(function() {
        new_val = commaToValue(new_val);
        var $bound = $(this);
        if ($bound.is("input,textarea,select")) {
            if(new_val*10 >= 300000000){
                $bound.val((300000000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join("")); 
            }else{
                $bound.val((new_val*10).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join("")); 
            }
        } else {
          $bound.html(new_val*10);
           if(new_val*10 >= 300000000){
            $bound.html((300000000).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join(""));
            }else{
                $bound.html((new_val*10).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}).split('VND').join(""));
            }
        }
      });
    });
    return pubSub;
    
  }
  

  function User(uid) {
    var binder = new DataBinder(uid);
  
    var user = {
      attritutes: {},

      set: function(attr_name, val) {
        this.attritutes[attr_name] = val;
        binder.trigger(uid + ":change", [attr_name, val, this]);
      },
  
      get: function(attr_name) {
        return this.attritutes[attr_name];
      },
  
      _binder: binder
    };
  
    binder.on(uid + ":change", function(e, attr_name, new_val, initiator) {
      if (initiator !== user) {
        user.set(attr_name, new_val);
      }
    });
    return user;
  }
  var user = new User('cj');
// data-bind-cj="name"
// data-bind-cj="name"


function commaToValue(cmVal){
    return  cmVal.split('.').join("");
}




