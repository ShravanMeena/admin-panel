//Notifications Data here
document.addEventListener("DOMContentLoaded", (event) => {
  function getNotificationData() {
    //This code will show awailable notifications
    const apiUrl = "https://e-scholarapis.herokuapp.com/notification"; // site that doesn’t send Access-Control-*
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + apiUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }) // https://cors-anywhere.herokuapp.com/https://example.com
      .then((response) => response.text())
      .then((contents) => {
        console.log(`success  ${contents}`);
        var obj = JSON.parse(contents);
        var notification = document.querySelector("#notification");

        for (j = 0; j < obj.data.length; j++) {
          var parentDiv = document.createElement("div");
          var div1 = document.createElement("div");
          div1.innerHTML = obj.data[j].title;
          parentDiv.appendChild(div1);
          var div2 = document.createElement("div");
          var i1 = document.createElement("i");
          i1.setAttribute("class", "fa fa-trash");
          div2.appendChild(i1);
          var i2 = document.createElement("i");
          i2.setAttribute("class", "fa fa-edit");
          div2.appendChild(i2);
          parentDiv.appendChild(div2);
          notification.appendChild(parentDiv);
        }
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }

  document.querySelector("#addNotification").addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const url = document.querySelector("#url").value;
    if (!title && !url) {
      document.querySelector("#failedMessage").innerHTML =
        "Please provide some inputs";
      return;
    }
    const data = { title: title, url: url };
    const apiUrl = "https://e-scholarapis.herokuapp.com/notification"; // site that doesn’t send Access-Control-*
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + apiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((contents) => {
        // var obj = JSON.parse(contents);
        // var notification = document.querySelector('#notification')
        document.querySelector("#successMessage").innerHTML =
          "Data Entered Successfully";
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );

    getNotificationData();
  });
  getNotificationData();
});

//Notifications Data  End here

// Data here
