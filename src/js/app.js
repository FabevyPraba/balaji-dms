var siteMapData = {
  "configuration-management": {
    title: "Configuration Management",
    "sub-menu": [
      {
        name: "Client Configuration",
        link: "pages/client-cofig.html",
        "sub-links": [],
      },
      {
        name: "Terminology Mapping",
        link: "pages/termi-map.html",
        "sub-links": [],
      },
      {
        name: "Master Data",
        "sub-links": [
          {
            name: "Variable Master 1",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 2",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 3",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 4",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 5",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 6",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 7",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 8",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 9",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 10",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 11",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 12",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 13",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 14",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 15",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 16",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 17",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 18",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 19",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 20",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 21",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 22",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 23",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 24",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 25",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master 26",
            link: "pages/termi-map.html",
          },
          {
            name: "Variable Master End",
            link: "pages/termi-map.html",
          },
        ],
      },
    ],
  },
  "channel-management": {
    title: "Channel Management",
    "sub-menu":[]
  },
  "movements": {
    title: "Movements",
    "sub-menu":[]
  },
  "primary-compensation": {
    title: "Primary Compensation",
    "sub-menu":[]
  },
  "secondary-compensation": {
    title: "Secondary Compensation",
    "sub-menu":[]
  },
  "campaigns-contest": {
    title: "Campaigns / Contest",
    "sub-menu":[]
  },
  "business-process-management": {
    title: "Business Process Management",
    "sub-menu":[]
  },
  "document-management": {
    title: "Document Management",
    "sub-menu":[]
  },
  "performance-management": {
    title: "Performance Management",
    "sub-menu":[]
  },
  "file-upload": {
    title: "File Upload",
    "sub-menu":[]
  },
  "file-download": {
    title: "File Download",
    "sub-menu":[]
  },
  "batch-jobs": {
    title: "Batch Jobs",
    "sub-menu":[]
  },
  "user-management": {
    title: "User Management",
    "sub-menu":[]
  },
  "ai-based-analytics": {
    title: "AI based Analytics",
    "sub-menu":[]
  }
};

$(document).ready(function () {
  $(".dropdown-menu li").click(function () {
    var selText = $(this).text();
    $(this)
      .parents(".drop-down-box")
      .find(".dropdown-toggle")
      .html(selText + ' <i class="fas fa-angle-down"></i>');
  });

  //Main Navigation
  $(".menu-box").click(function (e) {
    e.preventDefault();
    $(".main-nav-list").show();
    $(".main-menu").hide();
    //return;
    var target = $(this).data("target"),
      menuItems = siteMapData[target]["sub-menu"],
      $menuParent = $(".main-nav-list"),
      $menu = $("<ul/>"),
      $list,
      $subMenu,
      $subMenuList,
      $navList,
      $navTitle;

    //Form Title
    $navTitle = $menuParent.find(".nav-title").find("h3");
    $navTitle.text(siteMapData[target]["title"]);

    //Form Navigation
    $navList = $menuParent.find(".nav-list");
    $navList.html("");

    menuItems.forEach(function (menuItem, index) {
      $list = $(
        "<li><a href='" +
          menuItem.link +
          "' class='map-txt'>" +
          menuItem.name +
          "</a></li>"
      );

      if (menuItem["sub-links"].length) {
        $list.find("a").removeClass("map-txt").addClass("data-txt");
        $subMenu = $("<ul/>");

        menuItem["sub-links"].forEach(function (subLink, ind) {
          $subMenuList = $(
            "<li><a href='" + subLink.link + "'>" + subLink.name + "</a></li>"
          );
          $subMenu.append($subMenuList);
        });

        $list.append($subMenu);
      }
      $menu.append($list);
    });

    $navList.append($menu);
    $(".main-nav-list").show();
    $(".main-menu").hide();

    $(".nav-list").mCustomScrollbar({
      setHeight:
        $(window).outerHeight() -
        $(".nav-title").outerHeight() -
        $(".header-sec").outerHeight(),
      theme: "minimal-dark",
    });
  });
  $(".back-btn").click(function (e) {
    e.preventDefault();
    $(".main-nav-list").hide();
    $(".main-menu").show();
    return false;
  });

  //Search in Main Navigation
  var typingTimer; //timer identifier
  var doneTypingInterval = 500; //time in ms, 5 second for example
  var $searchInput = $(".searh-box");

  //on keyup, start the countdown
  $searchInput.on("keyup", function () {
	  clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  //on keydown, clear the countdown
  $searchInput.on("keydown", function () {
	  clearTimeout(typingTimer);
  });

  //user is "finished typing," do something
  function doneTyping() {
	  var searchKeyword = $searchInput.val(),
		  firstLevelData, $resultList,
		  resultArray = [];

    // Plot main menu 
      //Hide all 'menu-cont' parent
    $('.menu-cont').each(function(){
      $(this).parent().addClass('d-none');
    });
	  for (const firstLevelKey in siteMapData) {
      if(siteMapData[firstLevelKey].title.toLowerCase().indexOf(searchKeyword.toLowerCase()) >= 0){
        //show currosponding 'menu-cont' parent
        $('.menu-box[data-target="'+ firstLevelKey +'"]').parent('.menu-cont').parent().removeClass('d-none');
      }
    }
    // Plot sub menu

	  for (const firstLevelKey in siteMapData) {
		firstLevelData = siteMapData[firstLevelKey];
		firstLevelData['sub-menu'].forEach(function(secondLevelData){
			if(secondLevelData['sub-links'].length){
				//Loop Sublink
				secondLevelData['sub-links'].forEach(function(thirdLevelData){
					if(thirdLevelData['name'].indexOf(searchKeyword) >= 0){
						resultArray.push(thirdLevelData);
						//console.log(thirdLevelData);
					}
				});
			}else{
				//Check 'name'
				if(secondLevelData['name'].indexOf(searchKeyword) >= 0){
					resultArray.push(secondLevelData);
					//console.log(secondLevelData);
				}
			}
		});
	  }
	  console.log(resultArray);
	  //Form Submenu
	  var $resultLists = $("<ul/>");
	  resultArray.forEach(function (resultItem, index) {
		$resultList = $(
		  "<li><a href='" +
		  resultItem.link +
			"' class='map-txt'>" +
			resultItem.name +
			"</a></li>"
		);
		$resultLists.append($resultList);
	  });

  }
});
