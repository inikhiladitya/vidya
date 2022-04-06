---
created: 20211029071146352
modified: 20211031193141983
title: ifconfig
---

- `areas:` [[Linux]],[[Networking]]

---

`ifconfig` (interface configuration) command is used to configure the kernel-resident network interfaces. It is used at the boot time to set up the interfaces as necessary. After that, it is usually used when needed during debugging or when you need system tuning. Also, this command is used to assign the IP address and netmask to an interface or to enable or disable a given interface.

- `ifconfig` cannot display [default gateway](#default%20gateway) nor the [DNS Server](#DNS%20Server) but the [route](#route) command from `net-tools` can do it.
- Newer alternative to `ifconfig` is [ip](#ip)

### Examples

- To display a list of network interfaces and the associated [IP Address](#IP%20Address):
  - `ifconfig -a` -a flag makes it display info about all interfaces but enabled and disabled. If you omit `-a` flag it'll display info only about enabled interfaces.
- Also displays how many packets and bytes were recieved and transmitted on each inteface.
- To get info about specific network inteface:
  - `ifconfig enp0s3`
- To turn an interface off/on:
  - `ifconfig enp0s3 down`
  - The interface will be down(disabled) and will not be previewed when ran `ifconfig`, use `ifconfig -a` to display it.
- To assign a new [IP Address](#IP%20Address);
  - `ifconfig enp0s3 192.168.0.111/24 up` `/24` is the [network mask](#netmask)
- To change the [MAC](#MAC) Address:
  - Disable the interface: `ifconfig enp0s3 down`
  - `ifconfig enp0s3 hw ether 08:00:27:51:05:09`
  - Bring the interface back up: `ifconfig enp0s3 up`
