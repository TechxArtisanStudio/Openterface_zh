# 扩展引脚指南

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="height:300px"}

Openterface Mini-KVM 具有用于高级开发和[开放软件](/app)实验的扩展引脚。这些引脚在标准外壳配置中不可见。

### 开发时访问扩展引脚

要访问扩展引脚：

1. 拆卸设备
2. 用专用的扩展引脚盖替换原来的外壳盖
3. 从我们的[GitHub 仓库](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)下载扩展引脚盖的3D模型

!!! warning "保修失效"
    拆卸原装外壳会使产品保修失效。所有修改或拆卸均由用户自行承担风险。

!!! note "实验性功能"
    使用这些引脚开发的功能是实验性的，尚未经过全面测试。Openterface 对因修改、暴露扩展引脚或其他对设备的改动而导致的任何损坏、伤害或故障不承担责任。

### 引脚布局

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

扩展引脚提供以下连接：

1. 为外部组件提供 USB 5V 电源
2. 主机 USB 集线器的数据正极
3. 主机 USB 集线器的数据负极
4. 目标设备 USB 集线器的数据正极
5. 目标设备 USB 集线器的数据负极
6. 地线

!!! danger "连接错误"
    混淆 VCC 和 GND 会对设备和连接的组件造成严重损坏。请在给设备通电前仔细检查引脚连接。
