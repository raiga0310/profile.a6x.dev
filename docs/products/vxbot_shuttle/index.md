---
title: TwitterのURLをfixupx系のURLに変換するDiscord Bot
emoji: 🚀
---

# vxbot_shuttle

Twitterの新体制により様々な変更があるなか、DiscordにてTwitterのリンクを埋め込み展開(ツイートの作者のアイコンやツイート本文、画像の表示)が機能しなくなった期間において、Discordにその埋め込みを展開してくれるURLサービスfixupx系(fixupx, vxtwitterなど)が生み出された。
このDiscord Botは、そういったURLサービスのURLにTwitterのURL(`x.com`,`twwitter.com`)を変換するBotである。

::: info
2024年1月時点においてDiscordでTwitterの埋め込み展開が可能になったため、現在Botの運用は中止している。
:::

## 選定技術
Rust, Serenity, Shuttle, Sqlx

## Repo

- [vxbot](https://github.com/raiga0310/vxbot)
- [vxbot_shuttle](https://github.com/raiga0310/vxbot_shuttle)
