#
#  an example of named scope like in activerecord
#  implemented for jquery
#
#

do ->
  scopes_cache={}
  fn= (scope,args...) -> 
    scopes_cache[scope].apply(this,args)
    return @
  fn.add= (scopes) -> scopes_cache[scope]=fn for scope,fn of    scopes
  fn.remove= (scope) -> delete scopes_cache[scope]

  jQuery.fn.declare=fn