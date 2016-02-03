
function load_content(url){
  //document.getElementById("content-id").innerHTML='<object type="text/html" data="' + url +'" ></object>';
  $("#content-id").load(url);
}

function bind_dropdown_menu(){
  $("#version-menu .dropdown-menu li a").click(function(){
    $("#version-menu .btn:first-child").html($(this).text() + ' <span class="caret"></span>');
    $("#version-menu .btn:first-child").val($(this).text());
    var version_map = info_map['version_map'];
    info['version'] = version_map[$(this).text()];
  });
  $("#volumn-menu .dropdown-menu li a").click(function(){
    $("#volumn-menu .btn:first-child").html($(this).text() + ' <span class="caret"></span>');
    $("#volumn-menu .btn:first-child").val($(this).text());
    var chapter_map = info_map['chapter_map'];
    info['short'] = $(this).text();
    var chapter_num = chapter_map[$(this).text()];
    for (var i=1; i <= chapter_num; ++i){
      var li = $('<li><a>'+ i.toString() + '</a></li>');
      $("#chapter-menu .dropdown-menu").append(li);
    }
    bind_dynamic();
  });
}

function bind_dynamic(){
  $("#chapter-menu .dropdown-menu li a").click(function(){
    $("#chapter-menu .btn:first-child").html($(this).text() + ' <span class="caret"></span>');
    $("#chapter-menu .btn:first-child").val($(this).text());
    info['chapter'] = $(this).text();
    var url = '/welcome/chapter/' + info['version'] + '/' + info['short'] + '/' + info['chapter'];
    load_content(url);
  });
}

function init_info(){
  info_map = new Object();
  info_map['version_map'] = {'新标点和合本:上帝版':47, '新标点和合本:神版':48, '和合本修订版':140, '新译本':41}
  //info_map['short_map'] = {'gen':,'exo':,'lev':,'num':,'deu':,'jos':,'jug':,'rut':,'samuel':,'samuel':,'1ki':,'2ki':,'chronicles':,'chronicles':,'ezr    ':,'neh':,'est':,'job':,'psa':,'pro':,'ecc':,'of':,'isa':,'jer':,'lam':,'eze':,'dan':,'hos':,'joe':,'amo':,'oba':,'jon':,'    mic':,'nah':,'hab':,'zep':,'hag':,'zec':,'mal':,'mat':,'mak':,'luk':,'jhn':,'act':,'rom':,'1co':,'2co':,'gal':,'eph':,'phl    ':,'col':,'1ts':,'2ts':,'1ti':,'2ti':,'tit':,'phm':,'heb':,'jas':,'1pe':,'2pe':,'1jn':,'2jn':,'3jn':,'jud':,'rev':,}
  info_map['chapter_map'] = {'gen':50,'exo':40,'lev':27,'num':36,'deu':34,'jos':24,'jug':21,'rut':4,'1sa':31,'2sa':24,'1ki':22,'2ki':25,'1ch':29,'2ch':36,'ezr':10,'neh':13,'est':10,'job':42,'psa':150,'pro':31,'ecc':12,'of':8,'isa':66,'jer':52,'lam':5,'eze':48,'dan':12,'hos':14,'joe':3,'amo':9,'oba':1,'jon':4,'mic':7,'nah':3,'hab':3,'zep':3,'hag':2,'zec':14,'mal':4,'mat':28,'mak':16,'luk':24,'jhn':21,'act':28,'rom':16,'1co':16,'2co':13,'gal':6,'eph':6,'phl':4,'col':4,'1ts':5,'2ts':3,'1ti':6,'2ti':4,'tit':3,'phm':1,'heb':13,'jas':5,'1pe':5,'2pe':3,'1jn':5,'2jn':1,'3jn':1,'jud':1,'rev':22}
}

function init_dropdown_menu(){
  for (var key in info_map['version_map']) {
    var li = $('<li><a>'+ key + '</a></li>')
    $("#version-menu .dropdown-menu").append(li);
  }
  for (var key in info_map['chapter_map']) {
    var li = $('<li><a>'+ key + '</a></li>');
    $("#volumn-menu .dropdown-menu").append(li);
  }
}

$( document ).ready(function(){
  info = new Object();
  init_info();
  init_dropdown_menu();
  bind_dropdown_menu();
});

