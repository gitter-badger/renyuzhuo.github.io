---

layout: post

date: 2016-05-19 01:01:02

title: SSH ERR

description: SSH

keywords: SSH

categories:
- Ubuntu
- SSH

---

# 前言

SSH免密码登陆。

# 正文

## 登陆远程主机
```
$ ssh username@host # 以用户username登陆host
$ ssh host          # 以本机用户名登陆远程主机
$ ssh -p port host  # port为端口号，默认22端口
```
## ssh免密码登陆
```
$ ssh-keygen -t rsa # 生成私钥与公钥
$ ssh-copy-id user@host # 将公钥传送到远程总机，或者如下
$ cat ~/.ssh/id_rsa.pub >> root@10.61.3.53:~/.ssh/authorized_keys # 公钥复制到需要被登陆的机器上，其他主机
$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys # 如果是登陆本机

$ ssh 10.61.3.53 # 登陆主机，一下提示用于防止中间人攻击，需要将该fingerprient与网页上的值比对
The authenticity of host 'host (12.18.429.21)' can't be established.
RSA key fingerprint is 98:2e:d7:e0:de:9f:ac:67:28:c2:42:2d:37:16:58:4d.
Are you sure you want to continue connecting (yes/no)?

$ service ssh restart # 重启服务
```
本地生成

    id_rsa：私钥
    id_rsa.pub：公钥
    known_hosts：认证过的主机信息，用于防止中间人攻击
    authorized_keys：保存公钥的文件
    
## 错误解决办法

重点来了，如果仅仅是上文，本文毫无意义，收集错误才是重点，以下才是我真正想写的内容。

### 错误001

#### 警告
```
Permissions 0777 for '/Users/username/.ssh/id_rsa' are too open.
It is recommended that your private key files are NOT accessible by others.
This private key will be ignored.
```
#### 解决办法，[右键保存]()
```
chmod og-wx ~/.ssh/authorized_keys
chmod 400 ~/.ssh/id_rsa
```

# 结束语

好好研究吧，问题还多着呢。
