# 可切换USB端口机制

![switch-graphics](images/product/switch-graphics.svg#only-light){:style="width:460px"}
![switch-graphics](images/product/switch-graphics_1.svg#only-dark){:style="width:460px"}

这个迷你KVM设备具有一个可切换的USB-A 2.0端口，可以在主机和目标计算机之间切换，但不能同时连接。这一功能由物理拨动开关和主机应用程序中的软件开关共同控制。本文档解释了这些开关的机制和逻辑。

## 开关类型

- **软件开关**：主机应用程序中的一个切换按钮。
      - 在主机和目标计算机之间切换USB端口连接

- ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} **硬件开关**：设备上的一个物理两位拨动开关。
      - 向内位置：连接到主机
      - 向外位置：连接到目标计算机

## 初始设置和同步

当迷你KVM正确连接并启动主机应用程序时：

1. 设备的实际USB端口连接（电路）最初默认连接到主机。
2. 主机应用程序检测硬件开关的当前位置，设置为主机或目标计算机。
3. 软件开关与硬件开关位置同步。
4. 实际电路连接更新以匹配开关位置。

!!! 警告 "硬件限制"
    如果在设备通电或启动主机应用程序之前已经插入了USB驱动器，主机会发出关于不安全USB设备移除的警告。这是v1.9的硬件限制。因此，建议在设备通电或启动主机应用程序之前不要连接任何USB设备。

## 操作状态

由于存在硬件和软件开关，可能会出现四种状态：

- **状态1**（同步，连接到主机）：
      - 硬件开关：指向主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 软件开关：指向主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - USB端口连接：连接到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **状态2**（同步，连接到目标）：
      - 硬件开关：指向目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 软件开关：指向目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - USB端口连接：连接到目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

- **状态3**（不同步，USB连接到主机）：
      - 硬件开关：指向目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 软件开关：指向主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - USB端口连接：连接到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **状态4**（不同步，USB连接到目标）：
      - 硬件开关：指向主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 软件开关：指向目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - USB端口连接：连接到目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

## 状态转换和逻辑

### 从 **状态1**（同步到主机）

- ^^***场景1a***^^：用户将硬件开关移动到目标
      - 更新内部状态变量为目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 更新主机应用程序显示为目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 切换实际电路连接到目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 转换到状态2，同步

- ***场景1b***：用户点击软件开关到目标
      - 更新内部状态变量为目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 硬件开关位置保持不变（指向主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - 切换实际电路连接到目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 转换到状态3，不同步

### 从 **状态2**（同步到目标）

- ^^***场景2a***^^：用户将硬件开关移动到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 更新内部状态变量为主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 更新软件开关显示为主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 切换实际电路连接到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 转换到状态1，同步

- ***场景2b***：用户点击软件开关到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 更新内部状态变量为主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 硬件开关位置保持不变（指向目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - 切换实际电路连接到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 转换到状态4，不同步

### 从 **状态3**（不同步，USB连接到主机）

- ^^***场景3a***^^：用户将硬件开关移动到目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - 变量不变
      - 转换到状态2，同步

- ***场景3b***：用户点击软件开关到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 更新内部状态变量为主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 硬件开关位置保持不变（指向目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - 切换实际电路连接到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - 转换到状态1，同步

### 从 **状态4**（不同步，USB连接到目标）

- ^^***场景4a***^^：用户将硬件开关移动到主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - 变量不变
      - 转换到状态1，同步

- ***场景4b***：用户点击软件开关到目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - 更新内部状态变量为目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 硬件开关位置保持不变（指向主机 ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - 切换实际电路连接到目标 ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - 转换到状态2，同步

!!! 警告 "切换开关前请先弹出U盘"
    如果USB端口正在使用U盘，请确保在切换开关前弹出U盘，以便将端口的使用转移到另一台计算机。

!!! 警告 "USB电源限制"
    USB端口提供的电源取决于主机主板。不建议连接需要大量电源的USB设备。通常，功耗不应超过1.5W。连接高功耗设备可能会导致操作不稳定或潜在损坏。

!!! 注意 "用户指南"
    - **软件开关优先**：无论硬件开关位置如何，点击软件开关将立即改变电路方向。

    - **硬件开关同步**：手动切换硬件开关将使其状态与软件开关对齐，从不同步的状态3或状态4转换到状态1或状态2。然而，这种同步不一定会改变实际电路连接。

    - **硬件开关监控**：尽管硬件开关是物理的，但由软件监控，并不直接控制电路方向。相反，软件解释开关位置并管理实际电路切换。

## 为什么软件控制的USB切换很重要

v1.9引入的软件控制USB切换功能是我们未来开发计划的关键，特别是在支持KVM-over-IP解决方案（如我们尚未实现的VNC）方面。这一功能允许用户远程切换和共享USB端口在目标和主机计算机之间，这对于在远程设置中促进文件传输尤为重要。

这一功能为远程管理和控制开辟了广阔的可能性。例如，它使设备之间的文件传输无需物理干预，从而提高了远程故障排除和系统管理的效率。

你有关于如何利用这一功能的创意吗？我们很想和你聊聊！加入Openterface [社区](/community/)并分享你的想法 😃
