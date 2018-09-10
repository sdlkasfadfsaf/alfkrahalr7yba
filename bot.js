const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});
 
 
 
 //  =-=-=-=-=-=- .::[ General help System - By Abokhalil ]::. =-=-=-=-=-=-
		client.on('message', message => {
		if (message.content.startsWith(prefix + 'help3')) {
	    let rank = message.guild.member(message.author).roles.find('name', '✻-Support,');
        if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت  لأستخدام هذا الأمر.**');
		
            message.channel.send('**لقد تم ارسال رسالة المساعدة في الرسائل الخاصة**');

            let embed = new Discord.RichEmbed()
			.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
			.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| أوامر السبورت |')
			.addField("-share", "**لنشر الأكواد بروم الأكواد**, **__Fot Support__**")
			.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| أوامر المشرفين |')
            .addField("-ban", "**لحظر الأعضاء المخالفين**, **__Example: #ban @mention__**")
            .addField("-unban", "لفك الحظر عن الأعضاء بالإيدي**, **__Example: #unban id__**")
            .addField("-kick", "**لطرد الأعضاء المخالفين**, **__Example: #kick @mention__**")
            .addField("-mute", "**لإعطاء ميوت كتابي للأعضاء المخالفين**, **__Example: #mute @mention__**")
            .addField("-unmute", "**لفك الميوت الكتابي عن الأعضاء **, **__Example: #unmute @mention__**")
            .addField("-muteall", "**لإغلاق الشات الكتابي**, **__Example: #muteall__**")
            .addField("-unmuteall", "**لفتح الشات الكتابي**, **__Example: #unmuteall__**")
            .addField("-mutevoice", "**لإغلاق الروم الصوتي**, **__Example: #mutevoice @mention__**")
            .addField("-unmutevoice", "**Unmute A mentioned user**, **__Example: #unmutevoice @mention__**") 
			.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╚[❖═════════════════════❖]╝')
            .setColor('RANDOM')
            .setFooter(`Alpha Codes`)
            .setTimestamp()
        
        
            message.author.sendEmbed(embed)
    }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help`) {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
  .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| -help1  لقائمة الأكـــــواد |')
  .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| -help2 لقائمة الأوامر العامة  |')
  .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'| -help3 لقائمة اوامر الإدارة والسبورت |')
  .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╚[❖═════════════════════❖]╝')
  .setFooter(`By Abo Khalil | Alpha Codes`)
  .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});
	
	
	
client.on('message', message => {
if (message.content.startsWith(prefix + 'help1')) {
	
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
	.addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
    .addField('-help-js لقائمة أكواد الجافا سكربت ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('-help-py لقائمة أكواد البايثون ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('-help-eris C لقائمة اكواد الإرس ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField('-help-io لقائمة أكواد الآي او ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
    .addField('-help-lua لقائمة أكواد لوا' ,'**=-=-=-=-=-=-=-=-=-=-=**')
	.addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
    .setFooter(`By Abo Khalil`)
    .setTimestamp()

    message.channel.sendEmbed(embed)
}
	});
	 


 
//  =-=-=-=-=-=- .::[ Sharing Codes System - By Abokhalil ]::. =-=-=-=-=-=-

client.on('message', message => {
    if(message.content.startsWith(prefix + "share")) {
		
		
		
	    let rank = message.guild.member(message.author).roles.find('name', '✻-Support,');
        if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت  لأستخدام هذا الأمر.**');
		
		message.channel.send('**:x: لا يمكن استعمال هذا الامر الا في روم نشر الاكواد**');
		if(message.channel.id !== '487150378241228802') return; // ايدي روم نشر الاكواد :)
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ share system ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لنشر الأكواد بلغة الجافا سكربت**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لنشر الأكواد بلغة البايثون**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C لنشر الأكواد بلغة الآي أو **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- D لنشر الأكواد بلغة الإرس **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
		.addField('**- E لنشر الثيمات في بيتر ديسكورد **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha codes`)
        .setTimestamp()
        message.channel.sendEmbed(embed).then(msg => {
    
            msg.react('🇦').then( r => {
                msg.react('🇧')
                msg.react('🇨')
                msg.react('🇩')
				msg.react('🇪')

            let sharejsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let sharepyFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let shareioFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
            let shareerisFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
			let sharebeterFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
    
    
            let sharejs = msg.createReactionCollector(sharejsFilter, { time: 20000});
            let sharepy = msg.createReactionCollector(sharepyFilter, { time: 20000});
            let shareio = msg.createReactionCollector(shareioFilter, { time: 20000});
            let shareeris = msg.createReactionCollector(shareerisFilter, { time: 20000});
			let sharebeter = msg.createReactionCollector(sharebeterFilter, { time: 20000});
		
		
        sharebeter.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    let beterdi = message.guild.channels.find(`name`, "✻-themes");
    if(!beterdi) return message.channel.send("❌لم اجد الروم الخاص بنشر الثيمات");
	message.channel.send('📝 **| من فضلك قم بوضع رابط الثيم الآن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك قم بكتابة وصف الثيم... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الثيم... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر الثيم في روم الثيمات**`)
        },5000);
var beterdi = message.guild.channels.find('name', '✻-themes')
if(!beterdi) return;
if(beterdi) {
beterdi.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الثيم**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الثيم**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})

		
        sharejs.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    let jscodes = message.guild.channels.find(`name`, "✻-discord-js");
    if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
var jscodes = message.guild.channels.find('name', '✻-discord-js')
if(!jscodes) return;
if(jscodes) {
jscodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})

 
          shareeris.on('collect', r => {
			  msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    var eriscodes = message.guild.channels.find(`name`, "✻-discord-eris");
    if(!eriscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
var eriscodes = message.guild.channels.find('name', '✻-discord-eris')
if(!eriscodes) return;
if(eriscodes) {
eriscodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})


         shareio.on('collect', r => {
			 msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    var iocodes = message.guild.channels.find(`name`, "✻-discord-io");
    if(!iocodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()

 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
var iocodes = message.guild.channels.find('name', '✻-discord-io')
if(!iocodes) return;
if(iocodes) {
iocodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})


   
        sharepy.on('collect', r => {
			msg.delete()
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
    var pycodes = message.guild.channels.find(`name`, "✻-discord-py");
    if(!pycodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");
	message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {

     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
      .then(collected => {
        collected.first().delete();
		thisMessage = collected.first().content;
		boi = collected.first().content;
		let boi2;
     msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
        .then(collected => {
        collected.first().delete();
        boi = collected.first().content;
		let boi2;
	msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {
     message.channel.awaitMessages(filter, { max: 1, time: 90000, errors: ['time'] })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
				msg.delete()
 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
		

var pycodes = message.guild.channels.find('name', '✻-discord-py')
if(!pycodes) return;
if(pycodes) {
pycodes.send(`@everyone | @here
**AlphaCodes© <:js:482928068198137857>**
\`\`\`js
${thisMessage}\`\`\`
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}
`)
}        
})
})
})
})
})
})
})

})


        })
        })

    }
});

// ✅



//  =-=-=-=-=-=- .::[ Take Codes System - abokhalil ]::. =-=-=-=-=-=-


client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help-js`) {
		message.delete()
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ java script ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لقائمة السورس الأساسي**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لقائمة الأكواد الإدارية**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C لقائمة الأكـواد العامة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- D لقائمة أكواد الترحيب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- E لقائمة أكواد الهيــب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- F لقائمة أكواد البرودكاست **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- G لقائمة أكواد الألعاب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- H لقائمة الأكواد المنوعه **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- I للعودة القائمة السابقة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
    
        message.channel.sendEmbed(embed).then(msg => {
    
            msg.react('🇦').then( r => {
                msg.react('🇧')
                msg.react('🇨')
                msg.react('🇩')
                msg.react('🇪')
                msg.react('🇫')
                msg.react('🇬')
                msg.react('🇭')
                msg.react('🇮')
    
                
                    // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳
    
            let sourcejsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let adminjsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let generaljsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
            let welcomejsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
            let helpjsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
            let bcjsFilter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;
            let gamejsFilter = (reaction, user) => reaction.emoji.name === '🇬' && user.id === message.author.id;
            let mexjsFilter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id;
            let backjsjsFilter = (reaction, user) => reaction.emoji.name === '🇮' && user.id === message.author.id;
    
    
            let sourcejs = msg.createReactionCollector(sourcejsFilter, { time: 20000});
            let adminjs = msg.createReactionCollector(adminjsFilter, { time: 20000});
            let generaljs = msg.createReactionCollector(generaljsFilter, { time: 20000});
            let welcomejs = msg.createReactionCollector(welcomejsFilter, { time: 20000});
            let helpjs = msg.createReactionCollector(helpjsFilter, { time: 20000});
            let bcjs = msg.createReactionCollector(bcjsFilter, { time: 20000});
            let gamejs = msg.createReactionCollector(gamejsFilter, { time: 20000});
            let mexjs = msg.createReactionCollector(mexjsFilter, { time: 20000});
            let backjs = msg.createReactionCollector(backjsjsFilter, { time: 20000});
            
              
              backjs.on('collect', r => {	
			   msg.delete()
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js لقائمة أكواد الجافا سكربت ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-py لقائمة أكواد البايثون ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-eris C لقائمة اكواد الإرس ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-io لقائمة أكواد الآي او ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-lua لقائمة أكواد لوا' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })   
            
            
               mexjs.on('collect', r => {
					msg.delete()
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-mex1 لعرض قائمة الأكواد المنوعه بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-mex2 لعرض قائمة الأكواد المنوعه مع رياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })   
         
            
              gamejs.on('collect', r => {
 					msg.delete()   
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-game1 لعرض قائمة أكواد الألعاب بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-game2 لعرض قائمة أكواد الألعاب مع رياكشن			' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })   
         
            
               bcjs.on('collect', r => {
 					msg.delete()   
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-bc1 لعرض قائمة أكواد البرودكاست بالطريقة التقلدية' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-bc2 لعرض قائمة أكواد البرودكاست بالرياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })   
            
               helpjs.on('collect', r => {
					msg.delete()    
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-help1 لعرض قائمة اكواد الهيلب بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-help2 لعرض قائمة اكواد الهيلب بالرياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })      
            
               generaljs.on('collect', r => {
  					msg.delete()  
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-general1 لعرض قائمة الكودات العامة بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-general2 لعرض قائمة الكودات العامة بالرياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })    
    
            sourcejs.on('collect', r => {
 					msg.delete()   
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-source1 لعرض قائمة السورس بالطريقة التقليدية' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-source2 لعرض القائمة السورس بالرياكشن' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })    
        
             adminjs.on('collect', r => {
      					msg.delete()           
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-admin1 لعرض قائمة كودات المشرفين بالطريقة التقلدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-admin2 لعرض القائمة كودات المشرفين مع رياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)  
    
             })
        
    })	
         
        });
    }
});    

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}help-js-admin`) {
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-admin1 لعرض قائمة كودات المشرفين بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-admin2 لعرض القائمة كودات المشرفين مع رياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});
	
client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];
	
	if (command === `${prefix}help-js-source`) {
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-source1 لعرض قائمة السورس بالطريقة التقليدية' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-source2 لعرض القائمة السورس بالرياكشن' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}help-js-help`) {
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-help1 لعرض قائمة اكواد الهيلب بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-help2 لعرض قائمة اكواد الهيلب بالرياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}help-js-general`) {
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-general1 لعرض قائمة الكودات العامة بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-general2 لعرض قائمة الكودات العامة بالرياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];
	
	if (command === `${prefix}help-js-bc`) {
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-bc1 لعرض قائمة أكواد البرودكاست بالطريقة التقلدية' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-bc2 لعرض قائمة أكواد البرودكاست بالرياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
      message.channel.sendEmbed(embed)
	}
});
	
	
client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];
	
	if (command === `${prefix}help-js-game`) {
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-game1 لعرض قائمة أكواد الألعاب بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-game2 لعرض قائمة أكواد الألعاب مع رياكشن			' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});
	
client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];
	
	if (command === `${prefix}help-js-mex`) {
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('-help-js-mex1 لعرض قائمة الأكواد المنوعه بالطريقة التقليدية ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-help-js-mex2 لعرض قائمة الأكواد المنوعه مع رياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('-                              - ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});
//  =-=-=-=-=-=- .::[ Take Codes System "Source Zone" - abokhalil ]::. =-=-=-=-=-=-

client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help-js-source2`) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ source-js ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A ping لكود السورس الأساسي مع كود **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لكود السورس الأساسي مع ستريمنق**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C لكود السورس الأساسي مع البلاينق**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- D لكود السورس مع كود بينق المطور**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- E كود السورس الأساسي المطور مع معلومات البوت**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- F لكود السورس مع الواتشيتق**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- G لكود السورس الأساسي مع بينق وبكج الفا**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- H للعودة القائمة السابقة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
    
        message.channel.sendEmbed(embed).then(msg => {
    
            msg.react('🇦').then( r => {
				msg.react('🇧')
				msg.react('🇨')
				msg.react('🇩')
				msg.react('🇪')
				msg.react('🇫')
				msg.react('🇬')
				msg.react('🇭')
                
                    // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳
    
            let sourcejs1Filter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let sourcejs2Filter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let sourcejs3Filter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
            let sourcejs4Filter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
            let sourcejs5Filter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
            let sourcejs6Filter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;
            let sourcejs7Filter = (reaction, user) => reaction.emoji.name === '🇬' && user.id === message.author.id;
            let sourcejs8Filter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id;
 //           let sourcejs9Filter = (reaction, user) => reaction.emoji.name === '🇮' && user.id === message.author.id;
    
    
            let sourcejs1 = msg.createReactionCollector(sourcejs1Filter, { time: 20000});
            let sourcejs2 = msg.createReactionCollector(sourcejs2Filter, { time: 20000});
            let sourcejs3 = msg.createReactionCollector(sourcejs3Filter, { time: 20000});
            let sourcejs4 = msg.createReactionCollector(sourcejs4Filter, { time: 20000});
            let sourcejs5 = msg.createReactionCollector(sourcejs5Filter, { time: 20000});
            let sourcejs6 = msg.createReactionCollector(sourcejs6Filter, { time: 20000});
            let sourcejs7 = msg.createReactionCollector(sourcejs7Filter, { time: 20000});
            let sourcejs8 = msg.createReactionCollector(sourcejs8Filter, { time: 20000});
//            let sourcejs9 = msg.createReactionCollector(sourcejs9Filter, { time: 20000});
            
              
              sourcejs1.on('collect', r => {	
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-=-:: [  كود السورس الاساسي مع البينق العادي ] ::-=-= ' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/utozasivog.js' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
            
               sourcejs2.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع خاصية الستريمنق ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/fiqakedifi.js' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
              sourcejs3.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع خاصية البلاينق ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ovotacufad.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
               sourcejs4.on('collect', r => {
 					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع البنق المطور ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ikenihohif.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
               sourcejs5.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')					
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي المطور مع معلومات البوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/iqimilaqop.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })      
            
               sourcejs6.on('collect', r => {
  					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع خاصية الواتشينق ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ozivolebop.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })    
    

        
             sourcejs7.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي المطور مع بكج الفا ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/vazahapiqe.js' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
             })
			 
	    sourcejs8.on('collect', r => {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ java script ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**-help-js-source لقائمة السورس الأساسي**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-admin  لقائمة الأكواد الإدارية**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-general لقائمة الأكـواد العامة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-welcome لقائمة أكواد الترحيب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-help  لقائمة أكواد الهيــب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-bc  لقائمة أكواد البرودكاست **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-game لقائمة أكواد الألعاب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-mex لقائمة الأكواد المنوعه **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('-                                   -' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })    
	/*		 
			 sourcejs9.on('collect', r => {
      					msg.delete()           
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-=-=-=-=-=-=-=-=-=** ' ,'╔[❖═════════════════════❖]╗')
                .addField('#help-js-admin1 لعرض قائمة كودات المشرفين ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('#help-js-admin2 لعرض القائمة كودات المشرفين مع رياكشن ' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.channel.sendEmbed(embed)  
    
             })
 */       
    })	
         
        });
    }
});    

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js-source1`) {
  let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ source-js ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**-source-js1 ping لكود السورس الأساسي مع كود **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-source-js2 لكود السورس الأساسي مع ستريمنق**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-source-js3 لكود السورس الأساسي مع البلاينق**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-source-js4 لكود السورس مع كود بينق المطور**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-source-js5 كود السورس الأساسي المطور مع معلومات البوت**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-source-js6 لكود السورس مع الواتشيتق**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-source-js7 لكود السورس الأساسي مع بينق وبكج الفا**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
  .setFooter(`Alpha Codes`)
  .setTimestamp()
      message.channel.sendEmbed(embed)
      }
});
	
	
client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}source-js1`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-=-:: [ كود السورس الاساسي مع البينق العادي ] ::-=-= ' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/utozasivog.js' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});
	
	
client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}source-js2`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع خاصية الستريمنق ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/fiqakedifi.js' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});
	
client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}source-js3`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع خاصية البلاينق ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ovotacufad.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}source-j4`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع البنق المطور ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ikenihohif.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}source-js5`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي المطور مع معلومات البوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/iqimilaqop.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}source-js6`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي مع خاصية الواتشينق ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ozivolebop.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});	

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}source-js7`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي المطور مع بكج الفا ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/vazahapiqe.js' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



//  =-=-=-=-=-=- .::[ Take Codes System "Admin Zone" - abokhalil ]::. =-=-=-=-=-=-

client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help-js-help2`) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ admin-js ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لكود الهيلب بدون أمبد بالخاص **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لكود الهيلب بدون الأمبد بنفس الشات**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C لكود الهيلب مع الأمبد بالخاص**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- D لكود الهيلب مع الأمبد بنفس الشات**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- E لكود الهيلب مع الأمبد للمشرفين فقط**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- F لكود الهيلب بدون الأمبد للمشرفين فقط**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- G لكود الهيلب العربي والانجليزي بالأمبد**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
		.addField('**- H لكود العربي والأنجليزي بدون أمبد**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
		.addField('**- I للعودة القائمة السابقة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
    
        message.channel.sendEmbed(embed).then(msg => {
    
            msg.react('🇦').then( r => {
				msg.react('🇧')
				msg.react('🇨')
				msg.react('🇩')
				msg.react('🇪')
				msg.react('🇫')
				msg.react('🇬')
				msg.react('🇭')
				msg.react('🇮')
                
                    // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳
    
            let helpjs1Filter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let helpjs2Filter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let helpjs3Filter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
            let helpjs4Filter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
            let helpjs5Filter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
            let helpjs6Filter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;
            let helpjs7Filter = (reaction, user) => reaction.emoji.name === '🇬' && user.id === message.author.id;
            let helpjs8Filter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id;
            let helpjs9Filter = (reaction, user) => reaction.emoji.name === '🇮' && user.id === message.author.id;
			
    
    
            let helpjs1 = msg.createReactionCollector(helpjs1Filter, { time: 20000});
            let helpjs2 = msg.createReactionCollector(helpjs2Filter, { time: 20000});
            let helpjs3 = msg.createReactionCollector(helpjs3Filter, { time: 20000});
            let helpjs4 = msg.createReactionCollector(helpjs4Filter, { time: 20000});
            let helpjs5 = msg.createReactionCollector(helpjs5Filter, { time: 20000});
            let helpjs6 = msg.createReactionCollector(helpjs6Filter, { time: 20000});
            let helpjs7 = msg.createReactionCollector(helpjs7Filter, { time: 20000});
            let helpjs8 = msg.createReactionCollector(helpjs8Filter, { time: 20000});
            let helpjs9 = msg.createReactionCollector(helpjs9Filter, { time: 20000});
            
              
              adminjs1.on('collect', r => {	
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-=-:: [  كود الكيك مع سبب شبيه بالبرو بوت ] ::-=-= ' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ebobaxolan.bash' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
            
               adminjs2.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الباند مع سبب وشبيه بالبرو بوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/usixelequg.bash' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
              adminjs3.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الميوت مع سبب ورتبة ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ixofimates.js' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
               adminjs4.on('collect', r => {
 					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود أنشاء الروم الكتابي ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/iparudikek.cs' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
               adminjs5.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')					
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود أنشاء الروم الصوتي ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/cicuxujaqa.cs' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })      
            
               adminjs6.on('collect', r => {
  					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود مسح الشات وشبيه بالبرو بوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/dusewiduni.bash' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })    
    

        
             adminjs7.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الوارن مع سبب وميوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://pastebin.com/Fd1D5eTK' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
             })
			 
	    adminjs11.on('collect', r => {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ java script ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**-help-js-source لقائمة السورس الأساسي**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-admin  لقائمة الأكواد الإدارية**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-general لقائمة الأكـواد العامة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-welcome لقائمة أكواد الترحيب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-help  لقائمة أكواد الهيــب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-bc  لقائمة أكواد البرودكاست **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-game لقائمة أكواد الألعاب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-mex لقائمة الأكواد المنوعه **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('-                                   -' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })    
		 
			 adminjs8.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود منع الصور والمفات في روم معين ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/uvopetiher.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**') // لم يتم
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
    
             })
			 
			 			 adminjs9.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود منع جميع أنواع الروابط ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/beyumaqiha.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
    
             })
			 
	 
			 			 adminjs10.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود معلومات السيرفر للمشرفين ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ajevejihem.js' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
    
             })
	// https://hastebin.com/ajevejihem.js		 
    })	
         
        });
    }
});

client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js1`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-=-:: [  كود الكيك مع سبب شبيه بالبرو بوت ] ::-=-= ' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ebobaxolan.bash' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js2`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الباند مع سبب وشبيه بالبرو بوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/usixelequg.bash' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js3`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود أنشاء الروم الكتابي ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/iparudikek.cs' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js4`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود السورس الاساسي المطور مع معلومات البوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/iqimilaqop.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});




client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js5`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود أنشاء الروم الصوتي ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/cicuxujaqa.cs' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js6`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                .setColor('RANDOM')
                .addField('=-::[ كود مسح الشات وشبيه بالبرو بوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/dusewiduni.bash' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js7`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الوارن مع سبب وميوت ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://pastebin.com/Fd1D5eTK' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js8`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود منع الصور والمفات في روم معين ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/uvopetiher.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**') // لم يتم
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js9`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود منع جميع أنواع الروابط ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/beyumaqiha.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}admin-js10`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود معلومات السيرفر للمشرفين ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ajevejihem.js' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


//  =-=-=-=-=-=- .::[ Take Codes System "Help Zone" - abokhalil ]::. =-=-=-=-=-=-


client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help-js-help2`) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ help-js ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لكود الهيلب بدون أمبد بالخاص **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B لكود الهيلب بدون أمبد بنفس الشات**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C لكود الهيلب مع أمبد بالخاص**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- D لكود الهيلب مع أمبد بنفس الشات**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- E لكود الهيلب مع أمبد للمشرفين فقط**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- F لكود الهيلب بدون أمبد للمشرفين فقط**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- G لكود الهيلب بالعربي والانجليزي مع أمبد**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
		.addField('**- H لكود الهيلب بالعربي والانجليزي بدون امبد**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
		.addField('**- I للعودة القائمة السابقة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
    
        message.channel.sendEmbed(embed).then(msg => {
    
            msg.react('🇦').then( r => {
				msg.react('🇧')
				msg.react('🇨')
				msg.react('🇩')
				msg.react('🇪')
				msg.react('🇫')
				msg.react('🇬')
				msg.react('🇭')
				msg.react('🇮')
//				msg.react('🇯')
//				msg.react('🇰')
                
                    // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳
    
            let helpjs1Filter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let helpjs2Filter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let helpjs3Filter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
            let helpjs4Filter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
            let helpjs5Filter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
            let helpjs6Filter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;
            let helpjs7Filter = (reaction, user) => reaction.emoji.name === '🇬' && user.id === message.author.id;
            let helpjs8Filter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id;
            let helpjs9Filter = (reaction, user) => reaction.emoji.name === '🇮' && user.id === message.author.id;
//			let helpjs1Filter = (reaction, user) => reaction.emoji.name === '🇯' && user.id === message.author.id;
//			let helpjs1Filter = (reaction, user) => reaction.emoji.name === '🇰' && user.id === message.author.id;
			
    
    
            let helpjs1 = msg.createReactionCollector(helpjs1Filter, { time: 20000});
            let helpjs2 = msg.createReactionCollector(helpjs2Filter, { time: 20000});
            let helpjs3 = msg.createReactionCollector(helpjs3Filter, { time: 20000});
            let helpjs4 = msg.createReactionCollector(helpjs4Filter);
            let helpjs5 = msg.createReactionCollector(helpjs5Filter, { time: 20000});
            let helpjs6 = msg.createReactionCollector(helpjs6Filter, { time: 20000});
            let helpjs7 = msg.createReactionCollector(helpjs7Filter, { time: 20000});
            let helpjs8 = msg.createReactionCollector(helpjs8Filter, { time: 20000});
            let helpjs9 = msg.createReactionCollector(helpjs9Filter, { time: 20000});
//			let adminjs10 = msg.createReactionCollector(adminjs10Filter, { time: 20000});
//			let adminjs11 = msg.createReactionCollector(adminjs11Filter, { time: 20000});
            
              
              helpjs1.on('collect', r => {	
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-=-:: [  كود الهيلب بدون الأمبد بالخاص ] ::-=-= ' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/muwugasope.md' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
            
               helpjs2.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب بدون الأمبد بنفس الشات ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/yacihuruba.md' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
              helpjs3.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب مع امبد بالخاص ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ucihidinuz.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
               helpjs4.on('collect', r => {
 					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب مع امبد بنفس الشات ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/wejameyave.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
               helpjs5.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')					
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود هيلب للمشرفين فقط مع امبد  ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/zixoludoyi.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })      
            
               helpjs6.on('collect', r => {
  					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود هيلب للمشرفين فقط بدون امبد ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/odihoxifux.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })    
    

        
             helpjs7.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[  كود الهيلب باللغة العربية والانجليزية بالأمبد  ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ahinagedil.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
             })
			 
	    helpjs9.on('collect', r => {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ java script ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**-help-js-source لقائمة السورس الأساسي**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-admin  لقائمة الأكواد الإدارية**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-general لقائمة الأكـواد العامة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-welcome لقائمة أكواد الترحيب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-help  لقائمة أكواد الهيــب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-bc  لقائمة أكواد البرودكاست **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-game لقائمة أكواد الألعاب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-mex لقائمة الأكواد المنوعه **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('-                                   -' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })    
		 
			 helpjs8.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب باللغة العربية والأنجلزية بدون الأمبد ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/majujiwivu.cs' ,'**=-=-=-=-=-=-=-=-=-=-=**') // لم يتم
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
    
             })
/*			 
			 			 adminjs9.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود منع جميع أنواع الروابط ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/beyumaqiha.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
    
             })
			 
	 
			 			 adminjs10.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود معلومات السيرفر للمشرفين ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ajevejihem.js' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
    
             })
	*/ // https://hastebin.com/ajevejihem.js		 
    })	
         
        });
    }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

    if (command === `${prefix}help-js-help1`) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ help-js ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**-help-js1 لكود الهيلب بدون أمبد بالخاص **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js2 لكود الهيلب بدون أمبد بنفس الشات**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js3 لكود الهيلب مع أمبد بالخاص**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js4 لكود الهيلب مع أمبد بنفس الشات**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js5 لكود الهيلب مع أمبد للمشرفين فقط**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js6 لكود الهيلب بدون أمبد للمشرفين فقط**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js7 لكود الهيلب بالعربي والانجليزي مع أمبد**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
		.addField('**-help-js8 لكود الهيلب بالعربي والانجليزي بدون امبد**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
                message.channel.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js1`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-=-:: [  كود الهيلب بدون الأمبد بالخاص ] ::-=-= ' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/muwugasope.md' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js2`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب بدون الأمبد بنفس الشات ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/yacihuruba.md' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js3`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب مع امبد بالخاص ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ucihidinuz.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});


client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js4`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب مع امبد بنفس الشات ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/wejameyave.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js5`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود هيلب للمشرفين فقط مع امبد  ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/zixoludoyi.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});




client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js6`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود هيلب للمشرفين فقط بدون امبد ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/odihoxifux.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js7`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[  كود الهيلب باللغة العربية والانجليزية بالأمبد  ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ahinagedil.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
      }
});



client.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];


if (command === `${prefix}help-js8`) {
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب باللغة العربية والأنجلزية بدون الأمبد ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/majujiwivu.cs' ,'**=-=-=-=-=-=-=-=-=-=-=**') // لم يتم
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
				
                message.author.sendEmbed(embed)
      }
});

//  =-=-=-=-=-=- .::[ Take Codes System "Brodcast Zone" - abokhalil ]::. =-=-=-=-=-=-


client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help-js-bc2`) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ Bc-js ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**- A لكود البرودكاست مع ذكر السيرفر والمرسل **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- B  لكود البرودكاست بدون ذكر المرسل والسيرفر**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- C [user] لكود البرودكاست مع منشن**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- D لكود البرودكاست مع تأكيد بالرياكشن**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- E لكود البرودكاست مع تأكيد بنعم او لا**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- F لكود البرودكاست مع ادراج رابط البوت**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**- G لكود البرودكاست مخصص بالايدي**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
		.addField('**- H للعودة القائمة السابقة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
    
        message.channel.sendEmbed(embed).then(msg => {
    
            msg.react('🇦').then( r => {
				msg.react('🇧')
				msg.react('🇨')
				msg.react('🇩')
				msg.react('🇪')
				msg.react('🇫')
				msg.react('🇬')
				msg.react('🇭')
//				msg.react('🇮')
//				msg.react('🇯')
//				msg.react('🇰')
                
                    // 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳
    
            let bcjs1Filter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
            let bcjs2Filter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
            let bcjs3Filter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
            let bcjs4Filter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
            let bcjs5Filter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
            let bcjs6Filter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;
            let bcjs7Filter = (reaction, user) => reaction.emoji.name === '🇬' && user.id === message.author.id;
            let bcjs8Filter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id;
            let bcjs9Filter = (reaction, user) => reaction.emoji.name === '🇮' && user.id === message.author.id;
//			let helpjs1Filter = (reaction, user) => reaction.emoji.name === '🇯' && user.id === message.author.id;
//			let helpjs1Filter = (reaction, user) => reaction.emoji.name === '🇰' && user.id === message.author.id;
			
    
    
            let bcjs1 = msg.createReactionCollector(bcjs1Filter, { time: 20000});
            let bcjs2 = msg.createReactionCollector(bcjs2Filter, { time: 20000});
            let bcjs3 = msg.createReactionCollector(bcjs3Filter, { time: 20000});
            let bcjs4 = msg.createReactionCollector(bcjs4Filter, { time: 20000});
            let bcjs5 = msg.createReactionCollector(bcjs5Filter, { time: 20000});
            let bcjs6 = msg.createReactionCollector(bcjs6Filter, { time: 20000});
            let bcjs7 = msg.createReactionCollector(bcjs7Filter, { time: 20000});
            let bcjs8 = msg.createReactionCollector(bcjs8Filter, { time: 20000});
            let bcjs9 = msg.createReactionCollector(bcjs9Filter, { time: 20000});
//			let adminjs10 = msg.createReactionCollector(adminjs10Filter, { time: 20000});
//			let adminjs11 = msg.createReactionCollector(adminjs11Filter, { time: 20000});
            
              
              bcjs1.on('collect', r => {	
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-=-:: [  كود الهيلب بدون الأمبد بالخاص ] ::-=-= ' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/muwugasope.md' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
            
               bcjs2.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود البرودكاست بدون ذكر اسم السيرفر والمرسل بالأمبد ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://pastebin.com/GYc1KGrE' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
              bcjs3.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود البرودكاست مع خاصية المنشن [user] ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://pastebin.com/2zDC1w9Q' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
         
            
               bcjs4.on('collect', r => {
 					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب مع امبد بنفس الشات ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/wejameyave.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })   
            
               bcjs5.on('collect', r => {
					msg.delete()
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')					
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود هيلب للمشرفين فقط مع امبد  ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/zixoludoyi.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })      
            
               bcjs6.on('collect', r => {
  					msg.delete()  
					message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود هيلب للمشرفين فقط بدون امبد ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/odihoxifux.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
         })    
    

        
             bcjs7.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[  كود الهيلب باللغة العربية والانجليزية بالأمبد  ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/ahinagedil.pl' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
             })
			 
  	 
			 bcjs8.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود الهيلب باللغة العربية والأنجلزية بدون الأمبد ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/majujiwivu.cs' ,'**=-=-=-=-=-=-=-=-=-=-=**') // لم يتم
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
    
             })

	    bcjs9.on('collect', r => {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('     **=-=-:: [ java script ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
        .addField('**-help-js-source لقائمة السورس الأساسي**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-admin  لقائمة الأكواد الإدارية**' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-general لقائمة الأكـواد العامة **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-welcome لقائمة أكواد الترحيب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-help  لقائمة أكواد الهيــب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-bc  لقائمة أكواد البرودكاست **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-game لقائمة أكواد الألعاب **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('**-help-js-mex لقائمة الأكواد المنوعه **' ,'**=-=-=-=-=-=-=-=-=-=-=**')
        .addField('-                                   -' ,'╚[❖═════════════════════❖]╝')
        .setFooter(`Alpha Codes`)
        .setTimestamp()
    
                message.channel.sendEmbed(embed)
         })  
/*		 
			 			 adminjs9.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود منع جميع أنواع الروابط ]::-=' ,'╔[❖═════════════════════❖]╗')
                .addField('https://hastebin.com/beyumaqiha.coffeescript' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)  
    
    
             })
			 
	 
			 			 adminjs10.on('collect', r => {
      					msg.delete()           
						message.channel.send('** :ok_hand: :heavy_check_mark: لقد تم ارسال الكود لك في الخاص**')
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('=-::[ كود معلومات السيرفر للمشرفين ]::-=' ,'╔[❖═════════════════════❖]╗')
        
                .addField('https://hastebin.com/ajevejihem.js' ,'**=-=-=-=-=-=-=-=-=-=-=**') 
                .addField('=-=- [ Take Codes ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`Alpha Codes`)
                .setTimestamp()
    
                message.author.sendEmbed(embed)
    
             })
	*/ // https://hastebin.com/ajevejihem.js		 
    })	
         
        });
    }
});


/*
 message.channel.send('**| يرجى الإنتظار بضع ثواني... ✏**').then(b => {
        setTimeout(() => {
  b.edit(`**:dove:| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**`)
        },5000);
*/

client.login(process.env.BOT_TOKEN);
