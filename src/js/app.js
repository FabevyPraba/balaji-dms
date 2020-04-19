var siteMapData = {
	"configuration-management":{
		"title": "Configuration Management",
		"sub-menu":[
			{
				"name": "Client Configuration",
				"link": "pages/client-cofig.html",
				"sub-links":[]
			},
			{
				"name": "Terminology Mapping",
				"link": "pages/termi-map.html",
				"sub-links":[]
			},
			{
				"name": "Master Data",
				"link": "pages/master-data.html",
				"sub-links":[
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master",
						"link": "pages/termi-map.html"
					},
					{
						"name": "Variable Master End",
						"link": "pages/termi-map.html"
					}
				]
			}
		]
	}
}

$(document).ready(function(){
  $(".dropdown-menu li").click(function(){
    var selText = $(this).text();
    $(this).parents('.drop-down-box').find('.dropdown-toggle').html(selText+' <i class="fas fa-angle-down"></i>');
  });

  $(".menu-box").click(function(e){
    e.preventDefault();
    $(".main-nav-list").show();
    $('.main-menu').hide();
    //return;
    var target = $(this).data('target'),
    menuItems = siteMapData[target]['sub-menu'],
    $menuParent = $('.main-nav-list'),
    $menu = $("<ul/>"),
    $list, $subMenu, $subMenuList, $navList, $navTitle;

    //Form Title
    $navTitle = $menuParent.find('.nav-title').find('h3');
    $navTitle.text(siteMapData[target]['title'])

    //Form Navigation
    $navList = $menuParent.find('.nav-list');
    $navList.html("");

    menuItems.forEach(function(menuItem, index){

      $list = $("<li><a href='"+menuItem.link+"' class='map-txt'>"+menuItem.name+"</a></li>");
      
      if (menuItem['sub-links'].length){

        $list.find('a').removeClass('map-txt').addClass('data-txt');
        $subMenu = $("<ul/>");
        
        menuItem['sub-links'].forEach(function(subLink, ind){
          $subMenuList = $("<li><a href='"+subLink.link+"'>"+subLink.name+"</a></li>");
          $subMenu.append($subMenuList);
        });
        
        $list.append($subMenu); 
      }
      $menu.append($list);
    });

    $navList.append($menu);
    $(".main-nav-list").show();
    $('.main-menu').hide();

    $(".nav-list").mCustomScrollbar({
      setHeight: $(window).outerHeight() - $(".nav-title").outerHeight() - $('.header-sec').outerHeight(),
      theme:"minimal-dark"
    });
  });
  $('.back-btn').click(function(e){
    e.preventDefault();
    $(".main-nav-list").hide();
    $('.main-menu').show();
    return false;
  })

});