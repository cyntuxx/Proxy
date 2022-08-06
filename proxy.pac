function FindProxyForURL(url, host) {
   // Adressen, die auf example.com liegen, brauchen keinen Proxy:
   if (shExpMatch(host,"*.youtube.com") || shExpMatch(host,"*.spiegel.de") || shExpMatch(host,"*.focus.de")) {
      return "PROXY 85.214.48.139:3128;";
   }
   if (shExpMatch(host,"whatismyipaddress.com")) {
      return "PROXY 85.214.48.139:3128; DIRECT";
   }

   return "DIRECT";
}
