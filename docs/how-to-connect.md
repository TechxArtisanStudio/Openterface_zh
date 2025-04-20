# 如何连接

## 接口

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **主机 USB-C 端口** (母口): 作为 USB 设备端口，通过内置 USB 集线器连接到主机电脑进行数据传输

② ![Type-C to Target](images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **目标 USB-C 端口** (母口): 作为 USB 设备端口，通过内置 USB 集线器连接到主机电脑，用于模拟键盘和鼠标 HID 输出

③ ![HDMI Input](images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **HDMI 输入端口** (母口): 从目标电脑接收 HDMI 信号输入

④ ![USB-A Port](images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **可切换 USB-A 2.0 端口** (母口): 作为 USB 主机端口，可在主机电脑和目标电脑之间切换使用，但不能同时使用。

!!! warning "紧密配合"
    请注意，这个 USB-A 母口设计有锁定机制，插拔 USB 设备时需要稍微用力。

⑤ ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **切换开关**: 用于在主机和目标电脑之间切换 USB-A 2.0 端口的连接

⑥ ![Extension Pins](images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **扩展针脚**: 更多信息请查看 [扩展针脚](/extension-pin) 供开发者使用。

## 连接步骤

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

要设置您的 Mini-KVM，请按以下步骤操作：

1. **主机电脑连接** (橙色侧):
    - 使用橙色 1.5 米 Type-C USB 线将主机电脑连接到 mini-KVM。将其插入 mini-KVM 橙色侧的 Type-C 母口。

    !!! note "需要安装主机应用"
        主机电脑需要安装主机应用。更多信息和下载链接，请参阅 [应用文档](/app)。

2. **目标设备连接** (黑色侧):
    - 使用黑色 0.3 米 Type-C USB 线将目标设备连接到 mini-KVM。将其插入 mini-KVM 黑色侧的 Type-C 母口。

3. **目标视频输出连接** (黑色侧):
    - 使用黑色 0.3 米 HDMI 线或其他合适的视频源到 HDMI 线（如 VGA 到 HDMI 转换线），将目标设备的视频输出端口连接到 mini-KVM 黑色侧的 HDMI 母口。

    !!! note "目标设备无需应用"
        目标设备无需预安装或配置。只要目标设备支持视频输出（如 HDMI、VGA 等）并有 USB 端口接收模拟键盘和鼠标控制（HID）信号，即可使用。因此，支持的目标设备平台包括 Windows、macOS、Linux、Android 和 iOS。

4. **可切换 USB-A 2.0 端口连接** (可选):
    - 如果您想将 USB 设备连接到可切换 USB-A 2.0 端口，建议在完成上述三个连接并确保主机应用打开后进行。

