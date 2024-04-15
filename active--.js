document.addEventListener("DOMContentLoaded", function () {
  function updateRowStatus() {
    var table = document.getElementById("customerTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
      var statusCell = rows[i].getElementsByTagName("td")[5];

      if (statusCell.textContent.trim() === "Inactive") {
        statusCell.classList.add("inactive");
        statusCell.classList.remove("active");
      } else if (statusCell.textContent.trim() === "Active") {
        statusCell.classList.add("active");
        statusCell.classList.remove("inactive");
      }
    }
  }

  updateRowStatus();

  var observer = new MutationObserver(updateRowStatus);
  observer.observe(
    document.getElementById("customerTable").getElementsByTagName("tbody")[0],
    { childList: true }
  );
});
