module.exports = {
name: "ccunnsfw",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Succesfully removed the channel from nsfw**]

$editChannel[$channelID;$default;$default;$default;$default;no;$default;yes]

$onlyIf[$channelID==$getUserVar[cid;$authorid];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont own this custom channel**}}]`}