const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
console.log('╚[════════════════════════════════════]╝')
  console.log("BOT ONLINE");
 });
 
 
client.on('ready', () => {
    client.user.setActivity("Legendary Shop..",{type: 'WATCHING'})

});
 
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
╔[❖════════════════════════❖]╗

السلام عليكم ورحمة الله وبركاته

اهلا وسهلا بك في سيرفر
..::Welcome To Legendary::..
... شكرا لدخولك السيرفر ...
╚[❖════════════════════════❖]╝
`) 
}).catch(console.error)
})


const invites = {};

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const alp = invites[member.guild.id];
    const inviter = client.users.get(invite.inviter.id);
    if (msg.guild.channels.find('name', 'warns')) {
     msg.guild.channels.find('name', 'warns').send(`
	 
	 <@${member.user.id}> 
	 اهلا وسهلا بك في السيرفر
	 
	 ${message.guild.memberCount} اصبح عدد السيرفر 
	 
	 by <@${inviter.id}>`);
  }); 
});




 
 
 client.on('message', message => {
if (message.content.startsWith('طلب')) {
    let pages = [' اهلا وسهلا بك يا عزيزي','طلبات التصميم','طلبات البوتات','طلبات الميوزك','طلبات النشر','الطلبات الأخرى','الطلبات الخاصة','شكرً جزيلا لكم']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
	.addField('     **=-=-=-=-=-=-=** ' ,'╔[❖══════════════════════❖]╗')
    .addField('     **=-=-=-=-=-=-=** ' ,'| A لخدمات التصميم إختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| B لخدمات البوتات إختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| C لخدمات الميوزك إختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| D لخدمات الــنشر إختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| E للخدمات الأخرى إخـتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| F للطلبات الخاصة إختر |')
	.addField('     **=-=-=-=-=-=-=** ' ,'╚[❖══════════════════════❖]╝')
    .setFooter(`By Abo Khalil`)
    .setTimestamp()
    message.channel.sendEmbed(embed).then(msg => {

        msg.react('🇦').then( r => {
            msg.react('🇧')
			msg.react('🇨')
			msg.react('🇩')
			msg.react('🇪')
			msg.react('🇫')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		const bokwardsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
		const bekwardsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
		const brkwardsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
		const bnkwardsFilter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
		const bokwards = msg.createReactionCollector(bokwardsFilter, { time: 20000});
		const bekwards = msg.createReactionCollector(bekwardsFilter, { time: 20000});
		const brkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		const bnkwards = msg.createReactionCollector(bnkwardsFilter, { time: 20000});
		
		
		
        bnkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
    message.channel.send("**اهلا وسهلا بكم في نظام التقديم , قم بكتابة نوع الطلب**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**الان , قم بكتابة تفاصيل الطلب**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**الآن قم بكتابة طريقة التواصل  **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('**.. يتم ارسال طلبك انتظر قليلاً**').then(b => {
        setTimeout(() => {
  b.edit(`**لقد تم ارسال طلبك .. **`)
        },10000);
var gg = message.guild.channels.find('name', 'الطلبات-الخاصة')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  نوع الطلب :question:  : \n ${lan}\nالتفاصيل :link: :\n ${md} \nطريقة التواصل :question: :\n ${br}  \nصاحب الطلب : <@${message.author.id}> **`)  
          .setFooter(`By Abo Khalil`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})

})

/*

*/
		
        brkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            message.channel.send(`**
 ╔[❖══════════════════════❖]╗
: : - خدمات اخرى , Other Services : 

 - تفعيل نيترو شهر | 30 ريال
 - تفعيل نيترو سنه | 200 ريال
 - حساب وهمي 20 | 30 ريال
 - تصميم خارج الدسكورد | السعر حسب الاتفاق
 ╚[❖══════════════════════❖]╝
**

By Abo Khalil
`);

message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")
message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")

    message.channel.send("**اهلا وسهلا بكم في نظام الطلبات الفرعية ,قم بكتابة نوع الطلب**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**الان , قم بكتابة تفاصيل الطلب**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**الآن قم بكتابة طريقة التواصل  **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('**.. يتم ارسال طلبك انتظر قليلاً**').then(b => {
        setTimeout(() => {
  b.edit(`**لقد تم ارسال طلبك .. **`)
        },10000);
var gg = message.guild.channels.find('name', 'الطلبات-الفرعية')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.addField('     **=-=-=-=-=-=-=** ' ,'|** نوع الطلب**|') 
.addField('     **=-=-=-=-=-=-=** ' ,` ${lan} `)
.addField('     **=-=-=-=-=-=-=** ' ,'| **التفاصيل **|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${md} `)
.addField('     **=-=-=-=-=-=-=** ' ,'|** طريقة التواصل**|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${br}`)
.addField('     **=-=-=-=-=-=-=** ' ,'|** صاحب الطلب ** |')
.addField('     **=-=-=-=-=-=-=** ' ,` <@${message.author.id}>  `)
 .setFooter(`By Abo Khalil`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})

})

  
		
        bekwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            message.channel.send(`**
╔[❖══════════════════════❖]╗
خدمات النشر 
- بوتات نشر
- دخول 1000 عضو 300 ريال
- دخول 800 عضو 250 ريال
- دخول 400 عضو 200 ريال 
- دخول 300 عضو 150 ريال
- دخول 200 عضو 100 ريال
- دخول 100 عضو 50 ريال
- بوت نشر عادي 20 ريال

اذا عندك ارقام لتوثيق حسابات بيكون سعر نفسه او اذا علينا الارقام راح يزداد السعر .

╚[❖══════════════════════❖]╝
**

By Abo Khalil
`);

message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")
message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")

    message.channel.send("**اهلا وسهلا بكم في نظام طلبات بوتات النشر, قم بكتابة نوع الطلب**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**الان , قم بكتابة تفاصيل الطلب**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**الآن قم بكتابة طريقة التواصل  **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('**.. يتم ارسال طلبك انتظر قليلاً**').then(b => {
        setTimeout(() => {
  b.edit(`**لقد تم ارسال طلبك .. **`)
        },10000);
var gg = message.guild.channels.find('name', 'طلبات-النشر')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.addField('     **=-=-=-=-=-=-=** ' ,'|** نوع الطلب**|') 
.addField('     **=-=-=-=-=-=-=** ' ,` ${lan} `)
.addField('     **=-=-=-=-=-=-=** ' ,'| **التفاصيل **|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${md} `)
.addField('     **=-=-=-=-=-=-=** ' ,'|** طريقة التواصل**|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${br}`)
.addField('     **=-=-=-=-=-=-=** ' ,'|** صاحب الطلب ** |')
.addField('     **=-=-=-=-=-=-=** ' ,` <@${message.author.id}>  `)
 .setFooter(`By Abo Khalil`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})

})

   
		
        bokwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
			message.channel.send(`**
╔[❖══════════════════════❖]╗
خدمات الميوزك , Music Services : 

- 8 بوتات ميوزك + بوت خاص للاونر | 30 ريال .
.بوتات ميوزك 10 | 40 ريال 
- بوت ميوزك للادمن |  10 ريال .
 - بوت خاص |  10 ريال .
- بوت القران | 10 ريال .
- بوت الفعاليات | 25 ريال .
╚[❖══════════════════════❖]╝
**

By Abo Khalil
`);

message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")
message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")
    message.channel.send("**اهلا وسهلا بكم في نظام طلبات بوتات الميوزك, قم بكتابة نوع الطلب**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**الان , قم بكتابة تفاصيل الطلب**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**الآن قم بكتابة طريقة التواصل  **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('**.. يتم ارسال طلبك انتظر قليلاً**').then(b => {
        setTimeout(() => {
  b.edit(`**لقد تم ارسال طلبك .. **`)
        },10000);
var gg = message.guild.channels.find('name', 'طلبات-الميوزك')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.addField('     **=-=-=-=-=-=-=** ' ,'|** نوع الطلب**|') 
.addField('     **=-=-=-=-=-=-=** ' ,` ${lan} `)
.addField('     **=-=-=-=-=-=-=** ' ,'| **التفاصيل **|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${md} `)
.addField('     **=-=-=-=-=-=-=** ' ,'|** طريقة التواصل**|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${br}`)
.addField('     **=-=-=-=-=-=-=** ' ,'|** صاحب الطلب ** |')
.addField('     **=-=-=-=-=-=-=** ' ,` <@${message.author.id}>  `)
          .setFooter(`By Abo Khalil`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})

})




		backwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
			message.channel.send(`
╔[❖══════════════════════❖]╗
- خدمات التصاميم , ** : 

- صورة العرض | 10 ريال .
- صور البوتات لكل وحده | 5  ريال .
 - اعلان فعاليه | 20 ريال .
 - تصميم صور الترحيب بالاعضاء | 15 ريال .
 - تصميم الانفو بشكل كامل | 15 ريال . 
- تصميم صورة كت تويت |10 ريال .
- تصميم صورة ترحيب | 25 ريال

لطلب تصاميم سيرفر كامل 60 ريال

╚[❖══════════════════════❖]╝
**

By Abo Khalil
`);

message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")
message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")

    message.channel.send("**اهلا وسهلا بكم في نظام طلبات التصميم, قم بكتابة نوع الطلب**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**الان , قم بكتابة تفاصيل الطلب**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**الآن قم بكتابة طريقة التواصل  **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('**.. يتم ارسال طلبك انتظر قليلاً**').then(b => {
        setTimeout(() => {
  b.edit(`**لقد تم ارسال طلبك .. **`)
        },10000);
var gg = message.guild.channels.find('name', 'طلبات-التصميم')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.addField('     **=-=-=-=-=-=-=** ' ,'|** نوع الطلب**|') 
.addField('     **=-=-=-=-=-=-=** ' ,` ${lan} `)
.addField('     **=-=-=-=-=-=-=** ' ,'| **التفاصيل **|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${md} `)
.addField('     **=-=-=-=-=-=-=** ' ,'|** طريقة التواصل**|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${br}`)
.addField('     **=-=-=-=-=-=-=** ' ,'|** صاحب الطلب ** |')
.addField('     **=-=-=-=-=-=-=** ' ,` <@${message.author.id}>  `)
          .setFooter(`By Abo Khalil`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})

})  
	
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
			message.channel.send(`**
╔[❖══════════════════════❖]╗
خدمات البوتات , Bots Services : 
- بوت بروفايل | 20 ريال .
- بوت رابط ، متغير كل 24 ساعه |  5 ريال .
- بوت ادمن ، يشمل مانع الجحفله | 30 ريال .
- بوت ترحيب ، مع عدد الايام وتم دعوتك  | 10 ريال .
 - بوت كاشف النشر | 30 ريال .
 - بوت العاب ، يشمل 6 العاب | 25 ريال .
- بوت بي سي ، يشمل للادمن | 20 ريال .
- بوت دعم بافضل الخصائص | 25 ريال .
- اشتراك برو بوت شهر | 20 ريال .
- اشتراك برو بوت ثلاث اشهر | 60 ريال .
╚[❖══════════════════════❖]╝
**

By Abo Khalil
`);

message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")
message.channel.send("**=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**")

    message.channel.send("**اهلا وسهلا بكم في نظام طلبات البوتات, قم بكتابة نوع الطلب**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**الان , قم بكتابة تفاصيل الطلب**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**الآن قم بكتابة طريقة التواصل  **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('**.. يتم ارسال طلبك انتظر قليلاً**').then(b => {
        setTimeout(() => {
  b.edit(`..**لقد تم ارسال طلبك**`)
        },10000);
var gg = message.guild.channels.find('name', 'طلبات-البوتات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.addField('     **=-=-=-=-=-=-=** ' ,'|** نوع الطلب**|') 
.addField('     **=-=-=-=-=-=-=** ' ,` ${lan} `)
.addField('     **=-=-=-=-=-=-=** ' ,'| **التفاصيل **|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${md} `)
.addField('     **=-=-=-=-=-=-=** ' ,'|** طريقة التواصل**|')
.addField('     **=-=-=-=-=-=-=** ' ,` ${br}`)
.addField('     **=-=-=-=-=-=-=** ' ,'|** صاحب الطلب ** |')
.addField('     **=-=-=-=-=-=-=** ' ,` <@${message.author.id}>  `)
          .setFooter(`By Abo Khalil`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})

})  

			msg.edit(embed)
        })
        })
    }
});

client.login(process.env.BOT_TOKEN);
