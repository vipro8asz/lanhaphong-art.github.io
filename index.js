   
   var features = '';
   var searchDatabase = new SearchDatabase();
   var searchResults_length = 0;
   var searchResults = new Object();
   function searchPage(features)
   {
      var element = document.getElementById('indexSiteSearch1');
      if (element.value.length != 0 || element.value != " ")
      {
         var value = unescape(element.value);
         var keywords = value.split(" ");
         searchResults_length = 0;
         for (var i=0; i<database_length; i++)
         {
            var matches = 0;
            var words = searchDatabase[i].title + " " + searchDatabase[i].description + " " + searchDatabase[i].keywords;
            for (var j = 0; j < keywords.length; j++)
            {
               var pattern = new RegExp(keywords[j], "i");
               var result = words.search(pattern);
               if (result >= 0)
               {
                  matches++;
               }
               else
               {
                  matches = 0;
               }
            }
            if (matches == keywords.length)
            {
               searchResults[searchResults_length++] = searchDatabase[i];
            }
         }
         $('#indexSiteSearch1_dialog').dialog('open');
         $('#indexSiteSearch1_dialog').empty();
         var html = '';
         var results = '';
         html = html + '<span style="font-family:Arial;font-size:19px;color:#000000">';
         for (var n=0; n<searchResults_length; n++)
         {
            var page_keywords = searchResults[n].keywords;
            results = results + '<strong><a style="color:#0000FF" href="'+searchResults[n].url+'">'+searchResults[n].title +'<\/a><\/strong><br>Description: ' + searchResults[n].description + '<br>Keywords: ' + page_keywords +'<br><br>';
         }
         if (searchResults_length == 0)
         {
            results = 'No results';
         }
         else
         {
            html = html + searchResults_length;
            html = html + ' result(s) found for search term: ';
            html = html + value;
            html = html + '<br><br>';
         }
         html = html + results;
         html = html + '<\/span>';
         $('#indexSiteSearch1_dialog').html(html);
         $('#indexSiteSearch1_dialog').dialog('option', 'position', 'center');
      }
      return false;
   }
   function searchParseURL()
   {
      var url = decodeURIComponent(window.location.href);
      if (url.indexOf('?') > 0)
      {
         var terms = '';
         var params = url.split('?');
         var values = params[1].split('&');
         for (var i=0;i<values.length;i++)
         {
            var param = values[i].split('=');
            if (param[0] == 'q')
            {
               terms = unescape(param[1]);
               break;
            }
         }
         if (terms != '')
         {
            var element = document.getElementById('indexSiteSearch1');
            element.value = terms;
            searchPage('');
         }
      }
   }
   
   function displaylightbox(url, options)
   {
      options.items = { src: url };
      options.type = 'iframe';
      $.magnificPopup.open(options);
   }
   
   $(document).ready(function()
   {
      $("#indexPanelMenu1").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: true, display: 'overlay', position: 'top', toggle: true});
      $("#indexPanelMenu1_markup ul li a").click(function(event)
      {
          $.panel.hide($("#indexPanelMenu1_panel"));
      });
      searchParseURL();
      var $autocomplete = $('<ul class="autocomplete"></ul>').hide().insertAfter('#indexSiteSearch1');
      var selectedItem = null;
      var setSelectedItem = function(item)
      {
         selectedItem = item;
         if (selectedItem === null)
         {
            $autocomplete.hide();
            return;
         }
         if (selectedItem < 0)
         {
            selectedItem = 0;
         }
         if (selectedItem >= $autocomplete.find('li').length)
         {
            selectedItem = $autocomplete.find('li').length - 1;
         }
         $autocomplete.find('li').removeClass('selected').eq(selectedItem).addClass('selected');
         $autocomplete.css('left', $('#indexSiteSearch1').position().left);
         $autocomplete.css('top', $('#indexSiteSearch1').position().top + $('#indexSiteSearch1').outerHeight());
         $autocomplete.show();
      };
      var populateSearchField = function()
      {
         $('#indexSiteSearch1').val($autocomplete.find('li').eq(selectedItem).text());
         setSelectedItem(null);
      };
      $('#indexSiteSearch1').attr('autocomplete', 'off').keyup(function(event)
      {
         if (event.keyCode > 40 || event.keyCode == 8)
         {
            var data = new Array();
            var keywordVal = $('#indexSiteSearch1').val();
            keywordVal = keywordVal.toLowerCase();
            for (i=0; i<database_length; i++)
            {
               var words = (searchDatabase[i].title + " " + searchDatabase[i].description + " " + searchDatabase[i].keywords).toLowerCase();
               var array = words.split(" ");
               data = $.merge(data, array);
            }
   
            var unique = new Array();
            o:for(var i = 0; i < data.length; i++)
            {
               for(var j = 0; j < unique.length; j++)
               {
                  if(unique[j]==data[i]) continue o;
               }
               unique[unique.length] = data[i];
            }
   
            unique.sort();
            if (keywordVal.length && unique.length)
            {
               $autocomplete.empty();
               var item = 0;
               $.each(unique, function(index, term)
               {
                  term = term.toLowerCase();
                  if (term.indexOf(keywordVal) == 0)
                  {
                     $('<li></li>').text(term).data('item', item).appendTo($autocomplete).mouseover(function()
                     {
                        var item = $(this).data('item');
                        setSelectedItem(item);
                     }).click(populateSearchField);
                     item++;
                  }
               });
               setSelectedItem(0);
            }
            else
            {
               setSelectedItem(null);
            }
         }
         else
         if (event.keyCode == 38 && selectedItem !== null)
         {
            setSelectedItem(selectedItem - 1);
            event.preventDefault();
         }
         else
         if (event.keyCode == 40 && selectedItem !== null)
         {
            setSelectedItem(selectedItem + 1);
            event.preventDefault();
         }
         else
         if (event.keyCode == 27 && selectedItem !== null)
         {
            setSelectedItem(null);
         }
      }).keypress(function(event)
      {
         if (event.keyCode == 13 && selectedItem !== null)
         {
            populateSearchField();
            event.preventDefault();
         }
      }).blur(function(event)
      {
         setTimeout(function()
         {
            setSelectedItem(null);
         }, 250);
      });
      $("#indexSiteSearch1_dialog").dialog(
      {
         modal: true,
         width: 400,
         height: 300,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         autoOpen: false,
         buttons: 
         {
            Close: function() 
            {
               $(this).dialog('close');
            }
         }
      });
      $("#PanelMenu1").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: true, display: 'overlay', position: 'top', toggle: true});
      $("#PanelMenu1_markup ul li a").click(function(event)
      {
          $.panel.hide($("#PanelMenu1_panel"));
      });
      $("#PanelMenu2").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: true, display: 'overlay', position: 'top', toggle: true});
      $("#PanelMenu2_markup ul li a").click(function(event)
      {
          $.panel.hide($("#PanelMenu2_panel"));
      });
   });
