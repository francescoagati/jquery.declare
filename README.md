A library for scope declaration like activerecord 3.

It can be used for declare scopes and behaviors that can be attached to dom object.

Some examples:

append style css to dom objects

```
    $.fn.declare.add({
      'set.color': function(color) {
        return this.css({
          'color': color
        });
      },
      'set.bgcolor': function(color) {
        return this.css({
          'background-color': color
        });
      }
    });
    
    $("div.title").declare('set.color', 'yellow').declare('set.bgcolor', 'red');
```

append events e style to table

```
  $.fn.declare.add({
    'row.alternate': function(opt) {
      this.find("tr.odd")
      .css("background-color",opt.odd_color)
      .end()
      .find("tr.even")
      .css("background-color",opt.even_color);
    }
  });
  
  $.fn.declare.add({       
    'row.hover':function(color_hover) {
      this.hover(
        function() {
          var that=$(this);
          that.data("old-bg",that.css("background-color"));
          that.css("background-color",color_hover);
        },
        function() {
          var that=$(this);
          that.css("background-color", that.data("old-bg"));
        }  
      )
    }
  });
  
   $("table")
    .declare('row.alternate',{
      odd_color:'#ff0000',
      even_color:'#00ff00'
    })
    .find("tr")
    .declare("row.hover","#0000ff");
```  