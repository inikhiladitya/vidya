---
created: 20211029182608430
modified: 20211031193145739
title: Troubleshooting ssh
---

### Troubleshooting [[SSH]]

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
