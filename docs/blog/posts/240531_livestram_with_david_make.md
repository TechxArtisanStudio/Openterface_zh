---
date: 2024-05-31
authors:
  - Openterface
categories:
  - Updates
---
# 与 MAKE: 杂志的 David Groom 进行轻松聊天：Openterface Mini-KVM 的故事

大家好！

我们刚刚结束了一场与 MAKE: 杂志的 David Groom 的精彩 [YouTube 直播](https://www.youtube.com/live/lwitzvmxsgc?si=s9a1t5_Sce5v22e1)。在直播中，我们深入探讨了 Openterface Mini-KVM 背后的故事，这是一款创新的开源硬件解决方案，旨在让你只用笔记本电脑就能轻松控制无头设备和单板计算机（如树莓派）。你可以查看 YouTube 直播了解更多详情，或者继续阅读下文。

![youtube-with-david-2](https://www.crowdsupply.com/img/2b83/081f1376-b266-4e83-b1af-5628dbe62b83/youtube-with-david_jpg_gallery-lg.jpg)

## 想法的诞生

Mini-KVM 的旅程始于中国广州繁忙的 TechxArtisan 工作室。过去五年里，我们深度参与了许多本地和国际艺术家的科技艺术项目。我们的工作包括构建带有 AI 检测的互动照明装置、用于戏剧表演的机械臂、解决随机迷宫的自动驾驶迷你车，甚至还有探索无人区（如沙漠和森林）的机器人狗。

![techxartisan_tech_art](https://www.crowdsupply.com/img/bce8/9c580077-993a-42b2-b781-a30d34acbce8/techxartisan-tech-art_jpg_gallery-lg.jpg)

### 常见的头疼问题
在我们的工作中，经常遇到管理大量无头计算机（如树莓派和 Jetson Nano）的挑战，这些设备没有显示器、键盘或网络连接。这常常导致我们在恶劣条件下疯狂寻找备用显示器和键盘来排查和访问这些设备。

### 临时解决方案
最初，我们使用由电池供电的便携式显示器和带触摸板的无线迷你键盘作为临时解决方案。然而，这些设备经常被遗忘或丢失，促使我们需要一个专用的硬件解决方案，利用我们随身携带的笔记本电脑进行编码和设置。

![diy-monitor-keyboard](https://www.crowdsupply.com/img/2efd/4459eff9-2d01-4552-ac91-a1941ed82efd/diy-monitor-keyboard_jpg_gallery-lg.jpg)
*这些小工具必须随身携带以便现场项目使用。*

### 第一个原型
我们的第一个 DIY 原型是一个简单而有效的组合，包括一个捕捉卡来获取无头设备的视频信号和一个 USB 键盘/鼠标模拟器，所有这些都集成在一根 USB 线缆中，连接到我们的笔记本电脑。

![/early-mini-kvm-pcb](https://www.crowdsupply.com/img/1f7e/fb91d879-dee7-45cc-bbdc-dc3ea5731f7e/early-mini-kvm-pcb_jpg_gallery-lg.jpg)
*早期版本的 mini-KVM PCB*

我们在 2023 年 11 月的深圳 Maker Faire 上展示了我们的酷炫科技艺术项目，打算向 David 展示 mini-KVM 原型。然而，我们对 David 送的礼物太兴奋了，竟然忘了展示！

![techxartisan_team_with_david_groom](https://www.crowdsupply.com/img/bc4e/17bdcc6e-0a34-4f2f-bf64-fee0b8d6bc4e/techxartisan-team-with-david-groom_jpg_gallery-lg.jpg)
*MAKE: 杂志的贴纸和明信片真的很酷！*

## 社区反馈和开发
在 Reddit 上分享我们的原型后，我们收到了来自 [社区](http://openterface.com/community/#community-contributors) 的宝贵反馈，鼓励我们将解决方案打磨成一个完善的产品。这种社区支持对将我们的临时设备转变为一个精致、高效的工具起到了关键作用，适合家庭实验室爱好者、系统管理员、技术爱好者以及任何使用无头计算机的人。

![got_feedback_from_reddit](https://www.crowdsupply.com/img/b24b/e04dfa15-1e5b-4bfb-b97c-acdba784b24b/got-feedback-from-reddit_jpg_gallery-lg.jpg)
*从家庭实验室爱好者那里收到了大量反馈*

## 克服疑虑
尽管最初对与现有类似解决方案竞争存在疑虑，但来自在线社区的积极回应和建设性建议帮助我们明确了潜在的使用场景，并增强了我们的信心。如果没有这种支持和对我们努力的肯定，我们可能不会继续推进这个项目。

## 众筹和未来计划
Openterface Mini-KVM 在 Crowd Supply 上的众筹活动正在迅速升温，距离结束还有大约两周时间。这次众筹不仅仅是为了开发 Mini-KVM，它也是社区驱动创新力量的见证。接下来，我们将深入生产管理、软件改进，并将这个方便的小工具交付给我们出色的支持者——这一切都得益于我们了不起的开源社区。

![techxartisan_openterface_discord](https://www.crowdsupply.com/img/8d7a/58e213e7-7a81-47b4-9d6b-69be3c698d7a/techxartisan-openterface-discord_jpg_gallery-lg.jpg)
*Beta 测试者在 TechxArtisan 的 Discord 上分享他们在日常技术任务中使用 Openterface Mini-KVM 的情况*

## 拥抱开源愿景

Openterface Mini-KVM 是我们创造力和毅力的见证，也是支持我们的开源社区的见证。最初只是为了解决我们个人挑战的简单解决方案，现在已经发展成为一个多功能的开源工具，准备惠及全球的黑客、修补匠和技术爱好者。请继续关注更多更新，因为 Mini-KVM 正在逐步接近正式发布。