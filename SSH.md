---
caption: Secure Shell
created: 20211011062516267
modified: 20211031193145054
title: ssh
---

- `areas:` [[Linux]],[[Networking]]

---

- Secure Shell or Secure Socket Shell, operates on [Port 22](#Port%2022)
- Cryptographic network protocol for operating network services securely, even over an unsecured network.
- Best known for remote login to computer systems by users.

---

- The SSH protocol is used for:
  - Secure Remote Management of Servers, Routers and other Networking Devies.
  - Network File Copy: [[rsync]], [[sftp]], [[scIf you suspect a firewall issue then use ￼￼ufw￼￼￼￼￼￼￼￼.
p]], [[winscp]]
  - Tunneling, SSH Port Forwarding
- [[SSHD]] is the SSH server [daemon](#daemon), `ssh` or `putty` are the clients

- To check status of ssh
  - `sudo systemctl status ssh`
- Service Stop, Restart, Start: `sudo systemctl [start|restart|stop] ssh`
- Enable, Disable auto booting: `sudo systemctl [enable|disable] ssh`

- Server config file: [/etc/ssh/sshd_config](#%2Fetc%2Fssh%2Fsshd_config)
- Client Config file: [/etc/ssh/ssh_config](#%2Fetc%2Fssh%2Fssh_config)

### Check status

- `systemctl status ssh` or `systemctl status sshd`(for CentOS)
- `ps -ef | grep sshd` can
- `systemctl is-enabled ssh` to start at boot

### [[Troubleshooting ssh]]

### Connecting to ssh server

- Using [ping](#ping) to test connection between either ssh server or client
  - `ping IPAddr` see: [[Troubleshooting for connectivity issues]]
- Connecting using a client(OpenSSH)
  - `ssh username@serverIPAddr` or `ssh -l username IPAddr`
  - The username used should exist on the server, not on the client
- The first time whena client is connecting to an ssh server, the client uses a cryptographic fingerprint to identify the server and prevent possible man in the middle attacks in the future.
- The host key is randomly generated when the ssh server is set up and is used to identify the server you're connecting to.
- It will be saved on the client in the file called [[ssh-known_hosts|/.ssh/known_hosts]]
- You'll be prompted to enter the user's password, press enter to start your connection.
- To exit, run `exit` or `Ctrl + D`

### Options

- To use a port other than the default one([Port 22](#Port%2022)) use `-p` followed by the port number.
- ssh client has it's own configuration file under [[etc-ssh-ssh_config|/etc/ssh/ssh_config]]

check out: [putty](https://www.putty.org/)

### Troubleshooting [ssh](#ssh)

The first to check is that the ssh daemon is running on the server machine:
`systemctl status ssh`

If you get a `WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!` message on the client when trying to connect/autheticate ssh server, double check that you're connecting to the right server. This message will be displayed if the [IP Address](#IP%20Address) or [MAC](#MAC) Address have been changed. If it is the right server, you can get rid of the message by removing the server key from the [/.ssh/known_host](#%2F.ssh%2Fknown_host) file.

Check [Port 22](#Port%2022) on which the server listens is open, from the client scan the Port 22 on the server. Use [telnet](#telnet) or [nmap](#nmap) for this.

- `telnet IPAddr PortNumber(22)`
- `nmap -p 22 IPAddr`
  - If it returns saying, "Host seems down" add the `-Pn` options and run again to get if the [Port 22](#Port%2022) is open or not.

Check if there is a [firewall](#firewall) dropping the packets.
The Linux firewall is called [netfilter](#netfilter) or [iptables](#iptables).
To check if there are any firewall rules by running; `sudo iptables -vnL`
If you suspect a firewall issue then use [ufw](#ufw).

See also: Securing the [[OpenSSH]] Server ([[SSHD]])
