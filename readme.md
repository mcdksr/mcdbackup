**Öncelikle Merhaba Backup Sistemi Şöyle Çalışır**

//create web server and listen 5500 port , backup system 1st attemp , If this doesn't work we will use the other ready

web.createServer(function(req,res){
  setInterval(() => mcdbackup(), 1000 * 60 * 60 * 12); 
  res.write('online')
  res.end

}).listen(5500);

//2st attemp ready



client.on('ready', () => {
  setInterval(() => backup(), 1000 * 60 * 60 * 12); 
}); 


**bu 2 yol ile çalışmaktadır**

**http ve fs modülüne ihtiyaç duyacaksınız**
