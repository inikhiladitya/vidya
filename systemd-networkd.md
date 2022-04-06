---
created: 20211029082117660
modified: 20211031193145275
title: systemd-networkd
---

- `areas:` [[Networking]],[[Linux]]

---

`systemd-networkd` is a system [daemon](#daemon) that manages network configurations. It detects and configures network devices as they appear; it can also create virtual network devices. This service can be especially useful to set up complex network configurations for a container managed by [systemd-nspawn](#systemd-nspawn) or for virtual machines. It also works fine on simple connections.

> —via [systemd-networkd - ArchWiki](https://wiki.archlinux.org/title/systemd-networkd)

A network interface can either be managed by [NetworkManager](#NetworkManager) or by [systemd-networkd](#systemd-networkd)

Setting up static

- Disable [NetworkManager](#NetworkManager)
  - `sudo systemctl stop NetworkManager`
  - `sudo systemctl disable NetworkManager`
  - check with `sudo systemctl status NetworkManager` and `sudo systemctl is-enabled NetworkManager`
- Create a [YAML](#YAML) in [/etc/netplan](#%2Fetc%2Fnetplan), before that you might want to remove the existing [YAML](#YAML) file that was created for NetworkManager to avoid interference.
- `vim /etc/netplan/01-netconfig.yaml`
- Each netplan [YAML](#YAML) file starts with the `network` keyword and at least 3 required elements:
  - `version` of the network configuration format
  - `renderer`
  - device type (`ethernets`, `wifis`,`bridges`)
    - under the devices type you specify one or more network interfaces
      - `dhcp4` as false(for static configuration)
      - `addresses` ([IP Address](#IP%20Address) with [netmask](#netmask))
      - `gateway4` (default gateway)
      - `nameservers`
- Save and exit, to apply `netplan apply`
- Verify changes `ifconfig` and `route -n`
- Be careful about [YAML](#YAML)'s indentation and syntax (use an online YAML validator)

### Examples for YAML file configurations

Configure an ethernet device with networkd, identified by its name, and enable
DHCP:

    network:
      version: 2
      ethernets:
        eno1:
          dhcp4: true

This is an example of a static-configured interface with multiple IPv4 addresses
and multiple gateways with networkd, with equal route metric levels, and static
DNS nameservers (Google DNS for this example):

    network:
      version: 2
      renderer: networkd
      ethernets:
        eno1:
          addresses:
          - 10.0.0.10/24
          - 11.0.0.11/24
          nameservers:
            addresses:
              - 8.8.8.8
              - 8.8.4.4
          routes:
          - to: 0.0.0.0/0
            via: 10.0.0.1
            metric: 100
          - to: 0.0.0.0/0
            via: 11.0.0.1
            metric: 100

> —via [Netplan Backend-agnostic network configuration in YAML](https://netplan.io/reference/)
