# Overview
Print Tracker has several different components that work together to provide you with access to your printer data. Some of these components are web-based, others are installed within customer networks. You can find the system requirements for each component below.

## Webadmin
The webadmin is the web-based interface that you use to manage your Print Tracker account. It is available at [https://app.printtrackerpro.com](https://app.printtrackerpro.com). The webadmin is available on all major browsers and operating systems except Safari. We recommend using the latest version of Chrome, Firefox.

## Data Collection Agent
The data collection agent is a lightweight application that runs as a Windows service inside an end-customer network. It is completely self-contained and does not require any third-party applications or services to come pre-installed on the machine.

### System Requirements
Many of the following system requirements depend on the number of devices that are going to be tracked by this data collection agent. For networks with less than 100 devices, the minimum system requirements should be sufficient. For all other network sizes, we recommend that you install the data collection agent on a machine that meets the recommended system requirements.

|| Minimum          | Recommended                         |     |
|------------------|-------------------------------------|------------|
| Operating System | Windows[^1] or macOS |     |
| CPU              | 1 GHz x 2 Cores                     | 3 GHz x 4 Cores |
| Memory           | 2 GB                                | 4 GB |
| Disk             | 2 GB HDD                            | 10 GB SSD|
| Browser          | Chrome, Firefox                     | Chrome, Firefox |
|Other Considerations | The data collection agent should not be installed on a laptop or any other machine that frequently shuts down, or the reliability may be affected.||

### Network Requirements
:::info
Print Tracker Pro does not require any port-forwarding rules or special networking configurations in order to operate normally. All network traffic regardless of protocol is at least TLS encrypted, while the majority of network traffic is encrypted using mTLS.
:::

Data collection requires internet connectivity in order for meters and alerts to be uploaded to app.printtrackerpro.com. Our agents require access to the following domains which may need to be whitelisted in your network configuration:

|Domain|Protocol|Port|Purpose|
|--|--|--|--|
|dcam.printtrackerpro.com|gRPC streaming (uses HTTP/2 as a transport)|443|Allows data collection agents to receive jobs, upload meters, and fire alerts.|
|csr.printtrackerpro.com|gRPC (uses HTTP/2 as a transport)|443|Allows data collection agents to register under entities that you configure.|
|hc.printtrackerpro.com|HTTP|443|Allows data collection agents to report their health status.|
|api.printtrackerpro.com|HTTP|443|Allows data collection agents to upload trouble reports.|
|www.cdn.printtrackerpro.com|HTTP|443|Allows data collection agents to automatically upgrade themselves.|
|www.googleapis.com|HTTP|443|Allows data collection agents to download Chromium, the browser used for web-based data collection.|
|remotetechnician.printtrackerpro.com|Proprietary|6000|Allows authenticated users to remotely access device embedded webservers if the feature is enabled.|

[//]: # (If [Advanced Troubleshooting Mode]&#40;../security/advanced-troubleshooting-mode.md&#41; is enabled, you will need to make sure your network is compatible with the [Tailscale]&#40;https://tailscale.com/kb/1082/firewall-ports/#what-if-i-really-really-want-to-specify-the-hostnames-that-tailscale-uses-to-operate-its-service&#41; network requirements.)

[^1]: Print Tracker Pro runs on all versions of Windows that are actively supported by Microsoft and have not reached end-of-life.
