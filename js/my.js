$( document ).ready(function() {


// Application Tooltips


/*

$('#contract1').popover({
  trigger: 'hover',
  html: true,
  placement: 'bottom',
  content: 'Contact Information.'
});

$('#portfolio1').popover({
  trigger: 'hover',
  html: true,
  placement: 'bottom',
  content: 'Samples of my work.'
});

$('#about1').popover({
  trigger: 'hover',
  html: true,
  placement: 'bottom',
  content: 'Bio'
});

$('#portpanel1').popover({
  trigger: 'hover',
  html: true,
  placement: 'bottom',
  content: 'Applications in this group are drawn from two data sources. The first is from an API provided by the ESPN Development Center and the remaining items are from RSS feeds. All of the items in this group are "live".<br> '
});

$('#portpanel2').popover({
  trigger: 'hover',
  html: true,
  placement: 'bottom',
  content: 'These Drupal applications are samples of the applications while I was working at AZ National Guard. Currently these applications are hosted on www.getpantheon.com. They can be a bit slow to load and should require the following credentials.  id:curtin.stephen@outlook.com password:April1955  to access the content. Again I caution they may be slow in loading initially, but eventually they will load. I will be looking to move these applications over to my hosting provider - Digital Ocean'
});


$('#portpanel5').popover({
  trigger: 'hover',
  html: true,
  placement: 'bottom',
  content: 'There are two items in this group. It contains my resume. In the second document, I take all of the IT skills I have and created a matrix of when these tools were used last'
});

$('#portpanel4').popover({
  trigger: 'hover',
  html: true,
  placement: 'bottom',
  content: 'The first item in this group is a PHP/Bootstrap report of all movies on our home server. Using an API provided by IMDB, I was able to match the movies on my server with the actual details of the movies and include a link to the movies information on IMDB.'
});

*/

$("#collapseAccordion").on("click", function() {
    $("#collapseOne").collapse('hide');
	$("#collapseTwo").collapse('hide');
	$("#collapseThree").collapse('hide'); 
	$("#collapseFive").collapse('hide');
 
});

 



// ESPN Web API Access Routine For MLB - News

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {


					 
				if ($(e.target).attr("href") == "#profile1")  {
				
				
				
					 
				
				
		 
		 
				$.ajax
				
				({  
				 
				  
					url: "http://api.espn.com/v1/sports/baseball/mlb/news/",
					data: {
						// enter your developer api key here
						apikey: "davjbw9d8ztuyvf9kvtfueg6",
						// the type of data you're expecting back from the api
						_accept: "application/json"
					},
					dataType: "jsonp",
					success: function(data) {
						 
						
						strHTML="";
						strHTML+="<table class='table table-striped table-responsive col-sm-12 center ' >";
						
						
						$.each(data.headlines, function() {
									  strHTML+="<tr><td><a href='" + this.links.web.href + "' target='_blank'>" + this.linkText + "</a></td></tr>";	
						});	 
						
						
						strHTML+="</table>";
						
						
					
						$("#profile1").html(strHTML);		
						 
						
						 
						},
						error: function() {
							 // handle the error
							echo("error");
						}
				
				});

				}
});	



// ESPN Web API Access Routine For NFL - News
 
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

 
				
				
				
				if ($(e.target).attr("href") == "#messages1")  {
		 
		 
				$.ajax({  			 
							
							
				url: "http://api.espn.com/v1/sports/football/nfl/news/",
				data:
				{
					// enter your developer api key here
					apikey: "davjbw9d8ztuyvf9kvtfueg6",
					// the type of data you're expecting back from the api
					_accept: "application/json"
				},
				dataType: "jsonp",
				success: function(data) {
						 
						
						strHTML="";
						strHTML+="<table class='table table-striped table-responsive col-sm-12 center ' >";
						
						
						$.each(data.headlines, function() {
									  strHTML+="<tr><td><a href='" + this.links.web.href + "' target='_blank'>" + this.linkText + "</a></td></tr>";	
						});	 
						
						
						strHTML+="</table>";
							

						$("#messages1").html(strHTML);		
						 
						
						 
						},
						error: function() {
							 // handle the error
							echo("error");
						}
				
				});	 
				
				}
					
		});
		


// ESPN Web API Now Video Access Routine  		
		
 
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

 
				
				
				
			if ($(e.target).attr("href") == "#settings1")  {
		 
			
			$.ajax({  			 
						
						
			url: "http://api.espn.com/v1/now/?content=video",
			data:
			{
				// enter your developer api key here
				apikey: "davjbw9d8ztuyvf9kvtfueg6",
				// the type of data you're expecting back from the api
				_accept: "application/json"
			},
			dataType: "jsonp",
			success: function(data)
			{
			
			xtrHTML="";
			xtrHTML+="<table class='table table-striped table-responsive col-sm-12 center ' >";
			//xtrHTML+="<tr><th>Name</th><th>Average</th></tr>";
	 

			$.each(data.feed, function() {		     
				  
				//if 	(this.property3.text != '1-undefined')
				//{					
				xtrHTML+="<tr><td><a href='" + this.links.web.href + "' target='_blank'>" + this.description + "</a></td>";			   
				//xtrHTML+="<tr><td>" + this.video.description       + "</td></tr>";	
				//}
	  
				});	 
	
	
			xtrHTML+="</table>";
	
			$("#settings1").html(xtrHTML);	
			 
 
			},
				
				error: function() {
					 // handle the error
					echo("error");
				}
			});
			
			}
		
});		



//Guardian Data Access Routine  


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {


			if ($(e.target).attr("href") == "#guardian1")  {
		 
			
			$.ajax({
			
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: "http://beta.content.guardianapis.com/search?q=headlines&api-key=buqn6bk8zap4ukurss2bhuph",
				success: function(data) {
				
				
				xtrHTML="";
				xtrHTML+="<table class='table table-striped table-responsive col-sm-12 center ' >";
				//xtrHTML+="<tr><th>Name</th><th>Average</th></tr>";
		 

				$.each(data.response.results, function() {		     
					  
					//if 	(this.property3.text != '1-undefined')
					//{					
					xtrHTML+="<tr><td><a href='" + this.webUrl + "' target='_blank'>" + this.webTitle + "</a></td>";			   
					//xtrHTML+="<tr><td>" + this.video.description       + "</td></tr>";	
					//}
		  
				});	 
		
		
				xtrHTML+="</table>";
		
				$("#guardian1").html(xtrHTML);	
				 
	 
				},
					
					error: function() {
						 // handle the error
						echo("error");
					}
			});
				
			}	
			
			//RSS Feeds


			if ($(e.target).attr("href") == "#usatoday1")  {		

				 
				 

				$('#usatoday1').rssfeed('http://api.usatoday.com/open/articles/topnews/home?count=10&days=0&page=0&api_key=sjd74duy7wj9xgbenjxf2p9b');

				
			}
			
			
			
			if ($(e.target).attr("href") == "#cnn1")  {		

				 
				 

				$('#cnn1').rssfeed('http://rss.cnn.com/rss/cnn_topstories.rss');

				
			}
			
			
			if ($(e.target).attr("href") == "#azcentral1")  {		

				 
				 

				$('#azcentral1').rssfeed('http://rssfeeds.azcentral.com/phoenix/local');

				
			}
			
			
			if ($(e.target).attr("href") == "#scottsdale1")  {		

				 
				 

				$('#scottsdale1').rssfeed('http://rssfeeds.azcentral.com/phoenix/scottsdale');

				
			}
			
			
			
			if ($(e.target).attr("href") == "#scottsdale1a")  {		//city council

				 
				 

				$('#scottsdale1a').rssfeed('http://www.scottsdaleaz.gov/council/meetings/agendas');

				
			}
			
			
	if ($(e.target).attr("href") == "#scottsdale1b")  {		//police

				 
				 

				$('#scottsdale1b').rssfeed('http://www.scottsdaleaz.gov/Page8312.rss');

				
			}
			
	if ($(e.target).attr("href") == "#scottsdale1c")  {		

				 
				 

				$('#scottsdale1c').rssfeed('http://www.scottsdaleaz.gov/Page8314.rss'); // police 1

				
			}
			
	if ($(e.target).attr("href") == "#scottsdale1d")  {		

				 
				 

				$('#scottsdale1d').rssfeed('https://rpm.newrelic.com/account_feeds/e184b958281daf5976ef6aeb49670d8f65a4aefd4192dca/applications/4199471/events.rss');  // New Relic Server Monitoring

				
			}
			
	if ($(e.target).attr("href") == "#scottsdale1e")  {		

				 
				 

				$('#scottsdale1e').rssfeed('https://www.kimonolabs.com/api/rss/6g7rty4c?apikey=SaXbhot21jiyHrVc0uLtVaYbQMCcGdyH'); // netflix

				
			}
			
	
			
			
			
			
			
			
		 
		
});		



			
});			
			