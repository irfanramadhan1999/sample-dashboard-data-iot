$(document).ready(function () {
  let table = document.getElementById('myTable');
  $.ajax({
    url: "https://api-waterlevelmonitoring-production.up.railway.app/sensor",
    success: function (result) {
     let temp = `
      <tr>
            <th>id</th>
            <th>Sensor 1</th>
            <th>Sensor 2</th>
            <th>Waterpump 1</th>
            <th>Waterpump 2</th>
            <th>Waktu</th>
            <th>Hapus</th>
          </tr>
     `;

     result.data.forEach((e) => {
        temp += `
           <tr>
            <td>${e["id"]}</td>
            <td>${e["sensor1"]}</td>
            <td>${e["sensor2"]}</td>
            <td>${e["waterpump1"]}</td>
            <td>${e["waterpump2"]}</td>
            <td>${e["waktu"]}</td>
            <td><a href="" class="btn btn-primary">hapus</a></td>
          </tr>
        `;
     });
     table.innerHTML = temp
    },
  });
});
