
if(process.env.NODE_ENV === 'production')
{
  //we r in production-return prod keys
   module.exports=require('./prod');
}
else
{
   // we r in dev- return dev keys
   module.exports=require('./dev');
}