module.exports = {
name: "volume",
code: `
$volume[$message]
$color[1;$getservervar[color]]
$description[1;<:checkmark:953987845696135188> **Succesfully changed the volume to $message%**]


$cooldown[30s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]

$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to join a voice channel**}}]

$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to join a voice channel**}}]

$onlyIf[$voiceID[$clientid]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I need to join a voice channel**}}]

$onlyIf[$voiceID[$clientid]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I need to join a voice channel**}}]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[djrole]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need the dj role**}}]



$onlyIf[$getServerVar[djrole]!={BLANKEDOUT};{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **The dj role needs to be setup**}}]

$onlyIf[$queueLenth>=1;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **The queue os empty**}}]

$onlyIf[$isNumber[$message]!=false;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Your volume needs to be a number**}}]

$onlyIf[$message<201;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Volume cant be higher than \`200\`**}}]


`}