var siteMapData = {
  "configuration-management": {
    title: "Configuration Management",
    "sub-menu": [
      {
        name: "Client Configuration",
        link: "/pages/client-configuration/index.html",
        "sub-links": [],
      }, /*
      {
        name: "Terminology Mapping",
        link: "/pages/client-configuration/",
        "sub-links": [],
      }, */
      {
        name: "Master Data",
        "sub-links": [
          {
            name: "Variable Master",
            link: "/pages/client-configuration/variable-master.html",
          },
          {
            name: "Allowed values",
            link: "/pages/client-configuration/variables-allowed-values.html",
          },
          {
            name: "Product Master",
            link: "/pages/client-configuration/product-master.html",
          },
          {
            name: "LOB Master",
            link: "/pages/client-configuration/lob-master.html",
          },
          {
            name: "Default list of questions for a Channel / Agency type",
            link: "/pages/client-configuration/list-of-channels.html",
          },
          {
            name: "Default list of questions for a Channel / Agent type",
            link: "/pages/client-configuration/list-of-channels-agent-type.html",
          },
          {
            name: "Default list of exams for a License type",
            link: "/pages/client-configuration/maintain-default-list-of-exams.html",
          },
          {
            name: "Default list of exams for a Designation",
            link: "/pages/client-configuration/list-of-designations.html",
          },
          {
            name: "Default list of trainings for a License type",
            link: "/pages/client-configuration/list-of-license-types.html",
          },
          {
            name: "Default list of trainings for a Designation",
            link: "/pages/client-configuration/list-of-designations-training.html",
          },
          {
            name: "Grouping of Designation-ids",
            link: "/pages/client-configuration/list-of-grouping-of-designation.html",
          },
          {
            name: "Business event Master",
            link: "/pages/client-configuration/list-of-business-events.html",
          }
        ]
      }
    ]
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
    "sub-menu":[{
        name: "Secondary Compensation Plan Configuration",
        link: "/pages/secondary-compensation/secondary-compensation-plan-list.html",
        "sub-links": [],
      }]
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

  // Update Local Storage
  if (typeof(Storage) !== "undefined") {
    
    //Variables
    var pageURL,
        recentPages,
        firstLevelData,
        pageInfo;

    //Get local data
    recentPages = JSON.parse(localStorage.getItem("recentPages") || "[]");
    console.log(recentPages);

    //Get file name
    pageURL = window.location.pathname;

    //Find page data
	  for (const firstLevelKey in siteMapData) {
      firstLevelData = siteMapData[firstLevelKey];
      firstLevelData['sub-menu'].forEach(function(secondLevelData){
        if(secondLevelData['sub-links'].length){
          //Loop Sublink
          secondLevelData['sub-links'].forEach(function(thirdLevelData){
            if(thirdLevelData['link'] == pageURL ){
              pageInfo = thirdLevelData;
            }
          });
        }else{
          if(secondLevelData['link'] == pageURL){
            pageInfo = secondLevelData;
          }
        }
      });
    }
    
    //console.log(pageInfo);

    //Remove if available in local storage
    recentPages.forEach(function(recentPage, index){
      if(recentPage!== null && recentPage.link == pageURL)
        recentPages.splice(index, 1);
    });

    //Push to top
    recentPages.unshift(pageInfo);

    localStorage.setItem("recentPages", JSON.stringify(recentPages));

  }

  $('.clock-icon').click(function(e){
    e.preventDefault();
    var $resultLists = $("<ul/>"),
    recentPages = JSON.parse(localStorage.getItem("recentPages") || "[]");

    // Update Title
    $('.nav-title').find('h3').text('Recently Viewed');
    
    // Form Result
	  recentPages.forEach(function (resultItem, index) {
      if(typeof resultItem === 'object' && resultItem !== null){
        
        $resultList = $(
          "<li><a href='" +
          resultItem.link +
          "' class='map-txt'>" +
          resultItem.name +
          "</a></li>"
        );
        $resultLists.append($resultList);
      }
	  });

    $('.nav-list').html('');
    $('.nav-list').append($resultLists);

    // Hide Main menu
    // Show Sub menu    
    $(".main-nav-list").show();
    $(".main-menu").hide();

    $(".nav-list").mCustomScrollbar({
      setHeight:
        $(window).outerHeight() - 80 -
        $(".nav-title").outerHeight() -
        $(".header-sec").outerHeight(),
      theme: "minimal-dark",
    });

  });

  $('.main-content-wrapper').css({
    'min-height': $(window).outerHeight() - $('.header-sec').outerHeight() - $('.footer-sec').outerHeight()
  });


  $('.row-action-wrapper').click(function(e){
    e.preventDefault();
    $('.edit-part').hide();
    $(this).find('.edit-part').show();
  })

  //Set height for main section
  $('.main-content-body').css({
    'min-height': $('.main-content-wrapper').outerHeight() - 80 - $('.main-content-header').outerHeight()
  });
  
  //$('.main-content-body').mCustomScrollbar();
  
  
  $(".dropdown-menu li").click(function () {
    var selText = $(this).text();
    $(this)
      .parents(".drop-down-box")
      .find(".dropdown-toggle")
      .html(selText + ' <i class="icon-right-open"></i>');

    $(this).siblings('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  $(window).on('shown.bs.modal', function() { 
    var $modalEle = $(".partial-model-box.show"),
        modalBodyHeight =  $(window).outerHeight() - 50 - $modalEle.find('.modal-head').outerHeight();
    
    $modalEle.find('.modal-body').css('height', modalBodyHeight);

  });

  function resetMainNavigation(){
    $(".main-nav-list").hide();
    $(".main-menu").show();
    $('.searh-box').val('');
    $('.menu-list').find('.d-none').removeClass('d-none');
  }

  $('#main-navigation').on('show.bs.collapse', function () {
    console.log("yes");
    resetMainNavigation();
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
            `<li><a href='${subLink.link}'><i class='icon-button_ico_rightarrow'></i>${subLink.name}</a></li>`
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
  $(".nav-title .icon-left-open").click(function (e) {
    e.preventDefault();
    $(".main-nav-list").hide();
    $(".main-menu").show();
    return false;
  });

  $('.custom-control-input').click(function(){
    var $this = $(this);
    if($this.prop("checked") == true){
        $this.closest('table').addClass('show-checkbox');
    }
});

  //Search in Main Navigation
  var typingTimer; //timer identifier
  var doneTypingInterval = 500; //time in ms, 5 second for example
  var $searchInput = $(".searh-box");

  //on keyup, start the countdown
  $searchInput.on("keyup", function () {
	  clearTimeout(typingTimer);
    typingTimer = setTimeout(doneSearchTyping, doneTypingInterval);
  });

  //on keydown, clear the countdown
  $searchInput.on("keydown", function () {
	  clearTimeout(typingTimer);
  });

  //user is "finished typing," do something
  function doneSearchTyping() {
	  var searchKeyword = $searchInput.val(),
		  firstLevelData, $resultList,
      resultArray = [];
    
      if(searchKeyword == ""){
        resetMainNavigation();
        return false;
      }
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
		  "<li><a href='" + resultItem.link + "' class='map-txt'>" + resultItem.name + "</a></li>"
		);
		$resultLists.append($resultList);
	  });

  }

  // Drop-Down Collapse
  $(document).click(function(event){  
    if (!$(event.target).closest(".collapse").length) {
      $("body").find(".collapse").removeClass("show");
    }
    console.log($(event.target).closest(".row-action-wrapper").length)
    if (!$(event.target).closest(".row-action-wrapper").length) {
      $('.edit-part').hide();
    }
  });

});



window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

// Reset-Form
$(".reset-btn").click(function(){
    $(".needs-validation").trigger("reset");
});