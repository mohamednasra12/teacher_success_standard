

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  //=========== Active sidebar dashboard =============
  const currentLocationDashboard = location.href;
  const menuItemDashboard = document.querySelectorAll(
    ".sidebar .nav-pills .nav-item .collapse"
  );
  const menuChildDashboard = document.querySelectorAll(
    ".sidebar .nav-pills .nav-item ul li .nav-link"
  );
  const menuLengthDashboard = menuChildDashboard.length;
  for (let i = 0; i < menuLengthDashboard; i++) {
    if (menuChildDashboard[i].href === currentLocationDashboard) {
      menuChildDashboard[i].className = "nav-link active";
      menuChildDashboard[i].parentElement.parentElement.className =
        "flex-column collapse show";
    }
  }
  //=========== Active sidebar dashboard =============
  
  //=========== sidebar toggle =============
  const sideBar = document.querySelector(".sidebar");
  const toggler = document.querySelector(".menu");
  toggler.addEventListener("click", function () {
    sideBar.classList.toggle("open");
  });

  
  $(document).ready(function () {
    $(".close").on("click", function () {
      $(".sidebar.open .nav-pills .nav-item ul").removeClass("show");
    });
  });

 

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
  }
});
  


  // Get references to the button and the sidebar
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const sidebar = document.querySelector('.sidebar');

  // Add a click event listener to the button
  closeSidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open'); // Toggle the 'open' class on the sidebar
  });
