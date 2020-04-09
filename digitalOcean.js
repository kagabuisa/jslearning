const report = {
  "action": {
    "id": 911828039,
    "status": "in-progress",
    "type": "snapshot",
    "started_at": "2020-04-08T10:43:11Z",
    "completed_at": null,
    "resource_id": 187330960,
    "resource_type": "droplet",
    "region": {
      "name": "Frankfurt 1",
      "slug": "fra1",
      "features": ["private_networking", "backups", "ipv6", "metadata", "install_agent", "storage", "image_transfer"],
      "available": true,
      "sizes": ["s-1vcpu-1gb", "512mb", "s-1vcpu-2gb", "1gb", "s-3vcpu-1gb", "s-2vcpu-2gb", "s-1vcpu-3gb", "s-2vcpu-4gb", "2gb", "s-4vcpu-8gb", "m-1vcpu-8gb", "c-2", "4gb", "g-2vcpu-8gb", "gd-2vcpu-8gb", "m-16gb", "s-6vcpu-16gb", "c-4", "8gb", "m-2vcpu-16gb", "m3-2vcpu-16gb", "g-4vcpu-16gb", "gd-4vcpu-16gb", "m6-2vcpu-16gb", "m-32gb", "s-8vcpu-32gb", "c-8", "16gb", "m-4vcpu-32gb", "m3-4vcpu-32gb", "g-8vcpu-32gb", "s-12vcpu-48gb", "gd-8vcpu-32gb", "m6-4vcpu-32gb", "m-64gb", "s-16vcpu-64gb", "c-16", "32gb", "m-8vcpu-64gb", "m3-8vcpu-64gb", "g-16vcpu-64gb", "s-20vcpu-96gb", "48gb", "gd-16vcpu-64gb", "m6-8vcpu-64gb", "m-128gb", "s-24vcpu-128gb", "c-32", "64gb", "m-16vcpu-128gb", "m3-16vcpu-128gb", "s-32vcpu-192gb", "m-24vcpu-192gb", "m-224gb", "m6-16vcpu-128gb", "m3-24vcpu-192gb", "m6-24vcpu-192gb"]
    },
    "region_slug": "fra1"
  }
}

//const obj = JSON.parse(report)

function createSnapshot() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer b55f0a04ae134281f185d86f0e2f5456baa43a6dfddb7edc3cbf30a5877c1985");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "__cfduid=dcea941712d2e0d1fbac975de663b92ac1586247452");

  var raw = JSON.stringify({
    "type": "snapshot",
    "name": `New Snopshot on ${role}`
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.digitalocean.com/v2/droplets/187330960/actions", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

//createSnapshot();
var settings = {
  "url": "https://api.digitalocean.com/v2/droplets/187330960/actions",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer b55f0a04ae134281f185d86f0e2f5456baa43a6dfddb7edc3cbf30a5877c1985",
    "Content-Type": "application/json",
    "Cookie": "__cfduid=dcea941712d2e0d1fbac975de663b92ac1586247452"
  },
  "data": JSON.stringify({
    "type": "snapshot",
    "name": "Nifty New Snapshot"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


//Digital Ocean reposts
let doReport = {
  "action": {
    "id": 911899464,
    "status": "in-progress",
    "type": "snapshot",
    "started_at": "2020-04-08T13:16:05Z",
    "completed_at":""
  }
}