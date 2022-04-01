module.exports = {
 name:"kick",
 code: ` $kick[$findMember[$message[1];yes];$guildID;0;$if[$messageslice[1]==;No reason provided;$messageslice[1]]]
$color[1;FFFFFF]
$description[1;**<a:D_Loading1:954025328718798898> kicked user \`$userTag[$findMember[$message[1];yes]]\`
Reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]**]

 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant kick that user**}}]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **They have the same role as you**}}]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **They have a higher role than you**}}]

 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **They have the same role as me / higher role than me**}}]

 $onlyIf[$findMember[$message[1];yes]!=$ownerID;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant kick the server owner**}}]

 $onlyIf[$findMember[$message[1];yes]!=$authorID;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user] [reason]\`**}}]

 $onlyIf[$findMember[$message[1];yes]!=$clientID;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I cant kick myself**}}]




$if[$getServerVar[staffrole]=={NONE};

$onlyIf[$hasPerms[$guildid;$authorid;kick]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [kick](https://top.gg/bot/$clientid) permission**}}]


$onlyIf[$hasPerms[$guildid;$clientid;kick]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [kick](https://top.gg/bot/$clientid) permission**}}];

$onlyIf[$hasPerms[$guildid;$clientid;kick]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [kick](https://top.gg/bot/$clientid) permission**}}]

$onlyForRoles[$getServerVar[staffrole];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have the staff role**}}]]

$argsCheck[>0; $onlyIf[$findMember[$message[1];yes]!=$authorID;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user] [reason]\`**}}]
`}